const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/64b4e75967b2564c72988c8394747fc2/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
     });
};

module.exports.getWeather = getWeather;