export default class GameScreen {
  constructor(bird, flow, wallpaper, obstacle) {    
    this.bird = bird;
    this.flow = flow;
    this.wallpaper = wallpaper;
    this.obstacle = obstacle;
  }

  render() {
    this.wallpaper.draw();
    this.obstacle.draw();
    this.flow.draw();
    this.bird.draw();
  }
}