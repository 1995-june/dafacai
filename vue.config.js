/**
 * 在项目的根目录下，建立 vue.config.js 文件，用来配置文件
**/
const webpack = require('webpack')
console.log(webpack);
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/static/scss/base.scss";' // 公共 scss 配置
      },
      // rem 适配 cnpm 下载 postcss postcss-px2rem
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100 // 字体大小
          })
        ]
      }
    }
  }
}
