<template>
    <div class="footer-bar">
      <nav>
        <router-link
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          active-class="active"
        >
          <img :src="item.icon" alt="">
          <img :src="item.selectIcon" alt="" class="selected">
          <span>{{item.text}}</span>
          <span class="count" v-if="item.text === '购物车'">{{list.length}}</span>
        </router-link>
      </nav>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'footer-bar',
  computed: {
    ...mapState('car', ['list'])
  },
  data () {
    return {
      menu: [
        {
          path: '/home',
          icon: require('@/static/images/home.png'),
          selectIcon: require('@/static/images/homeSelected.png'),
          text: '首页'
        },
        {
          path: '/class',
          icon: require('@/static/images/class.png'),
          selectIcon: require('@/static/images/classSelected.png'),
          text: '分类'
        },
        {
          path: '/car',
          icon: require('@/static/images/car.png'),
          selectIcon: require('@/static/images/carSelected.png'),
          text: '购物车'
        },
        {
          path: '/my',
          icon: require('@/static/images/my.png'),
          selectIcon: require('@/static/images/mySelected.png'),
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-bar {
  @include wh(100%, 96px);
  position: fixed;
  bottom: -1px;
  background-color: #FCFCFC;
  nav {
    @include flex(row);
    a {
       position: relative;
       text-decoration: none;
      flex: 1;
      @include flex(column, center, center);
      color: $color-grey;
      padding: 8px 0;
      .count {
        position: absolute;
        top: 5px;
        right: 60px;
        color: $color-primary;
        font-size: 32px;
        font-weight: bold;
      }
      span {
        font-size: 20px;
        margin-top: 2px;
      }
      img {
        @include wh(48px, 48px);
        display: block;
          &.selected {
            display: none;
          }
        }
        &.active {
          color: $color-primary;
          img {
            display: none;
            &.selected {
              display: block;
            }
          }
        }
      }
    }
  }
</style>
