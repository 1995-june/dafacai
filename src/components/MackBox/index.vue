<template>
    <transition
    enter-active-class="animate__animated animate__fadeIn "
    leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="mack-box"  v-show="visible" @click.stop="close">
    <transition
    enter-active-class="animate__animated animate__slideInUp "
    leave-active-class="animate__animated animate__slideOutDown"
    >
    <div class="mack" v-show="visible"  @click.stop>
      <div class="title" v-if="title">
        <h2>{{title}}</h2>
        <a href="javascript:;" class="remove" @click="close"></a>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
    </transition>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'mack-box',
  props: {
    visible: Boolean,
    title: String
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
 .mack-box {
      position: fixed;
      z-index: 100;
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, .4);
      top: 0;
      left: 0;
      z-index: 111111111;
      .mack {
        background-color: #fff;
        position: absolute;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        bottom: 0;
        width: 100%;
        min-height: 200px;
        .title {
          position: relative;
          border-bottom: 1px solid#efefef;
          h2 {
            font-size: 22px;
            text-align: center;
            font-weight: bold;
            margin: 20px 0;
          }
          .remove {
            position: absolute;
            height: 20px;
            width: 20px;
            top:10px;
            right: 20px;
            &::after {
              display: block;
              content: '';
              width: 2px;
              height: 20px;
              background-color: #999;
              color: red;
              transform: rotate(36deg);
              position: absolute;
              top: -10px
              }

            &::before {
              display: block;
              content: '';
              width: 2px;
              height: 20px;
              background-color: #999;
              transform: rotate(-36deg);
              position: absolute;
              top: -10px
            }
          }
        }
      }
}
.content {
  overflow: auto;
  max-height: calc(100vh - 1rem - .5rem);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
    from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
