import $ from 'jquery'

$(function () {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      console.clear()
      report({
        id: 'NCC2-036',
        type: 'success',
        message: ' 调用前置摄像头拍照成功，识别为【小笨蛋】。'
      })
      console.log(
        'Photo captured: %c\n  ',
        'font-size:65px;background:url("https://files-cdn.cnblogs.com/files/yanggb/xiaobendan.gif") no-repeat 0 0;background-color:#fff;'
      )
      report({ id: 'WELCOME', type: 'info', message: ' 你好，小笨蛋。' })
      report({
        id: '⚡️ Powered by yanggb',
        type: 'warn',
        message: ' 你正在访问 六月 的项目。'
      })
      report({ id: 'W23-12', type: 'info', message: ' 你已经打开控制台。' })
      report({
        id: 'S013-782',
        type: 'danger',
        message: ' 你现在正处于监控中。'
      })
    }
  }
  function report (inf) {
    if (!inf) {
      return
    }
    inf.message = inf.message ? inf.message : ''
    var bg = format(
      'color:#fff;background:#{0};',
      inf.type === 'info' ? '4f90d9' : inf.type === 'warn' ? 'f0ad4e' : inf.type === 'success' ? '4fd953' : inf.type === 'danger' || inf.type === 'error' ? 'd9534f' : '000'
    )
    if (inf.type === 'warn' || inf.type === 'danger' || inf.type === 'error') {
      if (inf.error && inf.error.length) {
        console.error(
          '%c' + (inf.id ? ' ' + inf.id + ' ' : ''),
          bg,
          inf.message,
          ' Error: ' + inf.error
        )
      } else {
        console.warn('%c' + (inf.id ? ' ' + inf.id + ' ' : ''), bg, inf.message)
      }
    } else {
      console.log('%c' + (inf.id ? ' ' + inf.id + ' ' : ''), bg, inf.message)
    }
  }
  function format (s, t) {
    var e = s
    if (arguments.length < 1) {
      return ''
    }
    return e
  }
})
