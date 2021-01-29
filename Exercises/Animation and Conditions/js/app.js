let xPos = 1;
let yPos = 1;

let xSpeed = 5;
let ySpeed = 2;

const xMax = 1300;

function setup() {
    createCanvas(xMax, 600);
}

function draw() {
    background(0);
    xPos += xSpeed;
    yPos += ySpeed;


    if(xPos > xMax)
    {
        xPos = 0;
    }
    if(yPos > 600)
    {
        yPos = 0;
    }



    fill(255, 255, 255);
    circle(xPos, yPos, 30);
}