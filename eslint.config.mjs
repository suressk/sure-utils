import lintPreset from '@suressk/eslint-config'

export default lintPreset({
  typescript: true,
  jsonc: true,
  yaml: true,
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.pnpm-store/**',
    '.husky/**',
  ],
})
