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
    this.title = ballObj.title;
    this.content = ballObj.content;
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

  // Alex
  balls.push(new Ball({
    title: "Alex's Website",
    content: "This is some randomly generated text that just so happens to contain perfect English. I need to longify this thing so that I know it can withstand whatever Alex wants to throw at it.",
    pos: createVector(100, 500),
    link: "http://kerpar.co",
    img1: "images/logo.jpg",
    img2: "images/logo.jpg",
    col1: 0,
    col2: 0
  }));

  // YouTube
  balls.push(new Ball({
    title: "YouTube",
    content: "This is some randomly generated text that just so happens to contain perfect English. I need to longify this thing so that I know it can withstand whatever Alex wants to throw at it.",
    pos: createVector(300, 100),
    link: "http://kerpar.co",
    img1: "images/youtube.jpg",
    img2: "images/youtube.png",
    col1: 255,
    col2: color(255, 0, 0)
  }));

  // Business
  balls.push(new Ball({
    title: "Business",
    content: "This is some randomly generated text that just so happens to contain perfect English. I need to longify this thing so that I know it can withstand whatever Alex wants to throw at it.",
    pos: createVector(100, 300),
    link: "http://kerpar.co",
    img1: "images/briefcase.jpg",
    img2: "images/briefcase.png",
    col1: 255,
    col2: color(35, 177, 77)
  }));

  // Discord
  balls.push(new Ball({
    title: "Discord",
    content: "This is some randomly generated text that just so happens to contain perfect English. I need to longify this thing so that I know it can withstand whatever Alex wants to throw at it.",
    pos: createVector(300, 300),
    link: "http://kerpar.co",
    img1: "images/discord.jpg",
    img2: "images/discord.png",
    col1: 255,
    col2: color(140, 158, 255)
  }));

  // Twitch
  balls.push(new Ball({
    title: "Twitch",
    content: "This is some randomly generated text that just so happens to contain perfect English. I need to longify this thing so that I know it can withstand whatever Alex wants to throw at it.",
    pos: createVector(100, 100),
    link: "https://www.twitch.tv/ax_tv",
    img1: "images/twitch.jpg",
    img2: "images/twitch.png",
    col1: 255,
    col2: color(100, 65, 165)
  }));

  return balls;
}
