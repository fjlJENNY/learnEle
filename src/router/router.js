import Vue from 'vue'
import VueRouter from 'vue-router'
import FLayout from '@/components/Layout'
import FButton from "@/components/Button"
Vue.use(VueRouter) // 还需要显示 使用一下

export default new VueRouter({
  routes: [{
    path: '/',
    component: FLayout
  }, {
    path: '/button',
    component: FButton
  }]
})