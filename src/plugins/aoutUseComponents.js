// 自动注册全局组件
export default (Vue) => {
  const context = require.context('@/components', true, /\.(vue|js)$/)
  const paths = context.keys()
  paths.forEach((path) => {
    const content = context(path).default
    if (typeof content !== 'function' && content.name) {
      Vue.component('al-' + content.name, content)
    } else {
      Vue.use(content)
    }
  })
}
