<template>
    <div class="class-menu">
      <nav>
        <a
        v-for="(item, index) in menu"
        :key="index"
        :class="{active: activeIndex === index}"
        @click="change(item, index)"
        >{{item.categoryName}}</a>
      </nav>
    </div>
</template>
<script>
export default {
  name: 'class-menu',
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    menu () {
      this.activeIndex = 0
    }
  },
  methods: {
    change (item, index) {
      this.activeIndex = index
      this.$emit('change', item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.class-menu {
  font-size: 24px;
  @include wh(160px, 100%);
  overflow: auto;
  nav {
    background-color: #f6f6f6;
    a {
     @include wh(160px, 96px);
      color: #999;
      line-height: 96px;
      text-align: center;
      font-size: 28px;
      &.active {
        background-color: #fff;
        font-weight: bold;
        color: #4a4a4a;
      }
    }
  }
}
</style>
