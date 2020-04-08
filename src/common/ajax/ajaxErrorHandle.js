/* eslint-disable no-unused-vars */
/**
 * ajax 错误处理
 * @see 具体参数文档 - https://github.com/mzabriskie/axios#response-schema
 */
// import store from '@/store/index'
import { DEFAULT_ERR_MSG } from 'configPath/index'
// import axios from 'axios'
import { logoutNotice, downloadUrl, downloadBlob } from '../utils'
// import jsonp from './jsonp';
// 请求前拦截器，需要时添加，需配合cancelToken使用
// export function ajaxRequestHandle (config, source) {

// }

export function ajaxFulFilledHandle (data = {}, res) {
  return new Promise((resolve, reject) => {
    const contentType = res.headers['content-type'].split(';')[0]
    if (
      [
        'application/x-msdownload',
        'text/csv',
        'application/octet-stream',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ].includes(contentType)
    ) {
      // console.log('res--', res);
      // downloadUrl(res.request.responseURL);
      downloadBlob(res)
    } else {
      const success = data.code === '200' || false
      data.message = data.message || DEFAULT_ERR_MSG

      if (success) {
        resolve(data)
      } else {
        // TODO:
        console.log('ajax req err', data.message)
        reject(data)
      }
    }
  })
}

export function ajaxRejectedHandle (err) {
  err.msg = err.msg || DEFAULT_ERR_MSG
  if (err.message === 'Network Error') {
    err.msg = '网络异常，请检查网络'
  }
  return Promise.reject(err)
}
