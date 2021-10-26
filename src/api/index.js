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
    productList: (params = {}) => fetch.get('/api/product/productList', params)
  }

}

export default api
