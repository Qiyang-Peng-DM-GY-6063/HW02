let drawState = false;
let ellipseHeight = 10;
let ellipseWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 100);

  background(0, 0, 0);
  noStroke();

  //rect(x, y, w, h, [tl], [tr], [br], [bl])
  //texts in [] are optional
  // rect(windowWidth/2-30,windowHeight/2-50,60,100,50,50,50,50);
}

function draw() {
  // ellipse(mouseX-ellipseWidth/2,mouseY-ellipseHeight/2,ellipseWidth,ellipseHeight);

  background("rgba(0, 0, 0, 0.01)");

  push();
  rotate(random(0, 360));
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(random(0, windowWidth), random(0, windowHeight), random(2, 65));
  pop();

  if (drawState) {
    ellipse(mouseX, mouseY, ellipseWidth, ellipseHeight);
  }
}

function mousePressed() {
  drawState = true;
}

function mouseReleased() {
  drawState = false;
}
