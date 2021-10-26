<template>
    <div class="switch-tab">
        <router-view></router-view>
        <al-footer-bar></al-footer-bar>
    </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$alert)
  }
}
</script>

<style lang="scss" scoped>
.switch-tab {
  // padding: 96px 0 140px;
  box-sizing: border-box;
}
</style>
