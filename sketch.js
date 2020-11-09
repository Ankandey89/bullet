var thickness, wall;
var speed,weight,bullet;

function setup() {
createCanvas(1600,400);
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
wall=createSprite(1000,200,thickness,200);
wall.shapeColor=(80,80,80);
bullet=createSprite(200,200,10,10);

}

function draw() {
  background(0);
    bullet .velocityX = speed;
  
   if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
        if(damage > 10){
    wall.shapeColor=color(255,0,0);
  }
  
    if(damage < 10){
      wall.shapeColor=color(230,230,0);
  }
  

}

    drawSprites();
  }
  function hasCollided(lbullet , lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    {
      return false;
    }
  }
  
  