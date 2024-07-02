import {createRouter, createWebHistory} from "vue-router";

import HomePage from '@/pages/Home.page.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: "/home",
            component: HomePage
        }
    ]
})

export default router;