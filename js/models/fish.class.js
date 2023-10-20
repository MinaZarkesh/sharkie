class Fish extends MovableObject {
  img;
  width = 60;
  height = 80;

  //for colliding
  offset = {
    top: -5,
    left: -5,
    right: -10,
    bottom: 10,
  };

  y;
  x;
  IMAGES = GREEN_SWIM;
  GREEN_SWIM = GREEN_SWIM;
  GREEN_TRANSITION = GREEN_TRANSITION;
  GREEN_BUBBLESWIM = GREEN_BUBBLESWIM;
  GREEN_DEAD = GREEN_DEAD;

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
  isHurt(){
    console.log("Fish: AUA");
     }

  animate() {
    setStoppableInterval(() => {
      this.moveLeft();
    }, 1000 / fps);

    setStoppableInterval(() => {
      this.imageLoop();
    }, 1000 / (fps / 6));
  }
}
