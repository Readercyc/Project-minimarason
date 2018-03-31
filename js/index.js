const Mycanvas = document.getElementById('Mycanvas');
/*const Mycanvas_width = document.body.clientWidth;
const Mycanvas_height = document.body.clientHeight;

console.log(Mycanvas_width + "" + Mycanvas_height);*/

Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;
//定义对象

let ctx = Mycanvas.getContext('2d');


let neck = {
	init:function(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	},
	draw:function(){


		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fill();

	}
}

let head = {
	init:function(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	},
	draw:function(){


		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 6;
		ctx.stroke();

		ctx.closePath();

	}
}
let waist = {
	init:function(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	},
	draw:function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 6;
		ctx.stroke();
		ctx.closePath();
	}

}
let lefthand = {
	init:function(x,y,r,angel){
		this.x = x;
		this.y = y;
		this.r = r;
		this.angel = angel;
	},
	draw:function(){
		ctx.save();
		ctx.rotate(this.angel);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "limegreen";
		ctx.fill();
		ctx.restore();
	},
	wag:function(){
		if(this.angel <= )
		this.angel
	}
}
let righthand = {
	init:function(x,y,r,angel){
		this.x = x;
		this.y = y;
		this.r = r;
		this.angel = angel;
	},
	draw:function(){
		ctx.save();
	
		ctx.rotate(this.angel);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();

		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.restore();
	}
}

function init(){
	ctx.save();
	ctx.translate(Mycanvas.width*0.5,Mycanvas.height*0.4);
	neck.init(0,0,15);
	head.init(0,-75,30)
	waist.init(0,100,15);
	lefthand.init(130,0,15,2*Math.PI/3);
	righthand.init(130,0,15,2*Math.PI/12);

}
function Draw(){
	cleancanvas();
	neck.draw();
	head.draw();
	waist.draw();
	lefthand.draw();
	righthand.draw();

}
function Limb(){





}
function cleancanvas(){
	ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height);
}
window.onload = function(){
	init();
	Draw();
}
window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth;
	init();
	Draw();
}