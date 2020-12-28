import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const source = new Image();
source.src = '../img/source.png';

const game = new Game(source, context);

function loop() {
  game.render();
  requestAnimationFrame(loop);
}
loop();
