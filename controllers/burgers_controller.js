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

	burger.insertOne(
		"burger_name", [request.body.burger_name], function(result) {

			console.log(result);

			response.redirect("/");
	});
});

router.put("/api/burgers/:id", function(request, response) {
	var condition = "id = " + request.params.id;

	console.log("condition", condition);

	burger.updateOne(
		{devoured: request.body.devoured}, condition, function(result) {
			if (result.changedRows == 0) {
				return response.status(404).end();
			} else {
				response.status(200).end();
			}
	});
});

// export the router
module.exports = router;