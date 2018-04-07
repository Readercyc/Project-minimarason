const Mycanvas = document.getElementById('Mycanvas');
Mycanvas.height = document.body.clientHeight;
Mycanvas.width = document.body.clientWidth ;
window.onresize = function(){
	Mycanvas.height = document.body.clientHeight;
	Mycanvas.width = document.body.clientWidth ;
}