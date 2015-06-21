angular.module('Food_places_model', [])
	.controller('Food_places_model', function($scope) {
		var FoodPlace = function(name) {
			this.name = name;
			this.location = "";
		};
		return FoodPlace;	
	});