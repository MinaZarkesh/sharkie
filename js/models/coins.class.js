class Coin extends CollectableObject {
   width = 50;
   height = 50;
   IMAGES = IMAGES_COIN;

  /**
   * Initializes a new instance of the class.
   *
   * @param {type} x - the value of x
   * @param {type} y - the value of y
   */
  constructor(x, y) {
    super().loadImage( "./img/4. Marcadores/1. Coins/1.png");
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES);
    this.animate();
  }

    /**
   * Animate the function.
   *
   * @param {type} paramName - description of parameter
   * 
   */
  animate() {
    setInterval(() => {
      this.imageLoop(this.IMAGES);
    }, 1000 / (fps/10));
  }
}
