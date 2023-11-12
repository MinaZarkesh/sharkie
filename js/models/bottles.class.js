class Bottle extends CollectableObject {
  width = 70;
  height = 70;

  IMAGES = IMAGES_SWIMMING_BOTTLE;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/Posión/Animada/1.png");
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.imageLoop();
    }, 1000 / (fps/10));
  }

  disappear(co) {
    this.index = co.indexOf(this);
    co.splice(this.index, 1);
  }
}
