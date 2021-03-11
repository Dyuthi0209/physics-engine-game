class Obstructor
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true		

			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var obPos=this.body.position;		
			push()
			translate(obPos.x, obPos.y);
			rectMode(CENTER)
			fill(0,0,0)
			rect(0,0,this.w, this.h);
			strokeWeight(7);
            stroke(	119, 221, 119);
			pop()
			
	}

}