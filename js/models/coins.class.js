class Coin extends CollectableObject {
   width = 50;
   height = 50;

   IMAGES = IMAGES_COIN;

  constructor(x, y) {
    super().loadImage( "./img/4. Marcadores/1. Coins/1.png");;
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.imageLoop(this.IMAGES);
    }, 1000 / (fps/10));
  }
}
