const Mycanvas = document.getElementById('Mycanvas');
/*const Mycanvas_width = document.body.clientWidth;
const Mycanvas_height = document.body.clientHeight;

console.log(Mycanvas_width + "" + Mycanvas_height);*/

Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;
//定义对象
let pathY = Mycanvas.height-45;

let path = {

	height:5,
	__init:function(y,width){
		this.y = y;
		this.width = width;
	},
	draw:function(){
		/*console.log("!!!");*/
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.clearRect(0,0,this.width,document.body.clientHeight);
		/*ctx.fillRect(0,this.y,this.width,this.height)*/
		/*ctx.closePath();*/
	}
}

let head= {
	x:40,
	radius:10,
	__init:function(){
		this.y = path.y-60;
	},
	draw:function(){
		
		let ctx = Mycanvas.getContext('2d');
		let img = new Image();
		img.src = './img/g_logo.png'
		let ptrn = ctx.createPattern(img,'no-repeat');
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,1);
		ctx.fillStyle = ptrn;
		ctx.drawImage(img,this.x-30,this.y-50)
		/*ctx.fill();*/
		ctx.closePath();
	},

}

let body = {

	__init:function(){
		this.x = head.x;
		this.start_y = head.y + 10;
		this.end_y = this.start_y + 30;
	},
	draw:function(){
		console.log(this.start_y);
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();

		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}

}
let left_arm = {

	__init:function(wag){
		this.wag = wag;
		this.x = head.x;
		this.start_y = head.y + 10;
		this.end_y = this.start_y + 25;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x-this.wag,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}

}

let right_arm = {

	__init:function(wag){
		this.wag = wag;
		this.x = head.x;
		this.start_y = head.y + 10;
		this.end_y = this.start_y + 25;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x+this.wag,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}

}

let left_leg = {
	range:20,
	rotate:1,
	length:20*1.414,
	__init:function(){
		this.x = head.x;
		this.start_y = head.y + 40;
		this.middle_y = this.start_y + 10;
		this.end_y = this.start_y + 20;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.strokeColor = "red";

		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x-this.range,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}


}
let right_leg = {
	range:20,
	rotate:1,
	length:20*1.414,
	__init:function(){
		this.x = head.x;
		this.start_y = head.y + 40;
		this.middle_y = this.start_y + 10;
		this.end_y = this.start_y + 20;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x+this.range,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}

}

let stone = {
	__init:function(x,height,width){
		
		this.height= Math.max(height,25);
		this.width = Math.max(width,25);
		this.x = Mycanvas.width - this.width;

	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');

		
		ctx.fillRect(this.x,path.y-this.height,this.width,this.height);
		ctx.fillStyle = "#000";
	}
}
function reset(){
	path.__init(pathY,Mycanvas.width);
	head.__init();
	body.__init();
	left_arm.__init(Math.random()*20);
	right_arm.__init(Math.random()*20);
	left_leg.__init();
	right_leg.__init();
}
function resetExpectHead(){
	body.__init();
	left_arm.__init(Math.random()*20);
	right_arm.__init(Math.random()*20);
	left_leg.__init();
	right_leg.__init();
}
function DrawPeople(){
	
	path.draw();
	
	head.draw();
	
	body.draw();
	
	left_arm.draw();
	
	right_arm.draw();
	
	left_leg.draw();
	
	right_leg.draw();
}

let NextBpX = 0;
	let t = 0;
function move(pace){
	let stone_Vx = -1;
	let stone_ax = 2;
	t++;
	/*if(head.x+flag*speed>Mycanvas.width||head.x+flag*speed<0)
		flag = -flag;*/
	stone.x += stone_Vx;
	/*stone_Vx -= stone_ax;*/
	NextBpX += stone_Vx;
	/*if(NextBpX <= -Mycanvas.width-15)
	{
		clearInterval(timer);
		NextBpX = 0;
		return;
	}*/
	/*console.log(NextBpX);*/
	Mycanvas.style.backgroundPosition = NextBpX+"px "+"100%";
	/*console.log(Mycanvas_width + "" + Mycanvas_height);*/
	/*reset();*/

	if(t > 150)
	{
		stone.__init(Math.random()*Mycanvas.width,Math.random()*35,Math.random()*35);
		stone.draw();
		t = 0;
	}
	resetExpectHead();
	DrawPeople();
	stone.draw();
}
//跳
let jump = function(){
	let Vy = -20;
	let ay = 1;
	var jump_time = setInterval(function(){
		head.y += Vy;
		Vy += ay;
		if(head.y + Vy > path.y-60)
		{
			head.y = path.y-60;
			clearInterval(jump_time);
		}
		resetExpectHead();
		DrawPeople();
		stone.draw();
	},16)
}
//walk
let walk = function(pace){
	let flag = 0;//左脚右脚
	let S = (left_leg.range + right_leg.range)*20/2;
	right_leg.range += pace;
	head.y += 20-S*2/(left_leg.range + right_leg.range);
	resetExpectHead0();
	DrawPeople();
}


	

window.onload = function(){
	reset();
	DrawPeople();
	stone.__init(Math.random()*Mycanvas.width,Math.random()*35,Math.random()*35);
	stone.draw();
	var timer = setInterval(move,16);
}
	


// 页面大小改变时xxx



window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	pathY = Mycanvas.height-45;
	console.log(Mycanvas.width + "" + Mycanvas.height);
	reset();
	DrawPeople();
	
}
	let flag = 1;
window.onclick = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	move(10);
	
}

window.onkeydown = function(event){
	console.log(event);
	if(event.keyCode == 38 && head.y == path.y-60)
		jump();
	if(event.keyCode == 39)
	{
		walk(2);
	}


}
// 定义对象




		/*ctx.beginPath();
		

		ctx.beginPath();
		ctx.moveTo(this.x,this.y+this.radius);
		ctx.lineTo(this.x+20,this.y+this.radius+20);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();*/