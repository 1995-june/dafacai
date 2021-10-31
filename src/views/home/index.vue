<template>
    <div class="home">
      <al-top-title title="首页"></al-top-title>
      <al-banner :imgs="imgs"></al-banner>
      <navigator :navigator="navigator"></navigator>
      <al-card title="新品推荐"></al-card>
      <al-card title="人气新品"></al-card>
      <div class="footer-log">
        <img src="@/static/images/footerTitle.png" alt="">
      </div>
      {{count}}
      {{age}}
      {{sex}}
      <button @click="setCount">改变</button>
      <!-- {{doing}} -->
    </div>
</template>
<script>
import Navigator from './components/Navigator.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    Navigator
  },
  data () {
    return {
      imgs: [
        'https://img1.baidu.com/it/u=1112463802,1166462221&fm=26&fmt=auto',
        'https://img0.baidu.com/it/u=1358589927,3318768848&fm=26&fmt=auto',
        'https://img0.baidu.com/it/u=79301952,564004542&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=2605341602,4060058638&fm=26&fmt=auto',
        'https://img0.baidu.com/it/u=492915919,2146053096&fm=26&fmt=auto'
      ],
      navigator: [
        {
          path: '/',
          img: require('@/static/images/caipu.png'),
          text: '积分商城',
          subText: '超值美食等你兑'
        },
        {
          path: '/',
          img: require('@/static/images/lipin.png'),
          text: '礼品卡',
          subText: '优质商品兑换'
        },
        {
          path: '/',
          img: require('@/static/images/kouling.png'),
          text: '口令',
          subText: '神秘好礼等你领'
        },
        {
          path: '/',
          img: require('@/static/images/caipu.png'),
          text: '菜谱',
          subText: '教你5分钟做大餐'
        }
      ]
    }
  },
  computed: {
    ...mapState(['count', 'age', 'sex']),
    ...mapGetters(['doing'])
  },
  created () {
    // setTimeout(() => {
    //   this.$store.commit('SET_COUNT', 400)
    // }, 3000)

    setTimeout(() => {
      this.$store.dispatch('set_count', 400)
    }, 3000)
  },
  methods: {
    setCount () {
      this.$store.commit('SET_COUNT', +new Date())
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
 padding: 96px 0 140px;
  min-height: 100vh;
  .footer-log {
    @include flex(flex, center, center);
    img {
      @include wh(308px, 80px)
    }
  }
}
</style>
