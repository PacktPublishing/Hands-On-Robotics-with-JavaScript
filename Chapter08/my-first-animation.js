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

  let servos = new five.Servos([servoOne, servoTwo])

  let myFirstAnimation = new five.Animation(servos)

  let keyframes = [
    [null, {degrees: 0}, {degrees: 180}, false, {degrees:90}], // servoOne
    [null, {degrees: 180}, null, null, {degrees: 90}] // servoTwo
  ]

  let cuePoints = [0, .25, .5, .75, 1]

  let duration = 8000

  myFirstAnimation.enqueue({
    duration: duration,
    keyFrames: keyframes,
    cuePoints: cuePoints
  })

})