import Bird from './bird.js';
import Floor from './floor.js';
import Wallpaper from './wallpaper.js';

import HomeScreen from './screen/homeScreen.js';
import GameScreen from './screen/gameScreen.js';

export default class Game {
  
  constructor(source, context, canvas) {
    this.canvas = canvas;
    this.source = source;
    this.context = context;

    this.bird = new Bird(this.source, this.context, this.canvas);
    this.floor = new Floor(this.source, this.context, this.canvas);
    this.wallpaper = new Wallpaper(this.source, this.context, this.canvas);

    this.audio = {
      fail: new Audio('../audio/fail.mp3'),
    }

    this.screen = {
      HOME_SCREEN: new HomeScreen(this.source, this.context, this.canvas, this.bird, this.floor, this.wallpaper),
      GAME_SCREEN: new GameScreen(this.bird, this.floor, this.wallpaper),
    }
    this.screenActive = this.screen.HOME_SCREEN;
  };

  renderScreen() {  
    this.context.fillStyle = '#70c5ce';
    this.context.fillRect(0,0, 320, 480);

    this.screenActive.render();

    if(this.screenActive == this.screen.GAME_SCREEN) {
      if(!this.checkColisionFloor()) {
        this.bird.fall();
      }
    } 
  };

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
    } else {
      this.bird.jumping();
    }
  }

}