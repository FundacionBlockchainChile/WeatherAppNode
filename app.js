const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

// CHALK OPTIONS

const success = chalk.green
const wrong = chalk.red
const info = chalk.yellow

const address = process.argv[2]

if (address) {
  geocode(address, (error, data)=> {
  if (error) {
    return console.log(error)
  } 
  forecast(data.latitude, data.longitude, (error, forecast) => {
    if (error) {
      return console.log(error)
    }
      console.log(success('************  GEOCODE  ***********'))
      console.log(data)
      console.log(success('************ FORESCAST ***********'))
      console.log(forecast)
    })
})
} else {
  console.log ('Please put a location on second argument...(process.argv[2])')
}

//








// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
