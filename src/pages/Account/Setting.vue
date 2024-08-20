<template>
  <div id="AccountSettingPage">
    <div class="card col-auto col-md-3 col-1 panel-left">
        <div class="nav nav-pills flex-column nav-left">
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingGeneral'}">
                    <svg data-v-454f1aeb="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user"><path data-v-454f1aeb="" fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" class=""></path></svg>
                    <span class="font-weight-bold">基本资料</span>
                </router-link>
            </li>
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingPassword'}">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-lock"><path data-v-454f1aeb="" fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" class=""></path></svg>
                    <span class="font-weight-bold">账号密码&amp;令牌</span>
                </router-link>
            </li>
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingEmailPhone'}">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope"><path data-v-454f1aeb="" fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" class=""></path></svg>
                    <span class="font-weight-bold">绑定邮箱&amp;手机</span>
                </router-link>
            </li>
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingQQWechat'}">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="qq" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-qq"><path data-v-454f1aeb="" fill="currentColor" d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z" class=""></path></svg>
                    <span class="font-weight-bold">绑定QQ&amp;微信</span>
                </router-link>
            </li>
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingApiKey'}">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-key"><path data-v-454f1aeb="" fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" class=""></path></svg>
                    <span class="font-weight-bold">API密钥</span>
                </router-link>
            </li>
            <li role="presentation" class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{name: 'rAccountCenterSettingLogs'}">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock-rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock-rotate-left"><path data-v-454f1aeb="" fill="currentColor" d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" class=""></path></svg>
                    <span class="font-weight-bold">账号变动日志</span>
                </router-link>
            </li>
        </div>
    </div>
    <div class="panel-right">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Setting',
    async mounted() {
    }
}
</script>

<style lang="less" scoped>
#AccountSettingPage {
    display: flex;
}
.panel-left {
    margin-right: 20px;
    font-size: 14px;
    height: 100%;
}
.panel-right {
    width: 100%;
}
.nav svg{
    height: 1rem;
    margin-right: .5rem;
}
.nav-link {
    line-height: 20px;
}
</style>