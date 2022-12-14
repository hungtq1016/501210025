import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App).use(store).use(router).mount('#app') 
