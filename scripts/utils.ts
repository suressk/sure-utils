import { existsSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import colors from 'picocolors'
import minimist from 'minimist'
import type { ReleaseType } from 'semver'
import semver from 'semver'
import type { Options as ExecaOptions } from 'execa'
import execa from 'execa'
import fsExtra from 'fs-extra'
import prompts from 'prompts'

// 命令行参数
export const args = minimist(process.argv.slice(2))

/**
 * get package.json infomation
 * currentGetsInfo:
 * - package directory
 * - package.json content
 * - current version
 * - absolute packagePath
 * @returns
 */
export const getPackageInfo = () => {
  const pkgDir = resolve(__dirname, '..')
  const pkgPath = resolve(__dirname, '../package.json')

  if (!existsSync(pkgPath)) {
    throw new Error(`package.json not found`)
  }

  const pkg: {
    name: string
    version: string
    private?: boolean
  } = require(pkgPath)

  const currentVersion = pkg.version

  if (pkg.private) {
    throw new Error(`Package is private`)
  }

  return {
    pkg,
    pkgPath,
    pkgDir,
    currentVersion
  }
}

// run shell command
export async function run(
  bin: string,
  args: string[],
  opts: ExecaOptions<string> = {}
) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

// chose next-release-version by '⬆️ ⬇️ + Enter'
export function getVersionChoices(currentVersion: string) {
  const currentBeta = currentVersion.includes('beta')
  const currentAlpha = currentVersion.includes('alpha')
  const isStable = !currentBeta && !currentAlpha

  function inc(i: ReleaseType, tag = currentAlpha ? 'alpha' : 'beta') {
    return semver.inc(currentVersion, i, tag)!
  }

  let versionChoices = [
    {
      title: 'next',
      value: inc(isStable ? 'patch' : 'prerelease')
    }
  ]

  if (isStable) {
    versionChoices.push(
      {
        title: 'beta-minor',
        value: inc('preminor')
      },
      {
        title: 'beta-major',
        value: inc('premajor')
      },
      {
        title: 'alpha-minor',
        value: inc('preminor', 'alpha')
      },
      {
        title: 'alpha-major',
        value: inc('premajor', 'alpha')
      },
      {
        title: 'minor',
        value: inc('minor')
      },
      {
        title: 'major',
        value: inc('major')
      }
    )
  } else if (currentAlpha) {
    versionChoices.push({
      title: 'beta',
      value: inc('patch') + '-beta.0'
    })
  } else {
    versionChoices.push({
      title: 'stable',
      value: inc('patch')
    })
  }
  versionChoices.push({ value: 'custom', title: 'custom' })

  versionChoices = versionChoices.map(i => {
    i.title = `${i.title} (${i.value})`
    return i
  })

  return versionChoices
}

export function step(msg: string) {
  return console.log(colors.cyan(msg))
}

// update 'package.json' version
export function updateVersion(pkgPath: string, version: string): void {
  const pkg = fsExtra.readJSONSync(pkgPath)
  pkg.version = version
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

// generate commit message and commit all files
export async function generateCommit(
  pkgDir: string,
  initialCommitMsg: string = 'chore: update some configuration'
) {
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
  const { commitMsg }: { commitMsg: string } = await prompts({
    type: 'text',
    name: 'commitMsg',
    message: 'Input commit message',
    initial: initialCommitMsg
  })
  await run('git', ['commit', '-m', commitMsg])
}
