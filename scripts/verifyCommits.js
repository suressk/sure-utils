// Invoked on the commit-msg git hook by husky.

const { bgRed, red, green, bgBlue } = require('picocolors')

// const msgPath = process.env.GIT_PARAMS
const msgPath = process.argv[2]

const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

console.log() // 空行，下面打印提示信息
console.log(bgBlue('Commit Msg: '), msg)
console.log() // 打印提示信息后空行

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${bgRed(' ERROR ')} ${red(`invalid commit message format.`)}\n\n` +
      red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${green(`fix(input): handle events on blur (close #28)`)}\n\n` +
      red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}