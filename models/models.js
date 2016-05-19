var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

// Creates a "btdt" model that matches up with DB
// var btdt = sequelizeConnection.define("btdts", {
// 	id: {
// 		type: Sequelize.INTEGER,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
// 	user_id: {
// 		type: Sequelize.INTEGER
// 	},
// 	name: {
// 		type: Sequelize.STRING
// 	},
// 	sleepy: {
// 		type: Sequelize.BOOLEAN
// 	}
// });

var User = sequelizeConnection.define("users", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
	},
  email: {
    type: Sequelize.STRING,
  },
	password_hash: {
    type: Sequelize.STRING,
  }
},
{
	underscored: true
});


var btdt = sequelizeConnection.define("users", {


username: {
		type: Sequelize.STRING,
// // looking up the best way to do this
// btdt.belongsTo(User, {foreignKey: 'user_id'});
// User.hasMany(btdt, {foreignKey: 'id'});

// // Syncs with DB
// btdt.sync();
// User.sync();

// Makes the btdt Model available for other files (will also create a table)
module.exports = [User];
