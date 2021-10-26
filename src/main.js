import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/static/fonts/iconfont.css'
import '@/utils/rem.js'
import api from '@/api'
import 'reset-css'

import animate from 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'

import aoutUseComponents from './plugins/aoutUseComponents'
Vue.use(aoutUseComponents)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$api = api
Vue.prototype.$animate = animate

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
