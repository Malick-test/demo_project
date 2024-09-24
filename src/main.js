import { createApp } from 'vue'
import Vuex from "vuex";
import App from './App.vue'
// 路由对象
import router  from "./router/router.js"
// 状态管理
import store from "./store/index.js";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import './api/mock'
import 'amfe-flexible'
// Vue.use(ElementUI)
createApp(App).use(ElementPlus).use(Vuex).use(router).use(store).mount('#app')
