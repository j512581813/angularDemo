var myModule = angular.module("HelloAngular", []);
myModule.controller("helloModule",['$scope',
	function HelloAngular1($scope){
	   $scope.greeting = {
	   		text:'hello'
	   };
	}
]);
