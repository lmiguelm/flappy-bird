import Bird from './bird.js';
import Floor from './floor.js';
import Wallpaper from './wallpaper.js';

import HomeScreen from './screen/homeScreen.js';

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
      HomeScreen: new HomeScreen(this.source, this.context, this.canvas, this.bird, this.floor, this.wallpaper)
    }

    this.screenActive = this.screen.HomeScreen;
  };

  renderScreen() {  
    this.context.fillStyle = '#70c5ce';
    this.context.fillRect(0,0, 320, 480);

    this.screen.HomeScreen.render();
  };

  checkColisionFloor() {
    const bird = this.bird.y + this.bird.height;
    const floor = this.floor.y;

    if(bird >= floor) {
      // this.audio.fail.play();
      return true;
    }
    return false;
  }

  click() {
    this.bird.jumping();
// 
    // this.screenActive = 'playing';

    console.log(this.screenActive);
  }

}