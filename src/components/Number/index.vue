<template>
  <div class="number">
    <a href="javascript:;" calss="decrease" @click="decrease">-</a>
    <input type="number" v-model="val">
    <a href="javascript:;" calss="increment" @click="increment">+</a>
  </div>
</template>

<script>
export default {
  name: 'number',
  props: {
    value: {}
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    val (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.val = newValue
    }
  },
  methods: {
    increment () {
      this.val += 1
    },
    decrease () {
      this.val = this.val-- <= 1 ? 1 : this.val--
    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  display: flex;
  align-items: center;
  input {
    @include wh(128px, 64px);
    font-size: .35rem;
    margin: 5px 10px;
    text-align: center;
    outline: none;
    border: 0;
    background: #F2F2F2;
  }
  a {
    @include wh(64px, 64px);
    border: 0;
    background-color: rgb(253, 252, 252);
    font-size: 60px;
    font-weight: bold;
    background: #F2F2F2;
    color: #323232;
    text-align: center;
    line-height: 64px;
    border-radius: 0px 12px 12px 0px;
    text-decoration: none;
  }
}
</style>
