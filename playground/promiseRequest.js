const request = require('request');

const geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD4fyse5qF4DUXkYyXIBs995gfE1CuD9JY`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
            }
        });
    });
};

geocodeAddress('10456')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2));
    })
    .catch((error) => {
        console.log(error);
    });