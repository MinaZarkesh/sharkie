class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.bindKeyPressEvents();
    this.bindMobileBtsPressEvents();
  }

  bindMobileBtsPressEvents() {
    document
      .getElementById('mobileBtn-Left')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.LEFT = true;
      });
    document
      .getElementById('mobileBtn-Left')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.LEFT = false;
      });
      document
      .getElementById('mobileBtn-Right')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.RIGHT = true;
      });
    document
      .getElementById('mobileBtn-Right')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.RIGHT = false;
      });
      document
      .getElementById('mobileBtn-Up')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.UP = true;
      });
    document
      .getElementById('mobileBtn-Up')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.UP = false;
      });
      document
      .getElementById('mobileBtn-Down')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.DOWN = true;
      });
    document
      .getElementById('mobileBtn-Down')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.DOWN = false;
      });
      document
      .getElementById('mobileBtn-D')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.D = true;
      });
    document
      .getElementById('mobileBtn-D')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.D = false;
      });
      document
      .getElementById('mobileBtn-Space')
      .addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.SPACE = true;
        world.character.isFinSlap = true;
      });
    document
      .getElementById('mobileBtn-Space')
      .addEventListener('touchend', (event) => {
        event.preventDefault();
        this.SPACE = false;
        world.character.isFinSlap = false;
      });
  }

  bindKeyPressEvents() {
    //EventListener for the Keys
    window.addEventListener("keydown", (event) => {
      if (event.keyCode == 39) {
        keyboard.RIGHT = true;
      }
      if (event.keyCode == 37) {
        keyboard.LEFT = true;
      }
      if (event.keyCode == 38) {
        keyboard.UP = true;
      }
      if (event.keyCode == 40) {
        keyboard.DOWN = true;
      }
      if (event.keyCode == 32) {
        keyboard.SPACE = true;
        world.character.isFinSlap = true;
      }
      if (event.keyCode == 68) {
        keyboard.D = true;
      }
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
    });
  }
}
