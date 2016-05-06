var registerCtrl = angular.module('registerCtrl', []);
registerCtrl.controller('registerCtrl', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {
	$scope.paracont = "获取验证码";
	$scope.sendphonecode = function() {
		
		$scope.paraclass = "but_null";
		$scope.paraevent = true;
		var second = 60,
			timePromise = undefined;
		timePromise = $interval(function() {
			if (second <= 0) {
				$interval.cancel(timePromise);
				timePromise = undefined;

				second = 60;
				$scope.paracont = "重发验证码";
				$scope.paraclass = "but_null";
				$scope.paraevent = true;
			} else {
				$scope.paracont = second + "秒后可重发";
				$scope.paraclass = "not but_null";
				second--;

			}
		}, 1000, 100);
	}
	$scope.register = function($scope) {
		var req = /^[a-zA-Z0-9_]{6,16}$/;
		var name = $scope.user.name;
		console.log(name);
		if (req.test(name)) {
			alert("您输入的用户名有误！");
		}
	}
}])