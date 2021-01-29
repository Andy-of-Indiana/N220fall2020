let xPos;
let yPos;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(115,225,115);
    xPos = mouseX
    yPos = mouseY
    if(xPos > 200)
    {
        fill(255, 0, 0);
    }
    if(xPos < 200)
    {
        fill(0, 0, 225);
    }
    
    noStroke();
    circle(xPos, yPos, 30);
}