
var runner , runnerImg , runnercollided;
var road , roadImg1 ;

function preload(){
  //pre-load images
runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
roadImg1 = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200,50,200);
  road.addImage(roadImg1);
  road.scale = 1.2;
  road.velocityY = 4;
  road.y = road.height/2;

  runner = createSprite(200,330,20,20);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.04;

  
  

}

function draw() {
  background("black");
if(road.y > 400 ){
  road.y = road.height/4;
}

runner.x = mouseX

var invisibleboundry1 = createSprite(0,150,50,500);
invisibleboundry1.visible = false;
runner.collide(invisibleboundry1)

var invisibleboundry2 = createSprite(390,150,30,500);
invisibleboundry2.visible = false;
runner.collide(invisibleboundry2);

  drawSprites();
}
