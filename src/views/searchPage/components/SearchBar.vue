<template>
  <div class="serch-wrap">
    <div class="search-bar">
      <div class="search">
        <div class="previous">
          <img src="@/static/images/search.png" alt="">
        </div>
        <input type="search" placeholder="搜索商品">
      </div>
        <router-link
        tag="div"
        to="/car"
        class="pic"
        >
          <img src="@/static/images/icon-pic.png" alt="">
        </router-link>
    </div>
    <ul class="sort-wrap">
      <li
      v-for="(item, index) in sortTab"
      :key="index"
      :class="{active: activeIndex === index}"
      @click="sortTabClick(index)"
      >
      {{item.sortName}}
      </li>
    </ul>
    <div class="sort-icon">
      <img src="@/static/images/icon-srot.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'search-bar',
  props: {
    sortTab: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    sortTabClick (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.serch-wrap {
  position: relative;
  background-color: #fff;
  .search-bar {
    background-color: #fff;
    @include flex(flex, center);
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 28px;
    .search {
      flex: 1;
      background-color: #f5f5f5;
      @include flex(flex, center);
      height: 64px;
      background: #F7F7F7;
      padding-left: 20px;
      border-radius: 32px;
      .previous {
        flex-shrink: 0;
          @include wh(36px, 36px);
        img{
          @include wh(100%, 100%);
        }
      }
      input {
        outline: none;
        padding: 0 10px;
        flex: 1;
        border: 0;
        background-color: transparent;
        &[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 42px;
        width: 42px;
        background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/328e4d97f9d0d68ea04e872f68e508e3.png) no-repeat;
        background-size: contain;
    }
      }
    }
    .pic {
      flex-shrink: 0;
      padding-left: 20px;
      @include wh(48px, 48px);
      img {
        @include wh(100%, 100%)
      }
    }
  }
  .sort-wrap {
    @include flex(row, center, center);
    font-size: 28px;
    color: #323232;
    li {
      padding: 26px 0;
      box-sizing: border-box;
      flex: 1;
      @include flex(row, center, center);
      &.active {
        color: #dd2222;
      }
    }
  }
  .sort-icon {
    position: absolute;
    right: 10%;
    top: 67%;
    img {
      @include wh(24px, 24px)
    }
  }
}
</style>
