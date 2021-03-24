const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box3 = new Box(700,200,70,70);
    box4 = new Box(920,200,70,70);

    ground = new Ground(600,height,1200,20);

    pig1 = new pig(800,320);
    pig2 = new pig(830,170);

    log1 = new wlog(810,260,300,PI/2);
    log2 = new wlog(810,150,300,PI/2);

    bird1 = new Bird(50,50,50,50);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
    
    
}