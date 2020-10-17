//var fixedRect, movingRect
var rect1, rect2, rect3, rect4

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 80);
  rect2 = createSprite(400, 500, 50, 80);
  rect3 = createSprite(100, 350, 80, 50);
  rect4 = createSprite(500, 350, 80, 50);
  rect1.shapeColor = "red";
  rect2.shapeColor = "black";
  rect3.shapeColor = "blue";
  rect4.shapeColor = "yellow";
  rect1.velocityY = 5;
  rect2.velocityY = -5;
  rect3.velocityX = 3;
  rect4.velocityX = -3;
 // fixedRect = createSprite(200, 200, 50, 80);
  //fixedRect.shapeColor = "red";
  //movingRect = createSprite(400, 200, 80, 50);
 // movingRect.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  //if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  //fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  //movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  //fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
 //     fixedRect.shapeColor = "yellow"; 
      
  //}
  //else{
    //  fixedRect.shapeColor = "red";
      
      
  //}
  bounceOff(rect1, rect2);
  bounceOff(rect3, rect4);
  drawSprites();
}
