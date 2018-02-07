import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import Parent from '@/components/Parent.vue'
import Item01 from '@/components/Item01.vue'
import Item02 from '@/components/Item02.vue'
import NextItem from '@/components/NextItem.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/item01',
      name: 'Item01',
      component: Item01
    },
    {
      path: '/item02',
      name: 'Item02',
      component: Item02
    },
    {
      path:'/nextItem',
      name:'NextItem',
      component:NextItem
    }
  ]
})
