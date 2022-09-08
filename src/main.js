import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 引入组件样式
// import 'vant/lib/button/style/less'
//
// import '@/styles/index.less'
import plugins from './plugins'
// 使用Vue.use插件封装引入vant组件
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
