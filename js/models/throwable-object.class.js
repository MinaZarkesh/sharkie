class ThrowableObject extends MovableObject {
  ground = 400;
  acceleration = 2.5;
  speedX = 10;

  /**
   * Constructor function for initializing the object.
   *
   */
  constructor() {
    super().loadImage("./img/4. Marcadores/Posión/Light - Left.png");
    this.width = 0;
    this.height = 0;
    this.x = 100;
    this.y = 80;
  }

  /**
   * Apply gravity to the object.
   *
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / fps);
  }

  /**
   * Check if the object is above the ground.
   *
   * @return {boolean} Returns true if the object is above the ground, false otherwise.
   */

  isAboveGround() {
    return this.y < 160;
  }

  /**
   * Throws the given x and y values.
   *
   * @param {type} x - The x value to throw.
   * @param {type} y - The y value to throw.
   */
  throw(x, y) {
    this.y = y + 115;

    // let tempDirection = this.otherDirection;
    // if (tempDirection) {
    //   this.x = x - 500;
    // } else {
      this.x = x + 115;
    // }

    let bubbleInterval = setInterval(() => {
      if (this.width < 50) {
        this.width += 10;
        this.height += 10;
      }
      this.speedX = 10;

      // if (tempDirection) {
      //   this.moveLeft();
      // } else {
        this.moveRight();
      // }
    }, 1000 / (fps / 10));
  }

  moveLeft() {
    this.x -= this.speedX;
  }
  moveRight() {
    this.x += this.speedX;
  }
  /**
   * Delete the first element from the given array bubbles.
   *
   * @param {Array} bubbles - The array from which the first element will be deleted.
   *
   */
  deleteMe(bubbles) {
    bubbles.shift();
    
  }
}
