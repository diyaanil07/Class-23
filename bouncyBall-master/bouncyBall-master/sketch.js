const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 = new Box(200, 200, 50, 50);
box2 = new Box(100, 300, 20, 20);
ground1 = new Ground(200, 390, 400, 20);

}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
}