 // createRouter用来创建路由对象，createWebHashHistory用来指定路由模式
import { createRouter, createWebHashHistory } from "vue-router"


// 路由数组
const routes = [
    {
        path: '/',
        // redirect: '',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('../page/home/index.vue')
    },
    {
        path: '/hot',
        name: 'hot',
        meta: {
            title: '热门页面'
        },
        component: () => import('../page/hot_page/index.vue')
    },
    {
        path: '/classify',
        name: 'classify',
        meta: {
            title: '热门页面'
        },
        component: () => import('../page/classify/index.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        meta: {
            title: '个人中心页面'
        },
        component: () => import('../page/setting/index.vue')
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router