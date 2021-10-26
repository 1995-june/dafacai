<template>
    <div class="search-page">
      <al-top-title title="搜索" previous="previous" :paths="paths"></al-top-title>
      <search-bar :sortTab="sortTab"></search-bar>
      <dl>
        <dt>
          <img src="https://img11.360buyimg.com/n7/jfs/t1/90299/11/19398/213470/615f12b0Ea8650666/d4e2c7810d668d96.jpg" alt="">
        </dt>
        <dd>
          <p>大希地 鸡排健身餐忘不了大鸡排135g</p>
          <div class="price">
            <b><i>￥</i>13.6<span>/袋</span></b>
            <div class="add">
              <img src="@/static/images/add.png" alt="">
            </div>
          </div>
        </dd>
      </dl>
    </div>
</template>
<script>
import SearchBar from './components/SearchBar.vue'
export default {
  name: 'search-page',
  components: {
    SearchBar
  },
  data () {
    return {
      paths: '/class',
      sortTab: [
        {
          sortName: '综合'
        },
        {
          sortName: '销量'
        },
        {
          sortName: '价格'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  padding-top: 96px;
}
dl {
  margin: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 340px;
  dt {
    @include wh(340px, 340px);
    img {
      @include wh(100%, 100%);
    }
  }
  dd {
    padding: 16px;
    box-sizing: border-box;
    p {
      font-size: 32px;
      color: #323232;
    }
    .price {
      @include flex(row, center, space-between);
      margin-top: 16px;
      b {
        font-size: 36px;
        color: #dd2222;
        font-weight: bold;
        i {
          font-size: 14px;
        }
        span {
          font-size: 24px;
          color: #b2b2b2;
        }
      }
      .add {
        margin-left: 2px;
        @include wh(48px, 48px);
        img {
          @include wh(100%, 100%)
        }
      }
    }
  }
}
</style>
