export default class Obstacle {

  constructor(source, context, canvas) {
    // canvas
    this.canvas = canvas;
    this.context = context;
    this.source = source;

    this.top = {
      sourceX: 52,
      sourceY: 169,
      x:  0,
      y: 0,
    };
    
    this.bottom = {
      sourceX: 0,
      sourceY: 169,
      x:  0,
      y: 0,
    }

    this.sourceWidth = 52;
    this.sourceHeight = 400;

    this.width = 50;
    this.height = 400;

    this.pairs = [];
  };

  reset() {
    
    this.top = {
      sourceX: 52,
      sourceY: 169,
      x:  0,
      y: 0,
    };
    
    this.bottom = {
      sourceX: 0,
      sourceY: 169,
      x:  0,
      y: 0,
    }

    this.sourceWidth = 52;
    this.sourceHeight = 400;

    this.width = 52;
    this.height = 400;

    this.pairs = [];
  }

  updateFrame(frames) {
    if(frames % 100 === 0) {
      this.pairs.push({
        x: this.canvas.width,
        y: -150 * (Math.random() + 1)
      });
    }

    this.pairs.forEach(pair => {
      pair.x += -2;

      if(pair.x + this.width <= 0) {
        this.pairs.shift();
      }
    });
  }

  draw() {
    this.pairs.forEach((pair) => {

      const spaceBetweenObstacles = 130;

      const obstacleTopX = pair.x;
      const obstacleTopY = pair.y;

      // OBSTACLE TOP
      this.context.drawImage( 
        this.source,
        this.top.sourceX, this.top.sourceY,
        this.sourceWidth, this.sourceHeight,
        obstacleTopX, obstacleTopY,
        this.width, this.height,
      );

      // OBSTACLE BOTTOM
      const obstacleBottomX = pair.x;
      const obstacleBottomY = this.height + spaceBetweenObstacles + pair.y;

      this.context.drawImage( 
        this.source,
        this.bottom.sourceX, this.bottom.sourceY,
        this.sourceWidth, this.sourceHeight,
        obstacleBottomX, obstacleBottomY,
        this.width, this.height,
      );

      this.top = {
        ...this.top,
        x: obstacleTopX,
        y: this.height + obstacleTopY
      }

      this.bottom = {
        ...this.bottom,
        x: obstacleBottomX,
        y: obstacleBottomY
      }

    });
  }
}