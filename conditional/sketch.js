var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  stroke(255,123,2);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 140, 140);
  if(x > width || x < 0){
   speed = speed * -1;
  }
 x = x + speed;

}
