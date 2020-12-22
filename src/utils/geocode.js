const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZWR1YXJkb3JuIiwiYSI6ImNraWRzbmtmdDE1MWEyeXBtaWhoMWRnY2YifQ.0oPgAGqU5AQUFjqmUOmQ0Q'

    request({url, json:true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect.')
        } else if (body.features.length === 0){
            callback('Invalid location.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
            // console.log('longitude: '+response.body.features[0].center[0] + ' latitude: '+response.body.features[0].center[1] )
        }

    })
}

module.exports = geocode