const TYPES = {
  0: { startX: 100, imgUrl: './assets/spungbob.png'},
  1: { startX: 300,  imgUrl: './assets/krabs.png'},
  2: { startX: 500,  imgUrl: './assets/patrick.png'},
  3: { startX: 700,  imgUrl: './assets/squid.png'}
};

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingArrow {
// must input type as TYPES.0 for example
  constructor(type, vel, ctx) {
    this.typeObj = TYPES[type],
    this.vel = vel,
    this.x = this.typeObj.startX;//TYPES[type].startPos[0],
    this.y = 0 //TYPES[type].startPos[1]
    this.image = this.typeObj.imgUrl;
  };

  getType() {
    return this.type;
  }

  move(dt = 1) {
    this.y += this.vel * dt
  };


  

  
  
};



module.exports = MovingArrow;

