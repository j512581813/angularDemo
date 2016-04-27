var newlistCtrl = angular.module("newCtrl",[]);
newlistCtrl.controller('newCtrl', ["$scope","$timeout", "$location", function($scope, $timeout, $location) {
	$scope.banner = "image/banner.png";
	$scope.news = [
	{
		"meta": {
			"author": "test",
			"date_create": "五分钟前",
			"date_modify": "2015-10-14T00:00:00",
			"filename": "有时候，失望到了一定的程度后，反而是会去开出一朵花来，那朵花的名字叫，无所谓。",
			"git_username": "kk",
			"subdir": "article",
			"subtitle": null,
			"tags": [
				"api",
				"微信",
				"开发文档"
			],
			"title": "微信页面整合",
			"id": '1'
		}
	}, {
		"meta": {
			"author": "Waylan LimbergJohn Doe",
			"date_create": "五分钟前",
			"date_modify": "2015-10-14T00:00:00",
			"filename": "python2编码问题.md",
			"git_username": "guyskk",
			"subdir": "article",
			"subtitle": null,
			"tags": [],
			"title": "我想那悲伤的秋千总有微风陪伴，孤寂的夜，总有繁星点点，蓦然回首，而你却是不在我身边。",
			"id": '2'
		}
	},{
		"meta": {
			"author": "test",
			"date_create": "一天前",
			"date_modify": "2015-10-14T00:00:00",
			"filename": "微信页面整合",
			"git_username": "kk",
			"subdir": "article",
			"subtitle": null,
			"tags": [
				"api",
				"微信",
				"开发文档"
			],
			"title": "我们一生去经历一次的青春，目的就只是去听一次花开的声音，看一次花落的寂然，然后散场。",
			"id": '1'
		}
	}, {
		"meta": {
			"author": "Waylan LimbergJohn Doe",
			"date_create": "1小时前",
			"date_modify": "2015-10-14T00:00:00",
			"filename": "python2编码问题.md",
			"git_username": "guyskk",
			"subdir": "article",
			"subtitle": null,
			"tags": [],
			"title": "python2编码问题",
			"id": '2'
		}
	}
	];
	$scope.books = [
	{
		"lists":{
			"image":"book-pic.jpg",
			"author":"刘同",
			"title":"谁的青春不迷茫",
			"like":"19万",
			"dislike":"100",
			"time":"2分钟前",
			"intro":"在《谁的青春不迷茫》中，奋斗小青年刘同十年逆袭人生，给都市中焦躁不安困惑迷茫的年轻人。小说中作者以第一人称的方式述说自己对过去十年的感悟和认知，从大学到如今工作的这十年作者所经历的事和人，用自己的人生经历来劝解大家青春的迷茫人人都有，希望读者能够从作者身上找出答案，看清自己，走出迷茫的青春。"
		}
		
	},	{
		"lists":{
			"image":"book-pic.jpg",
			"author":"刘同",
			"title":"谁的青春不迷茫",
			"like":"19万",
			"dislike":"100",
			"time":"2分钟前",
			"intro":"在《谁的青春不迷茫》中，奋斗小青年刘同十年逆袭人生，给都市中焦躁不安困惑迷茫的年轻人。小说中作者以第一人称的方式述说自己对过去十年的感悟和认知，从大学到如今工作的这十年作者所经历的事和人，用自己的人生经历来劝解大家青春的迷茫人人都有，希望读者能够从作者身上找出答案，看清自己，走出迷茫的青春。"
		}
		
	},	{
		"lists":{
			"image":"book-pic.jpg",
			"author":"刘同",
			"title":"谁的青春不迷茫",
			"like":"19万",
			"dislike":"100",
			"time":"2分钟前",
			"intro":"在《谁的青春不迷茫》中，奋斗小青年刘同十年逆袭人生，给都市中焦躁不安困惑迷茫的年轻人。小说中作者以第一人称的方式述说自己对过去十年的感悟和认知，从大学到如今工作的这十年作者所经历的事和人，用自己的人生经历来劝解大家青春的迷茫人人都有，希望读者能够从作者身上找出答案，看清自己，走出迷茫的青春。"
		}
		
	}
	]
}])