class World {
  character = new Character();
  endboss = new Endboss();

  //level-Objects
  level = level1;
  enemies = this.level.enemies;
  backgroundObjects = this.level.backgroundobjects;
  collectableObjects = this.level.collectableObjects;
  
  //sollte noch nicht vorher drin sein
  bubbles = [
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
  ];
  //StatusBars
  statusBar_Coin = this.level.statusbars[0];
  statusBar_Life = this.level.statusbars[1];
  statusBar_Poison = this.level.statusbars[2];
  statusBar_Endboss = this.level.statusbars[3];
  /********/

  fishDead = 0;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  isGreen = false;



    /**
   * Constructor function for the class.
   *
   * @param {Object} canvas - The canvas element.
   * @param {Object} keyboard - The keyboard object.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.fishDead = 0;
    this.statusBar_Endboss.x = 510;
    this.statusBar_Endboss.y = -100;
    //muteVolumeSounds();
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  /**
 * Checks for collisions in the game.
 *
 */
  checkCollisions() {
    setStoppableInterval(() => {
      if (
        (this.character.isDead() && !this.character.isKilled()) ||
        (this.endboss.isDead() && !this.endboss.isKilled())
      ) {
        if (this.character.isDead() && !this.character.isKilled()) {
          document.getElementById("gameOver").src =
            "./img/6.Botones/Tittles/Game Over/Recurso 12.png";
          gameOverSound.play();
        } else {
          document.getElementById("gameOver").src =
            "./img/6.Botones/Tittles/You win/Recurso 21.png";
        youWinSound.play();
        }
        isGameStopped = true;
      } else {
        this.checkEnemyCollisions();
        this.checkCollisionsCO();
        this.checkBubbleEndbossCollision();
      }
    }, 500); //2mal pro sekunde
  }

  /**
   * Checks for collision between the endboss and bubbles,
   * and performs necessary actions if a collision occurs.
   *
   */
  checkBubbleEndbossCollision() {
    this.bubbles.forEach((bubble) => {
      if (this.endboss.isColliding(bubble)) {
        this.endboss.hit();
        this.endboss.hit();
      EndbossHurtSound.play();
        this.statusBar_Poison.setPercentage(this.character.poison);
        this.statusBar_Endboss.setPercentage(this.endboss.energy);
        bubble.deleteMe(this.bubbles);
      }
    });
  }

    /**
   * Checks for collisions with enemies.
   *
   */
  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof Endboss) {
          this.character.hit();
          this.character.hit();
          sharkieHurtSound.play();
          this.statusBar_Life.setPercentage(this.character.energy);
        } else {
          if (this.character.isFinSlap) {
            enemy.hit();
            finSlapSound.play();
            fishDeadSound.play();
          } else {
            this.character.hit();
            sharkieHurtSound.play();
            this.statusBar_Life.setPercentage(this.character.energy);
          }
        }
      }
    });
  }

  //check if Character is Collinding a Collactable Object, if it`s a throwable Object, it moves to "Bottles"-Array

    /**
   * Check for collisions with collectable objects.
   *
   */
  checkCollisionsCO() {
    this.collectableObjects.forEach((co) => {
      //co => collectable Object
      if (this.character.isColliding(co)) {
        if (co instanceof Coin) {
          this.character.collectCoin();
          this.statusBar_Coin.setPercentage(this.character.coinStatus);
          co.disappear(this.collectableObjects);
        } else if (co instanceof Bottle) {
          //set new Position, so it cant be seen
          co.x = -100;
          co.y = 500;
          this.character.collectBottle();
          this.statusBar_Poison.setPercentage(this.character.poison);
          co.disappear(this.collectableObjects);
        }
        coinSound.play();
      }
    });
  }

  
  /**
 * Sets the world for the character, endboss, and enemies.
 *
 */
  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
    this.enemies.forEach((enemy) => {
      enemy.world = this;
    });
    this.enemies.push(this.endboss);
  }

    /**
   * Draws the game on the canvas.
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //move Camera to the left
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.bubbles);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.level.collectableObjects); //bottles and Coins
    //drawFixedObjects
    this.ctx.translate(-this.camera_x, 0); // Back
    //fixed Objects
    this.addToMap(this.statusBar_Coin);
    this.addToMap(this.statusBar_Life);
    this.addToMap(this.statusBar_Poison);
    this.addToMap(this.statusBar_Endboss);
    this.ctx.translate(this.camera_x, 0); // Forwards
    //move Camera to the right
    this.ctx.translate(-this.camera_x, 0);
    //draw() wird immer wieder aufgerufen
    let self = this;

    if (!isGameStopped) {
      requestAnimationFrame(function () {
        // hier kennt er das Wort this nicht mehr.
        self.draw();
      });
    }
  }

    /**
   * Adds objects to the map.
   *
   * @param {Array} objects - The objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

    /**
   * Add a movableObject to the map.
   *
   * @param {movableObject} mo - The movableObject to be added.
   */
  addToMap(mo) {
    //mo--> movableObject
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

    /**
   * Flips an image horizontally.
   *
   * @param {Object} mo - The image object to be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }


    /**
   * Flips the image back horizontally.
   *
   * @param {object} mo - The image object to be flipped back.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
