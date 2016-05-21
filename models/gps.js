/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var gps = {
	all: function(cb) {
		orm.all('gpss', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('gpss', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('gpss', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('gpss', condition, function(res){
			cb(res);
		});
	}
};

module.exports = gps;