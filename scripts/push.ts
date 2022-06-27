import { getPackageInfo, generateCommit } from './utils'

async function main() {
  const { pkgDir } = getPackageInfo()

  await generateCommit(pkgDir)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
