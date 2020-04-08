import { HTTP_METHOD } from 'configPath/index'

import { reqHandle } from 'commonPath/ajax'

export default {
  // demo test
  // home
  queryAboutData: reqHandle('/test/getSomething', {
    method: HTTP_METHOD.GET
  })
}
