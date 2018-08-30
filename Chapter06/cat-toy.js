const Raspi = require('raspi-io')
const five = require('johnny-five')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  var motor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1)
  // comment out the line above and uncomment the line below if you are using the L293D hat
  // var motor = new five.Motor(five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2.M1) 

  startMovement()

  function startMovement(){
    let direction = Math.round(Math.random())
    let speed = Math.round(Math.random() * 75)
    let time = Math.round(Math.random() * 10)

    if(direction == 0){
      motor.forward(speed)
    } else {
      motor.reverse(speed)
    }

    setTimeout(stopMovement, time*1000)
  }

  function stopMovement(){
    let time = Math.round(Math.random() * 10)

    motor.stop()

    setTimeout(startMovement, time * 1000)
  }
})