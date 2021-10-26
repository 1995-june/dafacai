import axios from 'axios'

const fetch = axios.create({

})

// 添加响应拦截器
fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data // data???
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  ...fetch,
  get: (url, params) => fetch.get(url, { params })
}
