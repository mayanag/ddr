const MovingArrow = require('./arrow');

class Gameview {
 constructor(game, canvasID) {
   this.canvasID = canvasID;
   this.game = game;
 }

 createStartButton() {
  var button = document. createElement("button");
  button. innerHTML = "Start Game";
  var body = document. getElementsByTagName("body")[0];
  body.appendChild(button);
  button.onclick = function() {
    var ctx = document.getElementById("game-canvas").getContext("2d");
    var arrow = new MovingArrow(0, 5, ctx);
    this.arrowImg = arrow.draw("arrow1",ctx);
  };
 }

 start() {
  this.createStartButton();
  
  //this.moveArrow("arrow1");
  // this.lastTime = 0;
  //  requestAnimationFrame(this.animate.bind(this));
 }

 animate(time) {
   const dt = time - this.lastTime
   requestAnimationFrame(this.animate.bind(this));
   this.game.step(dt);
   this.game.draw(this.ctx);
   this.lastTime = time
 }
}

function moveArrow(arrowImg) {
  var start = null;
  var element = arrowImg;

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.transform = 'translateY(' + Math.min(progress / 10, 200) + 'px)';
    if (progress < 2000) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step); 
}

module.exports = Gameview;