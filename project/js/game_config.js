var Mycanvas = document.getElementById('Mycanvas');
var body = $("body");
var drawtime;
window.onload = function()
{
	console.log(window)
	$('audio')[0].play();
	
	/*var mask = document.getElementById('#mask');
	var start = document.getElementById('#start');*/
	$("#start").show();
	$(".hint").show();

	
	 var width = document.documentElement.clientWidth;
 	 var height =  document.documentElement.clientHeight;
 	 Mycanvas.height = document.body.clientHeight;
	 Mycanvas.width = document.body.clientWidth ;
  	 if( width < height ){

      console.log(width + " " + height);
      $print =  $('body');
      $print.width(height);
      $print.height(width);
      $print.css('top',  (height-width)/2 );
      $print.css('left',  0-(height-width)/2 );
      $print.css('transform' , 'rotate(90deg)');
      $print.css('transform-origin' , '50% 50%');
      $print.css('-webikt-transform' , 'rotate(90deg)');
      $print.css('-webkit-transform-origin' , '50% 50%');
      Mycanvas.height = document.body.clientHeight;
	  Mycanvas.width = document.body.clientWidth ;
 	}
 	else if( width > height ){
		    console.log(width + " " + height);
		    $print =  $('body');
		    $print.width(width);
		    $print.height(height);
		    $print.css('top',  0);
		    $print.css('left',  0 );
		    $print.css('transform' , 'rotate(0deg)');
		    $print.css('transform-origin' , '50% 50%');
		    $print.css('-webikt-transform' , 'rotate(0deg)');
		    $print.css('-webkit-transform-origin' , '50% 50%');

		    Mycanvas.height = document.body.clientHeight;
			Mycanvas.width = document.body.clientWidth ;
	 	}
	/*else
	{	
		$("#mask p").hide();
		$("#start").show();
		$(".hint").show();
	}*/
	window.onresize = function(){
		var width = document.documentElement.clientWidth;
 		var height =  document.documentElement.clientHeight;
 		Mycanvas.height = document.body.clientHeight;
		Mycanvas.width = document.body.clientWidth ;
	  	if( width > height ){
		    console.log(width + " " + height);
		    $print =  $('body');
		    $print.width(width);
		    $print.height(height);
		    $print.css('top',  0);
		    $print.css('left',  0 );
		    $print.css('transform' , 'rotate(0deg)');
		    $print.css('transform-origin' , '50% 50%');
		    $print.css('-webikt-transform' , 'rotate(0deg)');
		    $print.css('-webkit-transform-origin' , '50% 50%');

		    Mycanvas.height = document.body.clientHeight;
			Mycanvas.width = document.body.clientWidth ;
	 	}
	 	else if( width < height ){
	      console.log(width + " " + height);
	      $print =  $('body');
	      $print.width(height);
	      $print.height(width);
	      $print.css('top',  (height-width)/2 );
	      $print.css('left',  0-(height-width)/2 );
	      $print.css('transform' , 'rotate(90deg)');
	      $print.css('transform-origin' , '50% 50%');
	      $print.css('-webikt-transform' , 'rotate(90deg)');
	      $print.css('-webkit-transform-origin' , '50% 50%');
	      Mycanvas.height = document.body.clientHeight;
		  Mycanvas.width = document.body.clientWidth ;
 		}
	}
	
}


$("#start").click(function(){
		reset();
	$("#mask").fadeOut(500);
	if(NextBpX >= -11400)
		drawtime = requestAnimationFrame(Draw);
	else{
		cancelAnimationFrame(Draw);
	}
})


var NextBpX = 0;
function move(pace){
  	NextBpX -= pace;
	Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
	$('canvas').css("-webkit-background-position",NextBpX +"px "+"100%");
	if(NextBpX <= -11380)
	{
		/*clearInterval(drawtime);
		clearInterval(time);*/
		cancelAnimationFrame(drawtime);
		$("#sign").fadeIn(3000);
		$('.hint').fadeOut();
		$('#left_button').fadeOut();
		$('#right_button').fadeOut();
	}
	for(var i = 0 ; i < checkpoint.position.length ;i++)
	{
		if(NextBpX<checkpoint.position[i] && NextBpX >checkpoint.position[i+1] && checkpoint.flag != i)
		{
			checkpoint.flag = i;
			paper_plane.Vx ++;
		}
		else if(NextBpX<=-10500)
			checkpoint.flag = 10;
	}
	
}


