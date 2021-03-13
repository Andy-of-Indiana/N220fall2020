var canvasLength = 600;
var canvasWidth = 800;
var counter = 0;

var paddle = {
  xPos: 100,
  yPos: 250,
  width: 50,
  length: 150,

  up: function() {
    this.yPos -= 20;
  },
  down: function() {
    this.yPos += 20;
  },
}
var ball = {
  xPos: 700,
  yPos: 300,
  rad: 25,
  width: 50,
  length: 50,
  xSpeed: 5,
  ySpeed: 4
}

function setup() {
  createCanvas(canvasWidth, canvasLength);

}
function draw() {
  BG();
  rect(paddle.xPos ,paddle.yPos, paddle.width, paddle.length);
  if(keyIsDown(UP_ARROW)){
    paddle.up();
  }
  if(keyIsDown(DOWN_ARROW)){
    paddle.down();
  }
  paddleProperties();

  circle(ball.xPos, ball.yPos, ball.rad);
  ballProperties();
  console.log(counter);

}

function ballProperties() {
  ball.xPos -= ball.xSpeed;
  ball.yPos -= ball.ySpeed;

  if(ball.xPos < 0) {
    ball.xPos = 700;
    ball.xSpeed = 5;
    ball.ySpeed = 4;
    counter = 0;
  }
  if (ball.xPos + ball.width  > paddle.xPos && ball.xPos < paddle.xPos + paddle.width && ball.yPos + ball.length > paddle.yPos && ball.yPos < paddle.yPos + paddle.length) {
    ball.xSpeed += 1;
    ball.xSpeed *= -1;
    ball.ySpeed += 1;
    ball.ySpeed *= -1;
    counter++;
  }
  else if(ball.xPos > canvasWidth){
    ball.xSpeed *= -1;
  }
  else if(ball.yPos < 0 || ball.yPos > canvasLength){
    ball.ySpeed *= -1;
  }

}
function paddleProperties() {
  if(paddle.yPos < 0){
    paddle.yPos = 0;
  }
  if (paddle.yPos > (canvasLength - paddle.length)){
    paddle.yPos = (canvasLength - paddle.length);
  }
}

function BG()
{
  background(0);
  fill(0,209,0);
  noStroke();
}