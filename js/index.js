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
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,1);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.closePath();
	}
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
	__init:function(){
		this.x = head.x;
		this.start_y = head.y + 40;
		this.end_y = path.y;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.x,this.start_y);
		ctx.lineTo(this.x-this.range,this.end_y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}


}
let right_leg = {
	range:20,
	__init:function(){
		this.x = head.x;
		this.start_y = head.y + 40;
		this.end_y = path.y;
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
function DrawPeople(){
	path.__init(pathY,Mycanvas.width);
	path.draw();
	head.__init();
	head.draw();
	body.__init();
	body.draw();
	left_arm.__init(Math.random()*20);
	left_arm.draw();
	right_arm.__init(Math.random()*20);
	right_arm.draw();
	left_leg.__init();
	left_leg.draw();
	right_leg.__init();
	right_leg.draw();
}

let NextBpX = 0;
function move(){

	let speed = Mycanvas.width/1000;
	/*if(head.x+flag*speed>Mycanvas.width||head.x+flag*speed<0)
		flag = -flag;*/
	NextBpX -= speed ;
	/*if(NextBpX <= -Mycanvas.width-15)
	{
		clearInterval(timer);
		NextBpX = 0;
		return;
	}*/
	/*console.log(NextBpX);*/
	Mycanvas.style.backgroundPosition = NextBpX+"px "+"100%";
	/*console.log(Mycanvas_width + "" + Mycanvas_height);*/
	DrawPeople();
}

window.onload = function(){
	/*DrawPeople();*/
	var timer = setInterval(move,16);
}
	


// 页面大小改变时xxx



window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	pathY = Mycanvas.height-45;
	console.log(Mycanvas.width + "" + Mycanvas.height);
	DrawPeople();
	
}
	let flag = 1;
window.onclick = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	move();
	
}

// 定义对象




		/*ctx.beginPath();
		

		ctx.beginPath();
		ctx.moveTo(this.x,this.y+this.radius);
		ctx.lineTo(this.x+20,this.y+this.radius+20);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();*/