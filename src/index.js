const Game = require('./game');
const Gameview = require('./gameview');
var gameView ;
console.log("Webpack is working!");


document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 750;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  const game = new Game;
  gameView = new Gameview(game, "game-canvas");
  gameView.start();
  // ctx.beginPath();
  // ctx.rect(20,20, 150, 100);
  // ctx.stroke();
  // ctx.clearRect(0, 0, 750, 500);
 
});

export {gameView};
