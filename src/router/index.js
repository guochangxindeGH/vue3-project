import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '',
    redirect: '/login',
    meta: {
      isLogin: false
    },
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      isLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
