class Bottle extends CollectableObject {
  width = 70;
  height = 70;

  IMAGES = IMAGES_SWIMMING_BOTTLE;

    /**
   * Constructor function for creating an instance of the class.
   *
   * @param {type} x - The x coordinate.
   * @param {type} y - The y coordinate.
   */
  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/Posión/Animada/1.png");
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.animate();
  }

    /**
   * Animate the image loop.
   *
   */
  animate() {
    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps/10));
  }

    /**
   * Remove the current object from the given array.
   *
   * @param {Array} co - The array from which the object should be removed.
   */
  disappear(co) {
    this.index = co.indexOf(this);
    co.splice(this.index, 1);
  }
}
