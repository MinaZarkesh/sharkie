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

    /**
   * Draws an image on the canvas context.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   * 
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

    /**
   * Draws a frame on the canvas context if the object is a Character, Fish, or Endboss.
   * without offset
   * @param {Object} ctx - The canvas context to draw on.
   */
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

    /**
   * Draws a red frame around the given context if the object is an instance of Fish or Character.
   * with offset
   * @param {CanvasRenderingContext2D} ctx - The rendering context on which to draw the frame.
   * 
   */
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
   * Loads the images from the given array and caches them for future use.
   *
   * @param {Array} array - An array of image paths.
   */  
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Loads an image from the specified path.
   *
   * @param {string} path - The path of the image file.
   * @return {void}
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

    /**
   * Executes an image loop.
   *
   * @return {undefined} The function does not return a value.
   */
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
