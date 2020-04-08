import { HTTP_METHOD } from 'configPath/index'

import { reqHandle } from 'commonPath/ajax'

export default {
  // demo test
  // homeOverview
  queryHomeOverview: reqHandle('/cloudTerminalManagementSys/admin/deviceoperate/homeOverview', {
    method: HTTP_METHOD.GET
  })
}
