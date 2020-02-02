const TYPES = {
  0: { startPos: [100, 0], imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'},
  1: { startPos: [300, 0], imgUrl: '../assets/krabs.png'},
  2: { startPos: [500, 0], imgUrl: '../assets/patrick.png'},
  3: { startPos: [700, 0], imgUrl: '../assets/squid.png'}
};

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class movingArrow {
// must input type as TYPES.0 for example
  constructor(type, vel = 3, ctx) {
    this.type = type,
    this.vel = vel,
    this.x = type.startPos[0],
    this.y = type.startPos[1]
    this.image = type.imgUrl;
  };

  getType() {
    return this.type;
  }

  move(dt = 1) {
    this.y += this.vel * dt
  };

  draw(ctx) {
    ctx.fillRect(this.x, this.y, 20, 20)
  //   let img = new Image;
  //   img.src = this.image; 
  //   // img.onload = function() {
  //     ctx.drawImage(img, this.x, this.y)
  //   // };
  // };
  };
};

module.exports = movingArrow;

