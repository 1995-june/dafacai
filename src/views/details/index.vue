<template>
  <div class="details">
      <al-top-title title="商品详情" previous="previous" :paths="paths"></al-top-title>
      <dl>
        <dt>
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img src="https://img2.baidu.com/it/u=3022341728,3318148180&fm=26&fmt=auto" alt=""></swiper-slide>
            <swiper-slide><img src="https://img1.baidu.com/it/u=3643809187,44013668&fm=26&fmt=auto" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </dt>
        <dd>
          <h2></h2>
          <span><b></b></span>
          <p></p>
        </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      paths: '/class',
      swiperOptions: {
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
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.details {
  dl {
    dt {
    .swiper-slide {
      @include wh(750px, 750px);
    }
    .swiper-pagination {
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 11;
      font-size: 38px;
      color: #fff;
      padding: 0 30px;
      box-sizing: border-box;
      height: 64px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
      line-height: 64px;
    }
  }
    dd {}
  }
}
</style>
