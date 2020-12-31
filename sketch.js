var bullet, weight , speed;
var wall , thickness;

function setup() {
  createCanvas(1600,400);

  thickness =random (23,84);

  speed = random(223,321);
  weight = random(30,52)

  bullet = createSprite(0,200,50,50);
  bullet.shapeColor = "white";
  

  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  
if(hascollided(bullet,wall))
{
  bullet.velocityX = 0;
    var damage= 0.5 * weight *  speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
       wall.shapeColor=color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true; 
  }
  return false;
}

