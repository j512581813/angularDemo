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
		//��ʼ���������Ŀ��ʹ������canvas�����ͬ
		$("#content").css({
			"width": canvas.width + "px",
			"height": canvas.height + "px"
		});
		//ģ��ͼƬ��canva�л��Ƶ�ͼƬ(���ص����ͼƬ)�����ͬ��������px��������������ֻ�Ǹ�ֵ������px
		$("#blur").css("width", img.width + "px");
		$("#blur").css("height", img.height + "px");
		//��߾ࣺ(ͼƬ��� - canvas���) / 2;����һ�ߵı߾���
		leftMargin = (img.width - canvas.width) / 2;
		topMargin = (img.height - canvas.height) / 2;
		//ģ��ͼƬ���ϱ߾�����߾�
		$("#blur").css("top", String(-topMargin) + "px");
		$("#blur").css("left", String(-leftMargin) + "px");
		initCanvas();
	}

	function initCanvas() {
		var theleft = leftMargin < 0 ? -leftMargin : 0;
		var thetop = topMargin < 0 ? -topMargin : 0;
		//����Բ
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
		/*�������ͼƬ����leftMargin<0��ôȡ0��
		ͼƬ�����canvas����ĸ���Сȡ�ĸ�ֵ*/
		ctx.drawImage(img, Math.max(leftMargin, 0), Math.max(topMargin, 0),
			Math.min(canvas.width, img.width), Math.min(canvas.height, img.height),
			leftMargin < 0 ? -leftMargin : 0, topMargin < 0 ? -topMargin : 0,
			Math.min(canvas.width, img.width), Math.min(canvas.height, img.height));
		ctx.restore();
	}

	function setRegion(region) {
		ctx.beginPath();
		ctx.arc(region.x, region.y, region.r, 0, Math.PI * 2, false);
		//���вü�Բ
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
		var name = prompt('���5201314', '');
		if (name == '5201314') {
			show();
		} else {
			alert('��������������������룡');
		}
	}