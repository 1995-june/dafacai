<template>
    <div class="card">
      <div class="title">
        <img src="@/static/images/biaotizuo.png" alt="">
        <h2>{{title}}</h2>
        <img src="@/static/images/biaotiyou.png" alt="">
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  .title {
    display: flex;
    align-items: center;
    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #323232;
      margin: 0 16px;
    }
    img {
      @include wh(64px, 6px)
    }
  }
}
</style>
