const Mycanvas = document.getElementById('Mycanvas');
var drawtime
window.onload = function()
{
	
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
	var mask = document.getElementById('#mask');
	var start = document.getElementById('#start');
	reset();
	
	if(Mycanvas.width <= 450)
	{
		$("#mask").show();
		$("#mask p").show();
		$("#start").hide();
		$(".hint").hide();
	}
	else
	{	
		$("#mask p").hide();
		$("#start").show();
		$(".hint").show();
	}
	window.onresize = function(){
		Mycanvas.height = document.body.clientHeight;
		Mycanvas.width = document.body.clientWidth ;
		console.log(Mycanvas.width);
			reset();
		if(Mycanvas.width <= 450)
		{

			$("#mask").show();
			$("#mask p").show();
			$("#start").hide();
			$(".hint").hide();
		}
		else
		{
			$("#mask p").hide();
			$("#start").show();
			$(".hint").show();
		}
	}
	
}


$("#start").click(function(){
	$("#mask").fadeOut(500);
	if(NextBpX >= -11400)
		drawtime = setInterval(Draw,16);
	else{
		Draw();
	}
})

/*var bgposition = 0;
function move(){
	bgposition -= 5;
	Mycanvas.style.backgroundPosition = bgposition +"px "+"100%";
}*/

var NextBpX = 0;
function move(pace){
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
	for(let i = 0 ; i < checkpoint.position.length ;i++)
	{
		if(NextBpX<=checkpoint.position[i] && NextBpX >checkpoint.position[i+1] && checkpoint.flag != i)
		{
			checkpoint.flag = i;
			paper_plane.Vx ++;
		}
	}
	if(NextBpX <= -11400)
	{
		clearInterval(drawtime);
		clearInterval(time);
		$("#sign").fadeIn(3000);
		$('#left_button').fadeOut();
		$('#right_button').fadeOut();
	}
}


