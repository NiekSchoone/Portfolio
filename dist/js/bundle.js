/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function make(x, y) {
    return { x: x, y: y };
}
function add(a, b) {
    return make(a.x + b.x, a.y + b.y);
}
function scale(a, s) {
    return make(a.x * s, a.y * s);
}
function divide(a, s) {
    return make(a.x * s, a.y * s);
}
function sub(a, b) {
    return add(a, scale(b, -1));
}
function len(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
}
function normalize(a) {
    var l = len(a);
    if (l == 0) {
        return make(1, 0);
    }
    else {
        return scale(a, 1 / l);
    }
}
function distance(a, b) {
    return len(sub(b, a));
}
function distanceSquared(a, b) {
    var v = sub(b, a);
    return dot(v, v);
}
// Ray from a to b
function ray(a, b) {
    return normalize(sub(b, a));
}
function dot(a, b) {
    return a.x * b.x + a.y * b.y;
}
// Rotate vector v by t radians
function rotate(v, t) {
    var ct = Math.cos(t);
    var st = Math.sin(t);
    return make(ct * v.x - st * v.y, st * v.x + ct * v.y);
}
// Angle between two normalized vectors with sign
function angle(a, b) {
    var t = Math.atan2(b.y, b.x) - Math.atan2(a.y, a.x);
    if (t < 0) {
        return 2 * Math.PI + t;
    }
    else {
        return t;
    }
}
function rayFromAngle(t) {
    return make(Math.cos(t), Math.sin(t));
}
// Rotate from a towards b, by a maximum of 't' radians.
function rotateToward(a, b, t) {
    var full = angle(a, b);
    if (full == 0 || Math.abs(full) < t) {
        return b;
    }
    else {
        if (full > Math.PI) {
            return rotate(a, -t);
        }
        else {
            return rotate(a, t);
        }
    }
}
function interpolate(a, b, t) {
    var d = sub(b, a);
    return add(a, scale(d, t));
}
function isEqual(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) < 0.000001;
}
function zero() {
    return make(0, 0);
}
function randomRay() {
    var t = 2 * Math.PI * Math.random();
    return rotate(make(1, 0), t);
}
function fromPolar(v) {
    return scale(rayFromAngle(v.t), v.r);
}
function toPolar(v) {
    return {
        t: Math.atan2(v.y, v.x),
        r: len(v)
    };
}
function clamp(v, min, max) {
    return { x: Math.min(Math.max(v.x, min), max), y: Math.min(Math.max(v.y, min), max) };
}
;
exports.default = {
    make: make,
    add: add,
    scale: scale,
    sub: sub,
    len: len,
    normalize: normalize,
    distance: distance,
    distanceSquared: distanceSquared,
    ray: ray,
    dot: dot,
    rotate: rotate,
    angle: angle,
    rayFromAngle: rayFromAngle,
    rotateToward: rotateToward,
    interpolate: interpolate,
    isEqual: isEqual,
    zero: zero,
    randomRay: randomRay,
    fromPolar: fromPolar,
    toPolar: toPolar,
    divide: divide,
    clamp: clamp
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Snake = /** @class */ (function () {
    function Snake() {
        this.container = document.getElementById('game-container');
        this.canvas = document.getElementById('game-stage');
        this.ctx = this.canvas.getContext('2d');
        this.button = document.getElementById('game-btn');
        this.message = document.getElementById('game-msg');
        this.scoreCounter = document.getElementById('score-counter');
        this.dx = 0;
        this.dy = 0;
        this.tileDiameter = 16;
        this.score = 0;
        this.canvas.addEventListener('keydown', this.changeDirection.bind(this));
        this.button.addEventListener('click', this.start.bind(this));
    }
    Snake.prototype.start = function () {
        this.button.style.display = 'none';
        this.message.style.display = 'none';
        this.score = 0;
        this.scoreCounter.innerHTML = 'Score: ' + this.score;
        this.snake = [
            { x: 10, y: 5 },
            { x: 10, y: 4 },
            { x: 10, y: 3 },
            { x: 10, y: 2 }
        ];
        this.food = {
            x: Math.floor(Math.random() * 19),
            y: Math.floor(Math.random() * 19)
        };
        this.direction = Direction.DOWN;
        this.canvas.focus();
        this.interval = setInterval(this.update.bind(this), 100);
    };
    Snake.prototype.end = function () {
        clearInterval(this.interval);
        this.dx = 0;
        this.dy = 0;
        this.snake = [];
        this.food = { x: -1, y: -1 };
        this.button.value = 'RESTART';
        this.button.style.display = 'block';
        this.message.style.display = 'block';
        this.message.innerHTML = 'Game over </br> Final score: ' + this.score;
    };
    Snake.prototype.update = function () {
        this.directionChanged = false;
        switch (this.direction) {
            case Direction.LEFT:
                this.dx = -1;
                this.dy = 0;
                break;
            case Direction.UP:
                this.dx = 0;
                this.dy = -1;
                break;
            case Direction.RIGHT:
                this.dx = 1;
                this.dy = 0;
                break;
            case Direction.DOWN:
                this.dx = 0;
                this.dy = 1;
                break;
        }
        if (this.collision()) {
            this.end();
        }
        if (this.dx !== 0 || this.dy !== 0) {
            this.move();
        }
        this.draw();
    };
    Snake.prototype.changeDirection = function (e) {
        if (!this.directionChanged) {
            this.directionChanged = true;
            var key = e.keyCode;
            if (key == 37 && this.direction != Direction.RIGHT) {
                this.direction = Direction.LEFT;
            }
            else if (key == 38 && this.direction != Direction.DOWN) {
                this.direction = Direction.UP;
            }
            else if (key == 39 && this.direction != Direction.LEFT) {
                this.direction = Direction.RIGHT;
            }
            else if (key == 40 && this.direction != Direction.UP) {
                this.direction = Direction.DOWN;
            }
        }
    };
    Snake.prototype.move = function () {
        var head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);
        if (head.x === this.food.x && head.y == this.food.y) {
            this.eat();
        }
        else {
            this.snake.pop();
        }
    };
    Snake.prototype.collision = function () {
        var result = false;
        for (var i = 1; i < this.snake.length; i++) {
            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
                return true;
            }
        }
        if (this.snake[0].x >= 20 || this.snake[0].x < 0 || this.snake[0].y >= 20 || this.snake[0].y < 0) {
            result = true;
        }
        return result;
    };
    Snake.prototype.eat = function () {
        this.food.x = Math.floor(Math.random() * 19);
        this.food.y = Math.floor(Math.random() * 19);
        this.score += 10;
        this.scoreCounter.innerHTML = 'Score: ' + this.score;
    };
    Snake.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.snake.length; i++) {
            this.ctx.fillStyle = "#20C20E";
            this.ctx.fillRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);
        }
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food.x * this.tileDiameter, this.food.y * this.tileDiameter, this.tileDiameter, this.tileDiameter);
    };
    return Snake;
}());
exports.default = Snake;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.eventList = {};
    }
    EventBus.prototype.on = function (_key, _handler) {
        if (!this.eventList[_key]) {
            this.eventList[_key] = [];
        }
        this.eventList[_key].push(_handler);
    };
    EventBus.prototype.off = function (_key, _handler) {
        var handlers = this.eventList[_key];
        if (!handlers || handlers.length === 0) {
            return false;
        }
        else if (!_handler) {
            this.eventList[_key].length = 0;
        }
        else {
            for (var i = handlers.length - 1; i >= 0; i--) {
                if (handlers[i] === _handler) {
                    handlers.splice(i, 1);
                }
            }
        }
    };
    EventBus.prototype.emit = function (_key) {
        var _params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _params[_i - 1] = arguments[_i];
        }
        var _a;
        var handlers = this.eventList[_key];
        if (!handlers || handlers.length === 0) {
            return false;
        }
        else {
            var len = handlers.length;
            for (var i = 0; i < len; i++) {
                (_a = handlers[i]).call.apply(_a, [this].concat(_params));
            }
        }
    };
    return EventBus;
}());
exports.EventBus = EventBus;
exports.default = new EventBus();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathRequestManager = /** @class */ (function () {
    function PathRequestManager() {
        this.pathRequestQueue = [];
    }
    Object.defineProperty(PathRequestManager.prototype, "Pathfinder", {
        set: function (p) {
            this.pathfinder = p;
        },
        enumerable: true,
        configurable: true
    });
    PathRequestManager.prototype.requestPath = function (start, end, callback) {
        var newRequest = new PathRequest(start, end, callback);
        this.pathRequestQueue.push(newRequest);
        this.TryProcessNext();
    };
    PathRequestManager.prototype.FinishedProcessingPath = function (path, succes) {
        this.currentRequest.callback(path, succes);
        this.isProcessingPath = false;
        this.TryProcessNext();
    };
    PathRequestManager.prototype.TryProcessNext = function () {
        if (!this.isProcessingPath && this.pathRequestQueue.length > 0) {
            this.currentRequest = this.pathRequestQueue.shift();
            this.isProcessingPath = true;
            this.pathfinder.findPath(this.currentRequest.pathStart, this.currentRequest.pathEnd);
        }
    };
    Object.defineProperty(PathRequestManager, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    return PathRequestManager;
}());
exports.default = PathRequestManager;
var PathRequest = /** @class */ (function () {
    function PathRequest(start, end, callback) {
        this.pathStart = start;
        this.pathEnd = end;
        this.callback = callback;
    }
    return PathRequest;
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(16);
__webpack_require__(5);
__webpack_require__(1);
__webpack_require__(8);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Snake_1 = __webpack_require__(1);
var events_1 = __webpack_require__(2);
var console_1 = __webpack_require__(6);
var tetris_1 = __webpack_require__(7);
var Bot = /** @class */ (function () {
    function Bot() {
        this.botConsole = new console_1.default();
        events_1.default.on('command', this.executeCommand.bind(this));
        this.typeWriter();
    }
    Bot.prototype.typeWriter = function () {
        var elements = [].slice.call(document.getElementsByClassName('typewriter'));
        var txt = 'Welcome!';
        var i = 0;
        var next = function () {
            if (elements.length <= 0) {
                return;
            }
            if (i < txt.length) {
                elements[0].innerHTML += txt.charAt(i);
                i++;
                setTimeout(next, 50);
            }
            else {
                elements.shift();
                i = 0;
                txt = 'What are you interested in seeing?';
                setTimeout(next, 500);
            }
        };
        next();
    };
    Bot.prototype.executeCommand = function (cmd) {
        console.log(cmd);
        switch (cmd) {
            case 'snake':
                var sn = new Snake_1.default();
                break;
            case 'tetris':
                var tt = new tetris_1.default();
                break;
            default:
                break;
        }
    };
    return Bot;
}());
exports.Bot = Bot;
var niekbot = new Bot();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(2);
var BotConsole = /** @class */ (function () {
    function BotConsole() {
        this.setter = this.get('setter');
        this.cursor = this.get('cursor');
        this.writer = this.get('writer');
        this.cursor.style.left = '0px';
        this.events();
    }
    BotConsole.prototype.get = function (elid) {
        return document.getElementById(elid);
    };
    BotConsole.prototype.writeit = function (from, e) {
        if (e.keyCode == 13 && from.value.length > 0) {
            this.emitCommand(this.setter.value);
            return;
        }
        e = e || window.event;
        var tw = from.value;
        this.writer.innerHTML = this.nl2br(tw);
    };
    BotConsole.prototype.moveit = function (amt, e) {
        e = e || window.event;
        var keycode = e.keyCode || e.which;
        if (keycode === 37 && parseInt(this.cursor.style.left, 10) >= (0 - ((amt - 1) * 10))) {
            this.cursor.style.left = parseInt(this.cursor.style.left, 10) - 10 + 'px';
        }
        else if (keycode === 39 && (parseInt(this.cursor.style.left, 10) + 10) <= 0) {
            this.cursor.style.left = parseInt(this.cursor.style.left, 10) + 10 + 'px';
        }
    };
    BotConsole.prototype.events = function () {
        this.get('bot-commandline').addEventListener('click', function () {
            this.setter.focus();
        }.bind(this));
        this.setter.addEventListener('focus', function () {
            this.cursor.classList.add('blink');
        }.bind(this));
        this.setter.addEventListener('blur', function () {
            this.cursor.classList.remove('blink');
        }.bind(this));
        this.setter.addEventListener('keydown', function (e) {
            this.writeit(this.setter, e);
            this.moveit(this.setter.value.length, e);
        }.bind(this));
        this.setter.addEventListener('keyup', function (e) {
            this.writeit(this.setter, e);
        }.bind(this));
        this.setter.addEventListener('keypress', function (e) {
            this.writeit(this.setter, e);
        }.bind(this));
    };
    BotConsole.prototype.nl2br = function (str) {
        return str.replace(/\n/g, '<br />');
    };
    BotConsole.prototype.emitCommand = function (com) {
        this.setter.value = '';
        this.writer.innerHTML = this.nl2br(this.setter.value);
        events_1.default.emit('command', com);
    };
    return BotConsole;
}());
exports.default = BotConsole;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates = /** @class */ (function () {
    function Coordinates(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    return Coordinates;
}());
var Direction;
(function (Direction) {
    Direction[Direction["IDLE"] = 0] = "IDLE";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var Tetronimo;
(function (Tetronimo) {
    Tetronimo[Tetronimo["T"] = 0] = "T";
    Tetronimo[Tetronimo["I"] = 1] = "I";
    Tetronimo[Tetronimo["SQUARE"] = 2] = "SQUARE";
    Tetronimo[Tetronimo["J"] = 3] = "J";
    Tetronimo[Tetronimo["L"] = 4] = "L";
    Tetronimo[Tetronimo["S"] = 5] = "S";
    Tetronimo[Tetronimo["Z"] = 6] = "Z";
})(Tetronimo || (Tetronimo = {}));
var Tetris = /** @class */ (function () {
    function Tetris() {
        this.container = document.getElementById('game-container');
        this.canvas = document.getElementById('game-stage');
        this.ctx = this.canvas.getContext('2d');
        this.gridHeight = 20;
        this.gridWidth = 12;
        this.tileDiameter = 20;
        this.placedTetronimos = new Array();
        this.canvas.height = this.gridHeight * this.tileDiameter;
        this.canvas.width = this.gridWidth * this.tileDiameter;
        this.canvas.addEventListener('keydown', this.handleUserInput.bind(this));
        this.start();
    }
    Tetris.prototype.start = function () {
        this.score = 0;
        this.moveDownIterationsLength = 8;
        this.moveDownIterations = 0;
        this.currentTetronimoType = Tetronimo.I;
        this.currentTetronimo = this.getTetronimo(this.currentTetronimoType);
        this.currentRotationShape = this.getTetronimo(this.currentTetronimoType);
        this.moveTetronimoX(5);
        this.canvas.focus();
        this.interval = setInterval(this.update.bind(this), 100);
    };
    Tetris.prototype.end = function () {
        clearInterval(this.interval);
    };
    Tetris.prototype.update = function () {
        this.moveTetronimo();
        this.placementCollision();
        this.horizontalCollision();
        this.draw();
    };
    Tetris.prototype.handleUserInput = function (e) {
        var key = e.keyCode;
        switch (key) {
            case 37: // LEFT KEY
                this.direction = Direction.LEFT;
                break;
            case 39: // RIGHT KEY
                this.direction = Direction.RIGHT;
                break;
            case 40: // DOWN KEY
                this.direction = Direction.DOWN;
                break;
            case 32: // SPACEBAR KEY
                this.rotateTetronimo();
                break;
            default:
                this.direction = Direction.IDLE;
                break;
        }
    };
    Tetris.prototype.moveTetronimo = function () {
        if (this.direction === Direction.RIGHT) {
            this.moveTetronimoX(1);
        }
        else if (this.direction === Direction.LEFT) {
            this.moveTetronimoX(-1);
        }
        this.moveDownIterations++;
        if (this.direction === Direction.DOWN) {
            this.moveDownIterations = this.moveDownIterationsLength;
        }
        if (this.shouldMoveDown()) {
            this.moveTetronimoY(1);
            this.moveDownIterations = 0;
        }
        this.direction = Direction.IDLE;
    };
    Tetris.prototype.shouldMoveDown = function () {
        return this.moveDownIterations >= this.moveDownIterationsLength;
    };
    Tetris.prototype.moveTetronimoX = function (amount) {
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var tetronimoBlock = this.currentTetronimo[i];
            tetronimoBlock.x += amount;
        }
    };
    Tetris.prototype.moveTetronimoY = function (amount) {
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var tetronimoBlock = this.currentTetronimo[i];
            tetronimoBlock.y += amount;
        }
    };
    Tetris.prototype.rotateTetronimo = function () {
        if (this.currentTetronimoType === Tetronimo.SQUARE) {
            return;
        }
        var rotatedCoords = new Array();
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var current = this.currentRotationShape[i];
            current.y *= -1;
            rotatedCoords[i] = new Coordinates(0, 0);
            rotatedCoords[i].x = Math.round(current.x * Math.cos(Math.PI / 2) - current.y * Math.sin(Math.PI / 2));
            rotatedCoords[i].y = Math.round(current.x * Math.sin(Math.PI / 2) + current.y * Math.cos(Math.PI / 2));
            rotatedCoords[i].y *= -1;
            this.currentTetronimo[i].x = (rotatedCoords[i].x + this.currentTetronimo[0].x);
            this.currentTetronimo[i].y = (rotatedCoords[i].y + this.currentTetronimo[0].y);
        }
        this.currentRotationShape = rotatedCoords;
    };
    Tetris.prototype.getTetronimo = function (type) {
        switch (type) {
            case Tetronimo.T:
                return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(0, -1), new Coordinates(1, 0));
            case Tetronimo.I:
                return new Array(new Coordinates(0, 0), new Coordinates(-2, 0), new Coordinates(-1, 0), new Coordinates(1, 0));
            case Tetronimo.SQUARE:
                return new Array(new Coordinates(0, 0), new Coordinates(1, 0), new Coordinates(0, 1), new Coordinates(1, 1));
            case Tetronimo.J:
                return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(1, 0), new Coordinates(1, 1));
            case Tetronimo.L:
                return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(1, 0), new Coordinates(1, -1));
            case Tetronimo.S:
                return new Array(new Coordinates(0, 0), new Coordinates(1, 0), new Coordinates(0, 1), new Coordinates(-1, 1));
            case Tetronimo.Z:
                return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(0, 1), new Coordinates(1, 1));
            default:
                console.warn('tetronimo of type: ' + type + ' not found');
                break;
        }
    };
    Tetris.prototype.setNewCurrentTetronimo = function (type) {
        this.currentTetronimoType = type;
        this.currentTetronimo = this.getTetronimo(this.currentTetronimoType);
        this.currentRotationShape = this.getTetronimo(this.currentTetronimoType);
        this.moveTetronimoX(5);
    };
    Tetris.prototype.horizontalCollision = function () {
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var currentBlock = this.currentTetronimo[i];
            if (currentBlock.x >= this.gridWidth) {
                this.moveTetronimoX(-1);
            }
            if (currentBlock.x < 0) {
                this.moveTetronimoX(1);
            }
        }
    };
    Tetris.prototype.placementCollision = function () {
        var placementHappened = false;
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var currentBlock = this.currentTetronimo[i];
            if (currentBlock.y === this.gridHeight) {
                placementHappened = true;
                if (currentBlock.y <= this.gridHeight) {
                    this.moveTetronimoY(-1);
                }
            }
            if (!placementHappened) {
                for (var i_1 = 0; i_1 < this.placedTetronimos.length; i_1++) {
                    var placed = this.placedTetronimos[i_1];
                    if (currentBlock.y === placed.y && currentBlock.x === placed.x) {
                        placementHappened = true;
                        if (currentBlock.y <= placed.y) {
                            this.moveTetronimoY(-1);
                        }
                    }
                }
            }
        }
        if (placementHappened) {
            this.placedTetronimos = this.placedTetronimos.concat(this.currentTetronimo);
            this.setNewCurrentTetronimo(Tetronimo.I);
        }
    };
    Tetris.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#20C20E';
        for (var i = 0; i < this.currentTetronimo.length; i++) {
            var t = this.currentTetronimo[i];
            this.ctx.fillRect((t.x * this.tileDiameter) + 1, (t.y * this.tileDiameter) + 1, this.tileDiameter - 1, this.tileDiameter - 1);
        }
        for (var j = 0; j < this.placedTetronimos.length; j++) {
            var p = this.placedTetronimos[j];
            this.ctx.fillRect((p.x * this.tileDiameter) + 1, (p.y * this.tileDiameter) + 1, this.tileDiameter - 1, this.tileDiameter - 1);
        }
    };
    return Tetris;
}());
exports.default = Tetris;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var flocking_1 = __webpack_require__(9);
var pathfindingInstance_1 = __webpack_require__(11);
//import { StateMachineInstance } from './StateMachine/statemachineInstance';
var BGCanvas = /** @class */ (function () {
    function BGCanvas(id, process) {
        this.canvas = document.getElementById(id);
        this.parent = this.canvas.parentElement;
        this.resizeCanvas();
        this.content = new process(this.canvas);
        window.addEventListener('resize', this.resizeCanvas.bind(this));
    }
    BGCanvas.prototype.resizeCanvas = function () {
        this.canvas.width = this.parent.offsetWidth;
        this.canvas.height = this.parent.offsetHeight;
    };
    return BGCanvas;
}());
exports.BGCanvas = BGCanvas;
var flocking = new BGCanvas('flocking-stage', flocking_1.Flock);
var pathfinding = new BGCanvas('pathfinding-stage', pathfindingInstance_1.PathfindingInstance);
//let statemachine = new BGCanvas('statemachine-stage', StateMachineInstance);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boid_1 = __webpack_require__(10);
var Flock = /** @class */ (function () {
    function Flock(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.boids = new Array();
        this.createBoids(50);
        setInterval(this.update.bind(this), 60);
    }
    Flock.prototype.createBoids = function (amt) {
        for (var i = 0; i < amt; i++) {
            var newBoid = new boid_1.default(this.canvas, 200, 300);
            this.boids.push(newBoid);
        }
    };
    Flock.prototype.update = function () {
        for (var i = 0; i < this.boids.length; i++) {
            this.boids[i].update(this.boids);
        }
        this.draw();
    };
    Flock.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.boids.length; i++) {
            this.boids[i].draw(this.ctx);
        }
    };
    return Flock;
}());
exports.Flock = Flock;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector2_1 = __webpack_require__(0);
var Boid = /** @class */ (function () {
    function Boid(canvas, x, y) {
        this.canvas = canvas;
        this.position = vector2_1.default.make(x, y);
        this.velocity = vector2_1.default.make(0, 0);
        this.accelaration = vector2_1.default.make(0, 0);
        this.maxForce = 0.2;
        this.maxSpeed = 6;
        this.alignmentDistance = 80;
        this.separationDistance = 30;
        this.cohesionDistance = 110;
        this.velocity.x = (Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed);
        this.velocity.y = (Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed);
    }
    Boid.prototype.update = function (boids) {
        this.flock(boids);
        this.run();
        this.checkBorder();
    };
    Boid.prototype.run = function () {
        this.velocity = vector2_1.default.add(this.velocity, this.accelaration);
        this.velocity = vector2_1.default.clamp(this.velocity, -this.maxSpeed, this.maxSpeed);
        this.position = vector2_1.default.add(this.position, this.velocity);
        this.accelaration = vector2_1.default.make(0, 0);
        this.angle = this.getAngle(this.velocity);
    };
    Boid.prototype.flock = function (boids) {
        var align = this.allignment(boids);
        var separate = this.separation(boids);
        var cohese = this.cohesion(boids);
        separate = vector2_1.default.scale(separate, 3);
        this.applyForce(align);
        this.applyForce(separate);
        this.applyForce(cohese);
    };
    Boid.prototype.getAngle = function (v) {
        var heading = vector2_1.default.make(v.x, v.y);
        heading = vector2_1.default.normalize(heading);
        return Math.atan2(heading.y, heading.x);
    };
    Boid.prototype.applyForce = function (force) {
        this.accelaration = vector2_1.default.add(this.accelaration, force);
    };
    Boid.prototype.seek = function (targetVector) {
        var desired = vector2_1.default.sub(targetVector, this.position);
        desired = vector2_1.default.normalize(desired);
        desired = vector2_1.default.scale(desired, this.maxSpeed);
        var steer = vector2_1.default.sub(desired, this.velocity);
        steer = vector2_1.default.clamp(steer, -this.maxForce, this.maxForce);
        return steer;
    };
    Boid.prototype.allignment = function (boids) {
        var alignmentVector = vector2_1.default.make(0, 0);
        var count = 0;
        for (var i = 0; i < boids.length; i++) {
            var boid = boids[i];
            var d = vector2_1.default.distance(this.position, boid.position);
            if ((d > 0) && (d < this.alignmentDistance)) {
                alignmentVector = vector2_1.default.add(alignmentVector, boid.velocity);
                count++;
            }
        }
        if (count > 0) {
            alignmentVector = vector2_1.default.divide(alignmentVector, count);
            alignmentVector = vector2_1.default.normalize(alignmentVector);
            alignmentVector = vector2_1.default.scale(alignmentVector, this.maxSpeed);
            var steer = vector2_1.default.sub(alignmentVector, this.velocity);
            steer = vector2_1.default.clamp(alignmentVector, -this.maxForce, this.maxForce);
            return steer;
        }
        else {
            return vector2_1.default.make(0, 0);
        }
    };
    Boid.prototype.separation = function (boids) {
        var separationVector = vector2_1.default.make(0, 0);
        var count = 0;
        for (var i = 0; i < boids.length; i++) {
            var boid = boids[i];
            var d = vector2_1.default.distance(this.position, boid.position);
            if ((d > 0) && (d < this.separationDistance)) {
                var diff = vector2_1.default.sub(this.position, boid.position);
                diff = vector2_1.default.normalize(diff);
                diff = vector2_1.default.divide(diff, d);
                separationVector = vector2_1.default.add(separationVector, diff);
                count++;
            }
        }
        if (count > 0) {
            separationVector = vector2_1.default.divide(separationVector, count);
            separationVector = vector2_1.default.normalize(separationVector);
            separationVector = vector2_1.default.scale(separationVector, this.maxSpeed);
            separationVector = vector2_1.default.sub(separationVector, this.velocity);
            separationVector = vector2_1.default.clamp(separationVector, -this.maxForce, this.maxForce);
        }
        return separationVector;
    };
    Boid.prototype.cohesion = function (boids) {
        var coheseVector = vector2_1.default.make(0, 0);
        var count = 0;
        for (var i = 0; i < boids.length; i++) {
            var boid = boids[i];
            var d = vector2_1.default.distance(this.position, boid.position);
            if ((d > 0) && (d < this.cohesionDistance)) {
                coheseVector = vector2_1.default.add(coheseVector, boid.position);
                count++;
            }
        }
        if (count > 0) {
            coheseVector = vector2_1.default.divide(coheseVector, count);
            return this.seek(coheseVector);
        }
        else {
            return vector2_1.default.make(0, 0);
        }
    };
    Boid.prototype.checkBorder = function () {
        var width = this.canvas.width;
        var height = this.canvas.height;
        if (this.position.x < -10)
            this.position.x = width + 2;
        if (this.position.y < -10)
            this.position.y = height + 2;
        if (this.position.x > width + 30)
            this.position.x = -10;
        if (this.position.y > height + 30)
            this.position.y = -10;
    };
    Boid.prototype.draw = function (ctx) {
        ctx.strokeStyle = '#20C20E';
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));
        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));
        ctx.closePath();
        ctx.stroke();
    };
    return Boid;
}());
exports.default = Boid;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = __webpack_require__(12);
var pathfinder_1 = __webpack_require__(14);
var vector2_1 = __webpack_require__(0);
var pathfinding_1 = __webpack_require__(15);
var PathfindingInstance = /** @class */ (function () {
    function PathfindingInstance(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        var td = canvas.width / 10;
        var gh = canvas.height / td;
        this.grid = new grid_1.default(10, gh, td);
        this.grid.draw(this.ctx);
        var pathfinding = new pathfinding_1.default(this.grid);
        this.pathfinder = new pathfinder_1.default(vector2_1.default.make(0, 0), this.grid);
        this.pathfinder.draw(this.ctx);
        setInterval(this.update.bind(this), 500);
    }
    PathfindingInstance.prototype.update = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.pathfinder.followPath();
        this.grid.draw(this.ctx);
        this.pathfinder.draw(this.ctx);
    };
    return PathfindingInstance;
}());
exports.PathfindingInstance = PathfindingInstance;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __webpack_require__(13);
var Grid = /** @class */ (function () {
    function Grid(w, h, td) {
        this.width = w;
        this.height = h;
        this.tileDiameter = td;
        this.tileAmount = 0;
        this.generateGrid();
    }
    Grid.prototype.generateGrid = function () {
        this.map = [];
        for (var x = 0; x < this.width; x++) {
            this.map[x] = [];
            for (var y = 0; y < this.height; y++) {
                this.map[x][y] = new tile_1.default(x, y, this.tileDiameter);
                this.tileAmount++;
            }
        }
    };
    Grid.prototype.getTile = function (x, y) {
        return this.map[x][y];
    };
    Grid.prototype.getNeighbours = function (tile) {
        var neighbours = new Array();
        for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
                if (x == 0 && y == 0) {
                    continue;
                }
                var checkX = tile.GridPosition.x + x;
                var checkY = tile.GridPosition.y + y;
                if (checkX >= 0 && checkX < this.width && checkY >= 0 && checkY < this.height) {
                    neighbours.push(this.map[checkX][checkY]);
                }
            }
        }
        return neighbours;
    };
    Grid.prototype.draw = function (ctx) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var ct = this.getTile(x, y);
                ctx.strokeStyle = '#20C20E';
                ctx.strokeRect(ct.WorldPosition.x, ct.WorldPosition.y, this.tileDiameter, this.tileDiameter);
            }
        }
    };
    return Grid;
}());
exports.default = Grid;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector2_1 = __webpack_require__(0);
var Tile = /** @class */ (function () {
    function Tile(x, y, td) {
        this.gCost = 0;
        this.hCost = 0;
        this.gridPosition = vector2_1.default.make(x, y);
        this.diameter = td;
        this.walkable = true;
    }
    Object.defineProperty(Tile.prototype, "GridPosition", {
        get: function () { return this.gridPosition; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile.prototype, "Walkable", {
        get: function () {
            return this.walkable;
        },
        set: function (value) {
            this.walkable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile.prototype, "WorldPosition", {
        get: function () {
            return vector2_1.default.make(this.gridPosition.x * this.diameter, this.gridPosition.y * this.diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile.prototype, "fCost", {
        get: function () {
            return this.gCost + this.hCost;
        },
        enumerable: true,
        configurable: true
    });
    return Tile;
}());
exports.default = Tile;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pathRequestManager_1 = __webpack_require__(3);
var vector2_1 = __webpack_require__(0);
var Pathfinder = /** @class */ (function () {
    function Pathfinder(position, grid) {
        this.gridPosition = position;
        this.grid = grid;
        this.path = [];
        this.currentPathIndex = 0;
        this.getPath(this.getRandomInGrid());
    }
    Pathfinder.prototype.onPathFound = function (path, pathSuccess) {
        if (pathSuccess) {
            this.path = path;
        }
    };
    Pathfinder.prototype.followPath = function () {
        if (this.path.length > 0) {
            if (this.currentPathIndex < this.path.length) {
                this.target = this.path[this.currentPathIndex];
                this.gridPosition = this.target;
                this.currentPathIndex++;
            }
            else {
                this.path = [];
                this.currentPathIndex = 0;
                this.getPath(this.getRandomInGrid());
                return;
            }
        }
    };
    Pathfinder.prototype.getPath = function (targetPosition) {
        pathRequestManager_1.default.Instance.requestPath(this.gridPosition, targetPosition, this.onPathFound.bind(this));
    };
    Pathfinder.prototype.getRandomInGrid = function () {
        var r = vector2_1.default.make(Math.floor(Math.random() * this.grid.width), Math.floor(Math.random() * (this.grid.height - 1)));
        if (this.gridPosition.x == r.x && this.gridPosition.y == r.y) {
            return this.getRandomInGrid();
        }
        else {
            return r;
        }
    };
    Pathfinder.prototype.draw = function (ctx) {
        if (this.path) {
            for (var i = 0; i < this.path.length; i++) {
                var p = this.path[i];
                ctx.fillStyle = 'rgba(32, 194, 14, 0.3)';
                ctx.fillRect(this.path[i].x * this.grid.tileDiameter, this.path[i].y * this.grid.tileDiameter, this.grid.tileDiameter, this.grid.tileDiameter);
            }
        }
        ctx.fillStyle = '#20C20E';
        ctx.arc(this.gridPosition.x * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.gridPosition.y * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.grid.tileDiameter / 2, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Pathfinder;
}());
exports.default = Pathfinder;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pathRequestManager_1 = __webpack_require__(3);
var Pathfinding = /** @class */ (function () {
    function Pathfinding(grid) {
        this.grid = grid;
        pathRequestManager_1.default.Instance.Pathfinder = this;
    }
    Pathfinding.prototype.findPath = function (_startPosition, _targetPosition) {
        var start = this.grid.getTile(_startPosition.x, _startPosition.y);
        var end = this.grid.getTile(_targetPosition.x, _targetPosition.y);
        var path = new Array();
        var pathFound = false;
        var openSet = Array();
        var closedSet = Array();
        openSet.push(start);
        while (openSet.length > 0) {
            var currentTile = openSet[0];
            for (var i = 1; i < openSet.length; i++) {
                if (openSet[i].fCost < currentTile.fCost || openSet[i].fCost == currentTile.fCost && openSet[i].hCost < currentTile.hCost) {
                    currentTile = openSet[i];
                }
            }
            openSet.splice(openSet.indexOf(currentTile), 1);
            closedSet.push(currentTile);
            if (currentTile == end) {
                pathFound = true;
                break;
            }
            var neighbours = this.grid.getNeighbours(currentTile);
            for (var i = 0; i < neighbours.length; i++) {
                var neighbour = neighbours[i];
                if (!neighbour.Walkable || closedSet.indexOf(neighbour) > 0) {
                    continue;
                }
                var newMovementCost = currentTile.gCost + this.getDistance(currentTile, neighbour);
                if (newMovementCost < neighbour.gCost || !(openSet.indexOf(neighbour) > 0)) {
                    neighbour.gCost = newMovementCost;
                    neighbour.hCost = this.getDistance(neighbour, end);
                    neighbour.parent = currentTile;
                    if (!(openSet.indexOf(neighbour) > 0)) {
                        openSet.push(neighbour);
                    }
                }
            }
        }
        if (pathFound) {
            path = this.retracePath(start, end);
        }
        pathRequestManager_1.default.Instance.FinishedProcessingPath(path, pathFound);
    };
    Pathfinding.prototype.retracePath = function (startTile, targetTile) {
        var path = [];
        var waypoints = [];
        var currentTile = targetTile;
        while (currentTile != startTile) {
            path.push(currentTile);
            waypoints.push(currentTile.GridPosition);
            currentTile = currentTile.parent;
        }
        waypoints.reverse();
        return waypoints;
    };
    Pathfinding.prototype.getDistance = function (tileA, tileB) {
        var distX = Math.abs(tileA.GridPosition.x - tileB.GridPosition.x);
        var distY = Math.abs(tileA.GridPosition.y - tileB.GridPosition.y);
        if (distX > distY) {
            return 14 * distY + 10 * (distX - distY);
        }
        else {
            return 14 * distX + 10 * (distY - distX);
        }
    };
    return Pathfinding;
}());
exports.default = Pathfinding;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);