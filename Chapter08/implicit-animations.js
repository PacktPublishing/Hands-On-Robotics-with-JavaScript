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

  function normalFullSwing() {
    servo.to(0)
    servo.to(180)
  }

  function timedFullSwing(time) {
    servo.to(0)
    servo.to(180, time)
  }

  function timedFullSwingWithSteps(time, steps) {
    servo.to(0)
    servo.to(180, time, steps)
  }

  board.repl.inject({
    servo,
    normalFullSwing,
    timedFullSwing,
    timedFullSwingWithSteps
  })
})