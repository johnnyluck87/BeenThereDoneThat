// I need help with the api before I go further

/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

var btdt = require('../models/models.js')[0];
var User = require('../models/models.js')[1];

router.get('/', function(req,res) {
	res.redirect('/btdts')
});


//check the login for someone
router.get('/btdts', function(req,res) {
	btdt.findAll({}).then(function(result){
		var hbsObject = {
			btdts : result,
			logged_in : req.session.logged_in,
			username : req.session.username
		}
		res.render('btdts/steponehandlebars', hbsObject);
	})
});

///	NEED TO DOUBLE CHECK WHAT API WE WILL BE USING FOR THIS. THIS IS JUST A SAMPLE, SO WE CAN HAVE 
//IN MEANTIME. This is for updating the page based onthe users search in yelp
router.put('/btdts/update/:user_id', function(req,res) {
	btdt.update({
		yelp_id: req.body
  },
  {
		where: { user_id : req.params.id }
	}
	).then(function (result) {
		res.redirect('/btdts');
  }, function(rejectedPromiseError){
		console.log(rejectedPromiseError);
  });
});



// ///This is for creating a cat. We don't need this
// router.post('/btdts/create', function(req,res) {
// 	btdt.create({
// 		name: req.body.name,
// 		sleepy: req.body.sleepy,
// 		user_id: req.session.user_id
// 	}).then(function(newlyCreatedbtdt){
// 		res.redirect('/btdts')
// 	});
// });

// ///This was for updating the cat if this cat was sleepy or not. We don't need this 
// router.put('/btdts/update/:id', function(req,res) {
// 	btdt.update({
// 		sleepy: req.body.sleepy
//   },
//   {
// 		where: { id : req.params.id }
// 	}
// 	).then(function (result) {
// 		res.redirect('/btdts');
//   }, function(rejectedPromiseError){
// 		console.log(rejectedPromiseError);
//   });
// });

// //This was for deleting the cat. We don't need this.
// router.delete('/btdts/delete/:id', function(req,res) {
// 	if (req.session.logged_in){
// 		//check if btdt belongs to user then let user delete btdt
// 		btdt.findAll({
// 	    where: {$and: [{user_id: req.session.user_id}, {id: req.params.id}]}
// 	  }).then(function(btdts) {
// 			if (btdts.length > 0){
// 				btdt.destroy({
// 					where: { id : req.params.id }
// 				}).then(function (result) {
// 					res.redirect('/btdts');
// 				}, function(rejectedPromiseError){
// 					console.log(rejectedPromiseError);
// 				});
// 			}else{
// 				res.send("sorry you can't delete that btdt.");
// 			}
// 		});
// 	}else {
// 		res.send("sorry you can't do that. You need to be logged in");
// 	}

// });

module.exports = router;
