import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Router from './router/router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
