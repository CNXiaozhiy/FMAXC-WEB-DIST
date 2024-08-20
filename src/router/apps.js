
export default [
    {
        name: 'r-apps',
        path: '/apps',
        component: () => import ('@/pages/Dashboard.vue'), // 咳咳咳
        redirect: {
            name: 'r-dashboard-apps'
        },
        // beforeEnter: (to, from, next) => { async function guardNavigation() { try { UserInfo = await getUserInfo(); if (UserInfo.status !== 1) { next('/auth/login'); } else { next(); } } catch(e) { next('/'); } }; guardNavigation(); },
        children: [
            {
                name: 'r-apps-aiDraw',
                path: 'ai-draw',
                component: () => import ('@/pages/Apps/AiDraw.vue'),
            },
            {
                name: 'r-apps-aiChat',
                path: 'ai-chat',
                component: () => import ('@/pages/Apps/AiChat.vue'),
            },
            {
                name: 'r-apps-qqMusic',
                path: 'qq-music',
                component: () => import ('@/pages/Apps/QQMusic.vue'),
            }
        ]
    }
]