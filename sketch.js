const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,ball3;
var ground;
var con,con2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  
ball3 = Bodies.circle(200,200,10,ball_options);
World.add(world,ball3)

  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:1
        });
  
      World.add(world,con);
      
 con2 = Matter.Constraint.create({
      bodyA:ball,
      bodyB:ball3,
      length:100,
      stiffness:1
});
      World.add(world,con2)


    
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10)


  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(ball.position.x,ball.position.y,ball3.position.x,ball3.position.y);
  
  pop();

 
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

