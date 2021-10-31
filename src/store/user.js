import api from '@/api'

const user = {
  namespaced: true, // 通过添加 namespaced: true 的方式使其成为带命名空间的模块。
  state: {
    info: {},
    token: document.cookie.includes('token')
  },
  getters: {},
  mutations: {
    SET_USER_INFO (state, payload) {
      state.info = payload
    }
  },
  actions: {
    async login ({ dispatch }, params) {
      await api.user.login(params)
      dispatch('info')
    },
    async info ({ commit, dispatch }) {
      const res = await api.user.info()
      await dispatch('car/queryCarList', null, { root: true })
      commit('SET_USER_INFO', res.info)
    }
  }
}

export default user
