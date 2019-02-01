const getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'Gabe'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(13, (userObject) => {
    console.log(userObject);
});

'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyD4fyse5qF4DUXkYyXIBs995gfE1CuD9JY'