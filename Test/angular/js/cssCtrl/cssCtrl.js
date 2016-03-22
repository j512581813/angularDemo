var cssCtrl = angular.module("cssModule",[]);
cssCtrl.controller("cssModuleController",["$scope",function($scope){
	$scope.bg = {color:"red"};
	$scope.changeColor = function(){
		$scope.bg = {color:"green"};
	}
}]);
cssCtrl.controller("toggleMenuCtrl",["$scope",function($scope){
	$scope.animata = {parm: false};
	$scope.toggleMenu = function(){
		$scope.animata.parm = !$scope.animata.parm;
	}
}]);
