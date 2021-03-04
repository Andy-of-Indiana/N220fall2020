var charcter = {
  xPos: 400,
  yPos: 300,
  rad: 25,
  north: function() {
    this.yPos -= 2;
  },
  east: function() {
    this.xPos += 2;
  },
  south: function() {
    this.yPos += 2;
  },
  west: function() {
    this.xPos -= 2;
  }
}
function setup() {
  createCanvas(800, 600);

}
function draw() {
  BG();
  circle(charcter.xPos, charcter.yPos, charcter.rad);
  if(keyIsDown(UP_ARROW)){
    charcter.north();
  }
  if(keyIsDown(RIGHT_ARROW)){
    charcter.east();
  }
  if(keyIsDown(DOWN_ARROW)){
    charcter.south();
  }
  if(keyIsDown(LEFT_ARROW)){
    charcter.west();
  }  
}
function BG()
{
  background(0,110,255);
  fill(255,110,0);
  noStroke();
}