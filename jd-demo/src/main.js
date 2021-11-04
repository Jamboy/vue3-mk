/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-09-13 13:51:39
 * @LastEditTime: 2021-11-04 14:47:58
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '../style/index.scss'
import '../style/base.scss'

createApp(App).use(store).use(router).mount('#app')
