
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var angle = 60;
var rotator2;
var angle1 = 60;
var angle2 = 60;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var particle_options = {
		restitution: 0.4,
		friction: 0.02
	}

	var particle1_options = {
		restitution: 0.5,
		friction: 0.03
	}

	var rotator_options = {
		isStatic: true
	};

	var block1_options = {
		isStatic: true
	};

	
particle1 = Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);

particle2 = Bodies.circle(220,10,10,particle_options);
World.add(world,particle2);

particle3 = Bodies.circle(220,10,10,particle_options);
World.add(world,particle3);

	//Create the Bodies Here.
rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);

console.log(rotator1)

rotator2 = Bodies.rectangle(250,200,170,20,rotator_options);
World.add(world,rotator2);

rotator3 = Bodies.rectangle(250,200,190,20,rotator_options);
World.add(world,rotator3);

block1 = Bodies.rectangle(200,390,400,20,block1_options);
World.add(world,block1);

block2 = Bodies.circle(380,395,20,block1_options);
World.add(world,block2);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() 
{

  background(51);
  Engine.update(engine);
  Matter.Body.rotate (rotator1,angle)
  push();
  translate (rotator1.position.x,rotator1.position.y);
  rotate (angle);
  rect(0,0,150,20);
  pop ();

  console.log(rotator1.angle)
Matter.Body.rotate(rotator2,angle1)
push();
translate (rotator2.position.x,rotator2.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();

Matter.Body.rotate(rotator3,angle1)
push();
translate (rotator3.position.x,rotator3.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();

rect(block1.position.x,block1.position.y,150,20);
rect(block2.position.x,block2.position.y,150,20);
ellipse(particle1.position.x,particle1.position.y,10);
ellipse(particle2.position.x,particle2.position.y,10);
ellipse(particle3.position.x,particle3.position.y,10);

angle = angle+0.2;
angle1 = angle1+0.5;
angle2 = angle2+0.8;

  drawSprites();

 
}



