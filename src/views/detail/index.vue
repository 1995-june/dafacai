<template>
  <div class="detail">
      <al-top-title title="商品详情" previous="previous" :paths="paths"></al-top-title>
      <banner :items="detail.images"></banner>
      <dl>
        <dt>
          <h2>{{detail.name}}</h2>
        </dt>
        <dd>
          <div class="price">
            <span>￥</span><b>{{detail.price | price}}</b><i>/袋</i>
          </div>
          <span class="proposal">建议零售价:￥8元</span>
        </dd>
      </dl>
      <div class="detail-img" v-html="detail.detail"></div>
      <al-card title="商品推荐">
        <al-product-list :list="detail.recommend"></al-product-list>
      </al-card>
      <footer>
        <img src="@/static/images/car.png" alt="">
        <button type="button" class="add-btn">加入购物车</button>
      </footer>
      <al-scroll-to></al-scroll-to>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: 'detail',
  components: {
    Banner
  },
  data () {
    return {
      paths: '/class',
      detail: {}
    }
  },
  created () {
    this.fetchDetail()
  },
  watch: {
    $route () { // 同一个页面发生改变，参数发生改变，页面随之改变
      this.fetchDetail()
    }
  },
  methods: {
    async fetchDetail () {
      const { id } = this.$route.params
      const res = await this.$api.product.details(id)
      this.detail = res.data
    }
  },
  filters: {
    price (value) {
      return (value / 100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 115px 0 96px;
  box-sizing: border-box;
  dl {
    padding: 24px 32px;
    background-color: #fff;
    box-sizing: border-box;
    dt {
      h2 {
        color: #323232;
        font-size: 36px;
        font-weight: bold;
        @include ellipsis
      }
    }
    dd {
      margin-top: -24px;
      .price {
          color: #dd2222;
          span {
            font-size: 32px;
          }
          b {
            font-size: 48px;
            font-weight: bold;
          }
          i {
            color: #b2b2b2;
            font-size: 32px;
          }
      }
      .proposal {
        display: flex;
        font-size: 28px;
        font-weight: bold;
        color: #323232;
      }
    }
  }
  ::v-deep .detail-img {
    margin-top: 16px;
    background-color: #fff;
    img {
      width: 100%;
    }
  }
  footer {
    @include wh(100%, 96px);
    position: fixed;
    bottom: -2px;
    background-color: #fff;
    padding: 12px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      @include wh(48px, 48px);
    }
    .add-btn {
      width: 240px;
      height: 72px;
      background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
      border-radius: 36px;
      border: 0;
      color: #fff;
      font-size: 32px;
    }
  }
}
</style>
