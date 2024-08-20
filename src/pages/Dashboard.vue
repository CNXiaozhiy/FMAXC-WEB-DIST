<template>
<div id="DashboardPage">
    <div id="DashboardPage-Body">
        <!-- 头部导航条 -->
        <MyHeader :info="headerInfo" :funHeader="funHeader" :loading="$store.state.dashboard.loading">
            <!-- 导航条 -->
            <div class="content content-nav">
                <div class="float-nav card">
                    <NavBars />
                </div>
            </div>
        </MyHeader>

        <!-- 主体版心 -->
        <div class="content content-main">

            <!-- 公告栏 -->
            <transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                <el-skeleton :rows="3" :loading="!Bulletin.length" animated class="card bulletin">
                    <BulletinBoard class="itemWindow" height="110px" :Bulletin="Bulletin" interval="5000" :isCard="false"/>
                </el-skeleton>
            </transition>

            <!-- 二级公告栏
            <transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                <el-skeleton :rows="2" :loading="!Bulletin.length" animated class="card">
                    <BulletinBoard :isCard="false" :isCenter="true" class="itemWindow" height="50px" :Bulletin="[{content: `<a style='color:red;font-size:20px'>请尽快完成QQ绑定</a>`}]" interval="5000"/>
                </el-skeleton>
            </transition>
            -->

            <!-- 路由展示区 -->
            <transition name="fade-custom" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
    <Music :src="music_src"/>
    <MyFooter/>
</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import NavBars from '@/components/NavBars.vue'
import BulletinBoard from '@/components/BulletinBoard.vue'
import MyFooter from '@/components/MyFooter.vue'
import { quitLogin } from '@/scripts/auth'
import { getBulletin } from '@/assets/js/pulicData'
import pullData from '@/scripts/common/PullData'
import Music from '@/components/Music.vue'

export default {
    name: 'Dashboard',
    data(){
        return {
            sys: {
                loading: true
            },
            UserInfo: {},
            
            Bulletin: []
        }
    },
    computed: {
        headerInfo() {
            if (this.$store.state.userData.user.info) {
                return {
                    name: this.$store.state.userData.user.info.nickname,
                    photo: this.$store.state.userData.user.info.userphoto,
                    welcome: '欢迎您'
                }
            }
            return {}
        },
        music_src() {
            return window.localStorage.getItem('defaultMusic') || '/audio/XZYM7c3uNKho.m4a'
        }
    },
    mounted() {
        // console.log(this)
        // 拉取数据
        (async ()=> {
            if (await pullData(this,true) === -1) return;

            this.UserInfo = this.$store.state.userData.user.info;
            if (!this.UserInfo.username) {
                this.$toastx({
                    type: 'warning',
                    message: '数据拉取失败，正在跳转至登录页面',
                    timeout: 2000
                })
            return;}
            const Bulletin = await getBulletin();
            if (Bulletin.status === 1){
                this.Bulletin = Bulletin.data
            } else {
                this.Bulletin = [{
                    title: '🤕啊偶，公告获取失败了捏',
                    content: '十分抱歉捏' + `${Bulletin.msg ? '，错误原因：' + Bulletin.msg : ''}`
                }]
            }
        })();
        setInterval(this.refreshData,5000)
    },
    methods: {
        async funHeader(eventName) {
            switch (eventName) {
                case 'quitLogin':
                    const status = await quitLogin(this);
                    if (status.status === 1) {
                        this.$toastx({
                            type: 'success',
                            message: '退出登录成功，即将返回登录页面',
                            timeout: 2000
                        })
                        setTimeout(()=>{
                            this.$router.replace('/auth/login')
                        },1000)
                    }
                    break;
                case 'selfCenter':
                    if (this.$route.name != 'rAccountCenter') this.$router.push({
                        name: 'rAccountCenter'
                    })
                    break;
                default:
                    break;
            }
        },
        async refreshData(){
            
        }
    },
    components: {
        MyHeader, 
        NavBars, 
        BulletinBoard, 
        MyFooter,
        Music
        
    }
}
</script>

<style lang="less" scoped>
@content-margin: 70px;


.content-nav {
    margin-top: 1rem;
}
.content {
    .bulletin {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
}

#DashboardPage {
    background-image: url('https://app.rainyun.com/img/bg1.9e9515e9.webp');
    background-attachment: fixed;
    background-size: cover;
}
#DashboardPage-Body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}


.float-nav {
    opacity: 1;
    box-shadow: 0 0 12px rgba(0,0,0,0.4);
}

@media screen and (min-width: 768px) {
    .content {
        // margin: 0  @content-margin;
        padding: 0 5rem 0;
    }
}
</style>