/**
 *  rem 的适配解决
 *  src 文件下 建立 utils 文件
 **/

const baseSize = 100
const baseWidth = 414

const setFontSize = () => {
  const windowWidth = window.innerWidth
  document.querySelector('html').style.fontSize = windowWidth / baseWidth * baseSize / 2 + 'px'
}

setFontSize()

window.addEventListener('resize', () => {
  setFontSize()
})
