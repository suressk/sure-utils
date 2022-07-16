import { generateCommit, getPackageInfo, run } from './utils'

async function main() {
  const { pkgDir } = getPackageInfo()

  await generateCommit(pkgDir)
  await run('git', ['push']) // push to Github
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
