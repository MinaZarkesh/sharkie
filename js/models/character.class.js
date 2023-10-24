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

  //For StatusBars
  coinStatus = 0;
  poison = 0;
  bottles = []; //trowable Objects
  // thrownBottle = false;

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

  isAttacking() {
    this.poison = this.bottles.length * 20;
    if (this.bottles.length > 0 && this.bottles[0] instanceof Bottle) {
      this.IMAGES = this.IMAGES_ATTACK_GREEN_BUBBLE;
      this.throwBottle();
    } else {
      console.log("Flaschen leer!");
      this.IMAGES = this.IMAGES_ATTACK_WHITE_BUBBLE;
    }
    this.world.statusBar_Poison.setPercentage(this.poison);
  }

  collectCoin() {
    this.coinStatus += 100 / 15;
    if (this.coinStatus > 100) {
      this.coinStatus = 100;
    }
  }

  collectBottle() {
    this.poison += 100 / 5;
    console.log("Poison: ", this.poison);
    if (this.poison > 100) {
      this.poison = 100;
    }
  }

  throwBottle() {
    this.bottles.splice(0, 1);
    this.poison = this.bottles.length * 20;
    console.log("Poison: ", this.poison);
    if (this.poison < 0) {
      this.poison = 0;
    } else {
      this.lastThrow = new Date().getTime();
    }
  }

  animate() {
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.level_end_x &&
        !this.isFinSlap
      ) {
        this.moveRight();
      }
      if (
        this.world.keyboard.LEFT &&
        this.x > this.world.level.level_start_x &&
        !this.isFinSlap
      ) {
        this.moveLeft();
      }
      if (
        this.world.keyboard.UP &&
        this.y > this.world.level.level_start_y &&
        !this.isFinSlap
      ) {
        this.moveUp();
      }
      if (
        this.world.keyboard.DOWN &&
        this.y < this.world.level.level_end_y &&
        !this.isFinSlap
      ) {
        this.moveDown();
      }
      if (this.bottles.length > 0 && this.world.keyboard.D && !this.isFinSlap) {
        this.isAttacking();
      }
    }, 1000 / fps);

    setStoppableInterval(() => {
      if (this.isDead()) {
        this.IMAGES = this.IMAGES_DEAD;
        this.isKilled();
      } else if (this.isHurt()) {
        this.IMAGES = this.IMAGES_HURT;
      } else if (this.world.keyboard.D ) {
         if (this.thrownBottle()) {
          this.IMAGES_ATTACK_GREEN_BUBBLE;
         } else {
           this.IMAGES = this.IMAGES_ATTACK_WHITE_BUBBLE;
        }
      } else if (this.world.keyboard.SPACE && this.isFinSlap) {
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
        } else {
          this.IMAGES = this.IMAGES_IDLE;
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
}
