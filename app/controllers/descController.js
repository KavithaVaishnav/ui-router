myApp.controller('descController',function($scope,$rootScope){
	 for (var i = 0; i < $rootScope.softwares.length; i++) {
	 	if($rootScope.softwares[i].id==$rootScope.id){
	 		$scope.name=$rootScope.softwares[i].name;
	 		$scope.description=$rootScope.softwares[i].description;
	 		$scope.id=$rootScope.softwares[i].id;
	 		$scope.img=$rootScope.softwares[i].img;
	 	}	
	 }
})