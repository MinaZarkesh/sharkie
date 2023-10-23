class Fish extends MovableObject {
  img;
  width = 60;
  height = 80;

  //for colliding
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
  };

  y;
  x;
  IMAGES = GREEN_SWIM;
  GREEN_SWIM = GREEN_SWIM;
  GREEN_TRANSITION = GREEN_TRANSITION;
  GREEN_BUBBLESWIM = GREEN_BUBBLESWIM;
  GREEN_DEAD = GREEN_DEAD;
  energy = 10;

  constructor() {
    //Math.random_> 0-1
    super().loadImage(this.IMAGES[0]);
    this.x = 200 + Math.random() * 2200;
    this.y = Math.random() * 400;
    this.speed = 0.2 + Math.random() * 0.5;

    //for animation
    this.loadImages(this.GREEN_SWIM);
    this.loadImages(this.GREEN_TRANSITION);
    this.loadImages(this.GREEN_BUBBLESWIM);
    this.loadImages(this.GREEN_DEAD);
    this.animate(); //animate
  }

  animate() {
    setStoppableInterval(() => {
      if (this.isDead()) {
        this.speed = 5;
        this.moveUp();
      } else {
        this.moveLeft();
      }
    }, 1000 / fps);

    let swimInterval;

    swimInterval = setInterval(() => {

      if (this.isDead() || this.x < -720) {
        this.IMAGES = this.GREEN_DEAD;
        this.isKilled(swimInterval);
         this.world.fishDead ++;
      } else if (this.isHurt()) {
        this.IMAGES = this.GREEN_TRANSITION;
        this.imageLoop();

        this.energy = 0;
      } else {
        this.IMAGES = this.GREEN_SWIM;
        this.imageLoop();
      }
      
    }, 1000 / (fps / 10));
  }

  isKilled(interval) {
    clearInterval(interval);
    this.loadImage(this.GREEN_DEAD[2]);
    // if (this.x < -720 || this.y ) {
      // this.x = 200 + Math.random() * 2200;
      // this.IMAGES = this.GREEN_BUBBLESWIM;
      // this.imageLoop();
      // this.world.fishDead++;
    // }
  }
}
