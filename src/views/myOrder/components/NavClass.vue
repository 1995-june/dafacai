<template>
    <div class="nav-class">
      <nav>
        <a href="javascript:;"
          v-for="(item, index) in navClass"
          :key="index"
          :class="{active: activeIndex == index}"
          @click="selected(index)"
        >{{item.text}}</a>
      </nav>
    </div>
</template>
<script>
export default {
  name: 'nav-class',
  data () {
    return {
      activeIndex: 0,
      navClass: [
        {
          text: '全部'
        },
        {
          text: '待付款'
        },
        {
          text: '待发货'
        },
        {
          text: '待收货'
        },
        {
          text: '已完成'
        }
      ]
    }
  },
  methods: {
    selected (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-class {
  background-color: #fff;
  nav {
    @include flex(row);
    box-sizing: border-box;
    a {
      padding: 32px;
      position: relative;
      font-weight: bold;
      color: #323232;
    @include flex(flex, center, center);
      flex: 1;
      font-size: 28px;
      color: #323232;
      &.active {
        color: #dd2222;
        font-weight: bold;
        &::after {
          position: absolute;
          bottom:0;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 50%;
          height: 5px;
          background-color: #dd2222;
        }
      }
    }
  }
}
</style>
