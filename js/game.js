let canvas;
let world;
let isGameStopped = false;
let keyboard;

function init() {
  canvas = document.getElementById("canvas");
  initLevel();
  keyboard = new Keyboard();
  world = new World(canvas, keyboard);
  console.log("My Character is: ", world.character);
}

function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mobile-overview").style = "display: flex";
  document.getElementById("gameOver").style = "display: none";
  document.getElementById("restart").style = "display: none";
  init();
  setStoppableInterval(checkEndGame, 1000);
}

// shows Endscreen after 4 secs
function checkEndGame() {
  if (isGameStopped) {
    // Abbruchbedingung, world.character.isDead() or world.endboss.isDead()
    endScreen();
  }
}

function endScreen() {
  document.getElementById("gameOver").style = "display: flex";
  document.getElementById("restart").style = "display: flex";
  stopGame();
}

function restartGame() {
  document.getElementById("game").classList.add("d-none");
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("startScreen").style.display = "flex";
  document.getElementById("gameOver").style = "display: none";
  document.getElementById("restart").style = "display: none";
  document.getElementById("mobile-overview").style = "display: none";
  resetGame();
}

function resetGame() {
  isGameStopped = false;
}

function stopGame() {
  intervalIds.forEach((id) => {
    clearInterval(id);
  });
}
