function setup() {
    createCanvas(800, 600);
}

function draw() {

    background(100, 100, 100);
    fill(255, 255, 255);

    for(let i = 35; i > 0; i--)
    {
        circle(400, 300, i*8)
    }
}