	var canWidth = window.innerWidth;
	var canHeight = window.innerHeight;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = canWidth;
	canvas.height = canHeight;
	var img = new Image();
	img.src = "image/p_001.jpg";
	var radius = 50;
	var leftMargin = 0,
		topMargin = 0;
	img.onload = function() {
		//初始化父容器的宽高使窗口与canvas宽高相同
		$("#content").css({
			"width": canvas.width + "px",
			"height": canvas.height + "px"
		});
		//模糊图片与canva中绘制的图片(隐藏的清楚图片)宽高相同，别忘加px，否则计算出来的只是个值，不带px
		$("#blur").css("width", img.width + "px");
		$("#blur").css("height", img.height + "px");
		//左边距：(图片宽高 - canvas宽高) / 2;等于一边的边距宽高
		leftMargin = (img.width - canvas.width) / 2;
		topMargin = (img.height - canvas.height) / 2;
		//模糊图片的上边距与左边距
		$("#blur").css("top", String(-topMargin) + "px");
		$("#blur").css("left", String(-leftMargin) + "px");
		initCanvas();
	}

	function initCanvas() {
		var theleft = leftMargin < 0 ? -leftMargin : 0;
		var thetop = topMargin < 0 ? -topMargin : 0;
		//创建圆
		region = {
			x: Math.random() * (canvas.width - 2 * radius - 2 * theleft) + radius + theleft,
			y: Math.random() * (canvas.height - 2 * radius - 2 * thetop) + radius + thetop,
			r: radius
		};
		draw(img, region);
	}

	function draw(img) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		setRegion(region);
		/*绘制清楚图片，如leftMargin<0那么取0，
		图片宽度与canvas宽度哪个最小取哪个值*/
		ctx.drawImage(img, Math.max(leftMargin, 0), Math.max(topMargin, 0),
			Math.min(canvas.width, img.width), Math.min(canvas.height, img.height),
			leftMargin < 0 ? -leftMargin : 0, topMargin < 0 ? -topMargin : 0,
			Math.min(canvas.width, img.width), Math.min(canvas.height, img.height));
		ctx.restore();
	}

	function setRegion(region) {
		ctx.beginPath();
		ctx.arc(region.x, region.y, region.r, 0, Math.PI * 2, false);
		//进行裁减圆
		ctx.clip();
	}

	function reset() {
		initCanvas();
	}

	function show() {
		var animation = setInterval(function() {
			region.r += 20;
			if (region.r > Math.max(canvas.width, canvas.height)) {
				clearInterval(animation);
			}
			draw(img, region);
		}, 30);
	}
	function kan() {
		var name = prompt('口令：5201314', '');
		if (name == '5201314') {
			show();
		} else {
			alert('输入口令有误，请重新输入！');
		}
	}