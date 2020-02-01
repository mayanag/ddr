const TYPES = {
  0: { startPos: [100, 0], imgUrl: './assets/spungbob.png'},
  1: { startPos: [300, 0], imgUrl: './assets/krabs.png'},
  2: { startPos: [500, 0], imgUrl: './assets/patrick.png'},
  3: { startPos: [700, 0], imgUrl: './assets/squid.png'}
};

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class movingArrow {
// must input type as TYPES.LEFT for example
  constructor(type, vel = 3) {
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
    // ctx.fillRect(this.x, this.y, 20, 20)
    const img = new Image;
    img.onload(function() {
      ctx.drawImage(img, this.x, this.y)
    })
    img.src = this.image; 
  };
};

module.exports = {
  movingArrow,
  TYPES
};

