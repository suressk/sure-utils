import prompts from 'prompts'
import semver from 'semver'
import colors from 'picocolors'
import {
  args,
  getPackageInfo,
  getVersionChoices,
  step,
  updateVersion,
  run
} from './utils'

async function main(): Promise<void> {
  let targetVersion: string | undefined
  const { currentVersion, pkgPath, pkgDir } = getPackageInfo()

  if (!targetVersion) {
    const { release }: { release: string } = await prompts({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: getVersionChoices(currentVersion)
    })

    if (release === 'custom') {
      const res: { version: string } = await prompts({
        type: 'text',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion
      })
      targetVersion = res.version
    } else {
      targetVersion = release
    }
  }

  if (!semver.valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`)
  }

  const tag = `v${targetVersion}`

  if (targetVersion.includes('beta') && !args.tag) {
    args.tag = 'beta'
  }
  if (targetVersion.includes('alpha') && !args.tag) {
    args.tag = 'alpha'
  }

  const { yes }: { yes: boolean } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing ${colors.yellow(tag)} Confirm?`
  })

  if (!yes) {
    return
  }

  step('\nUpdating package version...')
  updateVersion(pkgPath, targetVersion)

  step('\nGenerating changelog...')
  const changelogArgs = [
    'conventional-changelog',
    '-p',
    'angular',
    '-i',
    'CHANGELOG.md',
    '-s'
  ]
  await run('npx', changelogArgs, { cwd: pkgDir })

  step('\nPushing to GitHub...')

  await run('git', ['add', '-A'])
  const res: { commitMsg: string } = await prompts({
    type: 'text',
    name: 'commitMsg',
    message: 'Input commit message',
    initial: `release: ${tag}`
  })
  await run('git', ['commit', '-m', res.commitMsg])
  await run('git', ['push'])
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
