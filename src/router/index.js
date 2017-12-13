import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/components/banner'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'banner',
      component: banner
    }
  ]
})
