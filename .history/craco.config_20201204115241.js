/*
 * @Author: your name
 * @Date: 2020-12-04 11:37:14
 * @LastEditTime: 2020-12-04 11:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craco-react-ts/craco.config.js
 */
/* craco.config.js */
const CracoLessPlugin = require('craco-less')
const path = require('path')

//获取绝对路径
function pathHandler(pathUrl) {
  return path.join(__dirname, pathUrl)
}

module.exports = {
  // 别名
  alias: {
    '@': path.resolve('src'),
  },
  plugins: [
    // less配置  !!!切记配置完less后   一定不要忘记script里面的还要配置  不然less不生效
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
