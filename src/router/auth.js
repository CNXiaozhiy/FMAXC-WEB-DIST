
export default [
    {
        name: 'rAuth',
        path: '/auth',
        component: () => import ('@/pages/Auth.vue'),
        redirect: () => {
            return 'auth/login'
        },
        beforeEnter: (to, from, next) => {
            next()
        },
        children: [
            {
                name: 'r-auth-login',
                path: 'login',
                component: () => import ('@/pages/Auth/Login.vue'),
            },
            {
                name: 'r-auth-register',
                path: 'register',
                component: () => import ('@/pages/Auth/Register.vue')
            },
            {
                name: 'r-auth-forgot',
                path: 'forgot',
                component:() => import ('@/pages/Auth/ForgotPassword.vue')
            }
        ]
    }
]