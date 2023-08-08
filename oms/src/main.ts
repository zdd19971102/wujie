import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import WujieVue from "wujie-vue3";
import router from "./router";



createApp(App)
.use(router)
.use(WujieVue)
.use(ElementPlus)
.mount('#app')
