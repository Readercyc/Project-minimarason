var leftbutton = document.getElementById('left_button');
var rightbutton = document.getElementById('right_button');
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
		this.ctx.fillStyle = "#000";
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
		let ctx = Mycanvas.getContext('2d')
		let img = new Image();
		img.src = "./img/left_shoe.png";
		ctx.drawImage(img,leftKnee.x-leftKnee.r-3,leftKnee.y-2);
		this.ctx.closePath();
	},
	walk:function(pace){
		if(/*this.x + pace<=rightKnee.x*/1)
		{
			let square_c = (head.x - this.x)*(head.x - this.x) + (this.y - head.y)*(this.y - head.y);
			head.y = this.y - Math.sqrt(square_c - (head.x - this.x - pace)*(head.x - this.x - pace));

			square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));


			this.x += pace;
			rightKnee.x -= pace;
			leftElbow.x -= pace;
			rightElbow.x += pace;
			
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
		let ctx = Mycanvas.getContext('2d')
		let img = new Image();
		img.src = "./img/right_shoe.png";
		ctx.drawImage(img,rightKnee.x-rightKnee.r+4,rightKnee.y-2);
		this.ctx.closePath();
	},
	walk:function(pace){
		if(/*this.x + pace<=rightKnee.x*/1)
		{
			let square_c = (head.x - this.x)*(head.x - this.x) + (this.y - head.y)*(this.y - head.y);
			head.y = this.y - Math.sqrt(square_c - (head.x - this.x - pace)*(head.x - this.x - pace));
			square_c = (waist.x - this.x)*(waist.x - this.x) + (this.y - waist.y)*(this.y - waist.y);
			waist.y = this.y - Math.sqrt(square_c - (waist.x - this.x - pace)*(waist.x - this.x - pace));

			this.x += pace;
			leftKnee.x -= pace;
			leftElbow.x += pace;
			rightElbow.x -= pace;
			
			
		}

	}
}
let paper_plane = {
	y :head.x,
	Vx : 4 ,
	height:30,
	width:70,
	touch:0,
	__init:function(){
		this.x = Mycanvas.width;
		this.y = head.y;
	},
	draw:function(){
			let img = new Image();
			img.src = './img/plane.png'
			let ctx = Mycanvas.getContext('2d');
			ctx.drawImage(img,this.x,this.y,this.width,this.height);
			
			
			if(this.x<-1000)
			{
				this.__init();
				this.touch = 0;
			}
			if(((this.x <= leftKnee.x + leftKnee.r )|| (this.x <= leftKnee.x - leftKnee.x)|| (this.x <= rightKnee.x + rightKnee.r )|| (this.x <= rightKnee.x - rightKnee.r) )&& this.touch == 0)
			{
				this.touch = 1;

				if(this.y<=leftKnee.y+leftKnee.r || this.y<=rightKnee.y+rightKnee.r)
				{
					NextBpX = checkpoint.position[checkpoint.flag];
					Mycanvas.style.backgroundPosition = NextBpX +"px "+"100%";
					console.log("你撞到了纸飞机");
				}
			}
			this.x -= this.Vx;
	}

}
let checkpoint = {
	flag:0,
	touch:false,
	position:[0,-900,-1700,-2800,-3800,-4800,-6800,-7600,-8500,-9400,-10500]
}

let time_capsule = {
	touch:0,
	__init:function(){
		this.x = Mycanvas.width + 200;
		this.y = 0.6 * Mycanvas.height;
		this.r = 10;
		this.flag = 0;
		
	},
	move:function(pace){
		this.x -= pace;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		/*clearcanvas();*/
		if(this.x<-3000)
		{
			this.__init();
			
		}
		if(((this.x <= leftKnee.x + leftKnee.r )|| (this.x <= leftKnee.x - leftKnee.x)|| (this.x <= rightKnee.x + rightKnee.r )|| (this.x <= rightKnee.x - rightKnee.r) )&& this.flag == 0)
		{
			this.flag = 1;
			console.log("!!!")
			if(this.touch == 3)
			{

				console.log("时光胶囊已满");
				return ;
			}

			if(this.y<=leftKnee.y+leftKnee.r || this.y<=rightKnee.y+rightKnee.r && this.touch <=3)
			{
				this.touch++;
				console.log("你有" + this.touch + "时光胶囊");
			}
		}

		ctx.beginPath();
		ctx.fillStyle = '#000';
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,1);
		ctx.fill();
		ctx.closePath();



	}
}

