import { ViteSSG } from "vite-ssg"
import { createHead } from "@vueuse/head"
import { createPinia } from "pinia"

import App from "./App.vue"
import { routes, scrollBehavior } from "./router"

import "./assets/styles/main.css"

export const createApp = ViteSSG(
    App,
    {
        routes,
        base: "/",
        scrollBehavior,
    },
    ({ app, router, routes, isClient, url, initialState, head }) => {
        app.use(createPinia())

        const createdHead = createHead()
        app.use(createdHead)
    },
)
