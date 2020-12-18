const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world
  
  ground1 = new Ground(240, 795, 480, 10);
  ground2 = new Ground(475, 400, 10, 800);
  ground3 = new Ground(240, 5, 480, 10);
  ground4 = new Ground(5, 400, 10, 800);
  mainGround = new Ground(240, 785, 460, 10);

  for(var k = 0; k <=width; k = k + 78){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinkos(j, 75, 10));
  }

  for(var j = 15; j <=width-10; j = j + 50){
    plinkos.push(new Plinkos(j, 175, 10));
  }

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinkos(j, 275, 10));
  }

  for(var j = 15; j <=width-10; j = j + 50){
    plinkos.push(new Plinkos(j, 375, 10));
  }

}

function draw() {
  background(0);  
  text(mouseX+ ","+mouseY,mouseX,mouseY);
  Engine.update(engine);

  push ()
  fill ("brown")
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  pop ()
  push ()
  fill ("white")
  mainGround.display();
  pop ()
  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j = j++){

    plinkos[j].display();
  }


}