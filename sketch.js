

function setup() {
  
  createCanvas(300, 200);
  background(127);
 
}

function draw() {

 var xloc = randomGaussian()
 var sd = 90;
 var mean = width/2;
  // Scale the gaussian random number by standard deviation and mean
 xloc = (xloc*sd) + mean;

 noStroke();
 fill(0, 10);
 ellipse(xloc, height/2, 16,16);
}

