<template>
      <div class="car-product-list">
        <div class="list"
          v-for="(item, index) in list"
          :key="index"
          >
          <div class="select-box">
            <al-check-box v-model="item.status" @change="update(item)"></al-check-box>
          </div>
          <dl>
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
              <h2>{{item.name}}</h2>
              <div class="price-wrap">
                <p><b>￥</b>{{item.price | price}}<span>/袋</span></p>
                <al-number class="al-number" :value="item.count" @input="(value) => changeCount(value, item)"></al-number>
              </div>
            </dd>
          </dl>
        </div>
      </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'car-list',
  computed: {
    ...mapState('car', ['list'])
  },
  methods: {
    update (item) {
      this.$store.dispatch('car/update', {
        id: item.id,
        status: item.status * 1 === 1 ? '0' : '1'
      })
    },
    changeCount (count, item) {
      this.$store.dispatch('car/update', {
        id: item.id,
        count: count
      })
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
  .car-product-list {
    padding: 80px 0 96px;
    .list {
      display: flex;
      align-items: center;
      .select-box {
        margin: 0 24px;
      }
    dl {
      flex: 1;
      @include flex(row);
      @include border-1px(bottom, #eee);
      padding: 32px 0;
      box-sizing: border-box;
      dt {
        @include wh(176px, 176px);
        margin-right: 16px;
        flex-shrink: 0;
        img {
        @include wh(100%, 100%);
        }
      }
      dd {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 16px;
        h2 {
          font-size: 28px;
          color: #323232;
          font-weight: bold;
          @include ellipsis(2)
        }
        .price-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-size: 36px;
            font-weight: bold;
            color: #dd2222;
            b {
              font-size: 24px;
            }
            span {
              font-size: 24px;
              color: #B2B2B2;
            }
          }
          /deep/.al-number {
            a {
              @include wh(48px, 48px);
              font-size: 40px;
              line-height: 48px;
              border-radius: 0;
            }
            input {
              @include wh(80px, 48px);
            }
          }
        }
      }
    }
    }
    .select-all {
      @include wh(100%, 100px);
      position: fixed;
      bottom: 92px;
      @include flex(row, center, space-between);
      border-top: 2px solid #eee;
      background-color: #fff;
      .all {
        @include flex(row, center);
        font-size: 28px;
        color: #323232;
        font-weight: bold;
        margin: 0 24px;
        span {
          margin-left: 24px;
        }
      }
      .subtotal {
      @include flex(row, center);
        .subtotal-price {
          color: #323232;
          font-size: 28px;
          font-weight: bold;
          span {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 8px;
            b {
              font-size: 36px;
              color: #dd2222;
              i {
              font-size: 24px;
            }
          }
        }
        p {
          font-size: 20px;
          color: #b2b2b2;
          b {
            color: #323232;
            font-weight: bold;
          }
        }
      }
      .settlement {
        width: 162px;
        height: 72px;
        background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
        border-radius: 36px;
        color: #fff;
        border: 0;
        margin: 0 24px;
      }
    }
  }
}
</style>
