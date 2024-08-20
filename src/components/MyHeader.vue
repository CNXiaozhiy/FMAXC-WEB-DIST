<template>
  <div id="MyHeader">
    <Header>
        <div class="header">
          <h3 class="title" @click="$router.push('/')">FmaxCloud</h3>
          <div class="navFirst">
            <div class="navFirst-left">
              
              <ul class="nav justify-content-center align-items-center" >
                <transition name="fade" mode="out-in"><div class="spinner-border me-2" role="status" v-if="loading"></div></transition>
                <li class="nav-item dropdown">
                  <el-dropdown>
                    <a class="nav-link h5 dropdown-toggle bt-link flex-center" data-toggle="dropdown" role="button">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="qq" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-qq text-info"><path data-v-ead19762="" fill="currentColor" d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z" class=""></path></svg>
                      交流社区
                    </a>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=AeLPHrzg-B7ajsmlx6TYvvhPi1lQK4dV&jump_from=webapi&authKey=01CIqwcseG9Mw8hoA0xmgQUUQKYlsJGaW2xXKpIaFF8FiLOxlvFftdMZ9w3UxK2l">QQ 官方群</a></el-dropdown-item>
                      <el-dropdown-item><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=4q9Z5bqepCbTEkMNFuO_eNW5RB20taHZ&jump_from=webapi&authKey=dOOlmHwM+bW73BFNmogszo8CxprOkB/0LNcIi9Fl/eiKBObnUB8LyO/gOiaV+Xut">QQ 闲聊群</a></el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                
                <li class="nav-item">
                <a class="nav-link h5 bt-link flex-center" href="#">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-newspaper text-warning"><path data-v-ead19762="" fill="currentColor" d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" class=""></path></svg>
                  近期动态
                </a>
                </li>
                <li class="nav-item">
                <router-link class="nav-link h5 bt-link flex-center" :to="{name: 'r-dashboard-status'}">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-location-arrow text-success"><path data-v-ead19762="" fill="currentColor" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" class=""></path></svg>
                  服务器状态
                </router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link bt-link h5 flex-center" href="http://www.baidu.com" tabindex="-1" aria-disabled="true">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-magnifying-glass"><path data-v-9a3e53f2="" fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class=""></path></svg>
                  搜索百科
                </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bolder" href="#" tabindex="-1" aria-disabled="true">
                    <el-badge :value="1">
                      <svg style="width: 20px; height: 20px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-mail"><path data-v-12809c3f="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline data-v-12809c3f="" points="22,6 12,13 2,6"></polyline></svg>
                    </el-badge>
                  </a>
                </li>
              </ul>
            </div>
            <el-dropdown trigger="hover">
              <div class="user-info">
                <div class="welcome">
                  <span class="font-weight-bolder">{{ info.name ? info.name : '拉取中' }}</span>
                  <span>{{ info.welcome ? info.welcome : '拉取中' }}</span>
                </div>
                <div class="photo">
                  <el-avatar class="user-photo" :size="45" :src="info.photo"></el-avatar>
                </div>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-if="info.admin">
                  <div @click="funHeader('selfCenter')" class="flex-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-diamond-fill" viewBox="0 0 16 16"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/></svg>
                    <span style="margin-left: 5px">后台管理</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item v-if="info.admin" divided></el-dropdown-item>
                <el-dropdown-item>
                  <div @click="funHeader('selfCenter')" class="flex-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-25 mr-50 svg-inline--fa fa-gear"><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" class=""></path></svg>
                    <span style="margin-left: 5px">个人中心</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item >
                  <div @click="funHeader('quitLogin')" class="flex-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-from-bracket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-25 mr-50 svg-inline--fa fa-right-from-bracket"><path fill="currentColor" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" class=""></path></svg>
                    <span style="margin-left: 5px">退出登录</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <slot></slot>
    </Header>
  </div>
</template>

<script>
export default {
    name: 'MyHeader',
    props: ['info','loading','funHeader']
}
</script>

<style lang="less" scoped>
@content-margin: 70px;

#MyHeader {
  position: sticky;
  top:0;
  z-index: 50;
}
.title {
  margin: 10px;
  cursor: pointer;

}
.header {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  // 版心
  padding: 0 @content-margin;
};

svg {
  width: 15px;
  margin-right: 5px;
}

.navFirst {
  display: flex;
  align-items: center;
}
.navFirst-left {
  margin-right: 20px;
}
.user-info {
  display: flex;
  align-items: center;

  cursor: pointer;
}
.user-info>.welcome>span {
  display: block;
  margin-right: 10px;
}
.user-info>.welcome>span:first-child {
  font-size: 14px;
}
.user-info>.welcome>span:not(:first-child) {
  text-align: end;
  font-size: 12px;
}
.user-photo {
  width: 45px;
  transition: all 0.5s;
}
.user-photo:hover {
  transform: scale(1.1);
}
.fade-enter-active, .fade-leave-active {  
  transition: all 0.3s;  
//   transform: scale(1.02);
}  
.fade-enter, .fade-leave-to /* .fade-leave-active 在 <2.1.8 版本中 */ {  
  opacity: 0;  
//   transform: scale(1);
}  
@media screen and (max-width:960px) {
  .navFirst-left {
    display: none;
  }
}
</style>