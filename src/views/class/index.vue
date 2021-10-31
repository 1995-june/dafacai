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
      <al-scroll-to></al-scroll-to>
    </div>
</template>
<script>
import SearchBar from './components/SearchBar'
import ClassMenu from './components/ClassMenu.vue'
// import scrollMixin from '@/mixins/scroll.js' // 局部注册
export default {
  name: 'class',
  // mixins: [scrollMixin], // 局部注册
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
  // 数据监听
  watch: {
    productParmas: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  // 初始化生命周期
  created () {
    this.fetchMenuData()
    this.fetchProductList()
  },

  methods: {
    // 分类列表
    async fetchMenuData () {
      const res = await this.$api.class.menu()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: res.data[0].categoryId
      }].concat(res.data[0].children)
    },
    // 产品列表
    async fetchProductList () {
      const res = await this.$api.product.productList(this.productParmas)
      if (this.productParmas.page === 1) {
        this.products = res.data
        window.scrollTo(0, 0)
      } else {
        this.products = this.products.concat(res.data)
      }
    },
    // 左侧侧导航
    leftMenuChange (item, index) {
      this.productParmas.categoryId = item.categoryId
      this.productParmas.page = 1
      const menu = item.children || []
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: item.categoryId
      }].concat(menu)
    },
    // 右侧产品
    rightMenuChange (item, index) {
      this.productParmas.categoryId = item.categoryId
      this.productParmas.page = 1
    }
  },
  onScrollBottom () {
    this.productParmas.page += 1
  }
}
</script>

<style lang="scss" scoped>
.class-page {
  @include wh(100vw, auto);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  .content {
    flex: 1;
    height: calc(100vh - 96px - 6px);
    padding-top: 175px;
    box-sizing: border-box;
    display: flex;
    .left-menu {
      flex-shrink: 0;
      position: fixed;
      top: 180px;
      height: calc(100vh - 160px - 96px);
    }
    .right-content {
      flex: 1;
      overflow: hidden;
      margin-left: 160px;
    }
   /deep/.right-menu {
     width: 100%;
     height: 64px;
     overflow: auto;
     flex-shrink: 0;
    @include border-1px(bottom, #eee);
      position: fixed;
       top: 176px;
       z-index: 1111;
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
      padding: 65px 0 96px;
      box-sizing: border-box;
    }
  }
}
</style>
