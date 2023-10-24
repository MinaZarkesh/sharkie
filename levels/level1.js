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
      new BackgroundObject("./img/3. Background/Layers/5. Water/L1.png", -720),
      new BackgroundObject(
        "./img/3. Background/Layers/4.Fondo 2/L1.png",
        -720
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/3.Fondo 1/L1.png",
        -720
      ),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/L1.png", -720),
      new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", -720),
      new BackgroundObject(
        "./img/3. Background/Layers/5. Water/L2.png",
        0
      ),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L2.png", 0),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L2.png", 0),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/L2.png", 0),
      new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 0),
      new BackgroundObject(
        "./img/3. Background/Layers/5. Water/L1.png",
        720
      ),
      new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L1.png", 720),
      new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L1.png", 720),
      new BackgroundObject("./img/3. Background/Layers/2. Floor/L1.png", 720),
      new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 720),
      new BackgroundObject(
        "./img/3. Background/Layers/5. Water/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/4.Fondo 2/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/3.Fondo 1/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/2. Floor/L2.png",
        720 * 2
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/1. Light/2.png",
        720 * 2
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/5. Water/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/4.Fondo 2/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/3.Fondo 1/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/2. Floor/L1.png",
        720 * 3
      ),
      new BackgroundObject(
        "./img/3. Background/Layers/1. Light/1.png",
        720 * 3
      ),
    ],
    [
      new StatusBar(
        [
          "./img/4. Marcadores/green/Coin/100_ copia 4.png",
          "./img/4. Marcadores/green/Coin/80_  copia 4.png",
          "./img/4. Marcadores/green/Coin/60_  copia 4.png",
          "./img/4. Marcadores/green/Coin/40_  copia 4.png",
          "./img/4. Marcadores/green/Coin/20_  copia 2.png",
          "./img/4. Marcadores/green/Coin/0_  copia 4.png",
        ],
        80,
        0
      ),
      new StatusBar(
        [
          "./img/4. Marcadores/green/Life/100_  copia 2.png",
          "./img/4. Marcadores/green/Life/80_  copia 3.png",
          "./img/4. Marcadores/green/Life/60_  copia 3.png",
          "./img/4. Marcadores/green/Life/40_  copia 3.png",
          "./img/4. Marcadores/green/Life/20_ copia 4.png",
          "./img/4. Marcadores/green/Life/0_  copia 3.png",
        ],
        45,
        100
      ),
      new StatusBar(
        [
          "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
          "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
          "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
          "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
          "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
          "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
        ],
        10,
        0
      ),
    ]
  );
}
