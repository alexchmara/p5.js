var on = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (on == true) {
    background(0, 255, 0);
  } else {
    background(255, 0, 0);
  }

  strokeWeight(10);
  fill(123, 10, 190);
  ellipse(150, 250, 180, 180);
}
// if (mouseIsPressed){
//   background(123,234,23);
// }
