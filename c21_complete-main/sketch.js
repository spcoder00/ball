const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

let engine
let world

var ground
var left
var right
var top_eall
var ball


var btn1
var btn2
// var btn3
// var btn4

function setup() {
createCanvas(400,400)
engine=Engine.create()
world=engine.world
btn1=createImg("right.png")
btn1.position(220,30)
btn1.size(50,50)
btn1.mouseClicked(hforce)

btn2=createImg("up.png")
btn2.position(20,30)
btn2.size(50,50)
btn2.mouseClicked(vforce)

// btn3=createImg("right.png")
// btn3.position(300,30)
// btn3.size(50,50)
// btn3.mouseClicked(h2force)

// btn4=createImg("right.png")
// btn4.position(300,30)
// btn4.size(50,50)
// btn4.mouseClicked(v2force)

ground =new Ground(200,390,400,20);
right = new Ground(390,200,20,400);
left = new Ground(10,200,20,400);
top_wall = new Ground(200,10,400,20);

var ball_options = {
restitution: 1
}
ball=Bodies.circle(200,100,20,ball_options)

World.add(world,ball)
rectMode(CENTER)
ellipseMode(RADIUS)


}

function draw() 
{
  background('#0a2df5');

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hforce()
{
Matter.Body.applyForce(ball,(x:0,y:0),(x:0.05,y:0))

}
function vforce()
{
  Matter.Body.applyForce(ball,(x:0,y:0),(x:0,y:-0.5))
}