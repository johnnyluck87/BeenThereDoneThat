// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require("morgan");
var friends = [];
var locString = [];



var app = express();


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Serve static content for the app from the "public" directory in the application directory.
app.get('/', function(req, res){
  res.sendFile(process.cwd()+'/main.html', function(){
   

  });
  // res.json(arrpos)
});

app.get('/yelp', function(req, res){

	console.log(friends[1][0].formattedAddress, "hey")

function yelpz(){
var Yelp = require('yelp');

var search = 'chinese';
var place = friends[1][0].formattedAddress;





var yelp = new Yelp({
  consumer_key: '5TBzLTyOV4OVhUrzGgaVBQ',
  consumer_secret: 'ag4xe5h3-ZGe3huiPQr1j5kX3LE',
  token: 'W2ILo6yUGiwfB4gsmEH8rvBqQjcwNGQh',
  token_secret: 'yNyEskFCaeehJwzCYJGrNCENtLU',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: search, location: place, limit: 20 })
.then(function (data) {
  // if (data.length=2) {
     // console.log(data.businesses[0].id);
  // };
 for (var i = 0; i < data.businesses.length; i++) {
 	if (data.businesses[i].rating > 3) {
 		console.log(data.businesses[i])
 		res.json(data.businesses[i])
 	};
 	
 };


})
.catch(function (err) {
  console.error(err);
});
}
yelpz();

});










app.get('/api', function(req, res){

	function locater(){
	var geocoderProvider = 'google';
	var httpAdapter = 'https';
// optional 
	var extra = {
    apiKey: 'AIzaSyA32ZoqMzaSzODIPGhEVeZsU1rahWLTOyY', // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
};
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

	geocoder.reverse({lat: friends[0].lat, lon: friends[0].lng})
    .then(function(res1) {
    	console.log(res1)
    	res.json(res1)
    	friends.push(res1)  
    })
    .catch(function(err) {
        console.log(err);
    });
 
   }

locater();

  });

app.get('/api/loc', function(req, res){
	// var everyone = req.params.friends;
	// console.log(everyone);
	res.json(friends);
});

app.post('/api/loc', function(req, res){
	var newPerson = req.body;
	console.log('ayyy lmao')
	console.log(newPerson);
	friends.push(newPerson);
	});

module.exports = friends

var port = process.env.PORT || 3000;
app.listen(port);
