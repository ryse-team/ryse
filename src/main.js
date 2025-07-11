import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "./assets/styles/main.css"

export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes,
    base: '/',
  },
  ({ app, router, routes, isCient, url, initialState, head }) => {
    app.use(createPinia())

    app.use(router)

    const createdHead = createHead()
    app.use(createdHead)
  },
)
