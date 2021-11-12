import DialogBox from './DialogBox.vue'

export default {
  install (Vue) {
    Vue.component('DialogBox', DialogBox)
    Vue.prototype.$confirm = (str) => {
      // eslint-disable-next-line promise/param-names
      return new Promise((reject, resolve) => {
        const wrap = document.createElement('div')
        document.body.append(wrap)
        const ComponentClass = Vue.extend(DialogBox) // 生成组件类
        const Component = new ComponentClass({
          propsData: {
            visible: true
          }
        }) // 实例化组件

        // eslint-disable-next-line no-unused-vars
        const h = Component.$createElement
        const vNode = (
          <div>
            {str}
            <div>
              <button type="button" onclick={(e) => {
                // eslint-disable-next-line prefer-promise-reject-errors
                resolve()
                Component.$destroy()
              }}>确定</button>
              <button type="button" onclick={() => {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject()
                Component.$destroy()
              }}>取消</button>
            </div>
          </div>
        )
        Component.$slots.default = vNode // 接收虚拟 DOM
        Component.$mount() // 渲染组件
        wrap.append(Component.$el)
      })
    }
  }
}
