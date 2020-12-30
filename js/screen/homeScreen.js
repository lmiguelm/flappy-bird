export default class HomeScreen {
  constructor(source, context, canvas, bird, flow, wallpaper) {
    this.canvas = canvas;

    this.context = context;
    this.source = source;
    this.sourceX = 134;
    this.sourceY = 0;
    this.sourceWidth = 174;
    this.sourceHeight = 152;
    this.x = (canvas.width / 2) - 100 / 2;
    this.y = 50;
    this.width = 100;
    this.height = 200;

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