var canvasLength = 600; //length and width of canvas
var canvasWidth = 700;

let xPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //10 instances of circles
let yPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(canvasWidth, canvasLength);
}

function draw() {
  BG();
  mouseTracking(); //tracks mouse

  for(var i = 0; i < yPos.length; i++)
  {
    fill(255 - (xPos[i] / 3)); //makes colors brighter when xPos is closer to 0, and vice versa
    circle(xPos[i], yPos[i], ( 255 - (xPos[i] / 3)));  //for radius of circle, gets bigger when xPos is closer to 0 and vice versa
      if(mouseIsPressed) { //if statement if mouse if pressed circles go down
        yPos[i] += 25;
    
        if (yPos[i] > canvasLength) //if statement if circles hit canvaslength they stop
        {
          yPos[i] = canvasLength;
        }
      }  }  
}
function BG()
{
  background(255);
}
function mouseTracking()
{
  xPos.push( mouseX ); //from snake exercies from lab 4, adds x and y pos of mouse to arrays
  yPos.push( mouseY );
  xPos.shift(); // removes item form the beginning of the array
  yPos.shift();
}
