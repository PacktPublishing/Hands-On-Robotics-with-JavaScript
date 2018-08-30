const Raspi = require('raspi-io')
const five = require('johnny-five')
const color = require('color')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {

  let rgbLED = new five.Led.RGB({
    controller: "PCA9685",
    pins: {
      red: 0,
      green: 1,
      blue: 2
    }
  });

  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple']
  let colorIndex = 0
  let currentColor

  setInterval(() => {
    console.log(currentColor)
    currentColor = color(colors[colorIndex])
    rgbLED.color([currentColor.red(), currentColor.green(), currentColor.blue()])
    colorIndex++
    if(colorIndex >= colors.length) {
      colorIndex = 0
    }
  }, 1000)

})