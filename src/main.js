import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

// UI 样式 动画 组
import ElementUI from 'element-ui' //element-ui的全部组件
Vue.use(ElementUI) //使用elementUI

// import Vuesax from './components/VueSax'
// Vue.use(Vuesax, {
//   // options here
// })
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary:'var(--bs-primary)',
    success:'var(--bs-success)',
    danger:'var(--bs-danger)',
    warning:'var(--bs-warning)',
    dark:'var(--bs-dark)',
  }
})


import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// const filterBeforeCreate = (toast, toasts) => {
//   try {
//     if (!toast.content.props.type) return false;
//   } catch(e) {return false}
//   return toast;
// }

const options = {
  transition: 'Vue-Toastification__fade',
  closeOnClick: false,
  position: "top-center",
  icon: false,
  hideProgressBar: true,
  closeButton: false,
};

import 'bootstrap/dist/js/bootstrap.js'

import './styles/common/myElement-variables.scss' // 自定义 element-ui
import './styles/common/myBootstrap.scss' // bootstrap 自定义
import './styles/common/Base.scss' // 自定义
import './styles/Toast.scss'
import 'animate.css';

Vue.use(Toast, options);

import Component from '@/components/Toast/Toast.vue'
const toastx = (content,options) => {
  // if (!vc || !content) {console.error('[Toastx] Error -> vc or content is null'); return;}
  if (!content.type) content.type = 'primary';
  return Vue.$toast({
    component: Component,
    props: content,
  },options);
}

Vue.use({
  install(Vue) {
    Vue.prototype.$toastx = toastx
  }
})

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts

// import 'element-ui/lib/theme-chalk/index.css' //element-ui的css


// document.documentElement.style.setProperty('--animate-duration', '0.9s');
import Announcement from '@/components/Announcement.vue';
Vue.use(Announcement)

import VWave from 'v-wave'
Vue.use(VWave)

// import { Input, Form, FormItem, Message } from 'element-ui';
// Vue.component(Input.name, Input);
// Vue.component(Form.name, Form);
// Vue.component(FormItem.name, FormItem);

Vue.use(VueRouter)
Vue.config.productionTip = false

import store from './store'
const vm = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')