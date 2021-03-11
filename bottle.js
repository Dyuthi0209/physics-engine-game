class Bottle{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("bottle.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
	
		var b=this.body.position;
		var angle = this.body.angle;
		
		if(this.body.speed<1){
			
			push();
			strokeWeight();
				 stroke("black");
			translate(b.x, b.y);
			rotate(angle);
			imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
			pop();
		  }
	
		  else{
			World.remove(world,this.body)
			push();
			this.Visiblity=this.Visiblity-5;
			tint(255,this.Visiblity)
			pop();
		  }
 }

 score(){
	if (this.Visiblity < 0 && this.Visiblity > -1005){
	  score++;
	}
  }
  
}