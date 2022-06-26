import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/index.css'
import './iconfont/iconfont.css'
import installIcons from './icons/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
installIcons(app)

app.use(store).use(router).use(ElementPlus).mount('#app')
