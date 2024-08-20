/****   request.js   ****/
import axios from 'axios'
// import { Message } from 'element-ui';
import Vue from 'vue';
import _ from 'lodash';

const service = axios.create({
  baseURL: '/api/v1',
  timeout: 10 * 1000 // 10 秒超时
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (config.ignore === true) {
    config.ignore = {
      headers: true,
      stringify: true
    };
  };
  if (!_.get(config,'ignore.headers')) {
    config.headers = {
      'Content-Type':'application/json' //配置请求头
    }
  }
  if (!_.get(config,'ignore.stringify')) {
    config.data = JSON.stringify(config.data);
  }
  config.headers.Authorization = 'xiaozhi/safe@1.0'
  config.withCredentials = 'include'
  return config
}, error => {
  Promise.reject(error)
})
 
// 3.响应拦截器
service.interceptors.response.use(response => {
  return response
}, error => {
  /***** 接收到异常响应的处理开始 *****/
 
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/404"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      // Message.error('服务器响应超时，请刷新当前页')
      Vue.prototype.$toastx({
        type: 'danger',
        title: '服务器响应超时，请刷新当前页'
      })
    }
    error.message = '连接服务器失败'
  }
 
  if(_.get(error,'response.data') && !_.get(error,'response.data.notRemind')){
    error.message = _.get(error,'response.data.msg') || _.get(error,'message');
    if(_.get(error,'response.data.warn')) {
      // Message.warning(error.message)
      Vue.prototype.$toastx({
        type: 'warning',
        title: error.message
      })
    } else {
      // Message.error(error.message)
      Vue.prototype.$toastx({
        type: 'danger',
        title: error.message
      })
    }
  }
  
  /***** 处理结束 *****/
  return Promise.reject(error.response)
})


export default service