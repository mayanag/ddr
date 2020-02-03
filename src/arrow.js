const TYPES = {
  0: { startX: 100, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'},
  1: { startX: 300,  imgUrl: '../assets/krabs.png'},
  2: { startX: 500,  imgUrl: '../assets/patrick.png'},
  3: { startX: 700,  imgUrl: '../assets/squid.png'}
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
    this.ctx = ctx;
  };

  getType() {
    return this.type;
  }

  move(dt = 1) {
    this.y += this.vel * dt
  };


  draw(id, ctx) {
    //ctx.fillRect(this.x, this.y, 20, 20);
    // let img = new Image;
    // img.src = this.image; 
    // img.id = id;
    // img.onload = function() {
    //   ctx.drawImage(img, this.x, this.y,50, 50);
    // };
    var imgTag = new Image();
    var canvas = document.getElementById('game-canvas');
    var ctx = canvas.getContext("2d");
    var x = this.x;
    var y = this.y;

    imgTag.onload = animate;
    imgTag.src = this.image;   // load image

    function animate() {
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
        ctx.drawImage(imgTag, x, y, 20, 20);                       // draw image at current position
        y += this.vel;
        if (y < canvas.height) requestAnimationFrame(animate) 
      },100);
             // loop
    }
    requestAnimationFrame(animate);
  }

  
  
};



module.exports = MovingArrow;

