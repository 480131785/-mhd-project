import Vue from 'vue'
import VueRouter from 'vue-router'

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'

const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Hello = () => import('../views/Hello')
const Login = () => import('../views/Login')
const Register = () => import('../views/Resigter')
const Search = () => import('../views/Search')
const My = () => import('../views/My')
const Ranking = () => import('../views/Ranking')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const Favorite = () => import('../views/Hello/Favorite')
const History = () => import('../views/Hello/History')
const City = () => import('../views/City')
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
    { path: '/city', component: City },
    { path: '/', component: Home }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()

  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
