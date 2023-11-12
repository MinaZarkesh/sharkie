class BackgroundObject extends MovableObject{

    width = canvasWidth; //width of canvas
    height = canvasHeight; // height of canvas

        /**
     * Constructs a new instance of the class.
     *
     * @param {string} imagePath - The path to the image.
     * @param {number} x - The x-coordinate.
     */
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}