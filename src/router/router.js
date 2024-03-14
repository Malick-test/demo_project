 // createRouter用来创建路由对象，createWebHashHistory用来指定路由模式
import { createRouter, createWebHashHistory } from "vue-router"


// 路由数组
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('../page/home/index.vue')
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router