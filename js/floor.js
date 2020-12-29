export default class Floor {

  constructor(source, context, canvas) {
    // canvas
    this.canvas = canvas;

    // context
    this.context = context;
    this.source = source;
    this.sourceX = 0;
    this.sourceY = 610;
    this.sourceWidth = 224;
    this.sourceHeight = 112;
    this.x =  0;
    this.y = this.canvas.height - 112;
    this.width = 224;
    this.height = 112;
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