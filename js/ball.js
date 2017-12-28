const BALL_DIM = 100;
const IMAGE_DIM = 70;

class Ball {
  constructor(ballObj) {
    this.pos = ballObj.pos;
    this.link = ballObj.link;
    this.img1 = loadImage(ballObj.img1);
    this.img2 = loadImage(ballObj.img2);
    this.col1 = ballObj.col1;
    this.col2 = ballObj.col2;
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);

    let col = this.col1;
    let img = this.img1;
    if (this.hovered()) {
      col = this.col2;
      img = this.img2;
    }

    fill(col);
    noStroke();

    ellipseMode(CENTER);
    ellipse(0, 0, 2 * BALL_DIM, 2 * BALL_DIM);

    imageMode(CENTER);
    image(img, 0, 0, 2 * IMAGE_DIM, 2 * IMAGE_DIM);

    pop();
  }

  hovered() {
    return dist(mouseX, mouseY, this.pos.x, this.pos.y) <= BALL_DIM;
  }

}

function createBalls() {
  let balls = [];

  // Twitch
  balls.push(new Ball({
    pos: createVector(100, 100),
    link: "https://www.twitch.tv/ax_tv",
    img1: "images/twitch.jpg",
    img2: "images/twitch.png",
    col1: 255,
    col2: color(100, 65, 165)
  }));

  // YouTube
  balls.push(new Ball({
    pos: createVector(300, 100),
    link: "http://kerpar.co",
    img1: "images/youtube.jpg",
    img2: "images/youtube.png",
    col1: 255,
    col2: color(255, 0, 0)
  }));

  // Business
  balls.push(new Ball({
    pos: createVector(100, 300),
    link: "http://kerpar.co",
    img1: "images/briefcase.jpg",
    img2: "images/briefcase.png",
    col1: 255,
    col2: color(35, 177, 77)
  }));

  // Discord
  balls.push(new Ball({
    pos: createVector(300, 300),
    link: "http://kerpar.co",
    img1: "images/discord.jpg",
    img2: "images/discord.png",
    col1: 255,
    col2: color(140, 158, 255)
  }));

  // Alex
  balls.push(new Ball({
    pos: createVector(100, 500),
    link: "http://kerpar.co",
    img1: "images/logo.jpg",
    img2: "images/logo.jpg",
    col1: 0,
    col2: 0
  }));

  return balls;
}
