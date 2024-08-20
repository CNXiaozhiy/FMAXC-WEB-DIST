
export default [
    {
        name: 'rDashboard',
        path: '/dashboard',
        component: () => import ('@/pages/Dashboard.vue'),
        redirect: {
            name: 'rDashboardMain'
        },
        // beforeEnter: (to, from, next) => { async function guardNavigation() { try { UserInfo = await getUserInfo(); if (UserInfo.status !== 1) { next('/auth/login'); } else { next(); } } catch(e) { next('/'); } }; guardNavigation(); },
        children: [
            {
                name: 'rDashboardMain',
                path: 'main',
                component: () => import ('@/pages/Dashboard/Main.vue')
            },
            {
                name: 'r-dashboard-apps',
                path: 'apps',
                component: () => import ('@/pages/Dashboard/Apps.vue')
            },
            {
                name: 'rDashboardExpensePay',
                path: 'expense/pay',
                component: () => import ('@/pages/Dashboard/Expense/Pay.vue')
            },
            {
                name: 'rDashboardRewardStore',
                path: 'reward/store',
                component: () => import ('@/pages/Dashboard/Reward/Store.vue')
            },
            {
                name: 'rDashboardHelpMain',
                path: 'help',
                component: () => import ('@/pages/Dashboard/Help/Main.vue')
            },

            {
                name: 'r-dashboard-status',
                path: 'status',
                component: () => import ('@/pages/Dashboard/Monitoring/Server.vue')
            }
        ]
    }
]