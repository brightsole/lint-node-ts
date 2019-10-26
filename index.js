module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@brightsole/lint-node', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.{js,ts}'] }]
  }
};
