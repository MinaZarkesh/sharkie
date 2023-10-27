class DrawableObject {
  img;
  imageCache = {}; //for animation, Bilderabfolge

  //for imageLoop
  oldAnimationPath ="";
  currentImage = 0;
  x = 250;
  y = 250;
  height = 150;
  width = 100;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

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

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  //ImageLoop
  imageLoop() {
    if (
      (this.oldAnimationPath == "" || this.oldAnimationPath != this.IMAGES[0])
    ) {
      this.currentImage = 0;
      this.oldAnimationPath = this.IMAGES[0];
    }
    let i = this.currentImage % this.IMAGES.length; // let i = 0-17
    let path = this.IMAGES[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
