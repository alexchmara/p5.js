var spot = {
  x:100,
  y:50
}
var col = {
  r: 255,
  g: 0,
  b: 0
}
function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.r = random(1,155);
  col.g= random(1,255);
  col.b = random (50, 188);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
}
