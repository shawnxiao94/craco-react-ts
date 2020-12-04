/*
 * @Author: your name
 * @Date: 2020-12-04 11:37:14
 * @LastEditTime: 2020-12-04 11:56:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craco-react-ts/craco.config.js
 */
/* craco.config.js */
const CracoLessPlugin = require('craco-less')
const path = require('path')

//获取绝对路径
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    //路径别名配置
    alias: {
      '@': pathResolve('./src'),
      Hooks: pathResolve('./src/hooks'),
      Pages: pathResolve('./src/pages'),
      Assets: pathResolve('./src/assets'),
    },
  },
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  devServer: {
    //反向代理
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    // less配置  !!!切记配置完less后   一定不要忘记script里面的还要配置  不然less不生效
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
        lessLoaderOptions: {
          // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff', // 全局主色
              '@link-color': '#1890ff', // 链接色
              '@success-color': '#52c41a', // 成功色
              '@warning-color': '#faad14', // 警告色
              '@error-color': '#f5222d', // 错误色
              '@font-size-base': '14px', // 主字号
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
              '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
              '@border-radius-base': '2px', // 组件/浮层圆角
              '@border-color-base': '#d9d9d9', // 边框色
              '@box-shadow-base':
                '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
