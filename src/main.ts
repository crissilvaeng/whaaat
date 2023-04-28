import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import './assets/main.css'

const routes = [
  { path: '/', component: App },
  { path: '/:q(.*)*', redirect: (to: { params: { q: any } }) => ({ path: '/', query: { q: to.params.q } }) },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
