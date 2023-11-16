class MovableObject extends DrawableObject {
  energy = 100;
  posion = 100;
  //for the keyboard
  world;
  //for moving in otherDirection
  otherDirection = false;

  //for isHurt and isKilled
  lastHit = 0;
  lastThrow = 0;

  /**
 * Decreases the energy of the object by 5. If the energy becomes less than 0,
 * it is set to 0. Otherwise, it updates the lastHit property with the current
 * timestamp.
 *
 * @param {type} paramName - description of parameter
 *
 */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;

    } else {
      this.lastHit = new Date().getTime();
    }
  }

    /**
   * Determines if the entity is killed based on the time passed since the last hit.
   *
   * @return {boolean} True if the entity is killed, false otherwise.
   */
  isKilled() {
    let timepassed = new Date().getTime() - this.lastHit; // Diefference in ms
    timepassed = timepassed / 1000; //timepassed in sec
    return timepassed < 1.5;
  }

    /**
   * Decreases the poison level by 5 and updates the last throw timestamp.
   *
   */
  throw() {
    this.poison -= 5;
    if (this.poison < 0) {
      this.posion = 0;
    } else {
      this.lastThrow = new Date().getTime();
    }
  }

  /**
 * Determines if the function has been thrown recently.
 *
 * @return {boolean} - Returns true if the function has been thrown within the last second, false otherwise.
 */
  isThrown() {
    let timepassed = new Date().getTime() - this.lastThrow; // Diefference in ms
    timepassed = timepassed / 1000; //timepassed in sec
    return timepassed < 1;
  }


  /**
   * Checks if the object is currently hurt based on the time elapsed since the last hit.
   *
   * @return {boolean} Returns true if the object is hurt, otherwise false.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Diefference in ms
    timepassed = timepassed / 1000; //timepassed in sec
    return timepassed < 1;
  }

    /**
   * Checks if the current object is colliding with a movable object.
   *
   * @param {Object} mo - The movable object to check for collision.
   * @return {boolean} Returns true if a collision is detected, false otherwise.
   */
  isColliding(mo) {
    // mo-> movable Object
    return (
      this.x + this.offset.left + this.width - this.offset.right >
        mo.x + mo.offset.left &&
      this.y + this.offset.top + this.height - this.offset.bottom >
        mo.y + mo.offset.top &&
      this.x + this.offset.left <
        mo.x + mo.offset.left + mo.width - mo.offset.right &&
      this.y + this.offset.top <
        mo.y + mo.offset.top + mo.height - mo.offset.bottom
    );
  }

    /**
   * Checks if the object is dead.
   *
   * @return {boolean} Returns true if the energy of the object is 0, otherwise returns false.
   */
  isDead() {
    return this.energy == 0;
  }

    /**
   * Moves the object to the left.
   *
   */
  moveLeft() {
    this.x -= this.speed;
  }

    /**
   * Moves the object to the right.
   *
   */
  moveRight() {
    this.x += this.speed;
  }

    /**
   * Move the object up.
   *
   */
  moveUp() {
    this.y -= this.speed;
  }

    /**
   * Moves the object down by incrementing its y coordinate.
   *
   */
  moveDown() {
    this.y += this.speed;
  }
}
