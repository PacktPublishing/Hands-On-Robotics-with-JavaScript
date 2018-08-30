const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  var motor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1)
  // comment out the line above and uncomment the line below if you are using the L293D hat
  // var motor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1) 

  board.repl.inject({
    motor
  })
})