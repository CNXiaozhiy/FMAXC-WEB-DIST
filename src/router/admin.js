
export default [
    {
        name: 'r-admin',
        path: '/admin',
        component: () => import ('@/pages/Admin/Dashboard.vue'),
        redirect: () => {
            return '/admin/mian'
        },
        beforeEnter: (to, from, next) => {
            next()
        },
        children: [
            {
                name: 'r-admin-mian',
                path: 'mian',
                component: () => import ('@/pages/Admin/Dashboard/Main.vue'),
            },
        ]
    }
]