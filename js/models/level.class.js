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

  constructor(enemies, backgroundobjects, statusbars) {
    this.enemies = enemies;
    this.backgroundobjects = backgroundobjects;
    this.statusbars = statusbars;
  }
}
