import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import browserCheck from './browser-check'

Vue.config.productionTip = false
Vue.use(ElementUI)

const currentBrowser = browserCheck()
router.beforeEach((to, from, next) => {
  if (
    (currentBrowser.browser === 'Chrome' && currentBrowser.version < 45) ||
    (currentBrowser.browser === 'Firefox' && currentBrowser.version < 49) ||
    (currentBrowser.browser === 'IE' && currentBrowser.version < 10) ||
    (currentBrowser.browser === 'Safari' && currentBrowser.version < 9)
  ) {
    if (to.path === '/lowVersion') {
      store.commit('BROWSER_VERSION', currentBrowser)
      next()
    } else {
      next('/lowVersion')
    }
  } else {
    // 处理菜单等其他逻辑
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
