/*
 * @Author: your name
 * @Date: 2020-12-04 11:37:14
 * @LastEditTime: 2020-12-04 11:42:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craco-react-ts/craco.config.js
 */
/* craco.config.js */
const CracoLessPlugin = require('craco-less')

module.exports = {
  // 别名
  alias: {
    '@': path.resolve('src'),
  },
  plugins: [
    // 自定义主题
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
