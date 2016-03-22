var myModule = angular.module('testRuote',[
    'ngRoute', 'bookStoreCtrls'
]);
//myModule.config(function($routeProvider){
//	$routeProvider.when('/hello',{
//      templateUrl: 'tml/hello.html',
//      controller: 'HelloCtrl'
//	}).when('/list',{
//  	templateUrl:'tml/booklist.html',
//  	controller:'BookListCtrl'
//	}).otherwise({
//		redirectTo: '/hello'
//	})
//});
myModule.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tml/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tml/booklist.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
