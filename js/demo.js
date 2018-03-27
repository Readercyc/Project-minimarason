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
	reset();
	DrawJoice();
	DrawLimb();
	
}
let  jumping = false;
let walking = false;
let head = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
		
	},
	drag:function(x,y){

	}

}

let leftElbow = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = head.x + x;
		this.y = head.y + y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
	}
	

}

let rightElbow = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = head.x + x;
		this.y = head.y + y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
	}
	
}

let waist = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = head.x;
		this.y = head.y + y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
	}
}

let leftKnee = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = waist.x + x;
		this.y = waist.y + y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
	},
	walk:function(pace){
		if(/*this.x + pace<=rightKnee.x*/1)
		{
			let square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));
			this.x += pace;
			rightKnee.x -= pace;

			move(pace);
			DrawJoice();
			DrawLimb();
		}

	}
}

let rightKnee = {
	ctx:Mycanvas.getContext('2d'),
	__init:function(x,y,r){
		this.x = waist.x +  x;
		this.y = waist.y + y;
		this.r = r;
	},
	draw:function(){
		
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		this.ctx.fill();
		this.ctx.closePath();
	},
	walk:function(pace){
		if(/*this.x + pace<=rightKnee.x*/1)
		{
			let square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));
			this.x += pace;
			leftKnee.x -= pace;

			move(pace);
			DrawJoice();
			DrawLimb();
		}

	}
}
let paper_plane = {
	x :Mycanvas.width - 100,
	y :0.4 * Mycanvas.height,
	Vx : 5,
	width:5,
	draw:function(){
		setInterval(
		function(){
			console.log("!!!");
			let ctx = Mycanvas.getContext('2d');
			ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height);
			ctx.fillRect(this.x,this.y,this.width,this.width);
			ctx.fillStyle = "#000";
			/*this.x -= this.Vx;*/
			DrawJoice();
			DrawLimb();
		}	
		,Math.max(3000,Math.random()*6000));
	}

}

function reset(){
	head.__init(0.5*Mycanvas.width,0.2*Mycanvas.height,50);
	leftElbow.__init(-100,100,10);
	rightElbow.__init(100,100,10);
	waist.__init(0,0.2*Mycanvas.height,10);
	leftKnee.__init(0,90,10);
	rightKnee.__init(0,90,10);

}

function DrawJoice(){
	let ctx = Mycanvas.getContext('2d');
	ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height)
	/*head.draw();
	leftElbow.draw();
	rightElbow.draw();*/
	waist.draw();
	leftKnee.draw();
	rightKnee.draw();
}

function DrawLimb(){
	let ctx = Mycanvas.getContext('2d');
	/*ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(leftElbow.x,leftElbow.y);
	ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(rightElbow.x,rightElbow.y);
	ctx.moveTo(head.x,head.y);
	ctx.lineTo(waist.x,waist.y);*/
	ctx.moveTo(waist.x,waist.y);
	ctx.lineTo(leftKnee.x,leftKnee.y);
	ctx.strokeColor = "#cc3333" ; 
	ctx.stroke();
	ctx.moveTo(waist.x,waist.y);
	ctx.lineTo(rightKnee.x,rightKnee.y);
	ctx.lineWidth = 3;
	ctx.stroke();
}

let NextBpX = 0;
function move(pace){
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
}

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
window.onload = function(){
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    	deviceclass = 'phone';
	} else {
   		deviceclass = 'pc';
	}
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	reset();
	DrawJoice();
	DrawLimb();
	/*paper_plane.draw();*/
	
}





var time= null;
let pc_flag = 0;
let phone_flag = 0;
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
window.onkeydown = function(event){
	console.log("!!!");
		if(event.keyCode == 38  && !walking && leftKnee.y == Mycanvas.height*0.4 + 90)
		{
			jump();
		}
}

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
/*ah1 = (a-2)h2

h2 = h1 - ah/a-2 */