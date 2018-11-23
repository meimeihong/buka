import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home.vue'
import Banners from '../components/pages/Home/Banner1'
import Search from '../components/commons/Search'
//import Detail from '../components/commons/Detail'
import Search2 from '../components/commons/Search2'
import Reg from '../components/commons/reg'
import Login from '../components/commons/login'

import Detail from "../components/pages/Ranking/Detail.vue"
//import Home from '../components/pages/Home.vue'
import Ranking from '../components/pages/Ranking/Ranking.vue'
import Category from "../components/pages/Category/Category.vue"
import CategoryList from "../components/pages/Category/CategoryList.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/banners',
      name: 'Banners',
      component: Banners
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
    },
     {
    	path:"/Ranking",
			name:"Ranking",
    	component: Ranking
    },
    {
      path:"/Category",
      name:Category,
      component:Category
    },
   
    {
      path:"/CategoryList",
      name:CategoryList,
      component:CategoryList
    }
  ]
})
