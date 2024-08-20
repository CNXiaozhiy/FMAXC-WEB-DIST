const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    client: {
      overlay: false // 编译错误时，取消全屏覆盖（建议关掉）
    },
    proxy: {
      '/api/v1':{
        target: 'https://www.fmaxc.cn/api/v1',
        changeOrigin: true,//允许跨域请求
        ws: true,
        pathRewrite: { //重写路径 替换请求地址中的指定路径
          ['^/api/v1']: '' 
        }
      }
    }
  },
}
