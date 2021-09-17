import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/tweets/:id',
    name: 'tweet-id',
    component: () => import('../views/Tweets.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/login',
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue'),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'router-link-active',
  linkActive: 'router-link-exact-active',
})

export default router
