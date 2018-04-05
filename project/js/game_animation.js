






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

		if(event.keyCode == 38  && !walking  && !jumping )
		{
			
		}
}

leftbutton.addEventListener("touchstart",function(event){
		/*console.log("你摁下了");*/
		console.log(event);
		if(jumping)
		{
			return;
		}
		/*console.log(event);*/
		if(phone_flag == 0)
		{
			phone_flag = 1;
			time = setInterval(function(){
			/*console.log(NextBpX);*/
				leftKnee.walk(5);
				walking = true;
				move(5);
				/*time_capsule.move(5);*/
				if(Math.abs(leftKnee.x - rightKnee.x)>=100)
				{
					/*alert("裆裂！");*/
					NextBpX = checkpoint.position[checkpoint.flag];
					Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
					walking = false;
					reset();
					/*Draw();*/
					clearInterval(time);
					return ;
				}
			},16)

		}
		
		else
		{
			phone_flag = 0;
			time = setInterval(function(){
		
				/*console.log(NextBpX);
				time_capsule.move(5);*/
				move(5);
				rightKnee.walk(5);
				walking = true;
				if(Math.abs(leftKnee.x - rightKnee.x)>=100)
				{
					/*alert("裆裂！");*/
					NextBpX = checkpoint.position[checkpoint.flag];
					Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
					walking = false;
					reset();
					clearInterval(time);
					return ;
				}
			},16)
		
		}
	})	

rightbutton.addEventListener("touchstart",function(event){
		/*console.log("你摁下了");*/
		
		jump();
		
		
})
leftbutton.addEventListener("touchend",function(){
	/*console.log("你拿起了");*/
	/*console.log(NextBpX);*/
	if(time_capsule.x < 0)
	{
			time_capsule.__init();
	}
	/*if(NextBpX - 0.5* Mycanvas.width <= -1000)
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
			
	}*/
	walking = false;
		clearInterval(time);
})

rightbutton.addEventListener("touchend",function(){
	/*console.log("你拿起了");*/
	/*console.log(NextBpX);*/
	if(time_capsule.x < 0)
	{
			time_capsule.__init();
	}
	/*if(NextBpX - 0.5* Mycanvas.width <= -1000)
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
			
	}*/
	walking = false;
		clearInterval(time);
})

