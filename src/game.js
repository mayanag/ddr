const movingArrow = require('./arrow');


class Game {
  constructor() {
    this.misses = 0;
    this.arrows = [];
    this.paused = true;
  };


  addArrow(type) { //type must be entered as TYPES[0]
    let arrow = new movingArrow(type);
    // arrow.draw();
    this.arrows.push(arrow);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 750, 500)
    this.arrows.forEach( (arrow) => arrow.draw());
  };

  moveArrows(dt = 1) {
    this.arrows.forEach( (arrow) => arrow.move(dt));
  }

  step(dt) {
    this.moveArrows(dt);
    this.draw(ctx);
  }
};

module.exports = Game;
