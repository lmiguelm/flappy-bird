export default class Bird {

  constructor(source, context) {
    this.context = context;
    this.source = source;

    this.spritX = 0;
    this.spritY = 0;
    this.largura = 33;
    this.altura = 24;
    this.x =  10;
    this.y = 50;
  };

  draw() {
    this.context.drawImage(
      this.source,
      0, 0,
      33, 24,
      10, 50,
      33, 24
    );
  }
}