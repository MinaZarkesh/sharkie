class Character extends MovableObject {
  height = 200;
  width = 200;
  //for colliding
  offset = {
    top: 80,
    left: 35,
    right: 50,
    bottom: 120,
  };

  x = 100;
  y = 80;
  img;

  //for animation
  IMAGES = IMAGES_IDLE;
  IMAGES_IDLE = IMAGES_IDLE;
  IMAGES_LONG_IDLE = IMAGES_LONG_IDLE;
  IMAGES_SWIM = IMAGES_SWIM;
  IMAGES_ATTACK_GREEN_BUBBLE = IMAGES_ATTACK_GREEN_BUBBLE;
  IMAGES_ATTACK_WHITE_BUBBLE = IMAGES_ATTACK_WHITE_BUBBLE;
  IMAGES_ATTACK_FIN_SLAP = IMAGES_ATTACK_FIN_SLAP;
  IMAGES_HURT = IMAGES_HURT;
  IMAGES_DEAD = IMAGES_DEAD;
  speed = 5;
  otherDirection = false;
  isFinSlap = false;

  constructor() {
    super().loadImage(IMAGES_IDLE[0]);
    //for animation
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_ATTACK_GREEN_BUBBLE);
    this.loadImages(this.IMAGES_ATTACK_WHITE_BUBBLE);
    this.loadImages(this.IMAGES_ATTACK_FIN_SLAP);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate(); //animate
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
      }
      if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
        this.moveLeft();
      }
      if (this.world.keyboard.UP && this.y > this.world.level.level_start_y) {
        this.moveUp();
      }
      if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y) {
        this.moveDown();
      }
    }, 1000 / fps);

    setStoppableInterval(() => {
      if (this.isDead()) {
        this.IMAGES = this.IMAGES_DEAD;
        this.isKilled();
      } else if (this.isHurt()) {
        this.IMAGES = this.IMAGES_HURT;
      } else {
        if (this.world.keyboard.SPACE && this.isFinSlap) {
          this.IMAGES = this.IMAGES_ATTACK_FIN_SLAP;
        } else {
          if (
            this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN
          ) {
            //walk animation
            this.IMAGES = this.IMAGES_SWIM;
          } else if (this.world.keyboard.D) {
            this.IMAGES = this.IMAGES_ATTACK_WHITE_BUBBLE;
          } else {
            this.IMAGES = this.IMAGES_IDLE;
          }
        }
      }
      this.imageLoop(); // playAnimation
    }, 1000 / (fps / 10));
  }

  moveLeft() {
    this.x -= this.speed;
    this.world.camera_x = -this.x + 100;
    this.otherDirection = true;
  }

  moveRight() {
    this.x += this.speed;
    this.world.camera_x = -this.x + 100;
    this.otherDirection = false;
  }

  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }

  // jump() {}
}
