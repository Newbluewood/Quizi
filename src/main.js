import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppLink from './components/AppLink.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component('AppLink', AppLink)
app.use(router)

app.mount('#app')
