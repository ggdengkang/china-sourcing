import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Household from '../pages/Household.vue'
import Kitchen from '../pages/Kitchen.vue'
import Hardware from '../pages/Hardware.vue'
import Gifts from '../pages/Gifts.vue'
import Office from '../pages/Office.vue'
import Sports from '../pages/Sports.vue'
import Electronics from '../pages/Electronics.vue'
import Fashion from '../pages/Fashion.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/household', component: Household },
  { path: '/kitchen', component: Kitchen },
  { path: '/hardware', component: Hardware },
  { path: '/gifts', component: Gifts },
  { path: '/office', component: Office },
  { path: '/sports', component: Sports },
  { path: '/electronics', component: Electronics },
  { path: '/fashion', component: Fashion }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router