<template>
  <div id="app" class="d-flex flex-column align-items-center justify-content-center vh-100">
    <!-- <router-view></router-view> -->
     
    <vs-input shadow placeholder="User name" v-model="username">
        <template #icon>
          <i class='bx bx-user'></i>
        </template>
      </vs-input>

    <vs-input shadow type="password" placeholder="Password" v-model="password" class="mt-2">
      <template #icon>
        <i class='bx bx-lock-open-alt'></i>
      </template>
    </vs-input>

    <!-- <vs-button primary size="large" class="mt-4 w-100">Login</vs-button> -->
     <button class="btn btn-primary btn-relief mt-4 w-100 p-2" @click="openLoading">Login</button>
  </div>
</template>

<script>
// import 'bootstrap/dist/js/bootstrap.min'
export default {
  
  name: 'App',
  data(){
    return {
      username: '',
      password: '',
    }
  },
  components: {
  },
  mounted(){
    console.log("FMAXCLOUD 团队招人中，目前需要 JAVA，JAVASCRIPT 工程师，有意者联系 QQ： 1811302029");
  },
  methods: {
    openLoading() {
      this.$vs.loading()
    }
  }
}
</script>

<style lang="less">

// 重置默认样式
*{
    margin: 0px;
    padding: 0px;
}

</style>