import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"

const routes = [
  {path: "/", component: Home},
  {path: "/about", component: About}
]

const router = createRouter({
  history: createWebHistory(import.meta.URL),
  routes: routes
})

export default router


