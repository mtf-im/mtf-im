// src/routes/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (Home-[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../components/Home.vue'),
            },
            {
                path: '/subdomain',
                name: 'SubDomain',
                // route level code-splitting
                // this generates a separate chunk (Home-[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../components/SubDomain.vue'),
            },
            // {
            //     path: '/login',
            //     name: 'LogIn',
            //     // route level code-splitting
            //     // this generates a separate chunk (Home-[hash].js) for this route
            //     // which is lazy-loaded when the route is visited.
            //     component: () => import('../components/LogIn.vue'),
            // },
            {
                // 匹配所有路径
                path: '/:catchAll(.*)',
                name: 'NotFound',
                // title: t('404.title'),
                component: () => import('../components/404.vue'),
            }
        ],
    },
    // {
    //     path: '/',
    //     component: import('../App.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const pageTitle = i18n.t(to.name); // Assuming that your translation key matches the route name
//     document.title = `${pageTitle} - ${i18n.t('text.description')}`;
//     next();
// });

export default router