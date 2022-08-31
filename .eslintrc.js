module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
      '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
};
