/* eslint-disable no-useless-escape */
import qs from 'qs'

const toString = Object.prototype.toString

export function logoutNotice () {
  // 弹窗
}

export function downloadUrl (url) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  document.body.appendChild(iframe)
  iframe.onload = function () {
    setTimeout(() => {
      document.body.removeChild(iframe)
    })
  }
}
// eslint-disable-next-line no-unused-vars
function blobify (s) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  // eslint-disable-next-line no-bitwise
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}
function getFileName (disposition) {
  let filename = ''
  if (disposition && disposition.indexOf('attachment') !== -1) {
    const pattern = /\"(.*)\"/
    const matches = disposition.match(pattern)
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, '')
      return filename
    }
  }
  return filename
}
export function downloadBlob (res) {
  try {
  // const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8';
  // const blob = new Blob([blobify(res.data)], { type: "application/vnd.ms-excel" });
  // const blob = new Blob([blobify(res.data)]);
  // const blob = new Blob([res.data], { type: contentType });
  // const blob = new Blob([blobify(res.data)], { type: '' });
    const blob = new Blob([res.data])
    console.log(res.headers['content-disposition'])
    const fileName = getFileName(res.headers['content-disposition'])
    const finalName = decodeURIComponent(escape(fileName))
    console.log('file-name--', finalName)
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, finalName)
    } else {
      const link = document.createElement('a')
      const blobUrl = URL.createObjectURL(blob)
      console.log('---blobUrl---', blobUrl)
      link.href = blobUrl
      link.download = finalName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(blobUrl) // 释放掉blob对象
    }
  } catch (error) {
    console.log(error)
  }
}

export function paramsSerializer (params = {}) {
  return qs.stringify(params, {
    arrayFormat: 'brackets'
  })
}

export function isPlainObject (obj) {
  return toString.call(obj) === '[object Object]'
}
