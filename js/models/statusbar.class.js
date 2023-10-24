class StatusBar extends DrawableObject {

  
  constructor(images, y, percentage) {
    super();
    this.IMAGES = images;
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = y;
    this.width = 200;
    this.height = 50;
    this.percentage = percentage;

    this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage; // => 0...5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 0;
    } else if (this.percentage > 80) {
      return 1;
    } else if (this.percentage > 60) {
      return 2;
    } else if (this.percentage > 40) {
      return 3;
    } else if (this.percentage > 5) {
      return 4;
    } else {
      return 5;
    }
  }
}
