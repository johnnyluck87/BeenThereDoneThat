// I need help with the api before I go further

/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var btdt = require('../models/btdt.js');
var geocoder = require('node-geocoder');


//check the login for someone
router.get('/', function(req,res) {
	btdt.all(function(data){
		var hbsObject = {
			btdts : data,
			logged_in: req.session.logged_in
		}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

///This would be Step One
//So would I put the API for the distance for google maps?
router.post('/create', function(req,res) {
	btdt.create(['location', 'place', 'distance'], [req.body.location, req.body.place, req.body.distance], function(data){
		res.redirect('/btdts')
	});
});


//Step Two

//Update the ID
router.put('/update/:id', function(req,res) {
	// var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);
// THis is calling from the YELP API to update the ID. 
//So would we put the for loop here?
	btdt.update({'id'}, function(data){
		res.redirect('/btdts');
	});
});


//Update the snippet text
router.put('/update/:snippet_text', function(req,res) {
	// var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	// THis is calling from the YELP API to update the ID. 
//So would we put the for loop here?

	btdt.update({'snippet_text' : req.body.snippet_text}, condition, function(data){
		res.redirect('/btdts');
	});
});


//Update the ratings
router.put('/update/:rating_img_url', function(req,res) {
	// var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	// THis is calling from the YELP API to update the ID. 
//So would we put the for loop here?

	btdt.update({'snippet_rating_img_url' : req.body.snippet_rating_img_url}, condition, function(data){
		res.redirect('/btdts');
	});
});


//Update the image
router.put('/update/:image_url', function(req,res) {
	// var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	// THis is calling from the YELP API to update the ID. 
//So would we put the for loop here?

	btdt.update({'image_url' : req.body.image_url}, condition, function(data){
		res.redirect('/btdts');
	});
});


//Update the URL
router.put('/update/:url', function(req,res) {
	// var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	// THis is calling from the YELP API to update the ID. 
//So would we put the for loop here?

	btdt.update({'url' : req.body. url}, condition, function(data){
		res.redirect('/btdts');
	});
});

//Do we need update? I made this just in case. Because essentially 
// //the user can just reload the page correct?


// //Do we need delete? Since essentially the user would be logged 
// //into another page?
// router.delete('/delete/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	btdt.delete(condition, function(data){
// 		res.redirect('/btdts');
// 	});
// });

module.exports = router;

