const Raspi = require('raspi-io')
const five = require('johnny-five')
const request = require('request')
const cheerio = require('cheerio')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  let LCD = new Five.LCD({
    controller: 'PCF8574'
  }) 
  
  LCD.noBlink()
  LCD.on()

    function isJohnnyFiveDown() {
      request('https://downforeveryoneorjustme.com/johnny-five.io',
        (err, resp, body) => {
          let $ = cheerio.load(body)
          let statusText = $('#domain-main-content p')[0].text()
          LCD.clear()
          LCD.home()
          LCD.print('johnny-five.io')
          LCD.cursor(0, 1)
          if(statusText.contains("It's just you.")){
            LCD.print('is up!')
          } else {
            LCD.print('is down (possibly)!')
          }
    })
  }
    
  setInterval(isJohnnyFiveDown, 300000)
  isJohnnyFiveDown()
})