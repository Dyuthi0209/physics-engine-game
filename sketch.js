const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ball;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var ground;
var sling;
var plat1, plat2;
var bar, bar2;
var backgroundImg;
var score=0;

function preload(){

  backgroundImg = loadImage("carnival.jpg");
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
	world = engine.world;

  b1 = new Bottle(600,350,50)
  b2 = new Bottle(570,350,50)
  b3 = new Bottle(540,350,50)
  b4 = new Bottle(510,350,50)
  b5 = new Bottle(585,230,50)
  b6 = new Bottle(555,230,50)
  b7 = new Bottle(525,230,50)
  b8 = new Bottle(570,120,50)
  b9 = new Bottle(540,120,50)

 ball= new Ball(150,200,20)
 
 sling=new Sling(ball.body,{x:150,y:200});
 ground=new Ground(width/2,400,width,20);

 plat1= new Ground(550,280,200,10);
 plat2= new Ground(555,170,100,10);

 bar = new Obstructor(300,40,40,230)
 bar2 = new Obstructor(300,360,40,230)
 Engine.run(engine);

}

function draw() {
  background(backgroundImg);  

  fill("black")
textSize(20)
text("Pull and release the ball to hit the bottles!", 330,20)
text("Press the spacebar to get another chance!", 330,37)
//text("Score: "+score,10,20)

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();

b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();

ball.display();

sling.display();
ground.display();

detectCollision(ball,b1);
detectCollision(ball,b2);
detectCollision(ball,b3);
detectCollision(ball,b4);
detectCollision(ball,b5);
detectCollision(ball,b6);
detectCollision(ball,b7);
detectCollision(ball,b8);
detectCollision(ball,b9);

plat1.display();
plat2.display();

bar.display();
bar2.display();
drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  
}

function mouseReleased(){
  sling.fly();
}


function detectCollision(ball,b){
ballpos=ball.body.position
bpos=b.body.position
var distance=dist(ballpos.x,ballpos.y,bpos.x,bpos.y)
if(distance<ball.r+b.r){
  Matter.Body.setStatic(b.body,false)
}
}



function keyPressed() {
if (keyCode === 32) {
  Matter.Body.setPosition(ball.body, {x:150,y:200}) 
 sling.attach(ball.body);
}
}

