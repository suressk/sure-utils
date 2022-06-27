import prompts from 'prompts'
import semver from 'semver'
import colors from 'picocolors'
import {
  args,
  getPackageInfo,
  getVersionChoices,
  step,
  updateVersion,
  run,
  generateCommit
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

  const { confirmToUpdateVersion }: { confirmToUpdateVersion: boolean } =
    await prompts({
      type: 'confirm',
      name: 'confirmToUpdateVersion',
      message: `Confirm to update version?`
    })

  if (confirmToUpdateVersion) {
    step('\nUpdating package version...')
    updateVersion(pkgPath, targetVersion)
  }

  // push to Github
  await generateCommit(pkgDir, `release: ${tag}`)

  // publish to npm
  const { confirmPublish }: { confirmPublish: boolean } = await prompts({
    type: 'confirm',
    name: 'confirmPublish',
    message: `Confirm publishing to npmjs?`
  })

  if (!confirmPublish) {
    return
  }

  await run('npm', ['publish'])
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
