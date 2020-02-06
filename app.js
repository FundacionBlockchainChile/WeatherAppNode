const request = require('request')

// DarkSky API
// https://darksky.net/dev/docs#forecast-request  DOCUMENTATION
// https://api.darksky.net/forecast/93e4fc3280ccc797905950f04e583732/37.8267,-122.4233  REquest Type 

// Geocoding
// Address



let placeToSearch = 'Copenhage';

const geocodoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ placeToSearch + '.json?access_token=pk.eyJ1Ijoic3JwaWVzbGlnZXJvcyIsImEiOiJjazY4MnRtazUwMHBuM25vMmZjYjd2czc3In0.c8ReF_cI1h6E-X3WcQn2rw&limit=1'

const coord = request({url: geocodoURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Las coordenadas de ' + placeToSearch + ' son: ' )
    console.log('Coordenada latitud:  ' + latitude)
    console.log('Coordenada longitud:  ' + longitude)
    // const coordenadas = [latitude, longitude]
   
    const url = 'https://api.darksky.net/forecast/93e4fc3280ccc797905950f04e583732/'+ latitude + ',' + longitude + '?lang=es&units=si';

    request({ url: url, json: true }, (error, response) => {
        console.log(response.body.currently)
        let temperature = response.body.currently.temperature
        let precipProbability = response.body.currently.precipProbability
        let humidity = response.body.currently.humidity
        let summary = response.body.daily.data[0].summary

        console.log('Its currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.')
        console.log('Hay un ' + humidity + '% de humedad en el ambiente Sergio')
        console.log(summary)
    })
    

})



