import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home',component:()=>import('../Home.vue')},
        {path: '/login',component:()=>import('../Login.vue')},
    ]
})

export default router