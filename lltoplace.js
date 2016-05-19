
var geocoderProvider = 'google';
var httpAdapter = 'https';
// optional 
var extra = {
    apiKey: 'AIzaSyA32ZoqMzaSzODIPGhEVeZsU1rahWLTOyY', // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
};
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
var locString = [];
 
// // Using callback 
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
});
 
// Or using Promise 
// geocoder.geocode('29 champs elysée paris')
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });
// var locString = '';

// console.log(Pos)
// lat: 40.7192912, lng: -74.0332679

geocoder.reverse({lat: 40.7192912, lon: -74.0332679})
    .then(function(res1) {
    locString.push(res1);
       console.log(locString);
    })
    .catch(function(err) {
        console.log(err);
    });
    console.log(locString)