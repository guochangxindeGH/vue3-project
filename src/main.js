import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './mock/index'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(store).use(router).use(Antd)
app.mount('#app')
