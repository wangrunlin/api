module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      peerDependencies: true,
    }],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootDir>/tsconfig.json to eslint
    },
  },
};
