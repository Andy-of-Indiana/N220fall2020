var centerRectX = 125;
var centerRectY = 100;
var centerRectWidth = 50;
var centerRectHeight = 100;

var bouncingRectX = 10;
var bouncingRectY = 10;
var bouncingRectWidth = 100;
var bouncingRectHeight = 50;
var bouncingRectSpeedX = 1;
var bouncingRectSpeedY = 2;

function setup() {
  createCanvas(300, 300);
  noFill();
}

function draw() {
  background(64);

  //draw the center rectangle
  stroke(255);
  rect(centerRectX, centerRectY, centerRectWidth, centerRectHeight);

  //if I keep moving in my current X direction, will I collide with the center rectangle?
  if (bouncingRectX + bouncingRectWidth + bouncingRectSpeedX > centerRectX && 
      bouncingRectX + bouncingRectSpeedX < centerRectX + centerRectWidth && 
      bouncingRectY + bouncingRectHeight > centerRectY && 
      bouncingRectY < centerRectY + centerRectHeight) {
    bouncingRectSpeedX *= -1;
  }
  //bounce off left and right edges of screen
  else if(bouncingRectX < 0 || bouncingRectX + bouncingRectWidth > width){
    bouncingRectSpeedX *= -1;
  }
  
  //if I keep moving in my current Y direction, will I collide with the center rectangle?
  if (bouncingRectX + bouncingRectWidth > centerRectX && 
      bouncingRectX < centerRectX + centerRectWidth && 
      bouncingRectY + bouncingRectHeight + bouncingRectSpeedY > centerRectY && 
      bouncingRectY + bouncingRectSpeedY < centerRectY + centerRectHeight) {
    bouncingRectSpeedY *= -1;
  }
  //bounce off top and bottom edges of screen
  else if(bouncingRectY < 0 || bouncingRectY + bouncingRectHeight > height){
    bouncingRectSpeedY *= -1;
  }
  
  bouncingRectX += bouncingRectSpeedX;
  bouncingRectY += bouncingRectSpeedY;

  //draw the bouncing rectangle
  rect(bouncingRectX, bouncingRectY, bouncingRectWidth, bouncingRectHeight);
}
