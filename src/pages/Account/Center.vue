<template>
  <div id="AccountCenterPage">
    <div class="card">
        <router-link class="btn btn-primary" :to="{name: 'rAccountCenterSetting'}">前往设置您的账号</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Center'
}
</script>

<style lang="less" scoped>
#AccountCenterPage {
    display: flex;
    // justify-content: center;
    width: 100%;
}
.card {
    width: 100%;
}
</style>