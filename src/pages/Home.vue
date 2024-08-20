<template>
    <div id="homePage">
        <div class="d-flex justify-content-center align-items-center w-100">
            <!-- <h1>This is Fmaxcloud official website</h1> -->
            <div class="row w-100">
                <router-link v-wave class="btn btn-primary col-sm mx-sm-2 my-2" to="/auth/login">前往登录</router-link>
                <router-link v-wave class="btn btn-success col-sm mx-sm-2 my-2" to="/auth/register">前往注册</router-link>
            </div> 
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
    mounted() {
        // this.$notify.info({
        //   title: '你好啊，我是小治',
        //   message: '目前网站正在开发状态，日后会逐渐完善滴，感谢你的支持！awa.'
        // });
    }
}
</script>

<style lang="less" scoped>
.btn {
    padding: 20px;
}
#homePage {
    height: 100vh;
    display: flex;
}
</style>