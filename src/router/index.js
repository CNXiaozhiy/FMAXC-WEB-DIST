import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue';

import auth from './auth'
import dashboard from './dashboard'
import account from './account'
import admin from './admin'
import apps from './apps'

const baseRoutes = [
    {
        path: '/',
        component: Home
    },
    {
      path:'*',
      component:()=>import('../views/404.vue')
    }
]

const routes = baseRoutes.concat(auth, dashboard, account, admin, apps)

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {  
    next()
});

export default router