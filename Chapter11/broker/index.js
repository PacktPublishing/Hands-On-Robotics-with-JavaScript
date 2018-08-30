const mosca = require('mosca')

const mqttBroker = new mosca.Server({
  port: 1883,
  backend: {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'MQTT-broker-NodeBots',
    mongo: {}
  }
})

server.on('ready', () => {
  console.log('MQTT broker ready!')
})

server.on('clientConnected', (client) => {
  console.log('Client connected to MQTT broker: ', client.id)
})

server.on('published', (packet, client) => {
  client = client || {id: 'N/A'} // Catches a weird edge case with mosca
  console.log(`Client: ${client.id}\nTopic: ${packet.topic}\nMessage: ${packet.payload.toString()}\n`)
})