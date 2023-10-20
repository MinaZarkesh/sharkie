let intervalIds = [];
let canvasWidth = 720;
let canvasHeight = 480;
let fps = 60;
function setStoppableInterval(fn, time) {
  let interval = setInterval(fn, time);
  intervalIds.push(interval);
}

/********** Sharkie **********/

IMAGES_IDLE = [
  "./img/1.Sharkie/1.IDLE/1.png",
  "./img/1.Sharkie/1.IDLE/2.png",
  "./img/1.Sharkie/1.IDLE/3.png",
  "./img/1.Sharkie/1.IDLE/4.png",
  "./img/1.Sharkie/1.IDLE/5.png",
  "./img/1.Sharkie/1.IDLE/6.png",
  "./img/1.Sharkie/1.IDLE/7.png",
  "./img/1.Sharkie/1.IDLE/8.png",
  "./img/1.Sharkie/1.IDLE/9.png",
  "./img/1.Sharkie/1.IDLE/10.png",
  "./img/1.Sharkie/1.IDLE/11.png",
  "./img/1.Sharkie/1.IDLE/12.png",
  "./img/1.Sharkie/1.IDLE/13.png",
  "./img/1.Sharkie/1.IDLE/14.png",
  "./img/1.Sharkie/1.IDLE/15.png",
  "./img/1.Sharkie/1.IDLE/16.png",
  "./img/1.Sharkie/1.IDLE/17.png",
  "./img/1.Sharkie/1.IDLE/18.png",
];

IMAGES_LONG_IDLE = [
  "./img/1.Sharkie/2.Long_IDLE/I1.png",
  "./img/1.Sharkie/2.Long_IDLE/I2.png",
  "./img/1.Sharkie/2.Long_IDLE/I3.png",
  "./img/1.Sharkie/2.Long_IDLE/I4.png",
  "./img/1.Sharkie/2.Long_IDLE/I5.png",
  "./img/1.Sharkie/2.Long_IDLE/I6.png",
  "./img/1.Sharkie/2.Long_IDLE/I7.png",
  "./img/1.Sharkie/2.Long_IDLE/I8.png",
  "./img/1.Sharkie/2.Long_IDLE/I9.png",
  "./img/1.Sharkie/2.Long_IDLE/I10.png",
  "./img/1.Sharkie/2.Long_IDLE/I11.png",
  "./img/1.Sharkie/2.Long_IDLE/I12.png",
  "./img/1.Sharkie/2.Long_IDLE/I13.png",
  "./img/1.Sharkie/2.Long_IDLE/I14.png",
];
IMAGES_SWIM = [
  "./img/1.Sharkie/3.Swim/1.png",
  "./img/1.Sharkie/3.Swim/2.png",
  "./img/1.Sharkie/3.Swim/3.png",
  "./img/1.Sharkie/3.Swim/4.png",
  "./img/1.Sharkie/3.Swim/5.png",
  "./img/1.Sharkie/3.Swim/6.png",
];

IMAGES_ATTACK_GREEN_BUBBLE = [
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
];

IMAGES_ATTACK_WHITE_BUBBLE = [
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
  "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
];

IMAGES_ATTACK_FIN_SLAP = [
  "./img/1.Sharkie/4.Attack/Fin slap/1.png",
  "./img/1.Sharkie/4.Attack/Fin slap/2.png",
  "./img/1.Sharkie/4.Attack/Fin slap/3.png",
  "./img/1.Sharkie/4.Attack/Fin slap/4.png",
  "./img/1.Sharkie/4.Attack/Fin slap/5.png",
  "./img/1.Sharkie/4.Attack/Fin slap/6.png",
  "./img/1.Sharkie/4.Attack/Fin slap/7.png",
  "./img/1.Sharkie/4.Attack/Fin slap/8.png",
];

IMAGES_HURT = [
  "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
  "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
  "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
  "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
];
IMAGES_DEAD = [
  "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
  "./img/1.Sharkie/6.dead/1.Poisoned/12.png",
];

/************* Image-Arrays Puffer Fish ********************************/
GREEN_SWIM = [
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
];
GREEN_TRANSITION = [
  "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
];
GREEN_BUBBLESWIM = [
  "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
];
GREEN_DEAD = [
  "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
  "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png",
];

/************* Image-Arrays Endboss********************************/

IMAGES_ENDBOSS_INTRODUCING = [
  "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
  "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
];
IMAGES_ENDBOSS_FLOATING = [
  "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
  "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
];

IMAGES_ENDBOSS_ATTACK = [
  "./img/2.Enemy/3 Final Enemy/Attack/1.png",
  "./img/2.Enemy/3 Final Enemy/Attack/2.png",
  "./img/2.Enemy/3 Final Enemy/Attack/3.png",
  "./img/2.Enemy/3 Final Enemy/Attack/4.png",
  "./img/2.Enemy/3 Final Enemy/Attack/5.png",
  "./img/2.Enemy/3 Final Enemy/Attack/6.png",
];
IMAGES_ENDBOSS_HURT = [
  "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
  "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
  "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
  "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
];
IMAGES_ENDBOSS_DEAD = [
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
];

/************* COINS ****************/

IMAGES_COIN = [
  "./img/4. Marcadores/1. Coins/1.png",
  "./img/4. Marcadores/1. Coins/2.png",
  "./img/4. Marcadores/1. Coins/3.png",
  "./img/4. Marcadores/1. Coins/4.png",
];

/******** Bottles ***********/

IMAGES_SWIMMING_BOTTLE = [
  "./img/4. Marcadores/Posión/Animada/1.png",
  "./img/4. Marcadores/Posión/Animada/2.png",
  "./img/4. Marcadores/Posión/Animada/3.png",
  "./img/4. Marcadores/Posión/Animada/4.png",
];

/************ Status-Bars ****************/

IMAGES_STATUSBAR_COIN = [
  "./img/4. Marcadores/green/Coin/0_  copia 4.png",
  "./img/4. Marcadores/green/Coin/20_  copia 2.png",
  "./img/4. Marcadores/green/Coin/40_  copia 4.png",
  "./img/4. Marcadores/green/Coin/60_  copia 4.png",
  "./img/4. Marcadores/green/Coin/80_  copia 4.png",
  "./img/4. Marcadores/green/Coin/100_ copia 4.png",
];
IMAGES_STATUSBAR_LIFE = [
  "./img/4. Marcadores/green/Life/0_  copia 3.png",
  "./img/4. Marcadores/green/Life/20_ copia 4.png",
  "./img/4. Marcadores/green/Life/40_  copia 3.png",
  "./img/4. Marcadores/green/Life/60_  copia 3.png",
  "./img/4. Marcadores/green/Life/80_  copia 3.png",
  "./img/4. Marcadores/green/Life/100_  copia 2.png",
];

IMAGES_STATUSBAR_POISON = [
  "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
  "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
  "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
  "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
  "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
  "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
];



