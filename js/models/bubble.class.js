class Bubble extends ThrowableObject {
//   width = 30;
//   height = 30;
  IMAGES = IMAGES_BUBBLE_GREEN;
  constructor() {
    super().loadImage(IMAGES_BUBBLE_GREEN[0]);
    this.loadImages(this.IMAGES);

    // this.x = 100;
    // this.y = 80;
    // this.world = world;
    // this.character = world.character;
    // this.x = this.character.x;
    // this.y = this.character.y;
    this.animate();
  }

  animate() {
    // if (this.character.world.endboss.hadFirstContact) {
    //   this.IMAGES = IMAGES_BUBBLE_GREEN;
    console.log("GREEN");
    // } else {
    //   this.IMAGES = IMAGES_BUBBLE_WHITE;
    //   console.log("WHITE");
    // }

    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 10));
  }
}
