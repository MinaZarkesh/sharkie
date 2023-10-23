class StatusBar extends DrawableObject {
  // IMAGES_COIN = [
  //   "../img/4. Marcadores/green/Coin/0_  copia 4.png",
  //   "../img/4. Marcadores/green/Coin/20_  copia 2.png",
  //   "../img/4. Marcadores/green/Coin/40_  copia 4.png",
  //   "../img/4. Marcadores/green/Coin/60_  copia 4.png",
  //   "../img/4. Marcadores/green/Coin/80_  copia 4.png",
  //   "../img/4. Marcadores/green/Coin/100_ copia 4.png",
  // ];
  // IMAGES = [
  //   "../img/4. Marcadores/green/Life/0_  copia 3.png",
  //   "../img/4. Marcadores/green/Life/20_ copia 4.png",
  //   "../img/4. Marcadores/green/Life/40_  copia 3.png",
  //   "../img/4. Marcadores/green/Life/60_  copia 3.png",
  //   "../img/4. Marcadores/green/Life/80_  copia 3.png",
  //   "../img/4. Marcadores/green/Life/100_  copia 2.png",
  // ];

  // IMAGES_POISON = [
  //   "../img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
  //   "../img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
  //   "../img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
  //   "../img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
  //   "../img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
  //   "../img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
  // ];

  // constructor(images, y, percentage) {
  //   super();
  //   this.IMAGES = images;
  //   this.loadImages(this.IMAGES);
  //   this.x = 20;
  //   this.y = y;
  //   this.width = 200;
  //   this.height = 50;
  //   this.percentage = percentage;

  //   this.setPercentage(this.percentage);
  // }

  // setPercentage(percentage) {
  //   this.percentage = percentage; // => 0...5
  //   let path = this.IMAGES[this.resolveImageIndex()];
  //   this.img = this.imageCache[path];
  // }

  // resolveImageIndex() {
  //   if (this.percentage == 100) {
  //     return 0;
  //   } else if (this.percentage > 80) {
  //     return 1;
  //   } else if (this.percentage > 60) {
  //     return 2;
  //   } else if (this.percentage > 40) {
  //     return 3;
  //   } else if (this.percentage > 5) {
  //     return 4;
  //   } else {
  //     return 5;
  //   }
  // }
}
