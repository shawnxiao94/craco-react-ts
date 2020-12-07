/*
 * @Author: your name
 * @Date: 2020-12-06 22:27:11
 * @LastEditTime: 2020-12-06 22:29:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/craco.config.js
 */
module.exports = {
  babel: {},
  webpack: {},
  /**
   * 重写 webpack 任意配置
   *  - 与直接定义 configure 对象方式互斥
   *  - 几乎所有的 webpack 配置均可以在 configure 函数中读取，然后覆盖
   */
  configure: (webpackConfig, { env, paths }) => {
    return webpackConfig
  },
}
