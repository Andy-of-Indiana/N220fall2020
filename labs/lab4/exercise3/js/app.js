let xPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let yPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(700, 600);
}

function draw() {
    background(0);
    fill(255, 255, 255);

    xPos.push( mouseX );
    yPos.push( mouseY );
    xPos.shift();
    yPos.shift();

    for(var i = 0; i < xPos.length; i++)
    {
        circle(xPos[i], yPos[i], 25)
    }
}