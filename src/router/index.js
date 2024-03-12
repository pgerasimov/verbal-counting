import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/GamePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes
})

export default router
