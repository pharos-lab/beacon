import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { beacon } from '../dist/beacon.js'

createApp(App).use(beacon).mount('#app')

