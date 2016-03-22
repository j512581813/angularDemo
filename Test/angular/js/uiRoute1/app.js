var uiRoute3 = angular.module("UiRouteModule",["ui.router"]);
uiRoute3.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("index",{
			url:"/index",
			views:{
				"":{
					templateUrl: "tmls/index.html"
				},
				"topbar@index":{
					templateUrl: "tmls/topbar.html"
				},
				"main@index":{
					templateUrl: "tmls/home.html"
				},
			}
			
		})
		.state("index.report",{
				url:"/report",
				views: {
					"main@index":{
						template: "这个是报表管理界面"
					},
				}
		})
		.state("index.permission",{
				url:"/permission",
				views:{
					"main@index":{
						template:"这是用户权限管理界面"
					},
				}
		})
		.state("index.setAdmin",{
				url:"/setAdmin",
				views:{
					"main@index":{
						template:"这是用户设置界面"
					},
				}
		})
		.state("index.userAdmin",{
				url:"/useradmin",
				views:{
					"main@index":{
						templateUrl:"tmls/useradmin.html",
						controller:function($scope,$state){
							$scope.addUserType = function(){
								$state.go("index.userAdmin.addusertype");
							}
					}
				}
			}
		})
        .state('index.userAdmin.addusertype', {
            url: '/addusertype',
            templateUrl: 'tmls/addUserTypeForm.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.userAdmin.highendusers', {
            url: '/highendusers',
            templateUrl: 'tmls/highendusers.html'
        })
})
