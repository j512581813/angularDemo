var newList = angular.module('newListCtrl', []);
newList.controller('newListCtrl', ['$scope', '$location', '$timeout','$window', function($scope, $location, $timeout,$window) {
	$scope.news = [{
		'title': '政府买假冒伪劣产品，不能没人负责',
		'time': '2016-04-30 10:20',
		'image': 'img/img1.png'
	}, {
		'title': '藏传佛教1311名活佛信息全部公开 仍无张铁林',
		'time': '2016-04-30 10:20',
		'image': 'img/img2.jpg'
	}, {
		'title': '“王娜娜被冒名上大学”调查结果：13人被处理',
		'time': '2016-04-30 10:20',
		'image': 'img/img3.jpg'
	}, {
		'title': '男子中美人计成境外间谍：能“听”出飞机型号',
		'time': '2016-04-30 10:20',
		'image': 'img/img4.jpg'
	}, {
		'title': '云台山落石砸死游客：环卫工称猕猴无磴石习惯',
		'time': '2016-04-30 10:20',
		'image': 'img/img2.jpg'
	}, {
		'title': '农民工工资5年年均增长12.7% 月均收入增1300元',
		'time': '2016-04-30 10:20',
		'image': 'img/img4.jpg'
	}];
	$scope.goToBack = function(){
		$window.history.back();
	}
}])