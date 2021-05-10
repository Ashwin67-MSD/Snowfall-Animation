const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var snows = []

function preload(){
  bg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
 

  engine = Engine.create();
  world  = engine.world;
}

function draw() {
  Engine.update(engine)
  background(bg)
  
  if(frameCount%6===0){
    snows.push(new snow(random(0,800),30,30,30))
  }
  for(var Sn=0;Sn<snows.length;Sn++){snows[Sn].display()}
}