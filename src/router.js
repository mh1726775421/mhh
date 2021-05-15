import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/index.vue'
import Home from './views/home/index'
import Layout from './views/layout/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/layout',
      component:Layout,
      children:[
        {
          path:'/',
          name:'home',
          component:Home
        }
      ]
    },

  ]
})
