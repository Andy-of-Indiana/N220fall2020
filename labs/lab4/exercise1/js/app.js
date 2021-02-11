var flavors = ["#FC5A8D", "#f3e5ab", "#7B3F00"];

function setup() {
    createCanvas(600, 400);
}

function draw() {

    noStroke();
    
    for(var i = 0; i < flavors.length; i++)
    {
        fill( flavors[i] );
        rect(i * 200 , 0, 200, 400);
    }
}