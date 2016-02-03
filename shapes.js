// in class assignment 1

//P5 library


function setup(){
    createCanvas (1000,1750);
}

function draw(){

//bullseye

    ellipse(100,100,140,140);
    ellipse(100,100,120,120);
    ellipse(100,100,100,100);
    ellipse(100,100,80,80);
    ellipse(100,100,60,60);
    ellipse(100,100,40,40);
    ellipse(100,100,20,20);

//square

    fill("red");
    rect(50,200,100,100);
    fill("green");
    rect(160,200,100,100);
    fill("blue");
    rect(50,310,100,100);
    fill("gold");
    rect(160,310,100,100);

//x

    line(150,450,50,550);
    line(50,450,150,550);

//dice

	//outer + inner box

    fill("black");
    rect(50,600,500,500);
    fill("white");
    rect(100,650,400,400);

	//circles

    stroke("DarkBlue");
    strokeWeight(10)
    fill("cyan");
    ellipse(170,720,70,70);
    ellipse(430,720,70,70);
    ellipse(305,855,70,70);
    ellipse(170,980,70,70);
    ellipse(430,980,70,70);

//snowman

    //box

    noStroke();
    fill("lightBlue");
    rect(50,1150,300,550);

    //body

    stroke("grey");
    strokeWeight(4)
    fill("white");
    ellipse(200,1550,200,200);
    ellipse(200,1420,150,150);
    ellipse(200,1310,120,120);

    //eyes

    stroke("black");
    fill("black");
    ellipse(180,1300,20,20)
    ellipse(220,1300,20,20)

    //nose

    noStroke();
    fill("orange")
    triangle(190,1320,210,1320,200,1350);

}
