class ThrowableObject extends MovableObject {
  ground = 400;
  acceleration = 2.5;
  speedX = 10;

  constructor() {
    super().loadImage("./img/4. Marcadores/Posión/Light - Left.png");
    this.width = 0;
    this.height = 0;
    this.x = 100;
    this.y = 80;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / fps);
  }

  isAboveGround() {
    return this.y < 160;
  }
  throw(x, y) {
    this.x = x + 155;
    this.y = y + 115;

    let bubbleInterval = setInterval(() => {
      if (this.width < 50) {
        this.width += 10;
        this.height += 10;
      }
      this.speedX = 10;
      this.x += this.speedX;
    }, 1000 / (fps / 10));
  }

  deleteMe(bubbles) {
    bubbles.shift();
  }
}
