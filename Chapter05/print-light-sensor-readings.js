const five = require('johnny-five')
const RaspiIO = require('raspi-io')

let board = new five.Board({
  io: new RaspiIO()
})

board.on('ready', () => {
  let lightSensor = new five.Light({
    controller: 'TSL2561'
  }) 
    
  lightSensor.on('change', function() {
    console.log(this.value) 
  }) 
})