<template>
    <div class="login">
      <al-top-title title="白城万柜"></al-top-title>
      <al-dialog-box :title="dialog" v-show="msgShow">
          <a class="ok" href="javascript:;" @click="controlShow">知道了</a>
      </al-dialog-box>
      <header class="login-header">
        <h2>登陆</h2>
        <p>需联系经理人为您创建账号，方可登录</p>
      </header>
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号" v-model="loginParams.phone">
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入验证码" v-model="loginParams.code">
          <button
          v-if="time == 0"
          class="send-code"
          @click="sendMsgCode"
          :disabled="isSend"
          >获取验证码</button>

          <button
          v-else
          class="send-code"
          :disabled="true"
          >{{time}}秒后重新获取</button>
        </div>
        <div class="login-btn-wrap">
          <button class="login-btn" @click="login">手机号登陆</button>
        </div>
        <p>登录代表已阅读并同意<a href="javascript:;">《用户协议》</a>及<a href="javascript:;">《隐私条款》</a></p>
      </div>
    </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
      time: 0,
      msgShow: false,
      dialog: '',
      getCode: '',
      loginParams: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    isSend () {
      return this.loginParams.phone.length !== 11
    }
  },
  methods: {
    controlShow () {
      this.msgShow = !this.msgShow
    },
    sendMsgCode () {
      this.time = 10
      const interVal = setInterval(() => {
        this.time -= 1
        if (this.time <= 0) {
          clearInterval(interVal)
        }
      }, 1000)

      this.$api.user.send_msg_code({
        phone: this.loginParams.phone
      }).then((res) => {
        console.log(res.message)
        this.loginParams.code = res.message.substr(39, 6)
      })
    },
    login () {
      this.$store.dispatch('user/login', this.loginParams).then(() => {
        const path = this.$route.query.callback || '/home'
        this.$router.replace(path)
      }).catch((e) => {
        this.dialog = e.response.data.msg
        this.msgShow = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 96px 0;
  @include wh(100vw, 100vh);
  background-color: #fff;
  .login-header {
    margin: 80px;
    h2 {
      font-size: 60px;
      color: #333;
      font-weight: bold;
    }
    p {
      font-size: 32px;
      color: #333;
      margin-top: 24px;
    }
  }
  .form {
    margin: 80px;
    .form-item {
      @include flex(row);
      @include border-1px(bottom, #e6e6e6);
      input {
        flex: 1;
        line-height: 96px;
        border: 0;
        outline: none;
      }
      .send-code {
        border: 0;
        font-size: 32px;
        line-height: 80px;
        color: #DD2222;
        background-color: transparent;
        &:disabled {
        opacity: 0.5;
        }
      }
    }
    .login-btn-wrap {
      @include flex(row, center, center);
      .login-btn {
        font-size: 36px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 36px;
        width: 590px;
        height: 96px;
        background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
        border-radius: 48px;
        border: 0;
        margin: 72px 0 42px;
      }
    }
    p {
      text-align: center;
      font-size: 24px;
      color: #9E9E9E;
      line-height: 24px;
      a {
        color: #DD2222;
      }
    }
  }
}
</style>
