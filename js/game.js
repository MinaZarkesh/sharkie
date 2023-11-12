let canvas;
let world;
let isGameStopped = false;
let keyboard;
let isMute = true;

/**
 * Initializes the application.
 *
 */
function init() {
  canvas = document.getElementById("canvas");
  initLevel();
  keyboard = new Keyboard();
  world = new World(canvas, keyboard);
}

/**
 * Toggles the sound on and off.
 *
 */
function toggleSound() {
  let speaker = document.getElementById("btn-speaker");
  if (isMute) {
    speaker.src = "./img/speaker-filled-audio-tool.png";
    isMute =false;
    world.setVolumeSounds();
  } else{
    speaker.src = "./img/enable-sound.png";
    world.muteVolumeSounds();
    isMute = true;
  }
}

/**
 * /**
 * Starts the game by displaying the game elements and hiding the start screen.
 *
 * @return {undefined} No return value.
 */
function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mobileBtn-Sound").style = "display: flex";
  document.getElementById("mobile-overview").style = "display: flex";
  document.getElementById("gameOver").style = "display: none";
  document.getElementById("restart").style = "display: none";
  init();
  setStoppableInterval(checkEndGame, 1000);
}


/**
 * Checks if the game is stopped and calls the endScreen function if it is.
 *
 * @param {type} isGameStopped - a boolean indicating if the game is stopped
 */
function checkEndGame() {
  if (isGameStopped) {
    endScreen();
  }
}


/**
 * Displays the end screen and restart button, and stops the game.
 *
 */
function endScreen() {
  document.getElementById("gameOver").style = "display: flex";
  document.getElementById("restart").style = "display: flex";
  stopGame();
}


/**
 * Restart the game.
 *
 */
function restartGame() {
  document.getElementById("game").classList.add("d-none");
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("startScreen").style.display = "flex";
  document.getElementById("gameOver").style = "display: none";
  document.getElementById("restart").style = "display: none";
  document.getElementById("mobile-overview").style = "display: none";
  document.getElementById("mobileBtn-Sound").style = "display: none";
  resetGame();
}


/**
 * Resets the game.
 *
 */
function resetGame() {
  isGameStopped = false;
}


/**
 * Stops the game by clearing all interval IDs.
 *
 * @param {Array<number>} intervalIds - The array of interval IDs to be cleared.
 */
function stopGame() {
  intervalIds.forEach((id) => {
    clearInterval(id);
  });
}
