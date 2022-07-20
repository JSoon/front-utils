module.exports = {
  root: true,
  env: {
    node: true,
  },
  // https://typescript-eslint.io/docs/linting/
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', {
      'objects': 'always',
      'imports': 'always',
      'exports': 'always',
    }],
    'space-before-function-paren': ['error', 'always'],
  },
};
