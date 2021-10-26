<template>
    <div class="my-order">
      <al-top-title title="我的订单" class="order" previous="previous" :paths="paths"></al-top-title>
      <nav-class></nav-class>
        <div class="tips-wrap">
          <dl>
            <dt>
              <img src="@/static/images/kongPrder.png" alt="">
            </dt>
            <dd>你还没有下过订单</dd>
          </dl>
          <button type="button" class="other-btn">去逛逛</button>
        </div>
    </div>
</template>
<script>
import NavClass from './components/NavClass.vue'
export default {
  name: 'my-order',
  components: {
    NavClass
  },
  data () {
    return {
      paths: '/my'
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  background-color: #fff;
}
.tips-wrap {
  @include centerer;
  @include flex(column, center, center);
  dl {
  @include flex(column, center, center);
  margin-bottom: 72px;
    dt {
      @include wh(144px, 144px);
      img {
        @include wh(100%, 100%)
      }
    }
    dd {
      font-size: 32px;
      color: #8c8c8c;
      margin-top: 24px;
    }
  }
  .other-btn {
    background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
    border-radius: 44px;
    border: 0;
    color: #fff;
    height: 80px;
    padding: 0 112px;
    font-size: 32px;
    box-sizing: border-box;
  }
}
</style>
