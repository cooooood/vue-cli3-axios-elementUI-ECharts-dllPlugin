import types from './mutation-types'

const { MENU_LIST, BROWSER_VERSION } = types

export default {
  [MENU_LIST] (state, data) {
    state.menuList = data
  },
  [BROWSER_VERSION] (state, data) {
    state.browserVersion = data
  }
}
