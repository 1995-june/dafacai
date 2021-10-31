<template>
    <div class="car">
      <al-top-title title="购物车"></al-top-title>
       <div class="remove">
          <dl>
            <dt>
              <img src="@/static/images/dianpu.png" />
              <span>大希地</span>
            </dt>
            <dd>
              <a href="javascript">删除</a>
            </dd>
          </dl>
        </div>
        <car-list></car-list>
        <footer-tool></footer-tool>
      <div class="tips-wrap" v-show="otherProduct">
          <dl>
            <dt>
              <img src="@/static/images/pic-empty.png" alt="">
            </dt>
            <dd>购物车还是空的</dd>
          </dl>
          <router-link
            to="/class"
            tag="button"
            type="button"
            class="other-btn"
            >去逛逛</router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import CarList from './components/CarList.vue'
import FooterTool from './components/FooterTool.vue'

export default {
  name: 'car',
  components: {
    CarList,
    FooterTool
  },
  computed: {
    ...mapState('car', ['list'])
  },
  data () {
    return {
      otherProduct: false
    }
  }
}
</script>

<style lang="scss" scoped>
.car {
  min-height: calc(100vh);
  padding: 96px 0;
  box-sizing: border-box;
  background-color: #fff;
  .remove {
    @include wh(100%, 80px);
    position: fixed;
    top: 95px;
    background-color: #fff;
    z-index: 11111;
    dl {
      @include flex(row, center, space-between);
      padding: 22px 32px;
      box-sizing: border-box;
      border-bottom: 4px solid #eee;
      dt {
        @include flex(row, center, center);
        img {
          @include wh(36px, 36px);
          margin-right: 24px;
        }
        span {
          font-size: 28px;
          font-weight: bold;
          color: #323232;
        }
      }
      dd {
        @include flex(row, center, center);
        a {
          font-size: 28px;
          color: #DD2222;
          font-weight: bold;
          text-decoration: none
        }
      }
    }
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
}
</style>
