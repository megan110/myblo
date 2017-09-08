import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mor from '@/components/mor'
import detaillist from '@/components/detaillist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mor',
      component: mor
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
     {
      path: '/detaillist',
      name: 'detaillist',
      component: detaillist
    }
  ]
})
