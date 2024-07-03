import {createRouter, createWebHashHistory} from "vue-router";

import HomePage from '@/pages/Home.page.vue'

const router = createRouter({
    history: createWebHashHistory("blogin"),
    routes: [
        {
            path: "/",
            redirect: "home"
        },
        {
            path: "/home",
            component: HomePage
        }
    ]
})

export default router;