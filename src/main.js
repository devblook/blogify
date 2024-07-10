import  './index.css'
import 'primeicons/primeicons.css'

import TemplatePage from '@/components/PageTemplate.component.vue'
import MessageBox from '@/components/MessageBox.component.vue'

import router from './router'
import {languageSwitcher} from './scripts/language-switcher.js'

import { createApp } from 'vue'
import App from './App.vue'



createApp(App)
    .component("template-page", TemplatePage)
    .component("message-box", MessageBox)
    .use(router)
    .use(languageSwitcher)
    .mount('#app')
