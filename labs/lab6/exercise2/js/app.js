var circles = [
  {x: 400, y: 500, r: 25, 
    move: function() {
      this.x++;
      this.y++;
      }
  },
  {x: 200, y: 150, r: 100,
    move: function() {
      this.x++;
      this.y++;
      }
  },
  {x: 600, y: 230, r: 125,
    move: function() {
      this.x++;
      this.y++;
      }
  },
  {x: 100, y: 500, r: 75,
    move: function() {
    this.x++;
    this.y++;
    }
  },
];
function setup() {
  createCanvas(800, 600);
}
function draw() {
  BG();
  for(let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, circles[i].r);
    circles[i].move();
    if(circles[i].x > 800) {
      circles[i].x = 0;
    }
    if(circles[i].y > 600) {
      circles[i].y = 0;
    }
  }
}
function BG()
{
  background(0);
  fill(255);
  noStroke();
}