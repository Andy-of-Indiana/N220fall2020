var colors = ["#f80e0b", "#00ce00", "#0010bf"];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    noStroke();
    for (let i = 0; i < colors.length; i++)
    {
        spotLight(colors[i], 200, (i * 100) + 100);
    }
}

function spotLight(col, xPos, yPos) {
    fill(col);
    circle(xPos, yPos, 100);
}
