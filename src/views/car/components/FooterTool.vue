<template>
    <div class="footer-tool">
       <div class="select-all">
          <div class="all">
            <label>
                <input type="checkbox" class="select" :checked="isCheckAll" @change="change">
            </label>
            <span>全选</span>
          </div>
          <div class="subtotal">
            <div class="subtotal-price">
              <span>小计: <b><i>￥</i>0</b></span>
              <p>运费<b>￥20元</b> 再买<b>￥88.50</b>免运费</p>
            </div>
            <router-link
              tag="button"
              to="/myOrder"
              type="button"
              class="settlement"
            >结算({{list.length}})</router-link>
          </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'footer-tool',
  computed: {
    ...mapState('car', ['list']),
    ...mapGetters('car', ['isCheckAll'])
  },
  methods: {
    change () {
      console.log(this.isCheckAll)
      this.$store.dispatch('car/update', {
        id: this.list.map(item => item.id),
        status: !this.isCheckAll ? '1' : '0'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-all {
    @include wh(100%, 100px);
    position: fixed;
    bottom: 92px;
    @include flex(row, center, space-between);
    border-top: 2px solid #eee;
    background-color: #fff;
    .all {
      @include flex(row, center);
      font-size: 28px;
      color: #323232;
      font-weight: bold;
      margin: 0 24px;
      label {
      display: flex;
      align-items: center;
    .select:checked {
    background: #dd2222;
  }
    .select {
        width:45px;
        height:45px;
        background-color:#ffffff;
        border:solid 1px #dddddd;
        -webkit-border-radius:50%;
        border-radius:50%;
        font-size:80px;
        margin:0;
        padding:0;
        position:relative;
        display:inline-block;
        vertical-align:top;
        cursor:default;
        transition:background-color ease 0.1s;
        -webkit-appearance:none;
        -webkit-user-select:none;
        user-select:none;
        -webkit-transition:background-color ease 0.1s;
    }
    .select:checked::after {
      content:'';
      top:9px;
      left:10px;
      position:absolute;
      background:transparent;
      border:#fff solid 4px;
      border-top:none;
      border-right:none;
      height:10px;
      width:20px;
      -moz-transform:rotate(-45deg);
      -ms-transform:rotate(-45deg);
      -webkit-transform:rotate(-45deg);
      transform:rotate(-45deg);
    }
  }
    span {
      margin-left: 24px;
    }
  }
    .subtotal {
    @include flex(row, center);
      .subtotal-price {
        color: #323232;
        font-size: 28px;
        font-weight: bold;
        span {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 8px;
          b {
            font-size: 36px;
            color: #dd2222;
            i {
            font-size: 24px;
          }
        }
      }
      p {
        font-size: 20px;
        color: #b2b2b2;
        b {
          color: #323232;
          font-weight: bold;
        }
      }
    }
    .settlement {
      width: 162px;
      height: 72px;
      background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
      border-radius: 36px;
      color: #fff;
      border: 0;
      margin: 0 24px;
    }
  }
}
</style>
