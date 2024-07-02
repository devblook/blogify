import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

import HomePage from '@/pages/Home.page.vue'

const router = createRouter({
    history: createWebHashHistory("web"),
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