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
	head.__init(0.5*Mycanvas.width,0.2*Mycanvas.height,30);
	leftElbow.__init(-50,70,10);
	rightElbow.__init(50,70,10);
	waist.__init(0,0.2*Mycanvas.height,10);
	leftKnee.__init(0,90,10);
	rightKnee.__init(0,90,10);
	paper_plane.__init();

}
function DrawJoice(){
	
	let ctx = Mycanvas.getContext('2d');
	head.draw();
	leftElbow.draw();
	rightElbow.draw();
	/*waist.draw();*/
	leftKnee.draw();
	rightKnee.draw();
	/*paper_plane.draw();*/
}
function Drawplane(){
	paper_plane.draw();
}
function DrawLimb(){

	let ctx = Mycanvas.getContext('2d');

	ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(leftElbow.x,leftElbow.y);
	ctx.moveTo(head.x,head.y+head.r);
	ctx.lineTo(rightElbow.x,rightElbow.y);
	ctx.moveTo(head.x,head.y);
	ctx.lineTo(waist.x,waist.y);
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


let plane = function(){
	setInterval(Drawplane,16)
}
function Draw(){
	clearcanvas();
	DrawJoice();
	Drawplane();
	DrawLimb();
	checkpoint.draw();
}

window.onload = function(){
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    	deviceclass = 'phone';
	} else {
   		deviceclass = 'pc';
	}
	console.log(Mycanvas);
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	reset();
	var drawtime = setInterval(Draw,16);

	
	
}