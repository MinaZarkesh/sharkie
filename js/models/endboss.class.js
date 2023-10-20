class Endboss extends MovableObject {
  img;
  width = 300;
  height = 380;
  //for colliding
  offset = {
    top: 120,
    left: 10,
    right: 30,
    bottom: 170,
  };

  y = 0;
  x = 2400;
  IMAGES = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_INTRODUCING = IMAGES_ENDBOSS_INTRODUCING;
  IMAGES_ENDBOSS_FLOATING = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_ATTACK = IMAGES_ENDBOSS_ATTACK;
  IMAGES_ENDBOSS_HURT = IMAGES_ENDBOSS_HURT;
  IMAGES_ENDBOSS_DEAD = IMAGES_ENDBOSS_DEAD;

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES_ENDBOSS_FLOATING);
    this.loadImages(this.IMAGES_ENDBOSS_INTRODUCING);
    this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
    this.loadImages(this.IMAGES_ENDBOSS_HURT);
    this.loadImages(this.IMAGES_ENDBOSS_DEAD);
    this.animate();
  }



  animate() {
    setStoppableInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 6));
  }
}
