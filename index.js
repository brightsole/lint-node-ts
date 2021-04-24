module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@brightsole/lint-node', 'prettier'],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.{js,ts}'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
