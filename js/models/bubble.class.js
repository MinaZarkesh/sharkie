class Bubble extends ThrowableObject {
  IMAGES = IMAGES_BUBBLE_GREEN;
  constructor() {
    // super().loadImage(IMAGES_BUBBLE_GREEN[0]);
    super().loadImages(this.IMAGES);
    this.animate();
  }

  animate() {
    console.log("GREEN");
    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 10));
  }
}
