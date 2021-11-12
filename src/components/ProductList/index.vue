<template>
    <div class="product-list-wrap">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="{
          path: `/detail/${item.id}/${item.name}`,
          query: {
            type: item.name
          }
        }"
        tag="dl"
      >
        <dt>
          <img :src="item.img" alt="">
        </dt>
        <dd>
          <h2>{{item.name}}</h2>
          <div class="price-wrap">
            <p><b>￥</b>{{item.price | price}}<span>/袋</span></p><al-add-car :info="item"></al-add-car>
          </div>
        </dd>
      </router-link>
    </div>
</template>
<script>

export default {
  name: 'product-list',

  props: {
    list: Array,
    default: () => []
  },
  filters: {
    price (value) {
      return (value / 100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list-wrap {
  dl {
    @include flex(row);
    @include border-1px(bottom, #eee);
    padding: 32px 0;
    box-sizing: border-box;
    margin: 0 32px;
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
      }
    }
  }
}
</style>
