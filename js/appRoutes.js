// client/js/appRoute.js


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {






	$routeProvider
		.when('/', { //home page
			templateUrl: 'views/winnie_the_pooh_wallpaper.html'
			// controller: 'playlists_controller'
		});
	
		
		

		

	

	$locationProvider.html5Mode(true);

}]);