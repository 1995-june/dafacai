<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
      v-for="(item, index) in imgs"
      :key="index"
      ><img :src="item" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'banner',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
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
  @include wh(100%, auto);
  img {
  @include wh(100%, 500px);
  }
}
</style>
