<template>
    <div class="car">
      <al-top-title title="购物车"></al-top-title>
      <div class="tips-wrap">
          <dl>
            <dt>
              <img src="@/static/images/pic-empty.png" alt="">
            </dt>
            <dd>购物车还是空的</dd>
          </dl>
          <router-link
            to="/class"
            tag="button"
            type="button"
            class="other-btn"
            >去逛逛</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'car'
}
</script>

<style lang="scss" scoped>
.car {
  .tips-wrap {
    @include centerer;
    @include flex(column, center, center);
    dl {
    @include flex(column, center, center);
    margin-bottom: 72px;
      dt {
        @include wh(144px, 144px);
        img {
          @include wh(100%, 100%)
        }
      }
      dd {
        font-size: 32px;
        color: #8c8c8c;
        margin-top: 24px;
      }
    }
    .other-btn {
      background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
      border-radius: 44px;
      border: 0;
      color: #fff;
      height: 80px;
      padding: 0 112px;
      font-size: 32px;
      box-sizing: border-box;
    }
  }
}
</style>
