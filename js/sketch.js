let balls;

function setup() {

  let width = 0.5 * displayWidth;
  let height = 0.75 * displayHeight;
  let canvas = createCanvas(width, height);
  canvas.parent("circle-menu");

  balls = createBalls();

  console.log("p5 setup complete");
}

function draw() {
  background(255);

  for (let i = 0; i < balls.length; i++) {
    balls[i].render();
  }

}
