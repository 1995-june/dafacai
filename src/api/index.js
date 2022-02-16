/**
 * 在 src 下建立  api 文件，建立index.js，
 * 在 main.js 中添加的原型里 Vue.prototype.$api = api
**/
import fetch from '@/utils/fetch.js'

const api = {
  user: {
    login: (params) => fetch.post('/api/user/login', params),
    send_msg_code: (params) => fetch.get('/api/user/send_msg_code', params),
    info: () => fetch.get('/api/user/info')
  },
  class: {
    menu: () => fetch.get('/api/product/category')
  },
  product: {
    productList: (params = {}) => fetch.get('/api/product/productList', params),
    details: (id) => fetch.get('/api/product/' + id)
  },
  car: {
    list: () => fetch.get('/api/car/list'),
    add: (params) => fetch.post('/api/car/add', params),
    update: (params) => fetch.post('/api/car/update', params),
    reduce: (params) => fetch.post('/api/car/reduce', params)
  }
}

export default api 
