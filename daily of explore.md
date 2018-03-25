# Project-minimarason

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

完成了一个小人运动逻辑和背景移动逻辑

以及canvas自适应 在任意手机分辨率下都保持同样效果
## 2018年3月26日 02:19:10 sleep


