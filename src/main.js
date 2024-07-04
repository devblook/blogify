import  './index.css'
import 'primeicons/primeicons.css'

import router from './router'
import {i18n} from './scripts/i18n.js'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
