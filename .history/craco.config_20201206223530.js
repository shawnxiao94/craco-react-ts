/*
 * @Author: your name
 * @Date: 2020-12-06 22:27:11
 * @LastEditTime: 2020-12-06 22:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/craco.config.js
 */
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
  },
  webpack: {},
  /**
   * 重写 webpack 任意配置
   *  - 与直接定义 configure 对象方式互斥
   *  - 几乎所有的 webpack 配置均可以在 configure 函数中读取，然后覆盖
   */
  configure: (webpackConfig, { env, paths }) => {
    return webpackConfig
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
