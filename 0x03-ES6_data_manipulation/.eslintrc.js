module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'airbnb-base',
  ],
  plugins: [
    'import',
    'jest',
  ],
  rules: {
    // Customize rules according to your project's requirements
    'no-console': 'off', // Allow the use of console (can be useful during development)
    'no-unused-vars': 'warn', // Warn about unused variables
    'semi': ['error', 'always'], // Enforce semicolons at the end of statements
    'quotes': ['error', 'single'], // Enforce single quotes for strings
    'indent': ['error', 2], // Enforce 2-space indentation
  },
};

