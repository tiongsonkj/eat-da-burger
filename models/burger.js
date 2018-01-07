// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(results) {
			cb(results);
		});
	},
  	// The variables cols and vals are arrays.
  	insertOne: function(columns, values, callback) {
    	orm.insertOne("burgers", columns, values, function(results) {
      		callback(results);
    	});
  	},
  	updateOne: function(objColVals, condition, cb) {
    	orm.updateOne("burgers", objColVals, condition, function(results) {
      		cb(results);
    	});
  	}
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;