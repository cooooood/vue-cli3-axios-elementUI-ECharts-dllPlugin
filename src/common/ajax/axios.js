import axios from 'axios'
import { REQ_TIME_OUT } from 'configPath/index'
import { paramsSerializer } from 'commonPath/utils'

import { ajaxFulFilledHandle, ajaxRejectedHandle } from './ajaxErrorHandle'

// const CancelToken = axios.CancelToken
// const source = CancelToken.source()
const axiosCfg = {
  paramsSerializer,
  timeout: REQ_TIME_OUT,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
  // withCredentials: true,
  // cancelToken: source.token
}
const axiosInstance = axios.create(axiosCfg)
// const instance = axios.create();
// axiosInstance.CancelToken = axios.CancelToken
// axiosInstance.isCancel = axios.isCancel

// const reqInterceptors = [
//   {
//     fulfilled: config => ajaxRequestHandle(config),
//     rejected: err => {
//       console.log(err)
//     }
//   }
// ]

const rspInterceptors = [
  {
    // 错误处理
    fulfilled: rsp => ajaxFulFilledHandle(rsp.data, rsp),
    rejected: ajaxRejectedHandle
  }
]

export function addInterceports (interceptors = [], type = 'request') {
  interceptors.forEach(interceptor => axiosInstance.interceptors[type].use(interceptor.fulfilled, interceptor.rejected))
}

// addInterceports(reqInterceptors, 'request')
addInterceports(rspInterceptors, 'response')

export default axiosInstance
