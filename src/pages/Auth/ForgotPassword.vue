<template>
  <div id="forgotPassword">
    <h1>忘啥忘，懒得写了</h1>
    <router-link to="/auth/login" class="btn btn-primary">前往登录</router-link><br>
    <router-link to="/auth/register" class="btn btn-success">前往注册</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#forgotPassword {
    display: flex;
    flex-direction: column;
    h1 {
        margin-bottom: 20px;
    }
}

</style>