import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import settings from '@/components/settings'
import map from '@/components/map'
import updates from '@/components/updates'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/updates',
    name: 'updates',
    component: updates
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
