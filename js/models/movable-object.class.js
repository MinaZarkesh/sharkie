class MovableObject extends DrawableObject{

  //isDead bei energy = 0;
  energy = 100;

  //for the keyboard
  world;
  //for moving in otherDirection
  otherDirection = false;
  
  //for isHurt
  lastHit;

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }

    // console.log(this + ": AUA", this.energy);
  }
  isKilled() {
    let timepassed = new Date().getTime() - this.lastHit; // Diefference in ms
    timepassed = timepassed / 1000; //timepassed in sec
    return timepassed < 1.5;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Diefference in ms
    timepassed = timepassed / 1000; //timepassed in sec
    return timepassed < 1;
  }
  //character.isColliding(chicken);
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

  isDead() {
    // console.log("Energy: ",this, this.energy);
    return this.energy == 0;
  }

 



  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }

}
