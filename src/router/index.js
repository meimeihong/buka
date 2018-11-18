import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home.vue'
import Banners from '../components/pages/Home/Banner1'
import Search from '../components/commons/Search'
import Detail from '../components/commons/Detail'
import Search2 from '../components/commons/Search2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
//    redirect:'/home',//重定向
      name: 'Home',
      component: Home
    },
     {
      path: '/banners',
      name: 'Banners',
      component: Banners
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/search2',
      name: 'search2',
      component: Search2
    },
    {
      path: '/m/:id',
      name: 'm',
      component: Detail
    }
  ]
})
