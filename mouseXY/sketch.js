function setup() {
  createCanvas(600, 600);
  background(255, 165, 0);
}

function draw() {

  noStroke();
  fill(123, 10, 190);
  ellipse(mouseX, mouseY, 80, 80);

  rect(140, 340, 135, 145);
}
function mousePressed(){
  background(255, 165, 0);
}
