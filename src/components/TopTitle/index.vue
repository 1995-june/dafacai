<template>
    <div class="top-title">
      <div class="previous-page" v-if="previous">
        <i
          class="iconfont icon-youjiantou"
          @click="routerBack"
        ></i>
      </div>
      <header>{{title}}</header>
    </div>
</template>
<script>
export default {
  name: 'top-title',
  props: {
    title: String,
    previous: String
  },
  methods: {
    routerBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-title {
  position: fixed;
  width: 100%;
  top: -2px;
  z-index: 1111;
  display: flex;
  align-items: center;
  padding: 30px 34px;
  box-sizing: border-box;
  background-color: #fff;
  .previous-page {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    transform: rotateY(180deg);
    .icon-youjiantou {
      font-size: 50px;
      font-weight: bold;
    }
  }
  header {
    flex: 1;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
