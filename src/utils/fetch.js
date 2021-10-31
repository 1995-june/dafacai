import axios from 'axios'
import router from '@/router'

const fetch = axios.create({

})

// 添加响应拦截器
fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data // data???
}, function (error) {
  // 判断用户没有登陆就跳转到登陆页面
  if (error.response.status === 401) {
    router.push({
      path: '/login',
      query: {
        callback: router.currentRoute.path
      }
    })
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  ...fetch,
  get: (url, params) => fetch.get(url, { params })
}
