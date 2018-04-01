const Mycanvas = document.getElementById('Mycanvas');
/*const Mycanvas_width = document.body.clientWidth;
const Mycanvas_height = document.body.clientHeight;

console.log(Mycanvas_width + "" + Mycanvas_height);*/

Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;
//定义对象

let ctx = Mycanvas.getContext('2d');
let wag_flag = 0
let walk_flag = 0;
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
		ctx.rotate(Math.PI*this.angel/180);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.restore();

		/*this.wag();*/
	},
	wag:function(){

		if(!wag_flag)
			this.angel += 2;
		else
			this.angel -= 2;
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
	
		ctx.rotate(Math.PI*this.angel/180);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(neck.x,neck.y);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();

		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.restore();

		/*this.wag();*/
	},
	wag:function(){
		if(wag_flag)
			this.angel += 2;
		else
			this.angel -= 2;
	}
}
let leftleg = {
	init:function(x,y,r,angel){
		this.x = x;
		this.y = y;
		this.r = r;
		this.angel = angel;
	},
	draw:function(){
		ctx.save();
		ctx.translate(0,80);
		ctx.rotate(Math.PI*this.angel/180);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(0,0);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.restore();

		/*this.wag();*/
	},
	walk:function(){

		if(wag_flag)
			this.angel += 3;
		else
			this.angel -= 3;
	}
}
let rightleg = {
	init:function(x,y,r,angel){
		this.x = x;
		this.y = y;
		this.r = r;
		this.angel = angel;
	},
	draw:function(){
		ctx.save();
		ctx.translate(0,80);
		ctx.rotate(Math.PI*this.angel/180);
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(0,0);
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.restore();

		/*this.wag();*/
	},
	walk:function(){

		if(!wag_flag)
			this.angel += 3;
		else
			this.angel -= 3;
	}
}


let NextBpX = 0;
function move(pace){
	console.log("!!!"); 
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
}


function init(){
	ctx.save();
	ctx.translate(Mycanvas.width*0.5,Mycanvas.height*0.4);
	/*ctx.restore();*/
	neck.init(0,0,15);
	head.init(0,-75,30)
	waist.init(0,80,15);
	lefthand.init(100,0,15,110);
	righthand.init(100,0,15,70);
	
	leftleg.init(120,0,15,110);
	rightleg.init(120,0,15,70);



}
function Draw(){
	cleancanvas();
	neck.draw();
	head.draw();
	waist.draw();
	lefthand.draw();
	righthand.draw();
	leftleg.draw();
	rightleg.draw();

}

function cleancanvas(){
	ctx.save();
	ctx.translate(-Mycanvas.width*0.5,-Mycanvas.height*0.4);
	ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height);
	ctx.restore();
}
window.onload = function(){
	init();

}
window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth;
	init();
	Draw();
}
let time;
Mycanvas.addEventListener("touchstart",function(){

	
	if(wag_flag == 1)
		wag_flag = 0;
	else if(wag_flag == 0)
		wag_flag = 1;

	if(walk_flag == 0)
		walk_flag = 1;
	else
		walk_flag = 0;
	time = setInterval(
		function(){
			move(5);
			/*lefthand.wag();
			righthand.wag();*/

			leftleg.walk();
			rightleg.walk();
			ctx.translate(0,(righthand.x - Math.cos(90 - righthand.angel) * righthand.x)); 
			

		},16)
})
Mycanvas.addEventListener("touchend",function(){
	clearInterval(time);
	
})

setInterval(Draw,16);