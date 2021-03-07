/* .eslintrc.js */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'functional'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:functional/no-mutations',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/ban-ts-comment': 0,
    'no-constant-condition': [1, { checkLoops: false }],
    'functional/prefer-readonly-type': 1,
    'functional/no-let': 1,
    'functional/immutable-data': 1,
    'functional/no-method-signature': 1,
  },
};
