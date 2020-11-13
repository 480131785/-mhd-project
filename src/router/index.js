import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Login from '../views/Login'
import Register from '../views/Resigter'
import Search from '../views/Search'
import My from '../views/My'
import Ranking from '../views/Ranking'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        { path: 'history', component: History },
        { path: 'favorite', component: Favorite },
        { path: '', redirect: '/hello/favorite' }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/search-result', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', component: Home }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
