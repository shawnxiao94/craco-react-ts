/*
 * @Author: your name
 * @Date: 2020-12-04 11:24:22
 * @LastEditTime: 2020-12-04 15:48:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /craco-react-ts/src/reportWebVitals.ts
 */
import {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
