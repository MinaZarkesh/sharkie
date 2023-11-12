class Bubble extends ThrowableObject {
  IMAGES = IMAGES_BUBBLE_GREEN;

    /**
   * Constructs a new instance of the class.
   *
   * @constructor
   */
  constructor() {
    super().loadImages(this.IMAGES);
    this.loadImages(IMAGES_BUBBLE_WHITE);
    this.animate();
  }


    /**
   * Animate the function.
   * 
   */
  animate() {
    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 10));
  }
}
