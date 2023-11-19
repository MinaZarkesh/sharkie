let canvas;
let world;
let isGameStopped = false;
let keyboard;

/**
 * Initializes the application by setting the innerHTML of the startScreen element.
 *
 */
function init() {
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
  <div class="start-Buttons">

<button id="startGame" onclick="startGame()">
  <img src="./img/6.Botones/Start/2.png" alt="" />
</button>

<div id="instructions" class="d-none"> 
</div>

<div>
<button onclick="showIntroductionScreen()" id="introductionBTN">Instructions</button>
</div>
</div>
</div>`;
}

/**
 * Closes the introduction by adding the "d-none" class to the element with the ID "instructions".
 *
 */
function closeIntroduction() {
  document.getElementById("instructions").classList.add("d-none");
}

/**
 * Displays the introduction screen.
 *
 */
function showIntroductionScreen() {
  let text = document.getElementById("instructions");
  text.classList.remove("d-none");
  text.classList.add("text-center");
  text.innerHTML = InstructionTextHTML();
  let button = document.getElementById("introductionBTN");
  setTimeout(() => {
    button.blur();
  }, 1000);
}

/**
 * Generates the HTML for the instruction text of the Minas Sharkie Game.
 *
 * @return {string} The HTML code for the instruction text.
 */
function InstructionTextHTML() {
  return /*html*/ `
    <div id="instructionText">

<h3>Minas Sharkie Game Instructions</h3>
<h3 onclick="closeIntroduction()" id="closeBTN">X</h3>
<!-- <button >X</button> -->
<span>
Press and hold the arrow keys to move Sharkie <br>
Press and hold the spacebar to hit the pufferfish<br>
Press and hold the D key to damage the big Endboss with a bubble<br>
Collect the poison bottles to make the bubble toxic and cause more damage to the big Endboss.</span>
</div>
`;
}

/**
 * Initializes the application.
 *
 */
function initGame() {
  canvas = document.getElementById("canvas");
  isMute = true;
  loadVolumeSounds();
  backgroundmusic.volume =0.2;
  // backgroundmusic.play();
  // backgroundmusic.loop = true;
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
  document.getElementById("mobileBtn-Sound").src =
    "./img/speaker-filled-audio-tool.png";
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
  } else {
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
  backgroundmusic.loop = false;
  backgroundmusic.pause();
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
