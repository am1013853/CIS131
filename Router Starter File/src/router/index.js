import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import MovieList from "../views/MovieList.vue"

const routes = [
    {path: "/", component: Home},
    {path: "/movies/:category", component: MovieList}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes:routes
})

export default router