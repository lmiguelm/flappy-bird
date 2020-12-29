export default class GameLoserScreen {
  constructor(source, context, canvas, bird, flow, wallpaper) {
    this.canvas = canvas;
    this.source = source;
    this.context = context;

    this.context = context;
    this.source = source;
    this.sourceX = 134;
    this.sourceY = 153;
    this.sourceWidth = 226;
    this.sourceHeight = 200;
    this.x = (canvas.width / 2) - 150 / 2,
    this.y = 50;
    this.width = 150;
    this.height = 150;

    this.bird = bird;
    this.flow = flow;
    this.wallpaper = wallpaper;
  }

  draw() {
    this.context.drawImage(
      this.source,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height,
    );
  }

  render() {
    this.wallpaper.draw();
    this.flow.draw();
    this.bird.draw();
    this.draw();
  }
}