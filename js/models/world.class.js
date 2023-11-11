class World {
  character = new Character();
  endboss = new Endboss();
  //level-Objects
  level = level1;
  enemies = this.level.enemies;
  backgroundObjects = this.level.backgroundobjects;
  collectableObjects = this.level.collectableObjects;
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
  //********/
  fishDead = 0;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  isGreen = false;
  coinSound = new Audio(
    "./audio/362445__tuudurt__positive-response_collecting.wav"
  );
  finSlapSound = new Audio(
    "./audio/361010__projectsu012__bassdrum2-sfxr_finSlap.wav"
  );
  sharkieHurtSound = new Audio(
    "./audio/360915__projectsu012__shiplosspart1_hurt.wav"
  );
  youWinSound = new Audio("./audio/666280__logatron__oldtada_youWin.wav");
  gameOverSound = new Audio(
    "./audio/333785__projectsu012__8-bit-failure-sound_gameOver.wav"
  );
  fishDeadSound = new Audio("./audio/360870__projectsu012__ting1_fishDead.wav");
  EndbossHurtSound = new Audio("./audio/705168__cheezitboi__oof.mp3");
  sharkieMovingSound = new Audio("./audio/705825__slot5000__swim16_moving.ogg");

  sounds = [
    this.coinSound,
    this.finSlapSound,
    this.sharkieHurtSound,
    this.youWinSound,
    this.gameOverSound,
    this.fishDeadSound,
    this.EndbossHurtSound,
    this.sharkieMovingSound,
  ];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.fishDead = 0;
    this.draw();
    this.setWorld();
    this.setVolumeSounds();
    this.checkCollisions();
  }

  muteVolumeSounds() {
    this.sounds.forEach((s) => {
      s.load();
      s.volume = 0;
    });
  }

  setVolumeSounds() {
    this.sounds.forEach((s) => {
      s.load();
      s.volume = 0.2;
    });
  }

  checkCollisions() {
    setStoppableInterval(() => {
      if (
        (this.character.isDead() && !this.character.isKilled()) ||
        (this.endboss.isDead() && !this.endboss.isKilled())
      ) {
        if (this.character.isDead() && !this.character.isKilled()) {
          document.getElementById("gameOver").src =
            "./img/6.Botones/Tittles/Game Over/Recurso 12.png";
          this.gameOverSound.play();
        } else {
          document.getElementById("gameOver").src =
            "./img/6.Botones/Tittles/You win/Recurso 21.png";
            this.youWinSound.play();
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
    this.bubbles.forEach((bubble) => {
      if (this.endboss.isColliding(bubble)) {
        this.endboss.hit();
        this.EndbossHurtSound.play();
        this.statusBar_Poison.setPercentage(this.character.poison);
      }
    });
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof Endboss) {
          this.character.hit();
          this.character.hit();
          this.sharkieHurtSound.play();
          this.statusBar_Life.setPercentage(this.character.energy);
        } else {
          if (this.character.isFinSlap) {
            enemy.hit();
            this.finSlapSound.play();
            this.fishDeadSound.play();
          } else {
            this.character.hit();
            this.sharkieHurtSound.play();
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
          this.character.collectBottle();
          this.statusBar_Poison.setPercentage(this.character.poison);
          co.disappear(this.collectableObjects);
        }
        this.coinSound.load();
        this.coinSound.play();
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
    this.addObjectsToMap(this.bubbles);
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
