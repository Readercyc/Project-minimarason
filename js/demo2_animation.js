let deviceclass;
const Mycanvas = document.getElementById('Mycanvas');
Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;







var time= null;
let pc_flag = 0;
let phone_flag = 0;
let checkpoint_flag = 0;

let jump = function(){
	let Vy = -20;
	let ay = 1;
	let tmpWaistY = waist.y;
	var jump_time = setInterval(function(){
		jumping = true;
		head.y += Vy;
		leftElbow.y += Vy;
		rightElbow.y += Vy;
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
		

	},16)
}
/*Mycanvas.onmousedown = function(event){
		if(deviceclass == 'phone')
			return ;
		console.log(event);
		if(jumping)
		{
			return;
		}

		if(event.x < Mycanvas.width * 0.5)
		{
			pc_flag = 1;
			time = setInterval(function(){
				clearcanvas();
				leftKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					alert("裆裂！");
					walking = false;
					clearcanvas();
					reset();
					Draw();
					clearInterval(time);
					return ;
					
				}
			},16)
		}
			
		
		else
		{
			pc_flag = 0;
			time = setInterval(function(){
				clearcanvas();
				rightKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					clearcanvas();
					alert("裆裂！");
					walking = false;
					reset();
					Draw();
					clearInterval(time);
					return ;
				}
			},16)
		}
	}

Mycanvas.onmouseup = function(){
		walking = false;
		clearInterval(time);
}*/
window.onkeydown = function(event){

		if(event.keyCode == 38  && !walking )
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
			
				console.log(checkpoint.x +"  " + leftKnee.x);
				
				leftKnee.walk(5);
				walking = true;
				if(checkpoint.flag == 1)
				{
					/*console.log("绘制检查点");*/
					checkpoint.move(5);
				
				}
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					/*alert("裆裂！");*/
					walking = false;
					clearcanvas();
					reset();
			
					checkpoint.draw();
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
		
				console.log(checkpoint.x +"  " + leftKnee.x);
				if(checkpoint.flag == 1)
				{
					checkpoint.move(5);
				
				}
				
				rightKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=180)
				{
					/*alert("裆裂！");*/
					walking = false;
					clearcanvas();
					reset();
				
					checkpoint.draw();
					clearInterval(time);
					return ;
				}
			},16)
		}
})


Mycanvas.addEventListener("touchend",function(){
	/*console.log("你拿起了");*/
	console.log(NextBpX);
	if(NextBpX - 0.5* Mycanvas.width <= -1000)
	{
		console.log("检查点1");
		if(checkpoint.flag == 0)
		{
			checkpoint.__init();
			checkpoint.flag = 1;
		}
		
		if(checkpoint.x < 0)
		{
			checkpoint.x = undefined;
			checkpoint.flag = 0;
			NextBpX = 0;
		}
			
	}
	walking = false;
		clearInterval(time);
})



