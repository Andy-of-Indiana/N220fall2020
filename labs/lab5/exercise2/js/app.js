xPos = 400;
yPos = 300;

function setup() {
  createCanvas(800, 600);
}
  
function draw() {
  background(255, 255, 255);
  noStroke();
  var isClose = circleColor();
  if (isClose == true) {
    fill(255, 0, 0);
  }
  else {
    fill(0);
  }
  xPos = xMovement();
  yPos = yMovement();
  circle(xPos, yPos, 25)
}

function xMovement() {
  if(mouseX == xPos)
  {
    xPos += 0;
  }
  else if(mouseX > xPos)
  {
    xPos += 3;
  }
  else if(mouseX < xPos)
  {
    xPos -= 3;
  }
  return xPos;
}

function yMovement() {
  if(mouseY == yPos)
  {
    yPos += 0;
  }
  else if(mouseY > yPos)
  {
    yPos += 3;
  }
  else if(mouseY < yPos)
  {
    yPos -= 3;
  }
  return yPos;
}
function circleColor() {
  var xDifference = Math.abs(mouseX - xPos);
  var yDifference = Math.abs(mouseY - yPos);


console.log(mouseX + " - " + xPos + " = " + xDifference);
console.log(mouseY + " - " + yPos + " = " + yDifference);


  if ((xDifference <= 7 && yDifference <= 7) == true ){
    return true;
  }
  else {
    return false;
  }
}