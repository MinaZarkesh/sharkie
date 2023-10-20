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
    bottom: 0
  }

  //for imageLoop
  currentImage = 0;
  //for the keyboard
  world;
  //for moving in otherDirection
  otherDirection = false;
//character.isColliding(chicken);
  isColliding(mo){ // mo-> movable Object
    return this.x+this.width - this.offset.right>mo.x+mo.offset.left &&
    this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
    this.x + this.offset.left < mo.x + mo.width - mo.offset.right&&
    this.y + this.offset.top < mo.height - mo.offset.bottom;
  }

  //for drawing
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
