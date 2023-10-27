class ThrowableObject extends MovableObject {
  ground = 400;
  acceleration = 2.5;
  speedX = 0.2;
  constructor() {
    super().loadImage("./img/4. Marcadores/Posión/Light - Left.png");
    // this.x = x;
    // this.y = y;
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
    this.width = 0;
    this.height = 0;
    this.x = x + 155;
    this.y = y + 115;

    setInterval(() => {
      if (this.width < 50) {
        this.width += 10;
        this.height += 10;
        this.speedX = 1;
        this.x += this.speedX;
      }
      this.speedX = 5;
      this.x += this.speedX;

      // this.checkBottleOnGround();
    }, 1000 / (fps/10));
  }

  checkBottleOnGround() {
    if (this.y > this.ground) {
      console.log("Flasche weggeschmissen! ");
      // this.world.bottles.splice(0, 1);
    }
  }
}
