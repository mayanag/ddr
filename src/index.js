const Game = require('./game');
const Gameview = require('./gameview');

console.log("Webpack is working!");


document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 750;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  const game = new Game;
  new Gameview(game, ctx).start();

  // ctx.clearRect(0, 0, 750, 500);


});