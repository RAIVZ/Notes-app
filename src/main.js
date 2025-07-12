import './app/base.css'
import { router } from './router'
import { createApp } from 'vue'
import App from './app/App.vue'

createApp(App).use(router).mount('#app')
