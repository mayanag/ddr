/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const TYPES = {\n  0: { startX: 100, imgUrl: './assets/spungbob.png'},\n  1: { startX: 300,  imgUrl: './assets/krabs.png'},\n  2: { startX: 500,  imgUrl: './assets/patrick.png'},\n  3: { startX: 700,  imgUrl: './assets/squid.png'}\n};\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nclass MovingArrow {\n// must input type as TYPES.0 for example\n  constructor(type, vel, ctx) {\n    this.typeObj = TYPES[type],\n    this.vel = vel,\n    this.x = this.typeObj.startX;//TYPES[type].startPos[0],\n    this.y = 0 //TYPES[type].startPos[1]\n    this.image = this.typeObj.imgUrl;\n  };\n\n  getType() {\n    return this.type;\n  }\n\n  move(dt = 1) {\n    this.y += this.vel * dt\n  };\n\n\n  \n\n  \n  \n};\n\n\n\nmodule.exports = MovingArrow;\n\n\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingArrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\nconst TYPES = {\n  0: { startPos: [100, 0], imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'},\n  1: { startPos: [300, 0], imgUrl: './assets/krabs.png'},\n  2: { startPos: [500, 0], imgUrl: './assets/patrick.png'},\n  3: { startPos: [700, 0], imgUrl: './assets/squid.png'}\n};\n\n\nclass Game {\n  constructor() {\n    this.misses = 0;\n    this.arrows = [];\n    this.paused = true;\n\n    //this.spawnArrows();\n  };\n\n\n  addArrow(type) { //type must be entered as TYPES[0]\n    let arrow = new MovingArrow(type);\n    // arrow.draw();\n    this.arrows.push(arrow);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 750, 500)\n    this.arrows.forEach( (arrow) => arrow.draw());\n  };\n\n  moveArrows(dt = 1) {\n    this.arrows.forEach( (arrow) => arrow.move(dt));\n  }\n\n  step(dt) {\n    this.moveArrows(dt);\n  }\n\n  spawnArrows() {\n    this.addArrow(TYPES[0]);\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingArrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\nclass Gameview {\n constructor(game, canvasID) {\n   this.canvasID = canvasID;\n   this.game = game;\n }\n\n createStartButton() {\n  var button = document. createElement(\"button\");\n  button. innerHTML = \"Start Game\";\n  var body = document. getElementsByTagName(\"body\")[0];\n  body.appendChild(button);\n  button.onclick = function() {\n    var ctx = document.getElementById(\"game-canvas\").getContext(\"2d\");\n    var arrow = new MovingArrow(0, 5, ctx);\n    this.arrowImg = arrow.draw(\"arrow1\",ctx);\n  };\n }\n\n start() {\n  this.createStartButton();\n  \n  //this.moveArrow(\"arrow1\");\n  // this.lastTime = 0;\n  //  requestAnimationFrame(this.animate.bind(this));\n }\n\n animate(time) {\n   const dt = time - this.lastTime\n   requestAnimationFrame(this.animate.bind(this));\n   this.game.step(dt);\n   this.game.draw(this.ctx);\n   this.lastTime = time\n }\n}\n\nfunction moveArrow(arrowImg) {\n  var start = null;\n  var element = arrowImg;\n\n  function step(timestamp) {\n    if (!start) start = timestamp;\n    var progress = timestamp - start;\n    element.style.transform = 'translateY(' + Math.min(progress / 10, 200) + 'px)';\n    if (progress < 2000) {\n      window.requestAnimationFrame(step);\n    }\n  }\n\n  window.requestAnimationFrame(step); \n}\n\nmodule.exports = Gameview;\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Gameview = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\nconst MovingArrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\nvar gameView ;\nvar movingArrows = [];\nconsole.log(\"Webpack is working!\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 750;\n  canvasEl.height = 500;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  // const game = new Game;\n  // gameView = new Gameview(game, \"game-canvas\");\n  // gameView.start();\n  initArrows();\n  var currentArrowIndex = 0;\n  var intervalId = setInterval(function() {\n    if (currentArrowIndex>= movingArrows.length) {\n      clearInterval(intervalId);\n      return;\n    }\n    draw(currentArrowIndex)\n    currentArrowIndex++;\n  }, 1000);\n  // ctx.beginPath();\n  // ctx.rect(20,20, 150, 100);\n  // ctx.stroke();\n  // ctx.clearRect(0, 0, 750, 500);\n \n});\n\n\nfunction initArrows() {\n\n  movingArrows.push(new MovingArrow(0, 5, null));\n  movingArrows.push(new MovingArrow(2, 5, null));\n  movingArrows.push(new MovingArrow(1, 5, null));\n  movingArrows.push(new MovingArrow(3, 5, null));\n  movingArrows.push(new MovingArrow(2, 5, null));\n  movingArrows.push(new MovingArrow(2, 5, null));\n  movingArrows.push(new MovingArrow(0, 5, null));\n}\nfunction draw(arrowIndex) {\n  \n  var canvas = document.getElementById('game-canvas');\n  var ctx = canvas.getContext(\"2d\");\n  var arrow = movingArrows[arrowIndex];\n  var imgTag = new Image();\n\n  imgTag.onload = animate;\n  imgTag.src = arrow.image;   // load image\n\n  function animate() {\n    setTimeout(function () {\n      ctx.clearRect(arrow.x, 0, 20, canvas.height);  // clear canvas\n      ctx.drawImage(imgTag, arrow.x, arrow.y, 20, 20);                       // draw image at current position\n      arrow.y += 5;\n      if (arrow.y < canvas.height) requestAnimationFrame(animate) \n    },100);\n           // loop\n  }\n  requestAnimationFrame(animate);\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });