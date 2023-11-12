class StatusBar extends DrawableObject {
  /**
   * Constructs a new instance of the class.
   *
   * @param {Array} images - the array of images
   * @param {number} y - the y-coordinate
   * @param {number} percentage - the percentage value
   */
  constructor(images, y, percentage) {
    super();
    this.IMAGES = images;
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = y;
    this.width = 200;
    this.height = 50;
    this.percentage = percentage;
    this.setPercentage(this.percentage);
  }

  /**
   * Sets the percentage value for the image.
   *
   * @param {number} percentage - The percentage value to set (range: 0...5).
   *
   */
  setPercentage(percentage) {
    this.percentage = percentage; // => 0...5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

    /**
   * Resolves the image index based on the given percentage.
   *
   * @return {number} The image index.
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 0;
    } else if (this.percentage > 80) {
      return 1;
    } else if (this.percentage > 60) {
      return 2;
    } else if (this.percentage > 40) {
      return 3;
    } else if (this.percentage > 5) {
      return 4;
    } else {
      return 5;
    }
  }
}
