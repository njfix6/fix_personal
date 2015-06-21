// client/js/appRoute.js


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {






	$routeProvider
		.when('/', { //home page
			templateUrl: 'views/project.html',
			controller: 'project_controller'
		})
		.when('/winnie-the-pooh-wallpaper/', {
			templateUrl: 'views/winnie_the_pooh_wallpaper.html'
			// controller: 'playlists_controller'
		})
		.when('/my-top-albums/', {
			templateUrl: 'views/my_top_albums.html'
			// controller: 'playlists_controller'
		});
	
		
		

		

	

	$locationProvider.html5Mode(true);

}]);