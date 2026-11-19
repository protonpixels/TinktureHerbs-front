import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/shop', name: 'shop', component: () => import('../views/ShopView.vue') },
  { path: '/product/:id', name: 'product', component: () => import('../views/ProductView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/journal', name: 'journal', component: () => import('../views/JournalView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/cart', name: 'cart', component: () => import('../views/CartView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
