/**
 * Toggles the sound on and off.
 *
 */
function toggleSound() {
  let speaker = document.getElementById("btn-speaker");
  let button = document.getElementById("mobileBtn-Sound");
  if (isMute) {
    speaker.src = "./img/speaker-filled-audio-tool.png";
    setVolumeSounds();
    isMute = false;
  } else {
    speaker.src = "./img/enable-sound.png";
    muteVolumeSounds();
    isMute = true;
  }

  setTimeout(() => {
    button.blur();
  }, 1000);
}




/**
 * Mutes the volume of all sounds.
 *
 */
function muteVolumeSounds() {
  sounds.forEach((s) => {
    s.volume = 0;
    isMute = true;
    console.log("mute: ", isMute);
  });
}

/**
 * Loads the volume sounds and set its volume to 0.2.
 *
 */
 function loadVolumeSounds() {
  sounds.forEach((s) => {
    if (!isMute) {
      s.load();
      s.volume = 0;
    }
    console.log("mute Start: ", isMute);
  });
}

/**
 * Set the volume of all sounds.
 */
function setVolumeSounds() {
  sounds.forEach((s) => {
    // s.load();
    s.volume = 0.2;
    isMute = false;
    console.log("mute: ", isMute);
  });
}

/**Sounds***/
let isMute = false;

let coinSound = new Audio(
  "./audio/362445__tuudurt__positive-response_collecting.wav"
);
let finSlapSound = new Audio(
  "./audio/361010__projectsu012__bassdrum2-sfxr_finSlap.wav"
);
let sharkieHurtSound = new Audio(
  "./audio/360915__projectsu012__shiplosspart1_hurt.wav"
);
let youWinSound = new Audio("./audio/666280__logatron__oldtada_youWin.wav");
let gameOverSound = new Audio(
  "./audio/333785__projectsu012__8-bit-failure-sound_gameOver.wav"
);
let fishDeadSound = new Audio(
  "./audio/360870__projectsu012__ting1_fishDead.wav"
);
let EndbossHurtSound = new Audio("./audio/705168__cheezitboi__oof.mp3");
let sharkieMovingSound = new Audio(
  "./audio/705825__slot5000__swim16_moving.ogg"
);

let sounds = [
  coinSound,
  finSlapSound,
  sharkieHurtSound,
  youWinSound,
  gameOverSound,
  fishDeadSound,
  EndbossHurtSound,
  sharkieMovingSound,
];
