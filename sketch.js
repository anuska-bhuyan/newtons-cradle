const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var bob1;



function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
    world = engine.world;

    roof1=new roof(300,100,500,30);
    rope1=new rope(170,250,3,300);
    rope2=new rope(230,250,3,300);
    rope3=new rope(290,250,3,300);
    rope4=new rope(350,250,3,300);
    rope5=new rope(410,250,3,300);

    bob1=new bob(170,410,60);
    bob2=new bob(230,410,60);
    bob3=new bob(290,410,60);
    bob4=new bob(350,410,60);
    bob5=new bob(410,410,60);
    



	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

    
    
  
 
}



