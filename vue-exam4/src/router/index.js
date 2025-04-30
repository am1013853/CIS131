import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PetList from '../views/PetList.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/pets', component: PetList}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
