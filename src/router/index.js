import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/register')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/setting',
    name: 'User',
    component: () => import('../components/setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
