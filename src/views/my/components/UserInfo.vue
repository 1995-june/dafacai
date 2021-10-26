<template>
    <div class="user-info">
      <div class="ifon">
        <dl>
          <dt>
            <img :src="info.photo" alt="">
          </dt>
          <dd>
            <div class="name">{{info.nickName}}</div>
            <p>
              <img src="@/static/images/phone.png" alt="">
              <span>{{info.phone}}</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
</template>
<script>
export default {
  name: 'user-info',
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  overflow: hidden;
  height: 344px;
  background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
  .ifon {
    margin: 64px 32px;
    dl {
      @include flex(flex, center);
      dt {
        @include wh (144px, 144px);
        img {
        @include wh (100%, 100%);
        border-radius: 100%;
        border: 5px solid #fff;
        box-sizing: border-box;
        }
      }
      dd {
        color: #fff;
        margin-left: 48px;
        .name {
          font-size: 36px;
          margin-bottom: 20px;
        }
        p {
          @include flex(flex, center);
          img {
            @include wh(28px, 28px)
          }
          span {
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
