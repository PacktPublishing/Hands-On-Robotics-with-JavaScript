const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {

  let servo = new five.Servo({
    controller: "PCA9685",
    pin: 0
  })

  servo.sweep()
})