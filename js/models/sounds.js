let isMuteMusic = true;
let isMute = true;

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
 * Toggles the music on and off.
 * 
 */
function toggleMusic() {
  let image = document.getElementById("btn-speaker-music");
  let button = document.getElementById("mobileBtn-Music");
  if (isMuteMusic) {
    image.src = "./img/musical-note_461146.png";
    setMusic();
    isMuteMusic = false;
  } else {
    image.src = "./img/track_10561384.png";
    muteMusic();
    isMuteMusic = true;
  }
  setTimeout(() => {
    button.blur();
  }, 1000);
}

/**
 * Mutes the background music by pausing it and setting the volume to 0.
 *
 */
function muteMusic() {
  backgroundmusic.pause();
  backgroundmusic.volume = 0;
  isMuteMusic = true;
}


/**
 * Sets up and plays background music.
 *
 */
function setMusic() {
  backgroundmusic.load();
  backgroundmusic.play();
  backgroundmusic.volume = 0.1;
  isMuteMusic = false;
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
    if (isMute) {
      s.load();
      s.volume = 0;
    }
    backgroundmusic.volume = 0;
    console.log("mute Start: ", isMute);
  });
}

/**
 * Set the volume of all sounds.
 */
function setVolumeSounds() {
  sounds.forEach((s) => {
    // s.load();
    s.volume = 0.1;
    isMute = false;
    console.log("mute: ", isMute);
  });
}

/**Sounds***/

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

let backgroundmusic = new Audio("./audio/knall die schlampe.mp3");

let sounds = [
  coinSound,
  finSlapSound,
  sharkieHurtSound,
  youWinSound,
  gameOverSound,
  fishDeadSound,
  EndbossHurtSound,
  sharkieMovingSound,
  // backgroundmusic
];
