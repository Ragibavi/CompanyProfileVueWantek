// import './assets/main.css'

import "./assets/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import Template from '@/components/layouts/Navbar.vue'

const app = createApp(App)

app.component('myNav', Template)
app.mount('#app')
