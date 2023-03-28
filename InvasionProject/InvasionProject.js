//William Laflamme
//Nicholas Brown-Hernandez
//502-A22-LA Web&FX: From Theory to Practice sec.03
//Invasion Project
//https://openprocessing.org/sketch/1874350//

/*
Instruction
Mouse click to make more circles appear moving around
Press the spacebar to rtry and stop the invasion from coming forth


Analysis
The interactive part of this piece is that we are under attack from an invasion of circles and you can accept reality and o nothing rto see if they go away but to no avail because the more you do,
the more of them will come as you click the mouse. Since they are so fast you can<t catch them, only the spacebar can reduce the invasion and try to survive.
*/


let counter
let c1,c2,c3


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  c1=-100
  c2=-100
  c3=-100
  frameRate(60)
  counter = 0
}

function draw() {
  clear()
  noStroke()
  fill(255,0,0) //red circle
    circle(random(1000),random(1000),20)
  fill(0,255,0) //green circle
    circle(random(c1),random(c1),20)
  fill(0,0,255) //blue circle
    circle(random(c2),random(c2),20)
  fill(291,98,11) //orange circle
    circle(random(c3),random(c3),20)
}

function mouseClicked(){
  counter = counter + 1
    if (counter==1){
    c1=width
    }

    else if (counter==2){
    c2=width
    }
  
    else if (counter==3){
    c3=width
    }
        
}

function keyPressed(){
  if (keyCode===32){
  
  c1=-100
  c2=-100
  c3=-100
  }
  counter=0
}
