var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		response.render("index", hbsObject);
	});
});

// post route
router.post("/api/burgers", function(request, response) {
	burger.insertOne([
		])
});

module.exports = router;