import api from '@/api'

const car = {
  namespaced: true, // 通过添加 namespaced: true 的方式使其成为带命名空间的模块。
  state: {
    list: []
  },
  getters: {
    isCheckAll (state) {
      return state.list.reduce((prev, item) => {
        if (item.status === '0') {
          return false
        }
        return prev
      }, true)
    }
  },
  mutations: {
    SET_CAR_LIST (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async queryCarList ({ commit }) {
      const res = await api.car.list()
      commit('SET_CAR_LIST', res.data)
    },

    async addCar ({ dispatch }, params) {
      await api.car.add(params)
      dispatch('queryCarList')
    },

    async update ({ dispatch }, params) {
      await api.car.update(params)
      dispatch('queryCarList')
    }
  }

}

export default car
