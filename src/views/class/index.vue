<template>
    <div class="class-page">
      <al-top-title title="分类"></al-top-title>
      <search-bar></search-bar>
      <div class="content">
        <class-menu class="left-menu" :menu="leftMenu" @change="leftMenuChange"></class-menu>
        <div class="right-content">
        <class-menu class="right-menu" :menu="rightMenu" @change="rightMenuChange"></class-menu>
        <div class="product-list">
          <al-product-list :list="products"></al-product-list>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
import SearchBar from './components/SearchBar'
import ClassMenu from './components/ClassMenu.vue'
export default {
  name: 'class',
  components: {
    SearchBar,
    ClassMenu
  },
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      productParmas: {
        page: 1,
        page_size: 10,
        categoryId: 1
      },
      products: []
    }
  },
  watch: {
    productParmas: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  created () {
    this.fetchMenuData()
    this.fetchProductList()
  },
  methods: {
    async fetchMenuData () {
      const res = await this.$api.class.menu()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: res.data[0].categoryId
      }].concat(res.data[0].children)
    },

    async fetchProductList () {
      const res = await this.$api.product.productList(this.productParmas)
      this.products = res.data
    },

    leftMenuChange (item, index) {
      this.productParmas.categoryId = item.categoryId
      const menu = item.children || []
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: item.categoryId
      }].concat(menu)
    },

    rightMenuChange (item, index) {
      this.productParmas.categoryId = item.categoryId
    }
  }
}
</script>

<style lang="scss" scoped>
.class-page {
  @include wh(100vw, calc(100vh - 96px));
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 96px;
  box-sizing: border-box;
  .content {
    flex: 1;
    height: calc(100vh - 96px - 6px);
    padding-top: 175px;
    box-sizing: border-box;
    display: flex;
    .left-menu {
      flex-shrink: 0;
    }
    .right-content {
      flex: 1;
      overflow: hidden;
    }
   /deep/.right-menu {
     width: 100%;
     height: 64px;
     overflow: auto;
     flex-shrink: 0;
     nav {
        display: flex;
        height: 100%;
        background-color: #fff;
        a {
          line-height: 64px;
          height: 100%;
          background-color: #fff;
          flex-shrink: 0;
          font-size: 24px;
        }
      }
    }
    .product-list {
      overflow: auto;
      flex: 1;
      height: calc(100vh - 175px - 64px - 96px);
    }
  }
}
</style>
