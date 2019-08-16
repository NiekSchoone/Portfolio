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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n__webpack_require__(/*! ./js/NiekBot/app.ts */ \"./src/js/NiekBot/app.ts\");\n//import './js/custom.js';\n__webpack_require__(/*! ./js/NiekBot/Games/Snake.ts */ \"./src/js/NiekBot/Games/Snake.ts\");\n__webpack_require__(/*! ./js/BGCanvas.ts */ \"./src/js/BGCanvas.ts\");\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/js/BGCanvas.ts":
/*!****************************!*\
  !*** ./src/js/BGCanvas.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar flocking_1 = __webpack_require__(/*! ./BackgroundProcesses/Flocking/flocking */ \"./src/js/BackgroundProcesses/Flocking/flocking.ts\");\nvar pathfinding_1 = __webpack_require__(/*! ./BackgroundProcesses/Pathfinding/pathfinding */ \"./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts\");\nvar statemachine_1 = __webpack_require__(/*! ./BackgroundProcesses/StateMachine/statemachine */ \"./src/js/BackgroundProcesses/StateMachine/statemachine.ts\");\nvar BGCanvas = /** @class */ (function () {\n    function BGCanvas(id, process) {\n        this.canvas = document.getElementById(id);\n        this.parent = this.canvas.parentElement;\n        this.resizeCanvas();\n        this.content = new process(this.canvas);\n        window.addEventListener('resize', this.resizeCanvas.bind(this));\n    }\n    BGCanvas.prototype.create = function (type) {\n        return new type(this.canvas);\n    };\n    BGCanvas.prototype.resizeCanvas = function () {\n        this.canvas.width = this.parent.offsetWidth;\n        this.canvas.height = this.parent.offsetHeight;\n    };\n    return BGCanvas;\n}());\nexports.BGCanvas = BGCanvas;\nvar flocking = new BGCanvas('flocking-stage', flocking_1.Flock);\nvar pathfinding = new BGCanvas('pathfinding-stage', pathfinding_1.Pathfinding);\nvar statemachine = new BGCanvas('statemachine-stage', statemachine_1.StateMachine);\n\n\n//# sourceURL=webpack:///./src/js/BGCanvas.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/boid.ts":
/*!*****************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/boid.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ./vector2 */ \"./src/js/BackgroundProcesses/Flocking/vector2.ts\");\nvar Boid = /** @class */ (function () {\n    function Boid(canvas, x, y) {\n        this.canvas = canvas;\n        this.position = vector2_1.default.make(x, y);\n        this.velocity = vector2_1.default.make(0, 0);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.maxForce = 0.2;\n        this.maxSpeed = 6;\n        this.alignmentDistance = 80;\n        this.separationDistance = 30;\n        this.cohesionDistance = 110;\n        this.velocity.x = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;\n        this.velocity.y = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;\n    }\n    Boid.prototype.update = function (boids) {\n        this.flock(boids);\n        this.run();\n        this.checkBorder();\n    };\n    Boid.prototype.run = function () {\n        this.velocity = vector2_1.default.add(this.velocity, this.accelaration);\n        this.velocity = vector2_1.default.clamp(this.velocity, -this.maxSpeed, this.maxSpeed);\n        this.position = vector2_1.default.add(this.position, this.velocity);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.angle = this.getAngle(this.velocity);\n    };\n    Boid.prototype.flock = function (boids) {\n        var align = this.allignment(boids);\n        var separate = this.separation(boids);\n        var cohese = this.cohesion(boids);\n        separate = vector2_1.default.scale(separate, 3);\n        this.applyForce(align);\n        this.applyForce(separate);\n        this.applyForce(cohese);\n    };\n    Boid.prototype.getAngle = function (v) {\n        var heading = vector2_1.default.make(v.x, v.y);\n        heading = vector2_1.default.normalize(heading);\n        return Math.atan2(heading.y, heading.x);\n    };\n    Boid.prototype.applyForce = function (force) {\n        this.accelaration = vector2_1.default.add(this.accelaration, force);\n    };\n    Boid.prototype.seek = function (targetVector) {\n        var desired = vector2_1.default.sub(targetVector, this.position);\n        desired = vector2_1.default.normalize(desired);\n        desired = vector2_1.default.scale(desired, this.maxSpeed);\n        var steer = vector2_1.default.sub(desired, this.velocity);\n        steer = vector2_1.default.clamp(steer, -this.maxForce, this.maxForce);\n        return steer;\n    };\n    Boid.prototype.allignment = function (boids) {\n        var alignmentVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.alignmentDistance)) {\n                alignmentVector = vector2_1.default.add(alignmentVector, boid.velocity);\n                count++;\n            }\n        }\n        if (count > 0) {\n            alignmentVector = vector2_1.default.divide(alignmentVector, count);\n            alignmentVector = vector2_1.default.normalize(alignmentVector);\n            alignmentVector = vector2_1.default.scale(alignmentVector, this.maxSpeed);\n            var steer = vector2_1.default.sub(alignmentVector, this.velocity);\n            steer = vector2_1.default.clamp(alignmentVector, -this.maxForce, this.maxForce);\n            return steer;\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.separation = function (boids) {\n        var separationVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.separationDistance)) {\n                var diff = vector2_1.default.sub(this.position, boid.position);\n                diff = vector2_1.default.normalize(diff);\n                diff = vector2_1.default.divide(diff, d);\n                separationVector = vector2_1.default.add(separationVector, diff);\n                count++;\n            }\n        }\n        if (count > 0) {\n            separationVector = vector2_1.default.divide(separationVector, count);\n            separationVector = vector2_1.default.normalize(separationVector);\n            separationVector = vector2_1.default.scale(separationVector, this.maxSpeed);\n            separationVector = vector2_1.default.sub(separationVector, this.velocity);\n            separationVector = vector2_1.default.clamp(separationVector, -this.maxForce, this.maxForce);\n        }\n        return separationVector;\n    };\n    Boid.prototype.cohesion = function (boids) {\n        var coheseVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.cohesionDistance)) {\n                coheseVector = vector2_1.default.add(coheseVector, boid.position);\n                count++;\n            }\n        }\n        if (count > 0) {\n            coheseVector = vector2_1.default.divide(coheseVector, count);\n            return this.seek(coheseVector);\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.checkBorder = function () {\n        var width = this.canvas.width;\n        var height = this.canvas.height;\n        if (this.position.x < -10)\n            this.position.x = width + 2;\n        if (this.position.y < -10)\n            this.position.y = height + 2;\n        if (this.position.x > width + 10)\n            this.position.x = -10;\n        if (this.position.y > height + 10)\n            this.position.y = -10;\n    };\n    Boid.prototype.draw = function (ctx) {\n        ctx.strokeStyle = '#20C20E';\n        ctx.beginPath();\n        ctx.moveTo(this.position.x, this.position.y);\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Boid;\n}());\nexports.default = Boid;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/boid.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/flocking.ts":
/*!*********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/flocking.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar boid_1 = __webpack_require__(/*! ./boid */ \"./src/js/BackgroundProcesses/Flocking/boid.ts\");\nvar Flock = /** @class */ (function () {\n    function Flock(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.boids = new Array();\n        this.createBoids(50);\n        setInterval(this.update.bind(this), 60);\n    }\n    Flock.prototype.createBoids = function (amt) {\n        for (var i = 0; i < amt; i++) {\n            var newBoid = new boid_1.default(this.canvas, 300, 300);\n            this.boids.push(newBoid);\n        }\n    };\n    Flock.prototype.update = function () {\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].update(this.boids);\n        }\n        this.draw();\n    };\n    Flock.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].draw(this.ctx);\n        }\n    };\n    return Flock;\n}());\nexports.Flock = Flock;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/flocking.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/vector2.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/vector2.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction make(x, y) {\n    return { x: x, y: y };\n}\nfunction add(a, b) {\n    return make(a.x + b.x, a.y + b.y);\n}\nfunction scale(a, s) {\n    return make(a.x * s, a.y * s);\n}\nfunction divide(a, s) {\n    return make(a.x * s, a.y * s);\n}\nfunction sub(a, b) {\n    return add(a, scale(b, -1));\n}\nfunction len(a) {\n    return Math.sqrt(a.x * a.x + a.y * a.y);\n}\nfunction normalize(a) {\n    var l = len(a);\n    if (l == 0) {\n        return make(1, 0);\n    }\n    else {\n        return scale(a, 1 / l);\n    }\n}\nfunction distance(a, b) {\n    return len(sub(b, a));\n}\nfunction distanceSquared(a, b) {\n    var v = sub(b, a);\n    return dot(v, v);\n}\n// Ray from a to b\nfunction ray(a, b) {\n    return normalize(sub(b, a));\n}\nfunction dot(a, b) {\n    return a.x * b.x + a.y * b.y;\n}\n// Rotate vector v by t radians\nfunction rotate(v, t) {\n    var ct = Math.cos(t);\n    var st = Math.sin(t);\n    return make(ct * v.x - st * v.y, st * v.x + ct * v.y);\n}\n// Angle between two normalized vectors with sign\nfunction angle(a, b) {\n    var t = Math.atan2(b.y, b.x) - Math.atan2(a.y, a.x);\n    if (t < 0) {\n        return 2 * Math.PI + t;\n    }\n    else {\n        return t;\n    }\n}\nfunction rayFromAngle(t) {\n    return make(Math.cos(t), Math.sin(t));\n}\n// Rotate from a towards b, by a maximum of 't' radians.\nfunction rotateToward(a, b, t) {\n    var full = angle(a, b);\n    if (full == 0 || Math.abs(full) < t) {\n        return b;\n    }\n    else {\n        if (full > Math.PI) {\n            return rotate(a, -t);\n        }\n        else {\n            return rotate(a, t);\n        }\n    }\n}\nfunction interpolate(a, b, t) {\n    var d = sub(b, a);\n    return add(a, scale(d, t));\n}\nfunction isEqual(a, b) {\n    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) < 0.000001;\n}\nfunction zero() {\n    return make(0, 0);\n}\nfunction randomRay() {\n    var t = 2 * Math.PI * Math.random();\n    return rotate(make(1, 0), t);\n}\nfunction fromPolar(v) {\n    return scale(rayFromAngle(v.t), v.r);\n}\nfunction toPolar(v) {\n    return {\n        t: Math.atan2(v.y, v.x),\n        r: len(v)\n    };\n}\nfunction clamp(v, min, max) {\n    return { x: Math.min(Math.max(v.x, min), max), y: Math.min(Math.max(v.y, min), max) };\n}\n;\nexports.default = {\n    make: make,\n    add: add,\n    scale: scale,\n    sub: sub,\n    len: len,\n    normalize: normalize,\n    distance: distance,\n    distanceSquared: distanceSquared,\n    ray: ray,\n    dot: dot,\n    rotate: rotate,\n    angle: angle,\n    rayFromAngle: rayFromAngle,\n    rotateToward: rotateToward,\n    interpolate: interpolate,\n    isEqual: isEqual,\n    zero: zero,\n    randomRay: randomRay,\n    fromPolar: fromPolar,\n    toPolar: toPolar,\n    divide: divide,\n    clamp: clamp\n};\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/vector2.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts":
/*!***************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Pathfinding = /** @class */ (function () {\n    function Pathfinding(canvas) {\n    }\n    return Pathfinding;\n}());\nexports.Pathfinding = Pathfinding;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/statemachine.ts":
/*!*****************************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/statemachine.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar StateMachine = /** @class */ (function () {\n    function StateMachine(canvas) {\n    }\n    return StateMachine;\n}());\nexports.StateMachine = StateMachine;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/statemachine.ts?");

/***/ }),

