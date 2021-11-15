// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scrollMixin from '@/mixins/scroll.js' // 全局注册 mixins

import '@/static/fonts/iconfont.css'
import '@/utils/rem.js' // rem适配
import '@/utils/console.js'
import api from '@/api' // ajax
import 'reset-css' // 默认样式
import animate from 'animate.css' // 动画
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图
import 'swiper/swiper-bundle.css' // 轮播图样式

import aoutUseComponents from './plugins/aoutUseComponents' // 全局注册

Vue.use(aoutUseComponents) // 全局注册插件
Vue.use(VueAwesomeSwiper) // 轮播图插件
Vue.use(scrollMixin) // 米心插件
// Vue.use(console) // 米心插件

Vue.prototype.$api = api
Vue.prototype.$animate = animate

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
