
var time= null;
var pc_flag = 0;
var phone_flag = 0;
var checkpoint_flag = 0;
var Vy;
var ay;
var tmpWaistY;
var jump_time;
var time;
function jump_change(){
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
		reset(1);
		jumping = false;
		cancelAnimationFrame(jump);
		return ;
	}
	requestAnimationFrame(jump_change);
}
function jump(){
	Vy = -40;
	ay = 1.5;
	tmpWaistY = waist.y;
	jump_time = requestAnimationFrame(jump_change);
	
}
leftbutton.addEventListener("touchstart",function(event){
		console.log(event);
		event.preventDefault(); 
		if(jumping)
		{
			return;
		}
		
		if(phone_flag == 0)
		{
			phone_flag = 1;
			left_walk();
			/*time = requestAnimationFrame(function(){
			
				leftKnee.walk(5);
				walking = true;
				move(5);
				requestAnimationFrame(leftKnee.walk(5));
				if(Math.abs(leftKnee.x - rightKnee.x)>=100)
				{
					
					dead();
					NextBpX = checkpoint.position[checkpoint.flag];
					Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
					walking = false;
					reset();
					cancelAnimationFrame(time);
					return ;
				}
			})*/

		}
		
		else
		{
			phone_flag = 0;
			right_walk();
			/*time = requestAnimationFrame(function(){
				
			
				move(5);
				rightKnee.walk(5);
				walking = true;

				if(Math.abs(leftKnee.x - rightKnee.x)>=100)
				{
				
					dead();
					NextBpX = checkpoint.position[checkpoint.flag];
					Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
					walking = false;
					reset();
					cancelAnimationFrame(time);
					return ;
				}
			})*/
		
		}
	})	

rightbutton.addEventListener("touchstart",function(event){
		event.preventDefault(); 
		if(!jumping && !walking)
		{
			jumping = true;
			jump();
		}
		
		
})
leftbutton.addEventListener("touchend",function(){
	
	walking = false;
	cancelAnimationFrame(time);
})

rightbutton.addEventListener("touchend",function(){

	walking = false;
	cancelAnimationFrame(time);
})

