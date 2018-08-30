const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  var leftMotor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1)
  var rightMotor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M2)
  // comment out the 2 lines above and uncomment the 2 lines below if you are using the L293D hat
  // var leftMotor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1) 
  // var rightMotor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M2) 

  let motors = new five.Motors([leftMotor, rightMotor])

  function goForward(speed) {
    motors.forward(speed)
  }

  function stop() {
    motors.stop()
  }

  function goBackward(speed) {
    motors.reverse(speed)
  }

  function turnRight(speed) {
    leftMotor.forward(speed)
    rightMotor.stop()
  }
  
  function turnLeft(speed) {
    rightMotor.forward(speed)
    leftMotor.stop()
  }

  function spinRight(speed) {
    leftMotor.forward(speed)
    rightMotor.reverse(speed)
  }
  
  function spinLeft(speed) {
    rightMotor.forward(speed)
    leftMotor.reverse(speed)
  }
  
  board.repl.inject({
    leftMotor,
    rightMotor,
    motors,
    goForward,
    goBackward,
    stop,
    turnRight,
    turnLeft,
    spinRight,
    spinLeft
  })
})