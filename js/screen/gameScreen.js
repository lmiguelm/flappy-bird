export default class GameScreen {
  constructor(bird, flow, wallpaper) {    
    this.bird = bird;
    this.flow = flow;
    this.wallpaper = wallpaper;
  }

  render() {
    this.wallpaper.draw();
    this.flow.draw();
    this.bird.draw();
  }
}