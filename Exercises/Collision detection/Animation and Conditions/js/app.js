var ball = {
    xPos: 150,
    yPos: 100,
    rad: 25,
    xSpeed: 5,
    ySpeed: 4
  }

function setup() {
    createCanvas(300, 300);
}

function draw() {
  background(64);
  circle(ball.xPos, ball.yPos, 25);

  ballProperties()

}
function ballProperties() {
    ball.xPos += ball.xSpeed;
    ball.yPos += ball.ySpeed;
    if (ball.xPos < 0 || ball.xPos > 300) {
        ball.xSpeed *= -1;
      }
    
      if (ball.yPos < 0  || ball.yPos > 300) {
        ball.ySpeed *= -1;
      }
}