import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlantList from '../views/PlantList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/plants', component: PlantList}
  ],
})

export default router
