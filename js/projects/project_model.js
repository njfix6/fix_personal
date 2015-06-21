angular.module('Project_model',[])
  .factory('Project_model', function(){
		var Project = function (name, viewFileName) {
			this.name = name;
			this.viewFileName = viewFileName;	
					
		};
		return Project;
	});