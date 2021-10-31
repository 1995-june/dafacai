<template>
  <div id="app">
    <keep-alive include="switch-tab">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    if (this.$store.state.user.token) {
      this.$store.dispatch('user/info')
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: $grey;
  min-height: 100vh;
}
</style>
