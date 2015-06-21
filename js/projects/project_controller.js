angular.module('project_controller', [])
	.controller('project_controller', function($scope, Project_model) {
		var winnie = new Project_model('Winnie The Pooh Wallpaper', 'winnie-the-pooh-wallpaper'),
			topAlbums = new Project_model('My Top Albums', 'my-top-albums');
		$scope.projects = [winnie, topAlbums];
		
		
	});