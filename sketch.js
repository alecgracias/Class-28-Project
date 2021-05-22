const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
const Body = Matter.Body 
const Render= Matter.Render
const Constraint=Matter.Constraint;


var boy,tree
var ground
var mango1,mango2,mango3,mango4,mango5,mango9,mango6,mango7,mango8,mango10,mango11;
var stone
var slingshot
var slingForce=100;


function preload(){

  boy=loadImage("images/boy.png")
  tree=loadImage("images/earth.png")

}

function setup(){
  
  createCanvas(1300,600)
  
  engine = Engine.create();
  world = engine.world;           

  ground=new Ground()

  stone =new Stone(150,450,30)

  mango1 = new Mango(1050,500,PI*10)

  mango2 = new Mango(950,450,PI*8)

  mango3 = new Mango(880,500,PI*9)

  mango4 = new Mango(1000,500,PI*10)

  mango5 = new Mango(1100,250,PI*8)

  mango6 = new Mango(1200,300,PI*10)

  mango7 = new Mango(1070,150,PI*11)

  mango8 = new Mango(930,200,PI*10)

  mango9 = new Mango(900,350,PI*10)

  mango10 = new Mango(840,250,PI*9)

  mango11 = new Mango(1110,330,PI*9)

  slingshot = new Slingshot(stone.body,{x:150 , y:450});

  Engine.run(engine)


}


function draw(){
   background("white")
   
   imageMode(CENTER)
   image(boy,200,520,200,300)
   image(tree,1000,400,450,600)


   stone.display();
   ground.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   slingshot.display();



   detectollision(stone,mango1);
   detectollision(stone,mango2);
   detectollision(stone,mango3);
   detectollision(stone,mango4);
   detectollision(stone,mango5);
   detectollision(stone,mango6);
   detectollision(stone,mango7);
   detectollision(stone,mango8);
   detectollision(stone,mango9);
   detectollision(stone,mango10);
   detectollision(stone,mango11);


}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}


function mouseReleased(){
 slingshot.fly()
}


function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed(){
    if (keyCode === ENTER){
      Matter.Body.setPosition(stone.body,{x:150 , y:450});
      slingshot.attach(stone.body);
    }
  }