/***/ "./src/js/NiekBot/Games/Snake.ts":
/*!***************************************!*\
  !*** ./src/js/NiekBot/Games/Snake.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Snake = /** @class */ (function () {\n    function Snake() {\n        this.container = document.getElementById('game-container');\n        this.container.style.display = 'flex';\n        this.canvas = document.getElementById('stage');\n        this.ctx = this.canvas.getContext('2d');\n        this.button = document.getElementById('game-btn');\n        this.message = document.getElementById('game-msg');\n        this.scoreCounter = document.getElementById('score-counter');\n        this.dx = 0;\n        this.dy = 0;\n        this.tileDiameter = 16;\n        this.score = 0;\n        this.canvas.addEventListener('keydown', this.changeDirection.bind(this));\n        this.button.addEventListener('click', this.start.bind(this));\n    }\n    Snake.prototype.start = function () {\n        this.button.style.display = 'none';\n        this.message.style.display = 'none';\n        this.score = 0;\n        this.scoreCounter.innerHTML = 'Score: ' + this.score;\n        this.snake = [\n            { x: 10, y: 5 },\n            { x: 10, y: 4 },\n            { x: 10, y: 3 },\n            { x: 10, y: 2 }\n        ];\n        this.food = {\n            x: Math.floor(Math.random() * 19),\n            y: Math.floor(Math.random() * 19)\n        };\n        this.direction = Direction.DOWN;\n        this.canvas.focus();\n        this.interval = setInterval(this.update.bind(this), 100);\n    };\n    Snake.prototype.end = function () {\n        clearInterval(this.interval);\n        this.dx = 0;\n        this.dy = 0;\n        this.snake = [];\n        this.food = { x: -1, y: -1 };\n        this.button.value = 'RESTART';\n        this.button.style.display = 'block';\n        this.message.style.display = 'block';\n        this.message.innerHTML = 'Game over </br> Final score: ' + this.score;\n    };\n    Snake.prototype.update = function () {\n        this.directionChanged = false;\n        switch (this.direction) {\n            case Direction.LEFT:\n                this.dx = -1;\n                this.dy = 0;\n                break;\n            case Direction.UP:\n                this.dx = 0;\n                this.dy = -1;\n                break;\n            case Direction.RIGHT:\n                this.dx = 1;\n                this.dy = 0;\n                break;\n            case Direction.DOWN:\n                this.dx = 0;\n                this.dy = 1;\n                break;\n        }\n        if (this.collision()) {\n            this.end();\n        }\n        if (this.dx !== 0 || this.dy !== 0) {\n            this.move();\n        }\n        this.draw();\n    };\n    Snake.prototype.changeDirection = function (e) {\n        if (!this.directionChanged) {\n            this.directionChanged = true;\n            var key = e.keyCode;\n            if (key == 37 && this.direction != Direction.RIGHT) {\n                this.direction = Direction.LEFT;\n            }\n            else if (key == 38 && this.direction != Direction.DOWN) {\n                this.direction = Direction.UP;\n            }\n            else if (key == 39 && this.direction != Direction.LEFT) {\n                this.direction = Direction.RIGHT;\n            }\n            else if (key == 40 && this.direction != Direction.UP) {\n                this.direction = Direction.DOWN;\n            }\n        }\n    };\n    Snake.prototype.move = function () {\n        var head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };\n        this.snake.unshift(head);\n        if (head.x === this.food.x && head.y == this.food.y) {\n            this.eat();\n        }\n        else {\n            this.snake.pop();\n        }\n    };\n    Snake.prototype.collision = function () {\n        var result = false;\n        for (var i = 1; i < this.snake.length; i++) {\n            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {\n                return true;\n            }\n        }\n        if (this.snake[0].x >= 20 || this.snake[0].x < 0 || this.snake[0].y >= 20 || this.snake[0].y < 0) {\n            result = true;\n        }\n        return result;\n    };\n    Snake.prototype.eat = function () {\n        this.food.x = Math.floor(Math.random() * 19);\n        this.food.y = Math.floor(Math.random() * 19);\n        this.score += 10;\n        this.scoreCounter.innerHTML = 'Score: ' + this.score;\n    };\n    Snake.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for (var i = 0; i < this.snake.length; i++) {\n            this.ctx.fillStyle = \"#20C20E\";\n            this.ctx.fillRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n            this.ctx.strokeStyle = \"black\";\n            this.ctx.strokeRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n        }\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fillRect(this.food.x * this.tileDiameter, this.food.y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n    };\n    return Snake;\n}());\nexports.default = Snake;\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"UP\"] = 0] = \"UP\";\n    Direction[Direction[\"DOWN\"] = 1] = \"DOWN\";\n    Direction[Direction[\"LEFT\"] = 2] = \"LEFT\";\n    Direction[Direction[\"RIGHT\"] = 3] = \"RIGHT\";\n})(Direction || (Direction = {}));\n\n\n//# sourceURL=webpack:///./src/js/NiekBot/Games/Snake.ts?");

/***/ }),

