angular.module('Project_model',[])
  .factory('Project_model', function(){
		var Project = function (name, viewFileName, projType) {
			this.name = name;
			this.viewFileName = viewFileName;
			this.type = projType;	
					
		};
		return Project;
	});