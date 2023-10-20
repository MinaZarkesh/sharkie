class BackgroundObject extends MovableObject{

    width = canvasWidth; //width of canvas
    height = canvasHeight; // height of canvas
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}