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
  
  let lightSensor = new five.Light({
    controller: 'TLS2561'
  })

  lightSensor.on('change', function(){
    servo.to(this.scaleTo([0, 180]))
  })
})