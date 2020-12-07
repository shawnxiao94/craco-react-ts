/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: your name
 * @Date: 2020-12-06 22:25:48
 * @LastEditTime: 2020-12-07 16:07:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-craco-react/src/react-app-env.d.ts
 */
/// <reference types="react-scripts" />
/* 允许在ts中使用import styles from '*.less' */
declare module '*.less' {
  const styles: any;
  export = styles;
}
