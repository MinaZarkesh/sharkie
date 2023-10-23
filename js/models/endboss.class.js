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

  hadFirstContact = false;
  y = 0;
  x = 2400;
  IMAGES = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_INTRODUCING = IMAGES_ENDBOSS_INTRODUCING;
  IMAGES_ENDBOSS_FLOATING = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_ATTACK = IMAGES_ENDBOSS_ATTACK;
  IMAGES_ENDBOSS_HURT = IMAGES_ENDBOSS_HURT;
  IMAGES_ENDBOSS_DEAD = IMAGES_ENDBOSS_DEAD;

  constructor() {
    super().loadImage(this.IMAGES_ENDBOSS_INTRODUCING[0]);
    this.hadFirstContact = false;
    this.loadImages(this.IMAGES_ENDBOSS_FLOATING);
    this.loadImages(this.IMAGES_ENDBOSS_INTRODUCING);
    this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
    this.loadImages(this.IMAGES_ENDBOSS_HURT);
    this.loadImages(this.IMAGES_ENDBOSS_DEAD);
    this.animate();
  }

  animate() {
    let i = 0;
    this.x = 3000;
    setStoppableInterval(() => {
      if (i < 9) {
        this.IMAGES = this.IMAGES_ENDBOSS_INTRODUCING;
      } else {
        this.IMAGES = this.IMAGES_ENDBOSS_FLOATING;
      }
      this.imageLoop();
      i++;

      if (
        !this.hadFirstContact &&
        this.world.character.x > this.world.level.level_end_x - 100
      ) {
        //wenn 10/15 Fish tot sind;
        i = 0;
        this.x = 2400;
        this.hadFirstContact = true;
      }
    }, 1000 / (fps / 6));
  }
}
