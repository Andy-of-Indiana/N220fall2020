var singleCircle = {
    xPos: 400,
    yPos: 300,
    rad: 100,
    move: function() {
        this.xPos++;
        this.yPos++;
    }
}
  function setup() {
    createCanvas(800, 600);
  }
  function draw() {
    BG();
    circle(singleCircle.xPos, singleCircle.yPos, singleCircle.rad);
    singleCircle.move();

    if(singleCircle.xPos > 800) {
        singleCircle.xPos = 0;
    }
    if(singleCircle.yPos > 600) {
        singleCircle.yPos = 0;
    }
}
  function BG()
  {
    background(255);
    fill(0);
    noStroke();
  }