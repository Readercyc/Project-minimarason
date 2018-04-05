window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	reset();
	DrawJoice();
	DrawLimb();
	
}
let  jumping = false;
let walking = false;



function clearcanvas(){
	let ctx = Mycanvas.getContext('2d');
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
	
	let ctx = Mycanvas.getContext('2d');
	/*head.draw();
	/*leftElbow.draw();
	rightElbow.draw();*/
	/*waist.draw();*/
leftKnee.draw();
	rightKnee.draw();
	/*paper_plane.draw();*/
}

function DrawLimb(){

	
	let ctx = Mycanvas.getContext('2d');
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

/*let NextBpX = 0;
function move(pace){
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
	for(let i = 0 ; i < checkpoint.position.length ;i++)
	{
		if(NextBpX>=checkpoint.position[i] && NextBpX <checkpoint.position[i+1])
		{
			checkpoint.flag = i;
		}
	}

}*/


let plane = function(){
	/*setInterval(Drawplane,16)*/
}
function Draw(){
	clearcanvas();
	DrawJoice();
	DrawLimb();
	paper_plane.draw();
	let ctx = Mycanvas.getContext('2d');
	let img = new Image();
	img.src = "./img/g_body.png";
	ctx.drawImage(img,head.x-head.r,waist.y-waist.r-0.2*Mycanvas.height,54,100);

	/*time_capsule.draw();*/
}

