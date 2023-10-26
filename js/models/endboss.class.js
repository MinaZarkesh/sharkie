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
  x = 2500;
  IMAGES = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_INTRODUCING = IMAGES_ENDBOSS_INTRODUCING;
  IMAGES_ENDBOSS_FLOATING = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_ATTACK = IMAGES_ENDBOSS_ATTACK;
  IMAGES_ENDBOSS_HURT = IMAGES_ENDBOSS_HURT;
  IMAGES_ENDBOSS_DEAD = IMAGES_ENDBOSS_DEAD;

  constructor() {
    super().loadImage(this.IMAGES[0]);
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
      if (i < 8 && this.hadFirstContact) {
        this.moveLeft();
        this.IMAGES = this.IMAGES_ENDBOSS_INTRODUCING;
        this.imageLoop();
      } else {
        this.IMAGES = this.IMAGES_ENDBOSS_FLOATING;
        this.imageLoop();
      }
      
      if (
        !this.hadFirstContact &&
        this.world.character.x > this.world.level.level_end_x - 20 &&
        this.world.fishDead > 9
      ) {
        //wenn 10/15 Fish tot sind;
        i = 0;
        // this.x = 2700;
        this.x = 2500;
        this.hadFirstContact = true;
        this.speed = 5;
      }
      this.moveLeft();
      // this.imageLoop();
      i++;
    }, 1000 / (fps / 10));
  }
}
