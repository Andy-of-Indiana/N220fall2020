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
  ballProperties()
console.log(counter)
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
    counter++;
  }
  else if(ball.xPos > canvasWidth){
    ball.xSpeed *= -1;
  }
  if (ball.xPos + ball.width > paddle.xPos && ball.xPos < paddle.xPos + paddle.width && ball.yPos + ball.length  > paddle.yPos && ball.yPos  < paddle.yPos + paddle.length) {
  ball.ySpeed += 1;
  ball.ySpeed *= -1;
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

//2. A ball/circle that starts moving to the left of the screen.
//3. This ball bounces off the TOP, BOTTOM, and LEFT of the screen.
//4. This ball bounces off the paddle (use hitTestPoint)
//5. If the ball goes beyond the right of the screen, place the ball back at the center of the screen and set its velocity to the left again.
//7. (optional) Display a "score" number on the screen that ticks up by 1 every time the player catches the ball with the paddle. Resets to zero when the ball resets.
