$(function() {
		$("#addburger").on("submit", function(event) {

			event.preventDefault();

			var newBurger = {
				burger_name: $("#newburger").val()
			};

			console.log(newBurger);
			console.log(newBurger.burger_name);
			// send POST request
			$.ajax("/api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {

				console.log("created new burger");

				location.reload();
			});
		});

		$(".eatburger").on("click", function(event) {

			var id = $(this).data("id");
			var newDevoured = $(this).data("devoured");
			newDevoured = true;

			var newDevouredState = {
				devoured: newDevoured
			};

			// send PUT request
			$.ajax("/api/burgers/" + id, {
				type: "PUT",
				data: newDevouredState
			}).then(function() {
				console.log("changed devoured status!");

				location.reload();
			});
		});
	});