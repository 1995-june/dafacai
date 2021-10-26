<template>
    <div class="my">
      <al-top-title title="我的"></al-top-title>
      <user-info :info="info"></user-info>
      <service :nav="nav" :service="service"></service>
    </div>
</template>
<script>
import UserInfo from './components/UserInfo.vue'
import Service from './components/Service.vue'
export default {
  name: 'my',
  components: {
    UserInfo,
    Service
  },
  data () {
    return {
      info: {},
      nav: [
        {
          path: '/',
          icon: require('@/static/images/fukuan.png'),
          selectIcon: '',
          text: '待付款'
        },
        {
          path: '/',
          icon: require('@/static/images/daifahuo.png'),
          selectIcon: '',
          text: '代发货'
        },
        {
          path: '/',
          icon: require('@/static/images/souhuo.png'),
          selectIcon: '',
          text: '待收款'
        },
        {
          path: '/myOrder',
          icon: require('@/static/images/dingdan.png'),
          selectIcon: '',
          text: '我的订单'
        }
      ],
      service: [
        {
          icon: require('@/static/images/dizhi.png'),
          text: '收货地址'
        },
        {
          icon: require('@/static/images/jingli.png'),
          text: '联系大区经理'
        },
        {
          icon: require('@/static/images/zhanghu.png'),
          text: '账号与安全'
        }
      ]
    }
  },
  created () {
    this.fetchUserInfo()
  },
  methods: {
    fetchUserInfo () {
      this.$api.user.info().then((res) => {
        this.info = res.info
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
