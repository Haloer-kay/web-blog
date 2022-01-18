import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/login/Login.vue"
// import Top from "../components/index/Top.vue"
import index from "../components/Index.vue"
// import Side from "../components/side/Side.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/index',
    name:'Top',
    component:index
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
