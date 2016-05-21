var Yelp = require('yelp');

var search = 'chinese';
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
  console.log(data.businesses.length)
 for (var i = 0; i < data.businesses.length; i++) {
 	// if (data.businesses[i].rating > 3) {
 		// console.log(data.businesses[i])
 	 console.log([i])
 		// res.json('d')
 	 // yelpArr = [];
 	 // yelpArr.push(data.businesses[i])
  	// 	// res.json(data.businesses[i])
  	// 	console.log (yelpArr);
  	// 	console.log(yelpArr.length)
  		// res.json(yelpArr);
 	};
 	
 // };


})
.catch(function (err) {
  console.error(err);
});