/***/ "./src/js/NiekBot/app.ts":
/*!*******************************!*\
  !*** ./src/js/NiekBot/app.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar events_1 = __webpack_require__(/*! ../events */ \"./src/js/events.ts\");\nvar console_1 = __webpack_require__(/*! ./console */ \"./src/js/NiekBot/console.ts\");\nvar Bot = /** @class */ (function () {\n    function Bot() {\n        this.botConsole = new console_1.default();\n        events_1.default.on('command', this.executeCommand.bind(this));\n    }\n    Bot.prototype.executeCommand = function (cmd) {\n        console.log(cmd);\n    };\n    return Bot;\n}());\nexports.Bot = Bot;\nvar niekbot = new Bot();\n\n\n//# sourceURL=webpack:///./src/js/NiekBot/app.ts?");

/***/ }),

/***/ "./src/js/NiekBot/console.ts":
/*!***********************************!*\
  !*** ./src/js/NiekBot/console.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar events_1 = __webpack_require__(/*! ../events */ \"./src/js/events.ts\");\nvar BotConsole = /** @class */ (function () {\n    function BotConsole() {\n        this.setter = this.get('setter');\n        this.cursor = this.get('cursor');\n        this.writer = this.get('writer');\n        this.cursor.style.left = '0px';\n        this.events();\n    }\n    BotConsole.prototype.get = function (elid) {\n        return document.getElementById(elid);\n    };\n    BotConsole.prototype.events = function () {\n        this.get('bot-commandline').addEventListener('click', function () {\n            this.setter.focus();\n        }.bind(this));\n        this.setter.addEventListener('focus', function () {\n            this.cursor.classList.add('blink');\n        }.bind(this));\n        this.setter.addEventListener('blur', function () {\n            this.cursor.classList.remove('blink');\n        }.bind(this));\n        this.setter.addEventListener('keydown', function (e) {\n            this.writeit(this.setter, e);\n            this.moveit(this.setter.value.length, e);\n        }.bind(this));\n        this.setter.addEventListener('keyup', function (e) {\n            this.writeit(this.setter, e);\n        }.bind(this));\n        this.setter.addEventListener('keypress', function (e) {\n            this.writeit(this.setter, e);\n        }.bind(this));\n    };\n    BotConsole.prototype.nl2br = function (str) {\n        return str.replace(/\\n/g, '<br />');\n    };\n    BotConsole.prototype.writeit = function (from, e) {\n        if (e.keyCode == 13 && from.value.length > 0) {\n            this.emitCommand(this.setter.value);\n            return;\n        }\n        e = e || window.event;\n        var tw = from.value;\n        this.writer.innerHTML = this.nl2br(tw);\n    };\n    BotConsole.prototype.moveit = function (amt, e) {\n        e = e || window.event;\n        var keycode = e.keyCode || e.which;\n        if (keycode === 37 && parseInt(this.cursor.style.left, 10) >= (0 - ((amt - 1) * 10))) {\n            this.cursor.style.left = parseInt(this.cursor.style.left, 10) - 10 + 'px';\n        }\n        else if (keycode === 39 && (parseInt(this.cursor.style.left, 10) + 10) <= 0) {\n            this.cursor.style.left = parseInt(this.cursor.style.left, 10) + 10 + 'px';\n        }\n    };\n    BotConsole.prototype.emitCommand = function (com) {\n        this.setter.value = '';\n        this.writer.innerHTML = this.nl2br(this.setter.value);\n        events_1.default.emit('command', com);\n    };\n    return BotConsole;\n}());\nexports.default = BotConsole;\n\n\n//# sourceURL=webpack:///./src/js/NiekBot/console.ts?");

