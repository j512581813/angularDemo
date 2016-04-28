

var greatWall = angular.module('DemoApp', ['ui.router',"ngAnimate","ngTouch","controllers"]);
greatWall.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'tpl/login.html',
			controller: 'LoginCtrl'
		})
		.state('new', {
			url: '/new',
			templateUrl: "tpl/new.html",
			controller: "newCtrl"
		})
		.state('/newdetail/:type',{
			url:'/newdetail/:type',
			templateUrl:"tpl/newdetail.html",
			controller:'newDetailCtrl'
		})
});

