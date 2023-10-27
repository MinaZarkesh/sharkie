class World {
  character = new Character();
  endboss = new Endboss();
  //level-Objects
  level = level1;
  enemies = this.level.enemies;
  backgroundObjects = this.level.backgroundobjects;
  collectableObjects = this.level.collectableObjects;
  throwableObjects = [new Bubble()];
  //StatusBars
  statusBar_Coin = this.level.statusbars[0];
  statusBar_Life = this.level.statusbars[1];
  statusBar_Poison = this.level.statusbars[2];
  //********/
  fishDead = 0;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  isGreen = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.fishDead = 0;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  checkCollisions() {
    setStoppableInterval(() => {
      if ((this.character.isDead() && !this.character.isKilled()) || (this.endboss.isDead() && !this.endboss.isKilled())) {
        if(this.character.isDead() && !this.character.isKilled()){
document.getElementById("gameOver").src = "./img/6.Botones/Tittles/Game Over/Recurso 12.png";
        }else{
          document.getElementById("gameOver").src = "./img/6.Botones/Tittles/You win/Recurso 21.png";
        }
        isGameStopped = true;
      } else {
        this.checkEnemyCollisions();
        this.checkCollisionsCO();
        this.checkBubbleEndbossCollision();
      }
    }, 500); //2mal pro sekunde
  }

  checkBubbleEndbossCollision() {
    this.throwableObjects.forEach((bubble) => {
      if (this.endboss.isColliding(bubble)) {
        this.endboss.hit();
      }
    });
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof Endboss) {
          this.character.hit();
          this.character.hit();
          this.statusBar_Life.setPercentage(this.character.energy);
        } else {
          if (this.character.isFinSlap) {
            enemy.hit();
          } else {
            this.character.hit();
            this.statusBar_Life.setPercentage(this.character.energy);
            // enemy can not attack again for 1sec
          }
        }
      }
    });
  }

  //check if Character is Collinding a Collactable Object, if it`s a throwable Object, it moves to "Bottles"-Array
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
          //push Bottle in Array bottles, so you can see which
          // this.character.bottles.push(co);
          this.character.collectBottle();
          // this.character.poison = this.character.bottles.length * 20;
          this.statusBar_Poison.setPercentage(this.character.poison);
          co.disappear(this.collectableObjects);
        }
        //else if (co instanceof Chicken && this.character.isfinSlap) {
        //   co.isHurt();
        // }
      }
    });
  }

  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
    this.enemies.forEach((enemy) => {
      enemy.world = this;
    });
    this.enemies.push(this.endboss);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //move Camera to the left
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.throwableObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.level.collectableObjects); //bottles and Coins

    // this.addObjectsToMap(this.character.bottles); //collected throwable Objects //at start empty

    //drawFixedObjects
    this.ctx.translate(-this.camera_x, 0); // Back
    //fixed Objects
    this.addToMap(this.statusBar_Coin);
    this.addToMap(this.statusBar_Life);
    this.addToMap(this.statusBar_Poison);
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

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
  addToMap(mo) {
    //mo--> movableObject
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);
    // mo.drawRedFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
