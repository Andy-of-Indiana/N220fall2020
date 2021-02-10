let xPos = 50;
let yOffset= 100;
let speed = .1;
let radius = 10;
let scalar = 10;


function setup() {
createCanvas(1500, 400);
 }

 //For fun : animate it!
function draw() {


background(220);

fill(255,0,0);

  //draws a sine curve
  	for(let i = 0; i < 50; i++) {
//circle(x, y, d)
//Math.sin(x)
 

		let yPos = Math.sin(i * speed) * radius;
		circle(i * scalar  + xPos, yPos + yOffset, 20);
}
}
