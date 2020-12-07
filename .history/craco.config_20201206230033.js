/*
 * @Author: your name
 * @Date: 2020-12-06 22:27:11
 * @LastEditTime: 2020-12-06 22:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/craco.config.js
 */

const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')

const path = require('path')
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
          // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
          // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
    ],
    plugins: [
      // 配置 babel-plugin-import
      [
        'import',
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
        'antd',
      ],
      // 配置解析器
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['babel-plugin-styled-components', { displayName: true }],
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions
    },
  },
  webpack: {
    // 配置别名
    // alias: {
    //   '@@': pathResolve('.'),
    //   '@': pathResolve('src'),
    //   '@assets': pathResolve('src/assets'),
    //   '@common': pathResolve('src/common'),
    //   '@components': pathResolve('src/components'),
    //   '@hooks': pathResolve('src/hooks'),
    //   '@pages': pathResolve('src/pages'),
    //   '@store': pathResolve('src/store'),
    //   '@utils': pathResolve('src/utils'),
    // },
  },
  /**
   * 重写 webpack 任意配置
   *  - 与直接定义 configure 对象方式互斥
   *  - 几乎所有的 webpack 配置均可以在 configure 函数中读取，然后覆盖
   */
  configure: (webpackConfig, { env, paths }) => {
    return webpackConfig
  },
  alias: {
    '@': pathResolve(__dirname, 'src'),
  },
}
