class MovableObject {
  x = 250;
  y = 250;
  img;
  imageCache = {}; //for animation, Bilderabfolge
  width = 100;
  height = 150;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  //for imageLoop
  currentImage = 0;
  //isDead bei energy = 0;
  energy = 100;
  //for the keyboard
  world;
  //for moving in otherDirection
  otherDirection = false;

  hit() {
    if (this.energy > 5) {
      this.energy -= 5;
    } else {
      this.energy = 0;
    }

    console.log(this+ ": AUA", this.energy);
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
    console.log("Energy: ", this.energy);
    return this.energy == 0;
  }

  //for drawing
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Fish ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawRedFrame(ctx) {
    if (this instanceof Fish || this instanceof Character) {
      //|| this instanceof Fish || this instanceof Endboss
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.stroke();
    }
  }
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {array} array - Bilderabfolge:
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  //ImageLoop
  imageLoop() {
    let i = this.currentImage % this.IMAGES.length; // let i = 0-17
    let path = this.IMAGES[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }
}
