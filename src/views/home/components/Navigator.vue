<template>
    <div class="navigator">
      <div class="entrance">
        <router-link
          v-for="item in navigator"
          :key="item.path"
          :to="item.path"
          tag="dl"
          >
          <dt><img :src="item.img" alt=""></dt>
          <dd>
            <h2>{{item.text}}</h2>
            <p>{{item.subText}}</p>
          </dd>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: 'navigator',
  props: {
    navigator: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.navigator {
  padding:  0 32px;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  margin-top: -68px;
  .entrance {
    dl {
      @include wh(100%, 176px);
      @include flex(row, center, center);
      background: #FFFFFF;
      box-shadow: 0px 4px 8px 0px rgba(50, 50, 50, 0.05);
      padding: 0 40px;
      box-sizing: border-box;
      margin-top: 24px;
      border-radius: 16px;
      dt {
      @include wh(96px, 96px);
      flex-shrink: 0;
      img {
        @include wh(100%, 100%)
      }
    }
      dd {
        flex: 1;
        margin-left: 32px;
        h2 {
          font-size: 32px;
          font-weight: bold;
          color: #323232;
        }
        p {
          font-size: 26px;
          color: #888888;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
