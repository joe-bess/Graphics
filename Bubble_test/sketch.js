let bubble;

function setup() {
  createCanvas(400, 400);
  let x = random(width);
  let y = random(height);
  let r = random(10, 50)
  bubble = new Bubble(x, y, r)
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2)
  }
}
