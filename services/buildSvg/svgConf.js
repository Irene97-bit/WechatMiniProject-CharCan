/**
 * 生成 SVG 动画的基本配置
 */
const svgConf = {
  background: true,
  widthAnimaiton: true,
  beforeDrawColor: 'lightgray',
  penColor: 'rgb(67,106,121)',
  //penColor: 'rgb(55,177,201)',//
  strokeWidth: 120,
  speed: 1,
}

const SpeedKey = 'SpeedKey'
const PenColorKey = 'PenColorKey'

function init() {
  wx.getStorage({
    key: SpeedKey,
    success(res) {
      svgConf.speed = res.data
    }
  })
  wx.getStorage({
    key: PenColorKey,
    success(res) {
      svgConf.penColor = res.data;
    }
  })
}

function getSpeed() {
  return svgConf.speed
}

function setSpeed(speed) {
  wx.setStorage({
    key: SpeedKey,
    data: speed
  })
  svgConf.speed = speed
}

function getPenColor() {
  return svgConf.penColor
}

function setPenColor(penColor) {
  wx.setStorage({
    key: PenColorKey,
    data: penColor
  })
  svgConf.penColor = penColor
}

export {
  init,
  svgConf,
  getSpeed,
  setSpeed,
  getPenColor,
  setPenColor
}