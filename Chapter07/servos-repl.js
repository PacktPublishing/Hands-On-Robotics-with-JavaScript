const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {

  let servoOne = new five.Servo({
    controller: "PCA9685",
    pin: 0
  })

  let servoTwo = new five.Servo({
    controller: "PCA9685",
    pin: 1
  })

  var servos = new five.Servos([servoOne, servoTwo])

  board.repl.inject({
    servoOne,
    servoTwo,
    servos
  })
})