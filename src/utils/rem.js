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
