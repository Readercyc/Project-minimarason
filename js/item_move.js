let deviceclass;
const Mycanvas = document.getElementById('Mycanvas');
/*const Mycanvas_width = document.body.clientWidth;
const Mycanvas_height = document.body.clientHeight;

console.log(Mycanvas_width + "" + Mycanvas_height);*/

Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;
var img = new Image();   // 创建一个<img>元素
img.src = './img/bg.jpg'; // 设置图片源地址
img.onload = function(){
  let ctx = Mycanvas.getContext('2d');
  ctx.drawImage(img,0,0);
} // 保证图片加载完之后执行相对应的函数，否则可能会抛出异常
window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;

	
}
let checkpoint = {
	flag:0,
	__init:function(){
		this.x = Mycanvas.width,
		this.y = 0.4 * Mycanvas.height,
		this.width = 30,
		this.height = 50
	},
	move:function(pace){
		this.x -= pace;
	},
	draw:function(){
		clearcanvas();
		let ctx = Mycanvas.getContext('2d');
		/*clearcanvas();*/
		ctx.fillStyle = '#000';
		ctx.fillRect(this.x,this.y,this.width,this.height);

	}
}

function clearcanvas(){
	let ctx = Mycanvas.getContext('2d');
	ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height);
}
window.onload = function(){
	console.log("!!!");
	checkpoint.__init()
}
Mycanvas.onclick = function(){
	console.log("!!!")
	checkpoint.move(5);
	checkpoint.draw();
}