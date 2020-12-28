import Bird from './bird.js';

export default class Game {
  
  constructor(source, context) {
    this.source = source;
    this.context = context;
    this.bird = new Bird(this.source, this.context);
  };

  render() {  
    this.bird.draw();
  }
}