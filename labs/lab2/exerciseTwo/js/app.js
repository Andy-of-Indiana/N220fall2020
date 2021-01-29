let xPos = 0;
let yPos = 300;

let xSpeed = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    xPos += xSpeed;

    if(xPos > 800)
    {
        xPos = 0;
    }

    fill(255, 255, 255);
    circle(xPos, yPos, 30);
}