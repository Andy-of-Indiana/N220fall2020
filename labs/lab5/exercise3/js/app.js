function setup() {
  createCanvas(600, 600);

}

function draw() {

  background(0);
  translate(300,300);
    noStroke();
    outerplate(175);
    valancePlate(100);
    middlePlate(50);
    innerPlate(25);
}
function innerPlate(scale) {
    fill(115);
    circle(0, 0, scale*2);
    fill(255);
    for( let i = 0; i < 1000; i++) {
        circle(sin(i * 2) * scale*1.5 , sin(i * 4) * scale, 10);
        circle(sin(i * 4) * scale , sin(i * 2) * scale*1.5, 10);
      } 
}
function middlePlate(scale) {
    fill(100);
    circle(0, 0, scale*1.5);
    fill(150);
    for( let i = 0; i < 1000; i++) {
        circle(cos(i * 1) * scale*1.5 , sin(i * 2) * scale, 10);
        circle(sin(i * 2) * scale , cos(i * 1) * scale*1.5, 10);
      } 
}
function valancePlate(scale) {
    fill(50);
    circle(0, 0, scale*2);
    fill(100);
    for( let i = 0; i < 1000; i++) {
        circle(sin(i * 2) * scale*1.75 , sin(i * 3) * scale, 15);
        circle(sin(i * 3) * scale , sin(i * 2) * scale*1.75, 15);
    }  
}
function outerplate(scale) {
    fill(25);
    circle(0, 0, scale*2);
    fill(50);
    for( let i = 0; i < 1000; i++) {
        circle(cos(i * 3) * scale , sin(i * 1) * scale*1.5, 15);
        circle(cos(i * 1) * scale*1.5 , sin(i * 3) * scale, 15);

    }  
}

