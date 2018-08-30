const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {

  let continuousServo = new five.Servo.Continuous({
    controller: "PCA9685",
    pin: 0
  })

  board.repl.inject({
    continuousServo
  })
  
})