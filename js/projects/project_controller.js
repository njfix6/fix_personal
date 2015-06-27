angular.module('project_controller', [])
	.controller('project_controller', function($scope, Project_model) {
		var winnie = new Project_model('Winnie The Pooh Wallpaper', 'winnie-the-pooh-wallpaper', 'projects'),
			topAlbums = new Project_model('My Top Albums', 'my-top-albums', 'favorites'),
			resume = new Project_model('Resume', 'resume', 'work');
		$scope.projects = [winnie, topAlbums, resume];
		
		
	});