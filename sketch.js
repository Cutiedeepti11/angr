const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;
var pig1;

function setup(){
    var canvas = createCanvas(1100,550);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,540,2000,40);
    ball= new Ball(850,500,80,80);
    ball2= new Ball(650,500,80,80);
    ball3=new Ball(650,400,80,80);
    ball4=new Ball(850,400,80,80);
    ball5= new Ball(750,300,80,80)
    pig1= new Pig(750,500)
    pig2= new Pig(750,400)
    log= new Log(750,420,300,PI/2);
    log2= new Log(750,320,300,PI/2);
    log3= new Log(720,270,170,PI/7);
    log4= new Log(820,270,170,-PI/7);
}
function draw(){
    background("#add93f");
    Engine.update(engine);
   ground.display();
   ball.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   pig1.display();
   pig2.display();
   log.display();
   log2.display();
   log3.display();
log4.display();

   
}