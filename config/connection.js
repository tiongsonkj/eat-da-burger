// set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: '	qedtdge0lmkturoe',
		password: 'i9sg2xyr7ygdjuxo',
		database: 'yd8iruiuo8kjld26'
	});
};

// make connection
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;