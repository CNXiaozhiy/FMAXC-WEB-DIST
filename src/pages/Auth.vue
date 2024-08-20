<template>
    <div id="AuthPage">
        <div class="left d-none d-lg-block">
            <transition 
                appear
                name="animate__animated animate__bounce"
                enter-active-class="animate__fadeIn"
            >
                <Announcement :list="myList"/>
            </transition>
        </div>
        <transition 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInLeft"
        >
            <div class="right card">
                <!-- name="animate__animated animate__bounce" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut" -->
                <transition mode="out-in" name="fade">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </transition>
        
    </div>
    
</template>

<script>
import Announcement from '@/components/Announcement.vue';


export default {
    name: 'Auth',
    data() {
        return {
            myList: [
                {
                    title: '官网构建开始',
                    time: '2024-07-26 1:30',
                    more: '更新动态'
                },
                {
                    title: '官网初始构建完成',
                    time: '2025-07-26 4:20',
                    more: '更新动态'
                },
                {
                    title: '内测版本上传服务器',
                    time: '2025-07-26 4:25',
                    more: '更新动态'
                }
            ]
        }
    },
    components: {
        Announcement
    }
}
</script>

<style lang="css" scoped>
#AuthPage {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://app.rainyun.com/img/bg1.9e9515e9.webp');
    background-size: cover;
}
.left {
    margin-right: 20px;
}

.fade-enter-active, .fade-leave-active {  
  transition: opacity 0.3s;  
}  
.fade-enter, .fade-leave-to /* .fade-leave-active 在 <2.1.8 版本中 */ {  
  opacity: 0;  
}  

@media screen and (max-width: 576px) {
    .right {
        width: 100%;
    }
}

</style>