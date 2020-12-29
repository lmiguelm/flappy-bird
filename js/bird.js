export default class Bird {

  constructor(source, context, canvas) {

    // canvas
    this.canvas = canvas;

    // context
    this.context = context;
    this.source = source;
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 33;
    this.sourceHeight = 24;
    this.x =  10;
    this.y = 50;
    this.width = 15;
    this.height = 25;

    // game
    this.velocity = 0;
    this.gravity = 0.25;
    this.jump = 4.6;

    //audio 
    this.audio = {
      jump: new Audio('../audio/jump.mp3')
    }
  };

  fall() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  };

  jumping() {
    const bird = this.y + this.height;
   
    if(0 <= bird) {
      this.velocity = -this.jump;
      this.audio.jump.play();
    }
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
}