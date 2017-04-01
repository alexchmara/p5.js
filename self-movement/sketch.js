var circle = {
  x:0,
  y:150,
  diameter: 80
};
var circle1 = {
  x:55,
  y:0,
  diameter: 80
};
function setup() {
  createCanvas(800, 800);
  background(180, 145, 3);
}

function draw() {

  noStroke();
  fill(123);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x = circle.x + 5;

  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);

  circle1.y = circle1.y +10;
}
