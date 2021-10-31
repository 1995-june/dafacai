<template>
    <div class="check-box-wrap">
      <label>
        <input type="checkbox" :checked="val == 1" @change="change" class="select">
      </label>
    </div>
</template>
<script>
export default {
  name: 'check-box',
  props: {
    value: {
      default: ''
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  methods: {
    change () {
      this.$emit('change', this.val)
    }
  },
  watch: {
    value (newValue) {
      this.val = newValue
    },
    val (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box-wrap {
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
}
</style>
