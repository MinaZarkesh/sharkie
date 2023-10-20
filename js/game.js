let i;

let canvas;
let world;
let isGameStopped = false;
let keyboard = new Keyboard();
function init() {
  canvas = document.getElementById("canvas");
  initLevel();
  world = new World(canvas, keyboard);
  console.log("My Character is: ", world.character);
}

function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("startScreen").style = "display: none";
  image = document.getElementById("gameOver").style.display = "none";
  button = document.getElementById("restart").style.display = "none";
  i = 0;
  init();
  setStoppableInterval(checkEndGame, 1000);
}

// shows Endscreen after 4 secs
function checkEndGame() {
  if (isGameStopped) {
    // Abbruchbedingung, world.character.isDead() or world.endboss.isDead()
    // isGameStopped = true;
    endScreen();
  } else {
    console.log("Spiel läuft");
    i++;
  }
}

function endScreen() {
  console.log("Game-Over");
  let image = (document.getElementById("gameOver").style.display = "flex");
  let button = (document.getElementById("restart").style.display = "flex");
  stopGame();
}

function restartGame() {
  console.log("Game-Over");
  document.getElementById("startScreen").style = "display: flex";
  document.getElementById("game").classList.add("d-none");
  // document.getElementById("startScreen").style = "display: none";
  image = document.getElementById("gameOver").style.display = "flex";
  button = document.getElementById("restart").style.display = "flex";
  resetGame();
}

function resetGame() {
  i = 0;
}

function stopGame() {
  intervalIds.forEach((id) => {
    clearInterval(id);
  });
}

//EventListener for the Keys
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
    //  world.character.movement = 1;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
    //  world.character.movement = 1;
  }
  if (event.keyCode == 38) {
    keyboard.UP = true;
    //  world.character.movement = 1;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = true;
    //  world.character.movement = 1;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
    //  world.character.movement = 6; //Fin Slap
    world.character.isFinSlap = true;
  }
  if (event.keyCode == 68) {
    keyboard.D = true;
    //  world.character.movement = 5; //White Bubble
  }
  console.log("Key gedrückt: " + event.keyCode);
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
    world.character.isFinSlap = false;
  }
  if (event.keyCode == 68) {
    keyboard.D = false;
  }
  //  world.character.movement = 0;
});
