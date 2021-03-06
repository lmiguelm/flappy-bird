import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const source = new Image();
source.src = 'https://lmiguelm.github.io/flappy-bird/img/source.png';

const game = new Game(source, context, canvas);
canvas.addEventListener('click', () => game.click());

document.addEventListener('keydown', (event) => {
  if(event.keyCode == 32 || event.keyCode == 38) {
    game.click();
  }
});

function loop() {
  game.renderScreen();
  requestAnimationFrame(loop);
}
loop();