/***/ }),

/***/ "./src/js/events.ts":
/*!**************************!*\
  !*** ./src/js/events.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EventBus = /** @class */ (function () {\n    function EventBus() {\n        this.eventList = {};\n    }\n    EventBus.prototype.on = function (_key, _handler) {\n        if (!this.eventList[_key]) {\n            this.eventList[_key] = [];\n        }\n        this.eventList[_key].push(_handler);\n    };\n    EventBus.prototype.off = function (_key, _handler) {\n        var handlers = this.eventList[_key];\n        if (!handlers || handlers.length === 0) {\n            return false;\n        }\n        else if (!_handler) {\n            this.eventList[_key].length = 0;\n        }\n        else {\n            for (var i = handlers.length - 1; i >= 0; i--) {\n                if (handlers[i] === _handler) {\n                    handlers.splice(i, 1);\n                }\n            }\n        }\n    };\n    EventBus.prototype.emit = function (_key) {\n        var _params = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            _params[_i - 1] = arguments[_i];\n        }\n        var _a;\n        var handlers = this.eventList[_key];\n        if (!handlers || handlers.length === 0) {\n            return false;\n        }\n        else {\n            var len = handlers.length;\n            for (var i = 0; i < len; i++) {\n                (_a = handlers[i]).call.apply(_a, [this].concat(_params));\n            }\n        }\n    };\n    return EventBus;\n}());\nexports.EventBus = EventBus;\nexports.default = new EventBus();\n\n\n//# sourceURL=webpack:///./src/js/events.ts?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });