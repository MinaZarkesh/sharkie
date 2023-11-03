let canvas;
let world;
let isGameStopped = false;
let keyboard;

function init() {
  canvas = document.getElementById("canvas");
  keyboard = new Keyboard();
  initLevel();
  world = new World(canvas, keyboard);
  console.log("My Character is: ", world.character);
}

function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("startScreen").style = "display: none";
  image = document.getElementById("gameOver").style.display = "none";
  button = document.getElementById("restart").style.display = "none";
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
  console.log("Game-Over");
  let image = (document.getElementById("gameOver").style.display = "flex");
  let button = (document.getElementById("restart").style.display = "flex");
  stopGame();
}

function restartGame() {
  console.log("Game-Over");
  document.getElementById("startScreen").style = "display: flex";
  document.getElementById("game").classList.add("d-none");
  image = document.getElementById("gameOver").style.display = "flex";
  button = document.getElementById("restart").style.display = "flex";
  resetGame();
}

function resetGame() {
  isGameStopped=false;
}

function stopGame() {
  intervalIds.forEach((id) => {
    clearInterval(id);
  });
}

function showMobileButtons(){

}