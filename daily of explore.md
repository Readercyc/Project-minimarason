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

```js
//跨
walk:function(pace){
	if(/*this.x + pace<=rightKnee.x*/1)
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
		if(/*this.x + pace<=rightKnee.x*/1)
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