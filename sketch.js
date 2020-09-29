const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var piggy,piggy1;
var logg,logg1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    logg = new log(810,260,300,PI/2);
    piggy1 = new pig(810,350);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    piggy = new pig(810,220);
    logg1 = new log(810,180,300,PI/2);
    bird1 = new bird(100,100);

    box5 = new Box (795,150,70,70);
   logg2 = new log(730,150,160,PI/7);
   logg3 = new log(820,150,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    piggy.display();
    logg.display();

    box3.display();
    box4.display();
    piggy1.display();
    logg1.display();
    bird1.display();

    box5.display();
    logg2.display();
   logg3.display();
}