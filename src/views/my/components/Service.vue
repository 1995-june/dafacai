<template>
    <div class="service">
      <div class="state-menu">
        <router-link
          v-for="(item, index) in nav"
          :key="index"
          :to="item.path"
          tag="dl"
          :class="{active: activeIndex === index}"
          @click="navActive(index)"
          >
          <dt>
            <img :src="item.icon" alt="">
          </dt>
          <dd>{{item.text}}</dd>
        </router-link>
      </div>
      <div class="after-sale">
        <dl
        v-for="(item, index) in service"
        :key="index"
        >
          <dt>
            <img :src="item.icon" alt="">
          </dt>
          <dd>
            <p>{{item.text}}</p>
          </dd>
        </dl>
      </div>
    </div>
</template>
<script>
export default {
  name: 'service',
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    nav: {
      type: Array,
      default: () => []
    },
    service: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  margin: 32px;
  .state-menu {
    font-size: 26px;
    background-color: #fff;
    @include flex(felx, center, center);
    padding: 58px 48px;
    box-sizing: border-box;
    margin-top: -68px;
    border-radius: 16px;
    dl {
      flex: 1;
      color: #323232;
      @include flex(column, center, center);
      dt {
        @include wh(64px, 64px);
        img {
          @include wh(100%, 100%);
        }
      }
      dd {
        margin-top: 12px;
      }
      &.active {
        color: #dd2222;
      }
    }
  }
  .after-sale {
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 24px;
    border-radius: 16px;
    dl {
      @include flex(center, center);
      padding: 32px;
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        border: 0;
      }
      dt {
        @include wh(48px, 48px);
        img {
          @include wh(100%, 100%)
        }
      }
      dd {
        font-size: 32px;
        color: #323232;
        margin-left: 24px;
      }
    }
  }
}
</style>
