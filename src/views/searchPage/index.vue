<template>
    <div class="search-page">
      <div class="search">
        <al-top-title title="搜索" previous="previous" :paths="paths"></al-top-title>
        <search-bar :sortTab="sortTab"></search-bar>
      </div>
      <div class="search-product">
        <al-product-list :list="products"></al-product-list>
       </div>
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
      ],
      productParmas: {
        page: 1,
        page_size: 10,
        categoryId: 1
      },
      products: []
    }
  },
  created () {
    this.fetchProductList()
  },
  // 数据监听
  watch: {
    productParmas: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  methods: {
    // 产品列表
    async fetchProductList () {
      const res = await this.$api.product.productList(this.productParmas)
      if (this.productParmas.page === 1) {
        this.products = res.data
        window.scrollTo(0, 0)
      } else {
        this.products = this.products.concat(res.data)
      }
    }
  },
  onScrollBottom () {
    this.productParmas.page += 1
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  width: 100%;
  padding-top: 280px;
  .search {
    width: 100%;
    position: fixed;
    top: 96px;
    z-index: 111;
  }
  /deep/.search-product {
    @include wh(100%, auto);
    .product-list-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      dl {
        background-color: #ffffff;
        border-radius: 16px;
        width: 380px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        margin: 10px 0;
        dt {
          @include wh(340px, 340px);
          img {
            @include wh(100%, 100%);
          }
        }
        dd {
          padding-top: 16px;
          padding-right: 0;
          box-sizing: border-box;
          p {
            font-size: 32px;
            color: #323232;
          }
          .price-wrap {
            @include flex(row, center, space-between);
            margin-top: 16px;
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
            .add {
              @include wh(48px, 48px);
              img {
                @include wh(100%, 100%)
              }
            }
          }
        }
      }
    }
  }
}
</style>
