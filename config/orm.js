// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
	// "cb" stands for call-back right?
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// insert into the database
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

	    console.log(queryString);

	    connection.query(queryString, vals, function(err, result) {
	    	if (err) {
	    		throw err;
	    	}

	    	cb(result);
	    });
	},
	// update the database
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	}
};

// Export the ORM object in module.exports
module.exports = orm;