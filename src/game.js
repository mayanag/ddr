const movingArrow = require('./arrow');

class Game {
  constructor() {

  };
  let arrow = new movingArrow(TYPES.LEFT);

  while (true) {
    arrow.draw();
    arrow.move();
  };
};

