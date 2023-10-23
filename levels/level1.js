let level1;

function initLevel() {
  level1 = new Level(
    [
      //15 Fishs
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      new Fish(),
      // new Endboss(),
    ],
    [
      new BackgroundObject("../img/3. Background/Layers/5. Water/L1.png", -720),
      new BackgroundObject(
        "../img/3. Background/Layers/4.Fondo 2/L1.png",
        -720
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/3.Fondo 1/L1.png",
        -720
      ),
      new BackgroundObject("../img/3. Background/Layers/2. Floor/L1.png", -720),
      new BackgroundObject("../img/3. Background/Layers/1. Light/1.png", -720),
      new BackgroundObject(
        "../img/../img/3. Background/Layers/5. Water/L2.png",
        0
      ),
      new BackgroundObject("../img/3. Background/Layers/4.Fondo 2/L2.png", 0),
      new BackgroundObject("../img/3. Background/Layers/3.Fondo 1/L2.png", 0),
      new BackgroundObject("../img/3. Background/Layers/2. Floor/L2.png", 0),
      new BackgroundObject("../img/3. Background/Layers/1. Light/2.png", 0),
      new BackgroundObject(
        "../../img/3. Background/Layers/5. Water/L1.png",
        720
      ),
      new BackgroundObject("../img/3. Background/Layers/4.Fondo 2/L1.png", 720),
      new BackgroundObject("../img/3. Background/Layers/3.Fondo 1/L1.png", 720),
      new BackgroundObject("../img/3. Background/Layers/2. Floor/L1.png", 720),
      new BackgroundObject("../img/3. Background/Layers/1. Light/1.png", 720),
      new BackgroundObject(
        "../img/3. Background/Layers/5. Water/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/4.Fondo 2/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/3.Fondo 1/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/2. Floor/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/1. Light/2.png",
        720 * 2
      ),
      new BackgroundObject(
        "../../img/3. Background/Layers/5. Water/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/4.Fondo 2/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/3.Fondo 1/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/2. Floor/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "../img/3. Background/Layers/1. Light/1.png",
        720 * 3
      ),
    ]
  );
}
