function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(255, 255, 255);
    noStroke();
    fill(255, 0, 0);

    for(let i = 1; i < 5; i++)
    {
        for(let l = 5; l > i; l--)
        {
            rect((i*55)+30, (l*55)-15, 50, 50);
        }
    }
}