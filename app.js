const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const chalk = require('chalk')

// CHALK OPTIONS

const success = chalk.green
const wrong = chalk.red
const info = chalk.yellow



//

forecast(-75.7088, 44.1545, (error, data) => {
    console.log(success('************ FORESCAST *************'))
    console.log('Error:', error)
    console.log('Data:', data)
  })



geocode('Boston', (error, data)=> {
    console.log(success('************ GEOCODE *************'))
    console.log('Error:', error)
    console.log('Data:', data)
})



// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
