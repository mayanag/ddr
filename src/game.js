const movingArrow = require('./arrow');

const TYPES = {
  0: { startPos: [100, 0], imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'},
  1: { startPos: [300, 0], imgUrl: './assets/krabs.png'},
  2: { startPos: [500, 0], imgUrl: './assets/patrick.png'},
  3: { startPos: [700, 0], imgUrl: './assets/squid.png'}
};


class Game {
  constructor() {
    this.misses = 0;
    this.arrows = [];
    this.paused = true;

    this.spawnArrows();
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
  }

  spawnArrows() {
    this.addArrow(TYPES[0]);
  }
};

module.exports = Game;
