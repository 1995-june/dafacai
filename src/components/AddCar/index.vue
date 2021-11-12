<template>
    <div class="add-car">
      <button class="add-car-btn" @click.stop="visible = true">
        <img src="@/static/images/add.png" alt="">
      </button>
      <al-mack-box :visible.sync="visible">
        <al-dialog-box class="dialog-box" v-show="msgShow">
            <a class="ok" href="javascript:;">{{text}}<img src="@/static/images/yixuan.png" alt=""></a>
        </al-dialog-box>
        <div class="content">
            <div class="car-product" >
              <dl>
                <dt>
                  <img :src="info.img" alt="">
                </dt>
                <dd>
                  <h2>{{info.name}}</h2>
                  <div class="price-wrap">
                    <p><b>￥</b>{{info.price | price}}<span>/袋</span></p>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="tool">
              <div class="form-item">
                <label>购买数量:</label>
                <al-number class="al-number" :value="num"></al-number>
              </div>
              <button class="add-btn" @click="addCar">加入购物车</button>
            </div>
          </div>
      </al-mack-box>
    </div>
</template>
<script>
export default {
  name: 'add-car',
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      visible: false,
      msgShow: false,
      text: '',
      num: 1
    }
  },
  filters: {
    price (value) {
      return (value / 100).toFixed(2)
    }
  },
  methods: {
    addCar () {
      this.$store.dispatch('car/addCar', {
        product_id: this.info.id,
        count: this.num
      }).then(() => {
        this.text = '加入购物车成功'
        this.msgShow = true

        setTimeout(() => {
          this.msgShow = false
        }, 1500)

        setTimeout(() => {
          this.visible = false
        }, 2000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-car {
  .add-car-btn {
    border-radius: 100%;
    border: 0;
    margin: 0;
    background-color: transparent;
    padding: 0;;
    @include wh(48px, 48px);
    img {
      @include wh(48px, 48px);
    }
  }
  .content {
    padding: 0 32px;
    box-sizing: border-box;
    .car-product {
      dl {
        @include flex(row);
        @include border-1px(bottom, #eee);
        padding: 32px 0;
        box-sizing: border-box;
        margin: 0 32px;
        dt {
          @include wh(176px, 176px);
          margin-right: 16px;
          flex-shrink: 0;
          img {
          @include wh(100%, 100%);
          }
        }
        dd {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 16px;
          h2 {
            font-size: 28px;
            color: #323232;
            font-weight: bold;
            @include ellipsis(2)
          }
          .price-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              font-size: 36px;
              font-weight: bold;
              color: #dd2222;
              b {
                font-size: 24px;
              }
              span {
                font-size: 24px;
                color: #B2B2B2;
              }
            }
          }
        }
      }
    }
    .tool {
      .form-item {
      @include flex(row, center, space-between);
      margin: 36px 0;
        label {
          font-size: 28px;
          color: #323232;
          font-weight: bold;
        }
      }
      .add-btn {
        font-size: 36px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 36px;
        width: 100%;
        height: 80px;
        background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
        border-radius: 48px;
        border: 0;
        margin: 24px 0;
      }
    }
  }
   .dialog-box {
    height: 100%;
    top: -48%;
    background-color: transparent;
    a {
      @include flex(row, center, center);
      text-decoration: none;
      font-size: 46px;
      color: #dd2222;
      padding: 50px;
      img {
        @include wh(48px, 48px);
        margin-left: 20px;
      }
    }
  }
}
</style>
