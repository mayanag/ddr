const Game = require('./game');
const Gameview = require('./gameview');
const MovingArrow = require('./arrow');
var gameView ;
var movingArrows = [];
console.log("Webpack is working!");


document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 750;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  // const game = new Game;
  // gameView = new Gameview(game, "game-canvas");
  // gameView.start();
  initArrows();
  var currentArrowIndex = 0;
  var intervalId = setInterval(function() {
    if (currentArrowIndex>= movingArrows.length) {
      clearInterval(intervalId);
      return;
    }
    draw(currentArrowIndex)
    currentArrowIndex++;
  }, 1000);
  // ctx.beginPath();
  // ctx.rect(20,20, 150, 100);
  // ctx.stroke();
  // ctx.clearRect(0, 0, 750, 500);
 
});


function initArrows() {

  movingArrows.push(new MovingArrow(0, 5, null));
  movingArrows.push(new MovingArrow(1, 5, null));
  movingArrows.push(new MovingArrow(2, 5, null));
  movingArrows.push(new MovingArrow(3, 5, null));
}
function draw(arrowIndex) {
  
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext("2d");
  var arrow = movingArrows[arrowIndex];
  var imgTag = new Image();

  imgTag.onload = animate;
  imgTag.src = arrow.image;   // load image

  function animate() {
    setTimeout(function () {
      ctx.clearRect(arrow.x, 0, 20, canvas.height);  // clear canvas
      ctx.drawImage(imgTag, arrow.x, arrow.y, 20, 20);                       // draw image at current position
      arrow.y += 5;
      if (arrow.y < canvas.height) requestAnimationFrame(animate) 
    },100);
           // loop
  }
  requestAnimationFrame(animate);
}

