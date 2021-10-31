<template>
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in items"
          :key="index"
        >
        <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
  }
}
</script>

<style lang="scss" scoped>
.banner {
  box-sizing: border-box;
  img {
    @include wh(100%, auto);
  }
  .swiper-slide {
    position: relative;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 11;
    font-size: 32px;
    background-color: red;
    color: #fff;
    padding: 0 30px;
    box-sizing: border-box;
    height: 64px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    line-height: 64px;
  }
}
</style>
