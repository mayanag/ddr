

class Gameview {
 constructor(game, ctx) {
   this.ctx = ctx;
   this.game = game;
 }

 start() {
   this.lastTime = 0;
   requestAnimationFrame(this.animate.bind(this));
 }

 animate(time) {
   const dt = time - this.lastTime
   requestAnimationFrame(this.animate.bind(this));
   this.game.step(dt);
   this.game.draw(this.ctx);
   this.lastTime = time
 }
}

module.exports = Gameview;