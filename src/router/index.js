import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home/index.vue'
import LoginView from '@/views/Login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error-page/404')
  },
]

const router = new VueRouter({
  routes
})

export default router
