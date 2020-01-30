console.log("Webpack is working!");


document.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 750;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  ctx.clearRect(0, 0, 750, 500);


});