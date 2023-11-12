class Level {
//give Level Barriers
  level_end_x = 720*3;
  level_start_x = (-1*720+100);
  level_start_y = -80;
  level_end_y = 320;

//for constructor
  enemies;
  backgroundobjects;
  statusbars;
  collectableObjects;

    /**
   * Initializes the constructor with the given parameters.
   *
   * @param {type} enemies - the enemies to be initialized
   * @param {type} backgroundobjects - the background objects to be initialized
   * @param {type} collectableObjects - the collectable objects to be initialized
   * @param {type} statusbars - the status bars to be initialized
   */
  constructor(enemies, backgroundobjects, collectableObjects, statusbars) {
    this.enemies = enemies;
    this.backgroundobjects = backgroundobjects;
    this.collectableObjects =  collectableObjects;
    this.statusbars = statusbars;
  }
}
