const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5dae784341ade77ded792da81bb09fc3&query='+latitude+','+longitude+'&units=f'

    request({url, json: true},(error, {body}) => {

        if (error) {
            callback('Unable to connect.')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike

            })
            // console.log(response.body.current.weather_descriptions[0] + ' it is currently ' + response.body.current.temperature + ' and it feels like ' + response.body.current.feelslike)
        }
    })

}

module.exports = forecast