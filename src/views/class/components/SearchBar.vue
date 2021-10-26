<template>
  <div>
    <router-link
    class="search-bar"
    tag="div"
    to="/searchPage"
    >
      <p>
        <img src="@/static/images/search.png" alt="">
        <span>搜索商品</span>
      </p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'search-bar'
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  background-color: #fff;
  padding-bottom: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  z-index: 111;
  p {
    margin: 0 24px;
    @include flex(flex, center);
    height: 64px;
    background: #F7F7F7;
    border-radius: 32px;
    padding-left: 24px;
    span {
      font-size: 28px;
      font-weight: 400;
      color: #B2B2B2;
      margin-left: 16px;
    }
    img {
      @include wh(36px, 36px);
    }
  }
}
</style>
