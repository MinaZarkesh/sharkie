class Bubble extends ThrowableObject {
  IMAGES = IMAGES_BUBBLE_GREEN;
  constructor() {
    // super().loadImage(IMAGES_BUBBLE_GREEN[0]);
    super().loadImages(this.IMAGES);
    this.loadImages(IMAGES_BUBBLE_WHITE);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 10));
  }
}
