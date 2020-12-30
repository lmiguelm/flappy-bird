import Bird from './bird.js';
import Floor from './floor.js';
import Wallpaper from './wallpaper.js';
import Obstacle from './obstacle.js';

import HomeScreen from './screen/homeScreen.js';
import GameScreen from './screen/gameScreen.js';
import GameLoserScreen from './screen/gameLoserScreen.js';

export default class Game {
  
  constructor(source, context, canvas) {
    this.canvas = canvas;
    this.source = source;
    this.context = context;

    this.bird = new Bird(this.source, this.context, this.canvas);
    this.floor = new Floor(this.source, this.context, this.canvas);
    this.wallpaper = new Wallpaper(this.source, this.context, this.canvas);
    this.obstacle = new Obstacle(this.source, this.context, this.canvas);

    this.audio = {
      fail: new Audio('https://lmiguelm.github.io/flappy-bird/audio/fail.mp3'),
    }

    this.screen = {
      HOME_SCREEN: new HomeScreen(this.source, this.context, this.canvas, this.bird, this.floor, this.wallpaper),
      GAME_SCREEN: new GameScreen(this.bird, this.floor, this.wallpaper, this.obstacle),
      GAME_LOSER_SCREEN: new GameLoserScreen(this.source, this.context, this.canvas, this.bird, this.floor, this.wallpaper),
    }
    this.screenActive = this.screen.HOME_SCREEN;

    this.frames = 0;
  };

  renderScreen() {  
    this.context.fillStyle = '#70c5ce';
    this.context.fillRect(0,0, 320, 480);

    this.screenActive.render();

    if(this.screenActive == this.screen.GAME_SCREEN) {
      if(!this.checkColisionFloor()) {

        this.bird.fall();
        this.obstacle.updateFrame(this.frames);

        if(this.checkColisionObstacle()) {
          this.audio.fail.play();
          this.screenActive = this.screen.GAME_LOSER_SCREEN;
        }
        this.frames++;

      } else {
        this.screenActive = this.screen.GAME_LOSER_SCREEN;
      }
    } 
  };

  checkColisionObstacle() {
    return this.obstacle.pairs.some(pair => {
      const topBird = this.bird.y;
      const bottomBird = this.bird.y + this.bird.height;
      
      if((this.bird.x + this.bird.width) >= pair.x) {
        if(topBird <= this.obstacle.top.y) {
          return true;
        }
        if(bottomBird >= this.obstacle.bottom.y ) {
          return true;
        }
      }
      return false;
    });
  }

  checkColisionFloor() {
    const bird = this.bird.y + this.bird.height;
    const floor = this.floor.y;

    if(bird >= floor) {
      this.audio.fail.play();
      return true;
    }
    return false;
  }

  click() {
    if(this.screenActive == this.screen.HOME_SCREEN) {
      this.screenActive = this.screen.GAME_SCREEN;
    } else if (this.screenActive == this.screen.GAME_SCREEN) {
      this.bird.jumping();
    } else {
      this.screenActive = this.screen.HOME_SCREEN;
      this.bird.reset();
      this.obstacle.reset();
    }
  }

}