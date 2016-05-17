var Yelp = require('yelp');

var search = "";
var place = "";




var yelp = new Yelp({
  consumer_key: '5TBzLTyOV4OVhUrzGgaVBQ',
  consumer_secret: 'ag4xe5h3-ZGe3huiPQr1j5kX3LE',
  token: 'W2ILo6yUGiwfB4gsmEH8rvBqQjcwNGQh',
  token_secret: 'yNyEskFCaeehJwzCYJGrNCENtLU',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: search, location: place, limit: 5 })
.then(function (data) {
  // if (data.length=2) {
     console.log(data.businesses[1].name);
  // };
 
})
.catch(function (err) {
  console.error(err);
});
