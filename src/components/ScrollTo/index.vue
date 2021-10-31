<template>
    <div class="scroll-to">
      <a href="javascript:;" @click="scrollTo">顶部</a>
    </div>
</template>
<script>
export default {
  name: 'scroll-to',
  data () {
    return {
    }
  },
  methods: {
    scrollTo () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-to {
  @include wh(80px, 80px);
  background-color: #fff;
  box-shadow: 2px 2px 5px #888888;
  border-radius: 50%;
  position: fixed;
  bottom: 150px;
  right: 50px;
  a {
    display: block;
    font-size: 28px;
    line-height: 80px;
    text-align: center;
    color: #666;
    text-decoration: none;
  }
}
</style>
