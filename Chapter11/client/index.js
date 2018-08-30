const Raspi = require('raspi-io')
const five = require('johnny-five')
const request = require('request')

const board = new five.Board({
  io: new Raspi()
})

const mqttClient = mqtt.connect(
  process.env.MQTT_BROKER_URL,
  {
    port: process.env.MQTT_BROKER_PORT
  }
)

mqttClient.on('connect', () => {
  mqttClient.subscribe('light')
})

board.on('ready', () => {
    let light = new five.Light({
       controller: 'TSL2591',
       threshold: 10
    })

    light.on('change', () => {
      mqttClient.publish('light', this.value)
    })
})