var ruoteModule = angular.module("ruoteModule",["ui.router","ngAnimate"]);
ruoteModule.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/state1');
	$stateProvider
		.state('state1',{
			url:"/state1",
			templateUrl: "tml/state1.html"
		})
		.state('state1.list',{
			url:"/state1.list",
			templateUrl:"tml/state1.list.html",
			controller:function($scope){
				$scope.lists = [
					{title:"A"},
					{title:"B"},
					{title:"C"},
					{title:"D"}
				];
			}
		})
		.state('state2',{
			url:"/state2",
			templateUrl: "tml/state2.html"
		})
		.state('state2.list',{
			url:"/state2.list",
			templateUrl:"tml/state2.list.html",
			controller:function($scope){
				$scope.things =[
					{title:"A"},
					{title:"B"},
					{title:"C"},
					{title:"D"}
				];
			}
		})
	
})
