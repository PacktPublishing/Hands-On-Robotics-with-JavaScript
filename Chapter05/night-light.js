const five = require('johnny-five')
const RaspiIO = require('raspi-io')

let board = new five.Board({
  io: new RaspiIO()
})

board.on('ready', () => {
  let lightSensor = new five.Light({
    controller: 'TSL2561'
  }) 

  let light = new five.Led('P1-29')
    
  lightSensor.on('change', function() {
    if(this.value <= 25){
      light.on()
    } else {
      light.off()
    }
  }) 
})