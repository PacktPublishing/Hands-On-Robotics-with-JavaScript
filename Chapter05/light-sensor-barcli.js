const five = require('johnny-five')
const RaspiIO = require('raspi-io')
const Barcli = require('barcli')

let board = new five.Board({
  io: new RaspiIO()
})

board.on('ready', () => {
  let lightGraph = new Barcli({
    label: 'Light Sensor',
    range: [0, 255]
  })

  let lightSensor = new five.Light({
    controller: 'TSL2561'
  }) 
    
  lightSensor.on('change', function() {
    lightGraph.update(this.value)
  }) 
})