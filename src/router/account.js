
export default [
    {
        name: 'rAccount',
        path: '/account',
        component: () => import ('@/pages/Dashboard.vue'), // 咳咳咳
        redirect: {
            name: 'rAccountCenter'
        },
        // beforeEnter: (to, from, next) => { async function guardNavigation() { try { UserInfo = await getUserInfo(); if (UserInfo.status !== 1) { next('/auth/login'); } else { next(); } } catch(e) { next('/'); } }; guardNavigation(); },
        children: [
            {
                name: 'rAccountCenter',
                path: 'center',
                component: () => import ('@/pages/Account/Center.vue'),
            },
            {
                name: 'rAccountCenterSetting',
                path: 'setting',
                component: () => import ('@/pages/Account/Setting.vue'),
                redirect: {
                    name: 'rAccountCenterSettingGeneral'
                },
                children: [
                    {
                        name: 'rAccountCenterSettingGeneral',
                        path: 'general',
                        component: () => import ('@/pages/Account/Setting/General.vue'),
                    },
                    {
                        name: 'rAccountCenterSettingPassword',
                        path: 'password',
                        component: () => import ('@/pages/Account/Setting/Password.vue'),
                    },
                    {
                        name: 'rAccountCenterSettingEmailPhone',
                        path: 'email-phone',
                        component: () => import ('@/pages/Account/Setting/EmailPhone.vue'),
                    },
                    {
                        name: 'rAccountCenterSettingQQWechat',
                        path: 'qq-wechat',
                        component: () => import ('@/pages/Account/Setting/QQWechat.vue'),
                    },
                    {
                        name: 'rAccountCenterSettingApiKey',
                        path: 'api-key',
                        component: () => import ('@/pages/Account/Setting/ApiKey.vue'),
                    },
                    {
                        name: 'rAccountCenterSettingLogs',
                        path: 'logs',
                        component: () => import ('@/pages/Account/Setting/Logs.vue'),
                    }
                ]
            },
        ]
    }
]