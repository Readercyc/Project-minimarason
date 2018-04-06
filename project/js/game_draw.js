window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	reset();
	DrawJoice();
	DrawLimb();
	
}
var  jumping = false;
var walking = false;



function clearcanvas(){
	var ctx = Mycanvas.getContext('2d');
	ctx.clearRect(0,0,Mycanvas.width,Mycanvas.height);
}
function reset(){
	head.__init(0.2*Mycanvas.width,Mycanvas.height-260,20);
	leftElbow.__init(-30,70,10);
	rightElbow.__init(30,70,10);
	waist.__init(0,0.2*Mycanvas.height,10);
	leftKnee.__init(-waist.r,90,10);
	rightKnee.__init(waist.r,90,10);
	time_capsule.__init();
	paper_plane.__init();

}
function DrawJoice(){
	
	var ctx = Mycanvas.getContext('2d');
	/*head.draw();
	/*leftElbow.draw();
	rightElbow.draw();*/
	/*waist.draw();*/
	leftKnee.draw();
	rightKnee.draw();
	/*paper_plane.draw();*/
}

function DrawLimb(){

	
	var ctx = Mycanvas.getContext('2d');
	/*ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(leftElbow.x,leftElbow.y);
	ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(rightElbow.x,rightElbow.y);
	ctx.moveTo(head.x,head.y);
	ctx.lineTo(waist.x,waist.y);*/
	ctx.beginPath();
	ctx.strokeStyle = "#f6d5c8" ; 
	ctx.moveTo(waist.x-waist.r,waist.y);
	ctx.lineTo(leftKnee.x,leftKnee.y);
	ctx.lineWidth = 5;
	
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle = "#f6d5c8" ; 
	ctx.moveTo(waist.x+waist.r,waist.y);
	ctx.lineTo(rightKnee.x,rightKnee.y);

	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.closePath();
}

function left_walk(){
	if(NextBpX <= -11380)
		return ;
	move(2.5);
	leftKnee.walk(2.5);
	time = requestAnimationFrame(left_walk);
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
}
function right_walk(){
	if(NextBpX <= -11380)
		return ;
	move(2.5);
	rightKnee.walk(2.5);
	time = requestAnimationFrame(right_walk);
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
}

function Draw(){
	clearcanvas();
	DrawJoice();
	DrawLimb();
	paper_plane.draw();
	var ctx = Mycanvas.getContext('2d');
	var img = new Image();
	img.src = "./img/g_body.png";
	ctx.drawImage(img,head.x-head.r,waist.y-waist.r-0.2*Mycanvas.height,54,100);

	globalID=requestAnimationFrame(Draw);  
}

