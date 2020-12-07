/*
 * @Author: your name
 * @Date: 2020-12-07 15:56:03
 * @LastEditTime: 2020-12-07 16:40:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/.eslintrc.js
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // 此行必须在最后
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    // 支持最新 JavaScript
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // 如果有不适合的规则，可以在此调整
    'import/extensions': ['.js', '.jsx', '.json', '.ts', '.tsx']
    // ...
    // 'no-undef': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-unused-vars': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
};
