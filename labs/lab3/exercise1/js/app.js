function setup() {
    createCanvas(1010, 200);
}

function draw() {

    background(0);

    for(let i = 1; i < 26; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            fill(0 ,0 ,128);
            rect((i*40)-35 ,80 ,40, 40);
        }
        else if (i % 5 == 0)
        {
            fill(0 ,128 ,0);
            rect((i*40)-35 ,80 ,40, 40);
        }
        else if (i % 3 == 0)
        {
            fill(128 ,0 ,128);
            circle((i*40)-15 ,100 ,20);
        }
        else
        {
            fill(255 ,255 ,255);
            circle((i*40)-15 ,100 ,20);
        }
    }
}