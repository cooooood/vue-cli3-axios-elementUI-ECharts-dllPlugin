/**
 * @namespace
 * @readonly
 * @prop {String} GET - GET
 * @prop {String} POST - POST
 * @prop {String} JSONP - JSONP
 */
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  JSONP: 'JSONP'
}

/**
   * 默认请求方法
   * @const
   * @type {String}
   * @default
   */
export const DEFAULT_REQ_METHOD = HTTP_METHOD.GET
/**
   * 请求url默认前缀
   * @const
   * @type {String}
   * @default
   */
export const URL_DEFAULT_PREFIXER = ''
// export const URL_DEFAULT_PREFIXER = process.env.NODE_ENV === 'development' ? 'http://yunadminsit.cnsuning.com' : '';

/**
   * 请求默认超时时间
   * @const
   * @type {Number}
   * @default
   */
export const REQ_TIME_OUT = 5000

export const DEFAULT_ERR_MSG = '系统出了点小问题，请稍后重试!'

/**
   * 是否序列化post,put,patch时的数据
   * 此参数在使用axios时会确定Content-Type的值
   * ture: application/x-www-form-urlencoded, false:application/json;charset=utf-8
   */
export const IS_SERIALIZER_PARAMS = false
