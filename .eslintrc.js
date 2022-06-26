const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['import'],
  // plugins: ["jest"],
  rules: {
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    // most of the codebase are expected to be env agnostic
    // it will make 'require' appear error tip
    // 'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],

    // since we target ES2015 for baseline support, we need to forbid object
    // rest spread usage in destructure as it compiles into a verbose helper.
    // TS now compiles assignment spread into Object.assign() calls so that
    // is allowed.
    'no-restricted-syntax': ['error', 'ObjectPattern > RestElement']
  }
}
