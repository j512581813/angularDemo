var dataModule = angular.module('dataModle',[]);
dataModule.controller("dataModleController",['$scope',
	function($scope){
		$scope.userInfo = {
			"email":"123456@163.com",
			"password":"4545dasdas",
			"loginAuto":true
		};
		$scope.getData = function(){
			console.log($scope.userInfo);
		};
		$scope.resetData = function(){
			$scope.userInfo = {
				"email":"512581813@qq.com",
				"password":"555555",
				"loginAuto":false
			};
		};
		
	}
])
