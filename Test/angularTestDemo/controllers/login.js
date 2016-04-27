var loginCtrl = angular.module('LoginCtrl',[]);
loginCtrl.controller('LoginCtrl', ["$scope", "$location", function($scope, $location) {
	$scope.loginAction = function() {
		if ($scope.user.account == "admin" && $scope.user.password == "123456") {
			$location.url("new");
		} else {
			alert("您输入的账号或密码错误！");
		}
	}
}])