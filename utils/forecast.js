const request = require('request')

// DarkSky API
// https://darksky.net/dev/docs#forecast-request  DOCUMENTATION
// https://api.darksky.net/forecast/93e4fc3280ccc797905950f04e583732/37.8267,-122.4233  REquest Type 

// Geocoding
// Address

// const url = 'https://api.darksky.net/forecast/93e4fc3280ccc797905950f04e583732/37.8267,-122.4233?lang=es&units=si';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {                                                                //No es posible obtener respuesta del servidor....
//         console.log('Unable to connet to DarkSky weather service!')
//     } else if (response.body.error) {                                           //DarkSky responde un codigo de error....
//         console.log(response.body.error)

//     } else {
//         // let temperature = response.body.currently.temperature
//         // let precipProbability = response.body.currently.precipProbability
//         // let humidity = response.body.currently.humidity
//         let summary = response.body.daily.data[0].summary

//         // console.log('Its currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.')
//         // console.log('Hay un ' + humidity + '% de humedad en el ambiente Sergio')
//         console.log(summary)
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/93e4fc3280ccc797905950f04e583732/' + latitude + ',' + longitude + '?lang=es&units=si';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connet to DarkSky weather service! Please check your connection...', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            let summary = response.body.daily.data[0].summary
            callback(undefined, summary)
        }
    })
}

module.exports = forecast