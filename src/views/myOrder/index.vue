<template>
    <div class="my-order">
      <al-top-title title="我的订单" class="order" previous="previous"></al-top-title>
      <nav-class></nav-class>
      {{orderProduct.map(item => item.name)}}
        <div class="tips-wrap" v-if="list.length === 0">
          <dl>
            <dt>
              <img src="@/static/images/kongPrder.png" alt="">
            </dt>
            <dd>你还没有下过订单</dd>
          </dl>
          <router-link
            to="/class"
            tag="button"
            type="button"
            class="other-btn"
          >去逛逛</router-link>
          {{list.length}}
        </div>
    </div>
</template>
<script>
import NavClass from './components/NavClass.vue'
import { mapState } from 'vuex'
export default {
  name: 'my-order',
  components: {
    NavClass
  },
  computed: {
    ...mapState('car', ['list']),
    // eslint-disable-next-line vue/return-in-computed-property
    orderProduct () {
      return this.list.filter(item => {
        return item.status === '1'
      })
    }
  },
  created () {
    console.log(this.list.length)
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
