function setup()
{
    var offset = 225;
    var base = 250;

    createCanvas(1350, 605);

    //outer
    
    stroke(256,140,140);
    strokeWeight(25);
    circle(500, 300, base);

    fill(256,170,170);
    noStroke();
    circle(500, 300, 225);

    stroke(256,140,140);
    strokeWeight(55);
    circle(700, 100, base);

    fill(256,170,170);
    noStroke();
    circle(700, 100, 225);

    stroke(256,140,140);
    strokeWeight(20);
    circle(700, 500, base);

    fill(256,170,170);
    noStroke();
    circle(700, 500, 225);

    stroke(256,140,140);
    strokeWeight(25);
    circle(900, 300, base);

    fill(256,170,170);
    noStroke();
    circle(900, 300, 225);

    //inner

    offset = offset - 5;
    fill(256,100,100);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 10;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,90,90);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);  

    offset = offset - 5;
    fill(256,80,80);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,70,70);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 10;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,60,60);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);  
    
    offset = offset - 5;
    fill(256,50,50);
    noStroke();
    circle(700, 300, offset);

    offset = offset - 5;
    fill(256,256,256);
    noStroke();
    circle(700, 300, offset);

    fill(256,25,25);
    noStroke();
    circle(700, 300, 151);

    fill(256,256,256);
    noStroke();
    circle(700, 300, 150);

    fill(256,0,0);
    noStroke();
    circle(700, 300, 100);



}