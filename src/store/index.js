import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import car from './car'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 状态，存储数据，类似于组件中的 data 方法 翻译： “ 赛特 ”
    count: '666',
    age: 20,
    sex: '男',
    todoList: [
      { id: 1, text: '123', status: false },
      { id: 1, text: '456', status: true },
      { id: 1, text: '321', status: false },
      { id: 1, text: '789', status: true }
    ]
  },
  getters: { // 类似于组件中的 computed 计算属性 针对于 state中的“？？”？“”？？？？？？状态，做一些简便的处理  翻译： “ 该特斯 ”
    doing (state) {
      return state.todoList.filter(item => !item.status)
    },
    finished (state) {
      return state.todoList.filter(item => item.status)
    }
  },
  /**
   * 以同步的方式更改状态，保留了更改状态后的记录，方便调试
   * 保存的记录在mutations的函数执行完毕后的一瞬间 如果有异步，
   * 那么执行完函数以后 保存的状态是上一次的状态 通过commit函数 触发 mutations
   * 翻译： “ 梅太深斯 ”
   **/
  mutations: {
    SET_COUNT (state, payload) {
      state.count = payload
    }
  },
  actions: { // 需要异步 如异步有结果后，通过commit函数 在提交给 mutations 翻译： “ 啊克深斯 ”
    set_count (context, payload) {
      setTimeout(() => {
        context.commit('SET_COUNT', payload)
      }, 2000)
    }
  },
  // 模块
  modules: {
    user,
    car
  }
})
