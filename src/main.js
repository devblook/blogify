import  './index.css'
import 'primeicons/primeicons.css'

import router from './router'

import HeaderComponent from '@/components/Header.component.vue'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
    .component("page-header", HeaderComponent)
    .use(router)
    .mount('#app')
