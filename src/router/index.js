import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import TeamView from "@/views/TeamView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/team",
            name: "team",
            component: TeamView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            left: 0,
            behavior: "smooth",
        }
    },
})

export default router
