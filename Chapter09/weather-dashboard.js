const Raspi = require('raspi-io')
const five = require('johnny-five')
const request = require('request')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  let LCD = new Five.LCD({
    controller: 'PCF8574'
  }) 
  
  LCD.noBlink()
  LCD.on()

  function getWeather() {
    request({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      qs: {
        q: [your city],
        appid: [your API key],
        units: ['metric' or 'imperial'],
        json: true
      }
    }, (err, resp, body) => {
      LCD.clear()
      LCD.home().print('Temp: ' + body.main.temp + ' Deg [F or C]')
      LCD.setCursor(0, 1).print(body.weather.description)
    })
  }

  setInterval(getWeather, 60000)
  getWeather()

})