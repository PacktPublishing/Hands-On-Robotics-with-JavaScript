const request = require('request')

function getWeather(){
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: 'Austin',
      appid: 'e73e3b8e9b36bbf411b546dc925e9562',
      units: 'imperial',
      json: true
    }
  }, (err, resp, body) => {
    console.log(body)
  })
}

getWeather()

setInterval(getWeather, 60000)