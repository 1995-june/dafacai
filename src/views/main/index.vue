<template>
    <div class="switch-tab">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <al-footer-bar></al-footer-bar>
    </div>
</template>
<script>
export default {
  name: 'switch-tab',
  mounted () {
    // console.log(this.$alert)
  }
}
</script>

<style lang="scss" scoped>
.switch-tab {
  // padding: 96px 0 140px;
  box-sizing: border-box;
}
</style>
