class Bottle extends ThrowableObject {
  width = 50;
  height = 50;

  IMAGES_SWIMMING_BOTTLE = IMAGES_SWIMMING_BOTTLE;

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImage("../img/4. Marcadores/Posión/Animada/1.png");
    this.loadImages(this.IMAGES_SWIMMING_BOTTLE);
    // this.loadImages(this.IMAGES_DARK_LEFT);
    // this.loadImages(this.IMAGES_DARK_RIGHT);
    // this.loadImages(this.IMAGES_LIGHT_LEFT);
    // this.loadImages(this.IMAGES_LIGHT_RIGHT);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING_BOTTLE);
    }, 1000 / this.fps);
  }

  disappear(co) {
    console.log("eingesammelt: ", co);
    this.index = co.indexOf(this);
    co.splice(this.index, 1);
    console.log("Collectables: ", co);
  }
}

// IMAGES_LIGHT_LEFT = [
//   "img/4. Marcadores/Posión/Light - Left.png"
// ];
// IMAGES_LIGHT_RIGHT = [
//   "img/4. Marcadores/Posión/Light - Right.png"
// ];
// IMAGES_DARK_LEFT = [
//   "img/4. Marcadores/Posión/Dark - Left.png"
// ];
// IMAGES_DARK_RIGHT = [
//   "img/4. Marcadores/Posión/Dark - Right.png"
// ];
