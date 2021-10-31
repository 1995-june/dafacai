const scrollMixin = {
  // 渲染生命周期
  mounted () {
    if (this.$options.onScrollBottom) {
      this.initEvevt()
    }
  },

  // 销毁生命周期
  destroyed () {
    window.removeEventListener('scroll', this.scrollEvent)
  },

  methods: {
    // 事件函数
    initEvevt () {
      window.addEventListener('scroll', this.scrollEvent)
    },

    // 事件条件
    scrollEvent () {
      const scrollTop = document.querySelector('html').scrollTop
      const bodyHeight = document.body.clientHeight
      const windowHeight = window.innerHeight
      if ((bodyHeight - windowHeight) * 0.99 <= scrollTop) {
        this.$options.onScrollBottom.call(this)
      }
    }
  }
}

export default (Vue) => {
  Vue.mixin(scrollMixin)
}
