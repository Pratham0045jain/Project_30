const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var shoot, slingShot;

function setup() {


  
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  base = new Ground(600,400,1200,20);
  
  ground = new Ground(600,290,360,16);
  ground1 = new Ground(1000,190,250,16);

  //level1
  block = new Box(500,250,40,50,);
  block1 = new Box(540,250,40,50,);
  block2 = new Box(580,250,40,50,);
  block3 = new Box(620,250,40,50,);
  block4 = new Box(660,250,40,50,);
  block5 = new Box(700,250,40,50,);
  block6 = new Box(740,250,40,50,);

  //level2
  block7 = new Box(540,200,40,50);
  block8 = new Box(580,200,40,50);
  block9 = new Box(620,200,40,50);
  block10 = new Box(660,200,40,50);
  block11= new Box(700,200,40,50);

  //leve3
  block12 = new Box(580,150,40,50);
  block13 = new Box(620,150,40,50);
  block14 = new Box(660,150,40,50);

  //level4
  block15 = new Box(620,100,40,50);


  // blocks for the next tower

  //level1
  block16 = new Box(920,150,40,50);
  block17 = new Box(960,150,40,50);
  block18 = new Box(1000,150,40,50);
  block19 = new Box(1040,150,40,50);
  block20 = new Box(1080,150,40,50);

  //level2
  block21 = new Box(960,100,40,50);
  block22 = new Box(1000,100,40,50);
  block23 = new Box(1040,100,40,50);

  //level3
  block24 = new Box(1000,50,40,50);


  shoot = new Hexagon(200,100,70,70);

  slingshot = new SlingShot(shoot.body,{x:200, y:100});


  
}

function draw() {
  background(89, 62, 33); 
  Engine.update(engine); 

  base.display();

  ground.display();
  ground1.display();

  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();

  block15.display();

  //next tower

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();

  
  block24.display();

  shoot.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(shoot.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode===32){
      slingshot.attach();
  }
}
