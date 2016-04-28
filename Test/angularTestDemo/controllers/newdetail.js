var newDetail = angular.module("newDetailCtrl",[]);
newDetail.controller('newDetailCtrl',['$scope','$location','$window',function($scope,$loction,$window){
		$scope.book = {
			'maintitle':'新闻详情',
			'image':'banner.png',
			'title':'微信页面整合',
			'content':'关键是你说的“能力就不重要了吗”，这里的能力指的是什么？你怎么确定你很有能力？能力超越学历需要付出多少？别老是抱怨，踏踏实实做几年，真牛逼了没人会去看你的学历PS：一直用高中学历在互联网界混吃混喝的路过。',
			'date_modify':'2015-10-14 00:00:00',
			'author':'刘同'
		};
		$scope.news = 
		[
			{
				'title':'近平出席亚信第五次外长会议并讲话',
				'time':'一分钟'
			},{
				'title':'李克强夜访成都宽窄巷  主持国务院常务会议',
				'time':'五分钟'
			},{
				'title':'苹果营收13年首次下滑 神话终结拐点到来？',
				'time':'三分钟'
			},{
				'title':'北京纪委节前提醒:党员干部赴饭局先弄清谁买单',
				'time':'三小时前'
			}
		];
		$scope.back = function(){
			if($loction.url().match('type')){
				navigator.control.back();
			}else{
				$window.history.back();
			}
		}
	}
])
