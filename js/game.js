let canvas;
let world;
let isGameStopped = false;
let keyboard;


function init(){
  let start = document.getElementById("startScreen");
start.innerHTML = `
  <div class="backgound">
  <h1>Minas Sharkie</h1>
  <h2>defeat the monsters of the ocean</h2>
  <div class="Start-Instructions">
    <div class="start-Keys">
      <img id="Start-ArrowKeys" src="./img/6.Botones/Key/arrowkeys.png" alt="" />
      <h3 id="Start-ArrowKeysh3">MOVE SHARKIE</h3>
    </div>
    <div class="start-Keys">
      <img src="./img/6.Botones/Key/Dkey.png" alt="" />
      <h3>Bubble Attack for Endboss</h3>
    </div>
    <div class="start-Keys">
      <img
        id="Start-SpaceBar"
        src="./img/6.Botones/Key/SpaceBarkey.png"
        alt=""
      />
      <h3 id="Start-SpaceBarh3">Fin Slap for Puffer Fish</h3>
    </div>
  </div>
  <div>
    <button id="startGame" onclick="startGame()">
      <img src="./img/6.Botones/Start/2.png" alt="" />
    </button>
  </div>
</div>`;

}
/**
 * Initializes the application.
 *
 */
function initGame() {
  canvas = document.getElementById("canvas");
  isMute = true;
  
  initLevel();
  keyboard = new Keyboard();
  world = new World(canvas, keyboard);
}

/**
 * /**
 * Starts the game by displaying the game elements and hiding the start screen.
 *
 * @return {undefined} No return value.
 */
function startGame() {
  //  muteVolumeSounds();
  //  document.getElementById("mobileBtn-Sound").src="./img/enable-sound.png";
  document.getElementById("mobileBtn-Sound").src="./img/speaker-filled-audio-tool.png";
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mobileBtn-Sound").style = "display: flex";
  document.getElementById("game-background").style = "display: flex";
  document.getElementById("mobile-overview").style = "display: flex";
  document.getElementById("gameOver").style = "display: none";
  document.getElementById("restart").style = "display: none";
  initGame();
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
  }else{
    //check if its landscape mode
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
  document.getElementById("game-background").style = "display: none";

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
