import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import dashboard from '@/components/dashboard'
import login from '@/components/login'
import edit from '@/components/edit'
/* eslint-disable */ 
Vue.use(Router)

export default new Router({ 
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Signup
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/edit',
      name:'edit',
      component:edit
    }
  ]
})
