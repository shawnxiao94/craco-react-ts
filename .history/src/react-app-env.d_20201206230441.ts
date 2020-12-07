/*
 * @Author: your name
 * @Date: 2020-12-06 22:25:48
 * @LastEditTime: 2020-12-06 23:04:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/src/react-app-env.d.ts
 */
/// <reference types="react-scripts" />
/* 允许在ts中使用import styles from '*.less' */
declare module '*.less' {
  const styles: any
  export = styles
}
