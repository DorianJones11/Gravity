const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engineVar,worldVar,ground;
var ball

function setup()
{
    createCanvas(400,400);
    engineVar=Engine.create();
    worldVar=engineVar.world;
    var ground_options={
        isStatic:true
      }

    var ball_options={
        restitution: 2.5
    }

    ground=Bodies.rectangle(200,390,200,20,ground_options);
    World.add(worldVar,ground);
    
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(worldVar,ball);

}
function draw()
{
    
    background(0); 
    Engine.update(engineVar); 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}