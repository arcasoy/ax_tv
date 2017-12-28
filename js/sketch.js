let balls;
let wheelCenter;
let radius;

let angle = 0;
let omega = 0;

function setup() {

  let width = 0.5 * displayWidth;
  let height = 0.8 * displayHeight;
  let canvas = createCanvas(width, height);
  canvas.parent("circle-menu");

  balls = createBalls();

  wheelCenter = createVector(40, (height / 2));
  radius = 250;

  console.log("p5 setup complete");
}

function draw() {
  background("#123456");

  drawWheel();
  wheelUpdate();
  console.log(angle, omega);
}

function drawWheel() {
  let len = balls.length;
  let increment = 2 * PI / len;
  for (let i = 0; i < balls.length; i++) {
    let x = radius * cos((i * increment) + angle);
    let y = radius * sin((i * increment) + angle);
    balls[i].pos.set(x + wheelCenter.x, y + wheelCenter.y);
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].render();
  }
}

function mouseWheel(event) {
  let c = 0.001;
  omega += c * event.delta;
}

function wheelUpdate() {
  angle += omega;
  omega *= 0.3;
}
