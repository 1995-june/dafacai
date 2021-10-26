import Dialog from './index'

export default {
  install (Vue) {
    Vue.prototype.$alert = () => {
      const ComponentClass = Vue.extends(Dialog)
      const component = new ComponentClass()
      component.$mount()
    }
  }
}
