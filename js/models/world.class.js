class World {
  character = new Character();
  //level-Objects
  level = level1;
  enemies = this.level.enemies;
  backgroundObjects = this.level.backgroundobjects;
  //********/
  fishDead = 0;
endboss = new Endboss();
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  //StatusBars
  statusBar_Coin = this.level.statusbars[0];
  statusBar_Life = this.level.statusbars[1];
  statusBar_Poison = this.level.statusbars[2];

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
      if (this.character.isDead() && !this.character.isKilled()) {
         isGameStopped = true;
      } else {
        this.checkEnemyCollisions();
      }
    }, 500); //2mal pro sekunde
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof Endboss) {
          this.character.hit();
          this.character.hit();
        } else {
          if (this.character.isFinSlap) {
            enemy.hit();
          } else {
            this.character.hit();
            // enemy can not attack again for 1sec
          }
        }
      }
    });
  }



  
  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
    this.enemies.forEach((enemy)=>{
      enemy.world = this;
    })
    this.enemies.push(this.endboss);
  }



  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //move Camera to the left
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

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
