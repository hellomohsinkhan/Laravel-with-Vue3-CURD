require('./bootstrap')

import { createApp } from 'vue'
import Home from './components/Home'
import router from './route'

import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp({})

app.component('home', Home)

app.use(VueAxios, axios).use(router).mount('#app')