/*
 * @name Mouse 2D
 * @description Moving the mouse changes the position and
 * size of each box.
 */
function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230);
  fill(0,128,128);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(255, 239, 93);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}
