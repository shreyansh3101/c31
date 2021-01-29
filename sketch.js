const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rain

var rand,thunder;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
 thunder1=loadImage("images/thunderbolt/1.png")   
thunder2=loadImage("images/thunderbolt/2.png")
thunder3=loadImage("images/thunderbolt/3.png")
thunder4=loadImage("images/thunderbolt/4.png")


}

function setup(){
 createCanvas(500,1000)  
 engine = Engine.create();
 world = engine.world;
 rain=new Rain(random(0,500),10,10,10)
 
}

function draw(){
    background(0)
    Engine.update(engine);
    
    rain.display() 
    rand=Math.round(random(1,4))
    if (frameCount%10===0){
thunder=createSprite(random(10,500),random(10,30),10,10)
switch (rand){
case 1:thunder.addImage(thunder1)
break;
case 2:thunder.addImage(thunder2)
break;
case 3:thunder.addImage(thunder3)
break;
case 4:thunder.addImage(thunder4)
break;
default:break;
}
thunder.scale=random(0.3,0.6)
    }
}   

