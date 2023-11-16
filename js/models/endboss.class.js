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
  energy = 100;
  hadFirstContact = false;
  y = 0;
  x = 3000;
  speed = 0;
  statusBar_Endboss;
  IMAGES = IMAGES_ENDBOSS_INTRODUCING;
  IMAGES_ENDBOSS_INTRODUCING = IMAGES_ENDBOSS_INTRODUCING;
  IMAGES_ENDBOSS_FLOATING = IMAGES_ENDBOSS_FLOATING;
  IMAGES_ENDBOSS_ATTACK = IMAGES_ENDBOSS_ATTACK;
  IMAGES_ENDBOSS_HURT = IMAGES_ENDBOSS_HURT;
  IMAGES_ENDBOSS_DEAD = IMAGES_ENDBOSS_DEAD;

  /**
   * Initializes the constructor.
   *
   * @constructor
   */
  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.hadFirstContact = false;
    this.loadImages(this.IMAGES_ENDBOSS_FLOATING);
    this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
    this.loadImages(this.IMAGES_ENDBOSS_HURT);
    this.loadImages(this.IMAGES_ENDBOSS_DEAD);
    this.loadImages(this.IMAGES_ENDBOSS_INTRODUCING);
    this.animate();
  }

  /**
   * Animates the object based on its current state and conditions.
   *
   */
  animate() {
    let i = 0;
    setStoppableInterval(() => {
      if (this.isDead() || this.x < -720) {
        this.IMAGES = this.IMAGES_ENDBOSS_DEAD;
        this.imageLoop();
        this.isKilled();
      } else if (this.isHurt()) {
        this.IMAGES = this.IMAGES_ENDBOSS_HURT;
        this.imageLoop();
      } else if (i < 8 && this.hadFirstContact) {
        this.IMAGES = this.IMAGES_ENDBOSS_INTRODUCING;
        this.imageLoop();
      } else {
        this.moveLeft();
        this.IMAGES = this.IMAGES_ENDBOSS_FLOATING;
        this.imageLoop();
      }

      //set new position if 10 Fish are dead
      if (
        !this.hadFirstContact &&
        this.world.character.x > this.world.level.level_end_x - 20 &&
        this.world.fishDead > 9
      ) {
        //if 10/15 Fish dead;
        i = 0;
        this.x = 2500;
        this.speed = 10;
        this.hadFirstContact = true;
        this.world.statusBar_Endboss.y = 10;
      }
      i++;
    }, 1000 / (fps / 10));
  }
}
