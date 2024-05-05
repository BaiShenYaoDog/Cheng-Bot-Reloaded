import {createRouter, createWebHistory} from 'vue-router'

export const ChengBotVersion = '1.0.0';
export const ChengBotServerVersion = '1.0.0';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/Menu',
            name: 'Menu',
            component: () => import('../views/Menu.vue')
        },
        {
            path: '/SystemInfo',
            name: 'SystemInfo',
            component: () => import('../views/SystemInfo.vue')
        },
        {
            path: '/ServerInfo',
            name: 'ServerInfo',
            component: () => import('../views/ServerInfo.vue')
        },
        {
            path: '/NotFound',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/NotFound'
        }
    ]
})

export default router