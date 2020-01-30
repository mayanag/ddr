const TYPES = {
  LEFT: { startPos: [100, 0], imgUrl: './assets/spungbob.png'},
  UP: { startPos: [300, 0], imgUrl: './assets/krabs.png'},
  DOWN: { startPos: [500, 0], imgUrl: './assets/patrick.png'},
  RIGHT: { startPos: [700, 0], imgUrl: './assets/squid.png'}
};

class movingArrow {
// must input type as TYPES[LEFT] for example
  constructor(type, vel = 3) {
    this.type = type,
    this.vel = vel,
    this.x = type.startPos[0],
    this.y = type.startPos[1]
    this.image = type.imgUrl;
  };

  move() {
    this.y += this.vel
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

