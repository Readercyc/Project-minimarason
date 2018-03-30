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
		this.ctx.fill();
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
			if(this.x >= checkpoint.x && checkpoint.touch == 0)
			{
				console.log("你碰到了检查点");
				checkpoint.touch = 1;
			}
			move(pace);
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
		this.ctx.fillStyle = "#000";
		this.ctx.fill();
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
			if(this.x >= checkpoint.x && checkpoint.touch == 0)
			{
				console.log("你碰到了检查点");
				checkpoint.touch = 1;
			}
			move(pace);
			
		}

	}
}
let paper_plane = {
	y :0.6 * Mycanvas.height,
	Vx : 6,
	width:20,
	touch:0,
	__init:function(){
		this.x = Mycanvas.width;
	},
	draw:function(){
			let ctx = Mycanvas.getContext('2d');
			ctx.fillRect(this.x,this.y,this.width,this.width);
			ctx.fillStyle = "#000";
			this.x -= this.Vx;
			if(this.x<-1000)
			{
				this.__init();
				this.touch = 0;
			}
			if(((this.x <= leftKnee.x + leftKnee.r )|| (this.x <= leftKnee.x - leftKnee.x)|| (this.x <= rightKnee.x + rightKnee.r )|| (this.x <= rightKnee.x - rightKnee.r) )&& this.touch == 0)
			{
				this.touch = 1;

				if(this.y<=leftKnee.y+leftKnee.r || this.y<=rightKnee.y+rightKnee.r)
					console.log("你撞到了纸飞机");
			}
			DrawJoice();
			DrawLimb();
	}

}
let checkpoint = {
	flag:0,
	touch:0,
	__init:function(){
		this.x = Mycanvas.width,
		this.y = 0.4 * Mycanvas.height,
		this.width = 30,
		this.height = 50
	},
	move:function(pace){
		this.x -= pace;
	},
	draw:function(){
		let ctx = Mycanvas.getContext('2d');
		/*clearcanvas();*/
		ctx.fillStyle = '#000';
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
}