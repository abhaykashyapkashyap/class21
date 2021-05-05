var fixed,moving;
var s1,s2,s3,s4
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400,200,50,70);
  fixed.shapeColor="green";
  moving=createSprite(200,200,70,50);
  moving.shapeColor="blue";
  s1=createSprite(600,300,10,10);
  s1.shapeColor="lightgreen";
  s2=createSprite(200,300,10,10);
  s2.shapeColor="lightblue"
  s2.velocityX=3;
  s1.velocityX=-3
  s3=createSprite(600,100,10,10);
  s3.shapeColor="gray";
  s4=createSprite(200,100,10,10);
  s4.shapeColor="brown"
  s4.velocityX=3;
  s3.velocityX=-3
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(istouching(moving,fixed)){
    moving.shapeColor="yellow"
    fixed.shapeColor="black"
  } 
  else{
    moving.shapeColor="blue"
    fixed.shapeColor="green"
  }
  bounceoff(s1,s2)
  collide(s3,s4)
  drawSprites();
}
