/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var btdt = {
	all: function(cb) {
		orm.all('btdts', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('btdts', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('btdts', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('btdts', condition, function(res){
			cb(res);
		});
	}
};

module.exports = btdt;