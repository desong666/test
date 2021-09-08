import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
///文件夹2第一次
//文件夹2第二次
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
