var Yelp = require('yelp');

var search = 'hats';
var place = 'jersey city, nj';





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
 	if (data.businesses[i].rating > 4) {
 		console.log(data.businesses[0])
 	};
 	
 };






})
.catch(function (err) {
  console.error(err);
});
