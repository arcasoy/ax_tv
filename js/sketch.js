let balls;
let len;
let increment;
let wheelCenter;
let radius;

let angle = 6.28;
let omega = 0;
let desiredAngle = angle;
let moving = false;

let title;
let content;

function setup() {

  let width = 0.3 * displayWidth;
  let height = 0.8 * displayHeight;
  let canvas = createCanvas(width, height);
  canvas.parent("circle-menu");

  balls = createBalls();
  len = balls.length;
  increment = 2 * PI / len;
  for (let i = 0; i < balls.length; i++) {
    balls[i].angle = 2 * PI - i * increment;
  }

  wheelCenter = createVector(40, (height / 2));
  radius = 250;

  title = select("#title");
  content = select("#content");

  console.log("p5 setup complete");
}

function draw() {
  background("#123456");

  drawWheel();
  wheelUpdate();
  drawText();
}

function drawWheel() {

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
  moving = false;
  let c = 0.001;
  omega += c * event.delta;
}

function mouseClicked() {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].hovered()) {
      moving = true;
      desiredAngle = balls[i].angle;
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === UP_ARROW) {
    desiredAngle = angle - increment - 0.0005;
    moving = true;
  } else if (keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW) {
    desiredAngle = angle + increment + 0.0005;
    moving = true;
  }
}

function wheelUpdate() {
  angle += omega;
  omega *= 0.3;
  if (moving) {
    moveToAngle(desiredAngle);
  }
  if (angle < 0) {
    angle += 2 * PI;
  } else if (angle > 2 * PI) {
    angle -= 2 * PI;
  }
}

function moveToAngle(desiredAngle) {
  if (angle - desiredAngle > PI) {
    angle = lerp(angle - 2 * PI, desiredAngle, 0.1);
  } else if (desiredAngle - angle > PI) {
    angle = lerp(angle, desiredAngle - 2 * PI, 0.1);
  } else {
    angle = lerp(angle, desiredAngle, 0.1);
  }

  if (abs(desiredAngle - angle) < 0.02) {
    moving = false;
  }
}

function closestBall() {
  let threshold = increment / 2.5;
  for (let i = 0; i < balls.length; i++) {
    if (abs(balls[i].angle - angle) < threshold) {
      return balls[i];
    }
  }
}

function drawText() {
  title.html("");
  content.html("");
  title.attribute("href", "");
  if (closestBall() && omega < 0.1) {
    let ball = closestBall();
    content.html(ball.content);
    title.html(ball.title);
    title.attribute("href", ball.link);
  }
}
