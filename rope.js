class rope{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
			restitution:0,
			friction:0,
			density:0.8
			
            }
            
           
		this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
		
		this.body=Bodies.rectangle(x, y, w, h, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			
			fill(255,255,255)
			
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
    
        