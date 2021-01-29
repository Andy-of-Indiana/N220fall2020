let xPos = 400;
let yPos = 300;
let diameter = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 75, 225);
    diameter++;

    if(diameter > 200)
    {
        diameter = 1;
    }

    fill(255, 125, 0);
    noStroke();
    circle(xPos, yPos, diameter);
}