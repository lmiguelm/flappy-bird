export default class Wallpaper {

  constructor(source, context, canvas) {
    // canvas
    this.canvas = canvas;

    // context
    this.context = context;
    this.source = source;
    this.sourceX = 390;
    this.sourceY = 0;
    this.sourceWidth = 275;
    this.sourceHeight = 204;
    this.x =  0;
    this.y = this.canvas.height - 204;
    this.width = 275;
    this.height = 204;
  };

  draw() {
    this.context.drawImage(
      this.source,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height,
    );

    this.context.drawImage(
      this.source,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      (this.x + this.width), this.y,
      this.width, this.height,
    );
  }

}