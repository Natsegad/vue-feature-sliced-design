import { createApp } from 'vue'
import App from './app/App.vue'
import {router} from "./app/providers"
import VueRouter from 'vue-router'

createApp(App).use(VueRouter).use(router).mount('#app')
