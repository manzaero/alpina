import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactsView')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
