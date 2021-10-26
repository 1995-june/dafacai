<template>
  <transition
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="dialog-box-wrap">
      <div class="dialog-box">
        <header>{{title}}</header>
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
  z-index: 1111;
  .dialog-box {
    border-radius: 24px;
    background-color:  rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    @include centerer;
    header {
      font-size: 34px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      padding: 36px 104px;
      white-space: nowrap;
      box-sizing: border-box;
      text-align: center;
    }
    .content {
      font-size: 28px;
      padding: 20px 220px;
      white-space: nowrap;
      box-sizing: border-box;
    }
  }
}
</style>
