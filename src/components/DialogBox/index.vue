<template>
  <transition
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="dialog-box-wrap">
      <div class="dialog-box">
        <header v-if="title">{{title}}</header>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'dialog-box',
  props: {
    title: String,
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.dialog-box-wrap {
  @include wh (100vw, 100vh);
  background-color: rgba(0, 0, 0, .4);
  @include centerer;
  z-index: 1111111;
  .dialog-box {
    width: 60%;
    border-radius: 24px;
    background-color:  rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    @include centerer;
    header {
      font-size: 34px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      height: 104px;
      line-height: 104px;
      white-space: nowrap;
      box-sizing: border-box;
      text-align: center;
    }
    /deep/.content {
      white-space: nowrap;
      box-sizing: border-box;
      height: 100%;
      padding: 18px 0;
      box-sizing: border-box;
      a {
        text-decoration: none;
         font-size: 36px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
    }
  }
}
</style>
