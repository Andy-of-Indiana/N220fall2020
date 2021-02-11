let yPos = [];

function setup() {
  createCanvas(200, 600);
  for (let i = 0; i < (height/10); i++)
  {
        yPos[i] = i*10;
  }  
}
  
function draw() {
    background(130, 130, 130);
    noStroke();
    fill(0, 0, 125);

    for (let i = 0; i < yPos.length; i+=10) {
        
            circle(100, yPos[i], 10);
            yPos[i] += 5;
            if (yPos[i] > (height+10)) {
                yPos[i] = 0;
            }
    }
}    
