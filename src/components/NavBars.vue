<template>
    <div class="xz-NarBars-Main">
        <ul class="nav nav-pills nav-items-me flex-column flex-sm-row flex-nowrap text-center">
            <li class="nav-item">
                <router-link class="nav-link menu-title" active-class="active" to="/dashboard/main">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gauge-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-gauge-high"><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" class=""></path></svg>
                    总览
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link menu-title" active-class="active" to="/dashboard/apps">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-cubes"><path fill="currentColor" d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z" class=""></path></svg>
                    产品中心
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link menu-title" active-class="active" to="/dashboard/expense/pay">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-money-bill"><path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" class=""></path></svg>
                    费用中心
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link menu-title" active-class="active" to="/dashboard/reward/store">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gift" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-gift"><path fill="currentColor" d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" class=""></path></svg>
                    积分中心
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link menu-title" active-class="active" to="/dashboard/help" tabindex="-1" aria-disabled="true">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-headset" style=""><path fill="currentColor" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" class="showStyleSelectEl" style="position: relative !important;"></path></svg>
                    客服中心
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBars',
}
</script>

<style lang="less" scoped>
.xz-NarBars-Main {
    opacity: 1;
    background: #fff;

    .nav-link {
        padding: .715rem 1.25rem;
    }
    .nav-item .menu-title {
        font-size: 1rem;
    }
}
.xz-NarBars-Main svg {
    width: 16px;
}
.xz-NarBars-Main .nav-link:not(.active) {
    color: #6e6b7b;
}
</style>