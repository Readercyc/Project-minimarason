# 迷你马拉松小游戏开发日志笔记

## 2018年3月25日 23:27:39 first day

获取浏览器宽高
``` js
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
```

手机端缩放
```html
<meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
```

js修改html自带属性
```js
document.getElementById(id).attribute=new value
```

当页面大小变换时 执行function()
```js
window.onresize = function(){
	const Mycanvas_width = document.body.clientWidth;
	const Mycanvas_height = document.body.clientHeight;
	Mycanvas.height = Mycanvas_height;
	Mycanvas.width = Mycanvas_width ;
	console.log(Mycanvas_width + "" + Mycanvas_height);
}
```

```js
//修改backgroundpostionX的值
let speed = Mycanvas.width/1000;
NextBpX -= speed ;
Mycanvas.style.backgroundPosition = NextBpX+"px "+"100%";
```

canvas方面没有出现太大问题,运用了对象的知识进行编程
## 2018年3月26日 02:19:10 sleep

## 2018年3月26日 07:57:59

判断方向键
```
event.keyCode
```

## 2018年3月26日 20:38:05

与设计商量后的结果

对象 
1. 除了腿之外的部分(定死)
2. 腿
    - 直的腿
    - 跨

## 2018年3月27日 19:04:35
```js
//跨
walk:function(pace){
	if(1)
	{
			let square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));
			
			//勾股定理
			this.x += pace;
			rightKnee.x -= pace;

			move(pace);
			DrawJoice();
			DrawLimb();
		}

	}
//右腿
walk:function(pace){
		if(1)
		{
			let square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));
			
			//勾股定理
			this.x += pace;
			leftKnee.x -= pace;

			move(pace);
			DrawJoice();
			DrawLimb();
		}

	}
function move(pace){
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
}

```

```
//死亡判定之腿伸太长
if(Math.abs(leftKnee.x - rightKnee.x)>=230)
{
	alert("裆裂！");
	reset();
	DrawJoice();
	DrawLimb();
	clearInterval(time);
	return ;
}
```

```js
//互斥判断
//跨2.0
//pc端
Mycanvas.onmousedown = function(event){
		if(deviceclass == 'phone')
			return ;
		console.log(event);
		if(jumping)
		{
			return;
		}

		if(!pc_flag)
		{
			pc_flag = 1;
			time = setInterval(function(){
				leftKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					alert("裆裂！");
					walking = false;
					reset();
					DrawJoice();
					DrawLimb();
					clearInterval(time);
					return ;
					
				}
			},16)
		}
			
		
		else
		{
			pc_flag = 0;
			time = setInterval(function(){
				rightKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					alert("裆裂！");
					walking = false;
					reset();
					DrawJoice();
					DrawLimb();
					clearInterval(time);
					return ;
				}
			},16)
		}
	}

Mycanvas.onmouseup = function(){
		walking = false;
		clearInterval(time);
}
//手机端
Mycanvas.addEventListener("touchstart",function(event){
		/*console.log("你摁下了");*/
		if(jumping)
		{
			return;
		}
		/*console.log(event);*/
		if(!phone_flag)
		{
			phone_flag = 1;
			/*console.log("点的左边");*/
			time = setInterval(function(){
				leftKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					alert("裆裂！");
					walking = false;
					reset();
					DrawJoice();
					DrawLimb();
					clearInterval(time);
					return ;
					
				}
			},16)
		}
			
		
		else
		{
			phone_flag = 0;
			/*console.log("点的右边");*/
			time = setInterval(function(){
				rightKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					alert("裆裂！");
					walking = false;
					reset();
					DrawJoice();
					DrawLimb();
					clearInterval(time);
					return ;
				}
			},16)
		}
})
Mycanvas.addEventListener("touchend",function(){
	/*console.log("你拿起了");*/
	walking = false;
		clearInterval(time);
})
//跳
let jump = function(){
	let Vy = -20;
	let ay = 1;
	let tmpWaistY = waist.y;
	var jump_time = setInterval(function(){
		jumping = true;
		waist.y += Vy;
		leftKnee.y += Vy;
		rightKnee.y += Vy;
		Vy += ay;
		if(waist.y + Vy > tmpWaistY)
		{
			waist.y = tmpWaistY;
			jumping = false;
			clearInterval(jump_time);
		}
		DrawJoice();
		DrawLimb();
	},16)
}
```

```js
//平台判断，手机端执行touchstart/touchend事件
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    deviceclass = 'phone';
}
else {
   	deviceclass = 'pc';
}
```

### 2018年3月27日 23:50:52 sleep
目前手机端遇到的问题：
手机端touch事件检测不到点击位置，现在的模式是左右脚交替，如果未来没有发现API的话，就设计按钮，对按钮设置touch事件用来控制左右脚移动。(pc端点左半边屏幕跨左脚，点右半边跨右脚)

点击过快会出现不中止的自动执行跨步函数（互斥判断还有bug）
