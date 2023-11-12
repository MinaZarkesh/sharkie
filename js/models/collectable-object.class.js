class CollectableObject extends MovableObject {
  x = 100;
  y = 100;
  offsetX = 0;
  offsetY = 0;
  offsetWidth = 0;
  offsetHeight = 0;
  index;


    /**
   * Initializes a new instance of the class.
   *
   * @param {type} x - The x coordinate.
   * @param {type} y - The y coordinate.
   */
  constructor(x, y) {
    super();

    this.x = x;
    this.y = y;
  }

    /**
   * Deletes the current Collectable Object from the given array.
   *
   * @param {Array} co - Collectable Objects (Coins or Bottles)
   * 
   */
  disappear(co) {
    //co => Collectable Objects Coins or Bottles
    this.index = co.indexOf(this);
    co.splice(this.index, 1); //delete this Collectable Object from Array
  }
}
