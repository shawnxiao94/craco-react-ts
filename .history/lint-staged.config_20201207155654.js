/*
 * @Author: your name
 * @Date: 2020-11-21 23:32:27
 * @LastEditTime: 2020-12-07 15:56:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /poc-zjj-ts/lint-staged.config.js
 */
// ts、js 之类代码使用 eslint 格式化，md、css 之类则用 prettier。
module.exports = {
  linters: {
    '*.{ts,tsx}': ['eslint --fix', 'git add'],
    '*.{js,jsx}': ['eslint --fix', 'git add'],
    '*.{md,html,json}': ['prettier --write', 'git add'],
    '*.{css,scss,less}': ['prettier --write', 'git add'],
  },
  include: ['src'],
  exclude: ['node_modules'],
};
