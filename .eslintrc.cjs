/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': [".ts", ".tsx"]
    // },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          map: [
            ['@', './src'],
          ],
        },
      },
      typescript: {
        alwaysTryTypes: true,

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: '.',

      },
    },
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-non-null-assertion': 'off',
    'ban-ts-ignore': 'off',
    '@typescript-eslint/semi': ['error'],
    'max-len': ['error', { code: 120 }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
    }],
  },
};
