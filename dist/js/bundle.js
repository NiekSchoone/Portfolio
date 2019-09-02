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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n__webpack_require__(/*! ./js/BotNavigation/app.ts */ \"./src/js/BotNavigation/app.ts\");\n__webpack_require__(/*! ./js/Games/Snake.ts */ \"./src/js/Games/Snake.ts\");\n__webpack_require__(/*! ./js/BackgroundProcesses/BGCanvas.ts */ \"./src/js/BackgroundProcesses/BGCanvas.ts\");\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/BGCanvas.ts":
/*!************************************************!*\
  !*** ./src/js/BackgroundProcesses/BGCanvas.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar flocking_1 = __webpack_require__(/*! ./Flocking/flocking */ \"./src/js/BackgroundProcesses/Flocking/flocking.ts\");\nvar pathfindingInstance_1 = __webpack_require__(/*! ./Pathfinding/pathfindingInstance */ \"./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts\");\nvar statemachineInstance_1 = __webpack_require__(/*! ./StateMachine/statemachineInstance */ \"./src/js/BackgroundProcesses/StateMachine/statemachineInstance.ts\");\nvar BGCanvas = /** @class */ (function () {\n    function BGCanvas(id, process) {\n        this.canvas = document.getElementById(id);\n        this.parent = this.canvas.parentElement;\n        this.resizeCanvas();\n        this.content = new process(this.canvas);\n        window.addEventListener('resize', this.resizeCanvas.bind(this));\n    }\n    BGCanvas.prototype.resizeCanvas = function () {\n        this.canvas.width = this.parent.offsetWidth;\n        this.canvas.height = this.parent.offsetHeight;\n    };\n    return BGCanvas;\n}());\nexports.BGCanvas = BGCanvas;\nvar flocking = new BGCanvas('flocking-stage', flocking_1.Flock);\nvar pathfinding = new BGCanvas('pathfinding-stage', pathfindingInstance_1.PathfindingInstance);\nvar statemachine = new BGCanvas('statemachine-stage', statemachineInstance_1.StateMachineInstance);\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/BGCanvas.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/boid.ts":
/*!*****************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/boid.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Boid = /** @class */ (function () {\n    function Boid(canvas, x, y) {\n        this.canvas = canvas;\n        this.position = vector2_1.default.make(x, y);\n        this.velocity = vector2_1.default.make(0, 0);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.maxForce = 0.2;\n        this.maxSpeed = 6;\n        this.alignmentDistance = 80;\n        this.separationDistance = 30;\n        this.cohesionDistance = 110;\n        this.velocity.x = (Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed);\n        this.velocity.y = (Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed);\n    }\n    Boid.prototype.update = function (boids) {\n        this.flock(boids);\n        this.run();\n        this.checkBorder();\n    };\n    Boid.prototype.run = function () {\n        this.velocity = vector2_1.default.add(this.velocity, this.accelaration);\n        this.velocity = vector2_1.default.clamp(this.velocity, -this.maxSpeed, this.maxSpeed);\n        this.position = vector2_1.default.add(this.position, this.velocity);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.angle = this.getAngle(this.velocity);\n    };\n    Boid.prototype.flock = function (boids) {\n        var align = this.allignment(boids);\n        var separate = this.separation(boids);\n        var cohese = this.cohesion(boids);\n        separate = vector2_1.default.scale(separate, 3);\n        this.applyForce(align);\n        this.applyForce(separate);\n        this.applyForce(cohese);\n    };\n    Boid.prototype.getAngle = function (v) {\n        var heading = vector2_1.default.make(v.x, v.y);\n        heading = vector2_1.default.normalize(heading);\n        return Math.atan2(heading.y, heading.x);\n    };\n    Boid.prototype.applyForce = function (force) {\n        this.accelaration = vector2_1.default.add(this.accelaration, force);\n    };\n    Boid.prototype.seek = function (targetVector) {\n        var desired = vector2_1.default.sub(targetVector, this.position);\n        desired = vector2_1.default.normalize(desired);\n        desired = vector2_1.default.scale(desired, this.maxSpeed);\n        var steer = vector2_1.default.sub(desired, this.velocity);\n        steer = vector2_1.default.clamp(steer, -this.maxForce, this.maxForce);\n        return steer;\n    };\n    Boid.prototype.allignment = function (boids) {\n        var alignmentVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.alignmentDistance)) {\n                alignmentVector = vector2_1.default.add(alignmentVector, boid.velocity);\n                count++;\n            }\n        }\n        if (count > 0) {\n            alignmentVector = vector2_1.default.divide(alignmentVector, count);\n            alignmentVector = vector2_1.default.normalize(alignmentVector);\n            alignmentVector = vector2_1.default.scale(alignmentVector, this.maxSpeed);\n            var steer = vector2_1.default.sub(alignmentVector, this.velocity);\n            steer = vector2_1.default.clamp(alignmentVector, -this.maxForce, this.maxForce);\n            return steer;\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.separation = function (boids) {\n        var separationVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.separationDistance)) {\n                var diff = vector2_1.default.sub(this.position, boid.position);\n                diff = vector2_1.default.normalize(diff);\n                diff = vector2_1.default.divide(diff, d);\n                separationVector = vector2_1.default.add(separationVector, diff);\n                count++;\n            }\n        }\n        if (count > 0) {\n            separationVector = vector2_1.default.divide(separationVector, count);\n            separationVector = vector2_1.default.normalize(separationVector);\n            separationVector = vector2_1.default.scale(separationVector, this.maxSpeed);\n            separationVector = vector2_1.default.sub(separationVector, this.velocity);\n            separationVector = vector2_1.default.clamp(separationVector, -this.maxForce, this.maxForce);\n        }\n        return separationVector;\n    };\n    Boid.prototype.cohesion = function (boids) {\n        var coheseVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.cohesionDistance)) {\n                coheseVector = vector2_1.default.add(coheseVector, boid.position);\n                count++;\n            }\n        }\n        if (count > 0) {\n            coheseVector = vector2_1.default.divide(coheseVector, count);\n            return this.seek(coheseVector);\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.checkBorder = function () {\n        var width = this.canvas.width;\n        var height = this.canvas.height;\n        if (this.position.x < -10)\n            this.position.x = width + 2;\n        if (this.position.y < -10)\n            this.position.y = height + 2;\n        if (this.position.x > width + 30)\n            this.position.x = -10;\n        if (this.position.y > height + 30)\n            this.position.y = -10;\n    };\n    Boid.prototype.draw = function (ctx) {\n        ctx.strokeStyle = '#20C20E';\n        ctx.beginPath();\n        ctx.moveTo(this.position.x, this.position.y);\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Boid;\n}());\nexports.default = Boid;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/boid.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/flocking.ts":
/*!*********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/flocking.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar boid_1 = __webpack_require__(/*! ./boid */ \"./src/js/BackgroundProcesses/Flocking/boid.ts\");\nvar Flock = /** @class */ (function () {\n    function Flock(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.boids = new Array();\n        this.createBoids(50);\n        setInterval(this.update.bind(this), 60);\n    }\n    Flock.prototype.createBoids = function (amt) {\n        for (var i = 0; i < amt; i++) {\n            var newBoid = new boid_1.default(this.canvas, 200, 300);\n            this.boids.push(newBoid);\n        }\n    };\n    Flock.prototype.update = function () {\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].update(this.boids);\n        }\n        this.draw();\n    };\n    Flock.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].draw(this.ctx);\n        }\n    };\n    return Flock;\n}());\nexports.Flock = Flock;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/flocking.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/grid.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/grid.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tile_1 = __webpack_require__(/*! ./tile */ \"./src/js/BackgroundProcesses/Pathfinding/tile.ts\");\nvar Grid = /** @class */ (function () {\n    function Grid(w, h, td) {\n        this.width = w;\n        this.height = h;\n        this.tileDiameter = td;\n        this.tileAmount = 0;\n        this.generateGrid();\n    }\n    Grid.prototype.generateGrid = function () {\n        this.map = [];\n        for (var x = 0; x < this.width; x++) {\n            this.map[x] = [];\n            for (var y = 0; y < this.height; y++) {\n                this.map[x][y] = new tile_1.default(x, y, this.tileDiameter);\n                this.tileAmount++;\n            }\n        }\n    };\n    Grid.prototype.getTile = function (x, y) {\n        return this.map[x][y];\n    };\n    Grid.prototype.getNeighbours = function (tile) {\n        var neighbours = new Array();\n        for (var x = -1; x <= 1; x++) {\n            for (var y = -1; y <= 1; y++) {\n                if (x == 0 && y == 0) {\n                    continue;\n                }\n                var checkX = tile.GridPosition.x + x;\n                var checkY = tile.GridPosition.y + y;\n                if (checkX >= 0 && checkX < this.width && checkY >= 0 && checkY < this.height) {\n                    neighbours.push(this.map[checkX][checkY]);\n                }\n            }\n        }\n        return neighbours;\n    };\n    Grid.prototype.draw = function (ctx) {\n        for (var x = 0; x < this.width; x++) {\n            for (var y = 0; y < this.height; y++) {\n                var ct = this.getTile(x, y);\n                ctx.strokeStyle = '#20C20E';\n                ctx.strokeRect(ct.WorldPosition.x, ct.WorldPosition.y, this.tileDiameter, this.tileDiameter);\n            }\n        }\n    };\n    return Grid;\n}());\nexports.default = Grid;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/grid.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts":
/*!**********************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PathRequestManager = /** @class */ (function () {\n    function PathRequestManager() {\n        this.pathRequestQueue = [];\n    }\n    Object.defineProperty(PathRequestManager.prototype, \"Pathfinder\", {\n        set: function (p) {\n            this.pathfinder = p;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    PathRequestManager.prototype.requestPath = function (start, end, callback) {\n        var newRequest = new PathRequest(start, end, callback);\n        this.pathRequestQueue.push(newRequest);\n        this.TryProcessNext();\n    };\n    PathRequestManager.prototype.FinishedProcessingPath = function (path, succes) {\n        this.currentRequest.callback(path, succes);\n        this.isProcessingPath = false;\n        this.TryProcessNext();\n    };\n    PathRequestManager.prototype.TryProcessNext = function () {\n        if (!this.isProcessingPath && this.pathRequestQueue.length > 0) {\n            this.currentRequest = this.pathRequestQueue.shift();\n            this.isProcessingPath = true;\n            this.pathfinder.findPath(this.currentRequest.pathStart, this.currentRequest.pathEnd);\n        }\n    };\n    Object.defineProperty(PathRequestManager, \"Instance\", {\n        get: function () {\n            return this._instance || (this._instance = new this());\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return PathRequestManager;\n}());\nexports.default = PathRequestManager;\nvar PathRequest = /** @class */ (function () {\n    function PathRequest(start, end, callback) {\n        this.pathStart = start;\n        this.pathEnd = end;\n        this.callback = callback;\n    }\n    return PathRequest;\n}());\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts":
/*!**************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar pathRequestManager_1 = __webpack_require__(/*! ./pathRequestManager */ \"./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Pathfinder = /** @class */ (function () {\n    function Pathfinder(position, grid) {\n        this.gridPosition = position;\n        this.grid = grid;\n        this.path = [];\n        this.currentPathIndex = 0;\n        this.getPath(this.getRandomInGrid());\n    }\n    Pathfinder.prototype.onPathFound = function (path, pathSuccess) {\n        if (pathSuccess) {\n            this.path = path;\n        }\n    };\n    Pathfinder.prototype.followPath = function () {\n        if (this.path.length > 0) {\n            if (this.currentPathIndex < this.path.length) {\n                this.target = this.path[this.currentPathIndex];\n                this.gridPosition = this.target;\n                this.currentPathIndex++;\n            }\n            else {\n                this.path = [];\n                this.currentPathIndex = 0;\n                this.getPath(this.getRandomInGrid());\n                return;\n            }\n        }\n    };\n    Pathfinder.prototype.getPath = function (targetPosition) {\n        pathRequestManager_1.default.Instance.requestPath(this.gridPosition, targetPosition, this.onPathFound.bind(this));\n    };\n    Pathfinder.prototype.getRandomInGrid = function () {\n        var r = vector2_1.default.make(Math.floor(Math.random() * this.grid.width), Math.floor(Math.random() * (this.grid.height - 1)));\n        if (this.gridPosition.x == r.x && this.gridPosition.y == r.y) {\n            return this.getRandomInGrid();\n        }\n        else {\n            return r;\n        }\n    };\n    Pathfinder.prototype.draw = function (ctx) {\n        if (this.path) {\n            for (var i = 0; i < this.path.length; i++) {\n                var p = this.path[i];\n                ctx.fillStyle = 'rgba(32, 194, 14, 0.3)';\n                ctx.fillRect(this.path[i].x * this.grid.tileDiameter, this.path[i].y * this.grid.tileDiameter, this.grid.tileDiameter, this.grid.tileDiameter);\n            }\n        }\n        ctx.fillStyle = '#20C20E';\n        ctx.arc(this.gridPosition.x * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.gridPosition.y * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.grid.tileDiameter / 2, 0, 2 * Math.PI);\n        ctx.fill();\n    };\n    return Pathfinder;\n}());\nexports.default = Pathfinder;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts":
/*!***************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar pathRequestManager_1 = __webpack_require__(/*! ./pathRequestManager */ \"./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts\");\nvar Pathfinding = /** @class */ (function () {\n    function Pathfinding(grid) {\n        this.grid = grid;\n        pathRequestManager_1.default.Instance.Pathfinder = this;\n    }\n    Pathfinding.prototype.findPath = function (_startPosition, _targetPosition) {\n        var start = this.grid.getTile(_startPosition.x, _startPosition.y);\n        var end = this.grid.getTile(_targetPosition.x, _targetPosition.y);\n        var path = new Array();\n        var pathFound = false;\n        var openSet = Array();\n        var closedSet = Array();\n        openSet.push(start);\n        while (openSet.length > 0) {\n            var currentTile = openSet[0];\n            for (var i = 1; i < openSet.length; i++) {\n                if (openSet[i].fCost < currentTile.fCost || openSet[i].fCost == currentTile.fCost && openSet[i].hCost < currentTile.hCost) {\n                    currentTile = openSet[i];\n                }\n            }\n            openSet.splice(openSet.indexOf(currentTile), 1);\n            closedSet.push(currentTile);\n            if (currentTile == end) {\n                pathFound = true;\n                break;\n            }\n            var neighbours = this.grid.getNeighbours(currentTile);\n            for (var i = 0; i < neighbours.length; i++) {\n                var neighbour = neighbours[i];\n                if (!neighbour.Walkable || closedSet.indexOf(neighbour) > 0) {\n                    continue;\n                }\n                var newMovementCost = currentTile.gCost + this.getDistance(currentTile, neighbour);\n                if (newMovementCost < neighbour.gCost || !(openSet.indexOf(neighbour) > 0)) {\n                    neighbour.gCost = newMovementCost;\n                    neighbour.hCost = this.getDistance(neighbour, end);\n                    neighbour.parent = currentTile;\n                    if (!(openSet.indexOf(neighbour) > 0)) {\n                        openSet.push(neighbour);\n                    }\n                }\n            }\n        }\n        if (pathFound) {\n            path = this.retracePath(start, end);\n        }\n        pathRequestManager_1.default.Instance.FinishedProcessingPath(path, pathFound);\n    };\n    Pathfinding.prototype.retracePath = function (startTile, targetTile) {\n        var path = [];\n        var waypoints = [];\n        var currentTile = targetTile;\n        while (currentTile != startTile) {\n            path.push(currentTile);\n            waypoints.push(currentTile.GridPosition);\n            currentTile = currentTile.parent;\n        }\n        waypoints.reverse();\n        return waypoints;\n    };\n    Pathfinding.prototype.getDistance = function (tileA, tileB) {\n        var distX = Math.abs(tileA.GridPosition.x - tileB.GridPosition.x);\n        var distY = Math.abs(tileA.GridPosition.y - tileB.GridPosition.y);\n        if (distX > distY) {\n            return 14 * distY + 10 * (distX - distY);\n        }\n        else {\n            return 14 * distX + 10 * (distY - distX);\n        }\n    };\n    return Pathfinding;\n}());\nexports.default = Pathfinding;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts":
/*!***********************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar grid_1 = __webpack_require__(/*! ./grid */ \"./src/js/BackgroundProcesses/Pathfinding/grid.ts\");\nvar pathfinder_1 = __webpack_require__(/*! ./pathfinder */ \"./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar pathfinding_1 = __webpack_require__(/*! ./pathfinding */ \"./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts\");\nvar PathfindingInstance = /** @class */ (function () {\n    function PathfindingInstance(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        var td = canvas.width / 10;\n        var gh = canvas.height / td;\n        this.grid = new grid_1.default(10, gh, td);\n        this.grid.draw(this.ctx);\n        var pathfinding = new pathfinding_1.default(this.grid);\n        this.pathfinder = new pathfinder_1.default(vector2_1.default.make(0, 0), this.grid);\n        this.pathfinder.draw(this.ctx);\n        setInterval(this.update.bind(this), 500);\n    }\n    PathfindingInstance.prototype.update = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.beginPath();\n        this.pathfinder.followPath();\n        this.grid.draw(this.ctx);\n        this.pathfinder.draw(this.ctx);\n    };\n    return PathfindingInstance;\n}());\nexports.PathfindingInstance = PathfindingInstance;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/tile.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/tile.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Tile = /** @class */ (function () {\n    function Tile(x, y, td) {\n        this.gCost = 0;\n        this.hCost = 0;\n        this.gridPosition = vector2_1.default.make(x, y);\n        this.diameter = td;\n        this.walkable = true;\n    }\n    Object.defineProperty(Tile.prototype, \"GridPosition\", {\n        get: function () { return this.gridPosition; },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"Walkable\", {\n        get: function () {\n            return this.walkable;\n        },\n        set: function (value) {\n            this.walkable = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"WorldPosition\", {\n        get: function () {\n            return vector2_1.default.make(this.gridPosition.x * this.diameter, this.gridPosition.y * this.diameter);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"fCost\", {\n        get: function () {\n            return this.gCost + this.hCost;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Tile;\n}());\nexports.default = Tile;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/tile.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/fsm.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/fsm.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar stack_1 = __webpack_require__(/*! ../../Utils/stack */ \"./src/js/Utils/stack.ts\");\nvar StackFSM = /** @class */ (function () {\n    function StackFSM() {\n        this.stack = new stack_1.default();\n    }\n    StackFSM.prototype.popState = function () {\n        this.stack.pop();\n    };\n    StackFSM.prototype.pushState = function (state) {\n        if (this.getCurrentState() != state) {\n            this.stack.push(state);\n        }\n    };\n    StackFSM.prototype.update = function () {\n        var currentStateAction = this.getCurrentState();\n        if (currentStateAction != null) {\n            currentStateAction();\n        }\n    };\n    StackFSM.prototype.getCurrentState = function () {\n        return this.stack.count > 0 ? this.stack.peek() : null;\n    };\n    return StackFSM;\n}());\nexports.StackFSM = StackFSM;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/fsm.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/resource.ts":
/*!*************************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/resource.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Resource = /** @class */ (function () {\n    function Resource(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Resource.prototype.position = function () {\n        return vector2_1.default.make(this.x, this.y);\n    };\n    Resource.prototype.draw = function (ctx) {\n        ctx.font = '26px Inconsolata, monospace';\n        ctx.fillText('$', this.x - 8, this.y + 8);\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, 16, 0, 2 * Math.PI);\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Resource;\n}());\nexports.Resource = Resource;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/resource.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/statemachineInstance.ts":
/*!*************************************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/statemachineInstance.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar unit_1 = __webpack_require__(/*! ./unit */ \"./src/js/BackgroundProcesses/StateMachine/unit.ts\");\nvar storehouse_1 = __webpack_require__(/*! ./storehouse */ \"./src/js/BackgroundProcesses/StateMachine/storehouse.ts\");\nvar resource_1 = __webpack_require__(/*! ./resource */ \"./src/js/BackgroundProcesses/StateMachine/resource.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar random_1 = __webpack_require__(/*! ../../Utils/random */ \"./src/js/Utils/random.ts\");\nvar unitManager_1 = __webpack_require__(/*! ./unitManager */ \"./src/js/BackgroundProcesses/StateMachine/unitManager.ts\");\nvar StateMachineInstance = /** @class */ (function () {\n    function StateMachineInstance(canvas) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.storehouse = new storehouse_1.Storehouse(this.canvas.width / 2, this.canvas.height / 2);\n        this.resources = new Array();\n        this.unitManager = new unitManager_1.UnitManager(this.storehouse.position(), this.resources);\n        for (var i = 0; i < this.unitAmount; i++) {\n            var newResource = new resource_1.Resource(this.generateResourcePosition().x, this.generateResourcePosition().y);\n            this.resources.push(newResource);\n            var newUnit = new unit_1.Unit(this.storehouse.position().x, this.storehouse.position().y, this.storehouse, newResource);\n            this.units.push(newUnit);\n        }\n        window.setInterval(this.update.bind(this), 100);\n    }\n    StateMachineInstance.prototype.generateResourcePosition = function () {\n        var pos = vector2_1.default.make(random_1.Random.randomRangeInt(20, this.canvas.width - 20), random_1.Random.randomRangeInt(20, this.canvas.height - 20));\n        if (vector2_1.default.distance(pos, this.storehouse.position()) < 200) {\n            return this.generateResourcePosition();\n        }\n        else {\n            return pos;\n        }\n    };\n    StateMachineInstance.prototype.update = function () {\n        for (var i = 0; i < this.units.length; i++) {\n            var unit = this.units[i];\n            unit.update();\n        }\n        this.draw();\n    };\n    StateMachineInstance.prototype.draw = function () {\n        this.ctx.strokeStyle = '#20C20E';\n        this.ctx.fillStyle = '#20C20E';\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.storehouse.draw(this.ctx);\n        for (var i = 0; i < this.resources.length; i++) {\n            var r = this.resources[i];\n            r.draw(this.ctx);\n        }\n        for (var j = 0; j < this.units.length; j++) {\n            var u = this.units[j];\n            u.draw(this.ctx);\n        }\n    };\n    return StateMachineInstance;\n}());\nexports.StateMachineInstance = StateMachineInstance;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/statemachineInstance.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/storehouse.ts":
/*!***************************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/storehouse.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Storehouse = /** @class */ (function () {\n    function Storehouse(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Storehouse.prototype.position = function () {\n        return vector2_1.default.make(this.x, this.y);\n    };\n    Storehouse.prototype.draw = function (ctx) {\n        ctx.beginPath();\n        ctx.rect(this.x - 25, this.y - 25, 50, 50);\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Storehouse;\n}());\nexports.Storehouse = Storehouse;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/storehouse.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/unit.ts":
/*!*********************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/unit.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fsm_1 = __webpack_require__(/*! ./fsm */ \"./src/js/BackgroundProcesses/StateMachine/fsm.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Unit = /** @class */ (function () {\n    function Unit(x, y, store, gather) {\n        this.brain = new fsm_1.StackFSM();\n        this.position = vector2_1.default.make(x, y);\n        this.resourceDepot = store.position();\n        this.gatheringTarget = gather.position();\n        this.gatheredResources = 0;\n        this.brain.pushState(this.gatheringState.bind(this));\n    }\n    Unit.prototype.getAngle = function (v) {\n        var heading = vector2_1.default.make(v.x, v.y);\n        heading = vector2_1.default.normalize(heading);\n        return Math.atan2(heading.y, heading.x);\n    };\n    Unit.prototype.inPosition = function () {\n        if (vector2_1.default.distance(this.position, this.target) < 10) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    Unit.prototype.update = function () {\n        this.brain.update();\n    };\n    Unit.prototype.idleState = function () {\n    };\n    Unit.prototype.walkingState = function () {\n        this.velocity = vector2_1.default.ray(this.position, this.target);\n        this.velocity = vector2_1.default.scale(this.velocity, 5);\n        this.position = vector2_1.default.add(this.position, this.velocity);\n        this.angle = this.getAngle(this.velocity);\n        if (this.inPosition()) {\n            this.brain.popState();\n        }\n    };\n    Unit.prototype.depositState = function () {\n        this.target = this.resourceDepot;\n        if (!this.inPosition()) {\n            this.brain.pushState(this.walkingState.bind(this));\n            return;\n        }\n        this.gatheredResources = 0;\n        this.brain.popState();\n    };\n    Unit.prototype.gatheringState = function () {\n        this.target = this.gatheringTarget;\n        if (!this.inPosition()) {\n            this.brain.pushState(this.walkingState.bind(this));\n            return;\n        }\n        if (this.gatheredResources < 100) {\n            this.gatheredResources++;\n        }\n        else {\n            this.brain.pushState(this.depositState.bind(this));\n        }\n    };\n    Unit.prototype.draw = function (ctx) {\n        ctx.beginPath();\n        ctx.moveTo(this.position.x, this.position.y);\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Unit;\n}());\nexports.Unit = Unit;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/unit.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/StateMachine/unitManager.ts":
/*!****************************************************************!*\
  !*** ./src/js/BackgroundProcesses/StateMachine/unitManager.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar unit_1 = __webpack_require__(/*! ./unit */ \"./src/js/BackgroundProcesses/StateMachine/unit.ts\");\nvar UnitManager = /** @class */ (function () {\n    function UnitManager(startPos, resources) {\n        this.units = new Array();\n        this.createUnits(50);\n    }\n    UnitManager.prototype.createUnits = function (amt) {\n        for (var i = 0; i < amt; i++) {\n            var newUnit = new unit_1.Unit(this.startPosition.x, this.startPosition.y);\n            this.boids.push(newBoid);\n        }\n    };\n    UnitManager.prototype.update = function () {\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].update(this.boids);\n        }\n        this.draw();\n    };\n    UnitManager.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for (var i = 0; i < this.boids.length; i++) {\n            this.boids[i].draw(this.ctx);\n        }\n    };\n    return UnitManager;\n}());\nexports.UnitManager = UnitManager;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/StateMachine/unitManager.ts?");

/***/ }),

/***/ "./src/js/BotNavigation/app.ts":
/*!*************************************!*\
  !*** ./src/js/BotNavigation/app.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Snake_1 = __webpack_require__(/*! ../Games/Snake */ \"./src/js/Games/Snake.ts\");\nvar events_1 = __webpack_require__(/*! ../Utils/events */ \"./src/js/Utils/events.ts\");\nvar console_1 = __webpack_require__(/*! ./console */ \"./src/js/BotNavigation/console.ts\");\nvar Bot = /** @class */ (function () {\n    function Bot() {\n        this.botConsole = new console_1.default();\n        events_1.default.on('command', this.executeCommand.bind(this));\n        this.typeWriter();\n    }\n    Bot.prototype.typeWriter = function () {\n        var elements = [].slice.call(document.getElementsByClassName('typewriter'));\n        var txt = 'Welcome!';\n        var i = 0;\n        var next = function () {\n            if (elements.length <= 0) {\n                return;\n            }\n            if (i < txt.length) {\n                elements[0].innerHTML += txt.charAt(i);\n                i++;\n                setTimeout(next, 50);\n            }\n            else {\n                elements.shift();\n                i = 0;\n                txt = 'What are you interested in seeing?';\n                setTimeout(next, 500);\n            }\n        };\n        next();\n    };\n    Bot.prototype.executeCommand = function (cmd) {\n        console.log(cmd);\n        var sn = new Snake_1.default();\n    };\n    return Bot;\n}());\nexports.Bot = Bot;\nvar niekbot = new Bot();\n\n\n//# sourceURL=webpack:///./src/js/BotNavigation/app.ts?");

/***/ }),

/***/ "./src/js/BotNavigation/console.ts":
/*!*****************************************!*\
  !*** ./src/js/BotNavigation/console.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar events_1 = __webpack_require__(/*! ../Utils/events */ \"./src/js/Utils/events.ts\");\nvar BotConsole = /** @class */ (function () {\n    function BotConsole() {\n        this.setter = this.get('setter');\n        this.cursor = this.get('cursor');\n        this.writer = this.get('writer');\n        this.cursor.style.left = '0px';\n        this.events();\n    }\n    BotConsole.prototype.get = function (elid) {\n        return document.getElementById(elid);\n    };\n    BotConsole.prototype.events = function () {\n        this.get('bot-commandline').addEventListener('click', function () {\n            this.setter.focus();\n        }.bind(this));\n        this.setter.addEventListener('focus', function () {\n            this.cursor.classList.add('blink');\n        }.bind(this));\n        this.setter.addEventListener('blur', function () {\n            this.cursor.classList.remove('blink');\n        }.bind(this));\n        this.setter.addEventListener('keydown', function (e) {\n            this.writeit(this.setter, e);\n            this.moveit(this.setter.value.length, e);\n        }.bind(this));\n        this.setter.addEventListener('keyup', function (e) {\n            this.writeit(this.setter, e);\n        }.bind(this));\n        this.setter.addEventListener('keypress', function (e) {\n            this.writeit(this.setter, e);\n        }.bind(this));\n    };\n    BotConsole.prototype.nl2br = function (str) {\n        return str.replace(/\\n/g, '<br />');\n    };\n    BotConsole.prototype.writeit = function (from, e) {\n        if (e.keyCode == 13 && from.value.length > 0) {\n            this.emitCommand(this.setter.value);\n            return;\n        }\n        e = e || window.event;\n        var tw = from.value;\n        this.writer.innerHTML = this.nl2br(tw);\n    };\n    BotConsole.prototype.moveit = function (amt, e) {\n        e = e || window.event;\n        var keycode = e.keyCode || e.which;\n        if (keycode === 37 && parseInt(this.cursor.style.left, 10) >= (0 - ((amt - 1) * 10))) {\n            this.cursor.style.left = parseInt(this.cursor.style.left, 10) - 10 + 'px';\n        }\n        else if (keycode === 39 && (parseInt(this.cursor.style.left, 10) + 10) <= 0) {\n            this.cursor.style.left = parseInt(this.cursor.style.left, 10) + 10 + 'px';\n        }\n    };\n    BotConsole.prototype.emitCommand = function (com) {\n        this.setter.value = '';\n        this.writer.innerHTML = this.nl2br(this.setter.value);\n        events_1.default.emit('command', com);\n    };\n    return BotConsole;\n}());\nexports.default = BotConsole;\n\n\n//# sourceURL=webpack:///./src/js/BotNavigation/console.ts?");

/***/ }),

/***/ "./src/js/Games/Snake.ts":
/*!*******************************!*\
  !*** ./src/js/Games/Snake.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Snake = /** @class */ (function () {\n    function Snake() {\n        this.container = document.getElementById('game-container');\n        this.container.style.display = 'flex';\n        this.canvas = document.getElementById('stage');\n        this.ctx = this.canvas.getContext('2d');\n        this.button = document.getElementById('game-btn');\n        this.message = document.getElementById('game-msg');\n        this.scoreCounter = document.getElementById('score-counter');\n        this.dx = 0;\n        this.dy = 0;\n        this.tileDiameter = 16;\n        this.score = 0;\n        this.canvas.addEventListener('keydown', this.changeDirection.bind(this));\n        this.button.addEventListener('click', this.start.bind(this));\n    }\n    Snake.prototype.start = function () {\n        this.button.style.display = 'none';\n        this.message.style.display = 'none';\n        this.score = 0;\n        this.scoreCounter.innerHTML = 'Score: ' + this.score;\n        this.snake = [\n            { x: 10, y: 5 },\n            { x: 10, y: 4 },\n            { x: 10, y: 3 },\n            { x: 10, y: 2 }\n        ];\n        this.food = {\n            x: Math.floor(Math.random() * 19),\n            y: Math.floor(Math.random() * 19)\n        };\n        this.direction = Direction.DOWN;\n        this.canvas.focus();\n        this.interval = setInterval(this.update.bind(this), 100);\n    };\n    Snake.prototype.end = function () {\n        clearInterval(this.interval);\n        this.dx = 0;\n        this.dy = 0;\n        this.snake = [];\n        this.food = { x: -1, y: -1 };\n        this.button.value = 'RESTART';\n        this.button.style.display = 'block';\n        this.message.style.display = 'block';\n        this.message.innerHTML = 'Game over </br> Final score: ' + this.score;\n    };\n    Snake.prototype.update = function () {\n        this.directionChanged = false;\n        switch (this.direction) {\n            case Direction.LEFT:\n                this.dx = -1;\n                this.dy = 0;\n                break;\n            case Direction.UP:\n                this.dx = 0;\n                this.dy = -1;\n                break;\n            case Direction.RIGHT:\n                this.dx = 1;\n                this.dy = 0;\n                break;\n            case Direction.DOWN:\n                this.dx = 0;\n                this.dy = 1;\n                break;\n        }\n        if (this.collision()) {\n            this.end();\n        }\n        if (this.dx !== 0 || this.dy !== 0) {\n            this.move();\n        }\n        this.draw();\n    };\n    Snake.prototype.changeDirection = function (e) {\n        if (!this.directionChanged) {\n            this.directionChanged = true;\n            var key = e.keyCode;\n            if (key == 37 && this.direction != Direction.RIGHT) {\n                this.direction = Direction.LEFT;\n            }\n            else if (key == 38 && this.direction != Direction.DOWN) {\n                this.direction = Direction.UP;\n            }\n            else if (key == 39 && this.direction != Direction.LEFT) {\n                this.direction = Direction.RIGHT;\n            }\n            else if (key == 40 && this.direction != Direction.UP) {\n                this.direction = Direction.DOWN;\n            }\n        }\n    };\n    Snake.prototype.move = function () {\n        var head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };\n        this.snake.unshift(head);\n        if (head.x === this.food.x && head.y == this.food.y) {\n            this.eat();\n        }\n        else {\n            this.snake.pop();\n        }\n    };\n    Snake.prototype.collision = function () {\n        var result = false;\n        for (var i = 1; i < this.snake.length; i++) {\n            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {\n                return true;\n            }\n        }\n        if (this.snake[0].x >= 20 || this.snake[0].x < 0 || this.snake[0].y >= 20 || this.snake[0].y < 0) {\n            result = true;\n        }\n        return result;\n    };\n    Snake.prototype.eat = function () {\n        this.food.x = Math.floor(Math.random() * 19);\n        this.food.y = Math.floor(Math.random() * 19);\n        this.score += 10;\n        this.scoreCounter.innerHTML = 'Score: ' + this.score;\n    };\n    Snake.prototype.draw = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for (var i = 0; i < this.snake.length; i++) {\n            this.ctx.fillStyle = \"#20C20E\";\n            this.ctx.fillRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n            this.ctx.strokeStyle = \"black\";\n            this.ctx.strokeRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n        }\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fillRect(this.food.x * this.tileDiameter, this.food.y * this.tileDiameter, this.tileDiameter, this.tileDiameter);\n    };\n    return Snake;\n}());\nexports.default = Snake;\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"UP\"] = 0] = \"UP\";\n    Direction[Direction[\"DOWN\"] = 1] = \"DOWN\";\n    Direction[Direction[\"LEFT\"] = 2] = \"LEFT\";\n    Direction[Direction[\"RIGHT\"] = 3] = \"RIGHT\";\n})(Direction || (Direction = {}));\n\n\n//# sourceURL=webpack:///./src/js/Games/Snake.ts?");

/***/ }),

/***/ "./src/js/Utils/events.ts":
/*!********************************!*\
  !*** ./src/js/Utils/events.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EventBus = /** @class */ (function () {\n    function EventBus() {\n        this.eventList = {};\n    }\n    EventBus.prototype.on = function (_key, _handler) {\n        if (!this.eventList[_key]) {\n            this.eventList[_key] = [];\n        }\n        this.eventList[_key].push(_handler);\n    };\n    EventBus.prototype.off = function (_key, _handler) {\n        var handlers = this.eventList[_key];\n        if (!handlers || handlers.length === 0) {\n            return false;\n        }\n        else if (!_handler) {\n            this.eventList[_key].length = 0;\n        }\n        else {\n            for (var i = handlers.length - 1; i >= 0; i--) {\n                if (handlers[i] === _handler) {\n                    handlers.splice(i, 1);\n                }\n            }\n        }\n    };\n    EventBus.prototype.emit = function (_key) {\n        var _params = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            _params[_i - 1] = arguments[_i];\n        }\n        var _a;\n        var handlers = this.eventList[_key];\n        if (!handlers || handlers.length === 0) {\n            return false;\n        }\n        else {\n            var len = handlers.length;\n            for (var i = 0; i < len; i++) {\n                (_a = handlers[i]).call.apply(_a, [this].concat(_params));\n            }\n        }\n    };\n    return EventBus;\n}());\nexports.EventBus = EventBus;\nexports.default = new EventBus();\n\n\n//# sourceURL=webpack:///./src/js/Utils/events.ts?");

/***/ }),

/***/ "./src/js/Utils/random.ts":
/*!********************************!*\
  !*** ./src/js/Utils/random.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar MersenneTwister = /** @class */ (function () {\n    function MersenneTwister(seed) {\n        /* Period parameters */\n        this.N = 624;\n        this.M = 397;\n        this.MATRIX_A = 0x9908b0df; /* constant vector a */\n        this.UPPER_MASK = 0x80000000; /* most significant w-r bits */\n        this.LOWER_MASK = 0x7fffffff; /* least significant r bits */\n        this.mt = new Array(this.N); /* the array for the state vector */\n        this.mti = this.N + 1; /* mti==N+1 means mt[N] is not initialized */\n        if (seed == undefined) {\n            seed = new Date().getTime();\n        }\n        this.init_genrand(seed);\n    }\n    /* initializes mt[N] with a seed */\n    MersenneTwister.prototype.init_genrand = function (s) {\n        this.mt[0] = s >>> 0;\n        for (this.mti = 1; this.mti < this.N; this.mti++) {\n            s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);\n            this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)\n                + this.mti;\n            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */\n            /* In the previous versions, MSBs of the seed affect   */\n            /* only MSBs of the array mt[].                        */\n            /* 2002/01/09 modified by Makoto Matsumoto             */\n            this.mt[this.mti] >>>= 0;\n            /* for >32 bit machines */\n        }\n    };\n    /* initialize by an array with array-length */\n    /* init_key is the array for initializing keys */\n    /* key_length is its length */\n    /* slight change for C++, 2004/2/26 */\n    MersenneTwister.prototype.init_by_array = function (init_key, key_length) {\n        var i, j, k;\n        this.init_genrand(19650218);\n        i = 1;\n        j = 0;\n        k = (this.N > key_length ? this.N : key_length);\n        for (; k; k--) {\n            var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);\n            this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))\n                + init_key[j] + j; /* non linear */\n            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */\n            i++;\n            j++;\n            if (i >= this.N) {\n                this.mt[0] = this.mt[this.N - 1];\n                i = 1;\n            }\n            if (j >= key_length)\n                j = 0;\n        }\n        for (k = this.N - 1; k; k--) {\n            var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);\n            this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))\n                - i; /* non linear */\n            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */\n            i++;\n            if (i >= this.N) {\n                this.mt[0] = this.mt[this.N - 1];\n                i = 1;\n            }\n        }\n        this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */\n    };\n    /* generates a random number on [0,0xffffffff]-interval */\n    MersenneTwister.prototype.genrand_int32 = function () {\n        var y;\n        var mag01 = new Array(0x0, this.MATRIX_A);\n        /* mag01[x] = x * MATRIX_A  for x=0,1 */\n        if (this.mti >= this.N) { /* generate N words at one time */\n            var kk;\n            if (this.mti == this.N + 1) /* if init_genrand() has not been called, */\n                this.init_genrand(5489); /* a default initial seed is used */\n            for (kk = 0; kk < this.N - this.M; kk++) {\n                y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);\n                this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1];\n            }\n            for (; kk < this.N - 1; kk++) {\n                y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);\n                this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];\n            }\n            y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK);\n            this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];\n            this.mti = 0;\n        }\n        y = this.mt[this.mti++];\n        /* Tempering */\n        y ^= (y >>> 11);\n        y ^= (y << 7) & 0x9d2c5680;\n        y ^= (y << 15) & 0xefc60000;\n        y ^= (y >>> 18);\n        return y >>> 0;\n    };\n    /* generates a random number on [0,0x7fffffff]-interval */\n    MersenneTwister.prototype.genrand_int31 = function () {\n        return (this.genrand_int32() >>> 1);\n    };\n    /* generates a random number on [0,1]-real-interval */\n    MersenneTwister.prototype.genrand_real1 = function () {\n        return this.genrand_int32() * (1.0 / 4294967295.0);\n        /* divided by 2^32-1 */\n    };\n    /* generates a random number on [0,1)-real-interval */\n    MersenneTwister.prototype.random = function () {\n        return this.genrand_int32() * (1.0 / 4294967296.0);\n        /* divided by 2^32 */\n    };\n    /* generates a random number on (0,1)-real-interval */\n    MersenneTwister.prototype.genrand_real3 = function () {\n        return (this.genrand_int32() + 0.5) * (1.0 / 4294967296.0);\n        /* divided by 2^32 */\n    };\n    /* generates a random number on [0,1) with 53-bit resolution*/\n    MersenneTwister.prototype.genrand_res53 = function () {\n        var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;\n        return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);\n    };\n    return MersenneTwister;\n}());\nexports.default = MersenneTwister;\nvar Random = /** @class */ (function () {\n    function Random() {\n    }\n    Random.randomRangeInt = function (_min, _max) {\n        return Math.floor(Math.random() * (_max - _min + 1)) + _min;\n    };\n    return Random;\n}());\nexports.Random = Random;\n\n\n//# sourceURL=webpack:///./src/js/Utils/random.ts?");

/***/ }),

/***/ "./src/js/Utils/stack.ts":
/*!*******************************!*\
  !*** ./src/js/Utils/stack.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Stack = /** @class */ (function () {\n    function Stack() {\n        this._topNode = undefined;\n        this._count = 0;\n    }\n    Object.defineProperty(Stack.prototype, \"count\", {\n        get: function () {\n            return this._count;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Stack.prototype.isEmpty = function () {\n        return this._topNode === undefined;\n    };\n    Stack.prototype.push = function (value) {\n        // create a new Node and add it to the top\n        var node = new Node(value, this._topNode);\n        this._topNode = node;\n        this._count++;\n    };\n    Stack.prototype.pop = function () {\n        // remove the top node from the stack.\n        // the node at the top now is the one before it\n        var poppedNode = this._topNode;\n        this._topNode = poppedNode.previous;\n        this._count--;\n        return poppedNode.data;\n    };\n    Stack.prototype.peek = function () {\n        return this._topNode.data;\n    };\n    return Stack;\n}());\nexports.default = Stack;\nvar Node = /** @class */ (function () {\n    function Node(data, previous) {\n        this.previous = previous;\n        this.data = data;\n    }\n    return Node;\n}());\n\n\n//# sourceURL=webpack:///./src/js/Utils/stack.ts?");

/***/ }),

/***/ "./src/js/Utils/vector2.ts":
/*!*********************************!*\
  !*** ./src/js/Utils/vector2.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction make(x, y) {\n    return { x: x, y: y };\n}\nfunction add(a, b) {\n    return make(a.x + b.x, a.y + b.y);\n}\nfunction scale(a, s) {\n    return make(a.x * s, a.y * s);\n}\nfunction divide(a, s) {\n    return make(a.x * s, a.y * s);\n}\nfunction sub(a, b) {\n    return add(a, scale(b, -1));\n}\nfunction len(a) {\n    return Math.sqrt(a.x * a.x + a.y * a.y);\n}\nfunction normalize(a) {\n    var l = len(a);\n    if (l == 0) {\n        return make(1, 0);\n    }\n    else {\n        return scale(a, 1 / l);\n    }\n}\nfunction distance(a, b) {\n    return len(sub(b, a));\n}\nfunction distanceSquared(a, b) {\n    var v = sub(b, a);\n    return dot(v, v);\n}\n// Ray from a to b\nfunction ray(a, b) {\n    return normalize(sub(b, a));\n}\nfunction dot(a, b) {\n    return a.x * b.x + a.y * b.y;\n}\n// Rotate vector v by t radians\nfunction rotate(v, t) {\n    var ct = Math.cos(t);\n    var st = Math.sin(t);\n    return make(ct * v.x - st * v.y, st * v.x + ct * v.y);\n}\n// Angle between two normalized vectors with sign\nfunction angle(a, b) {\n    var t = Math.atan2(b.y, b.x) - Math.atan2(a.y, a.x);\n    if (t < 0) {\n        return 2 * Math.PI + t;\n    }\n    else {\n        return t;\n    }\n}\nfunction rayFromAngle(t) {\n    return make(Math.cos(t), Math.sin(t));\n}\n// Rotate from a towards b, by a maximum of 't' radians.\nfunction rotateToward(a, b, t) {\n    var full = angle(a, b);\n    if (full == 0 || Math.abs(full) < t) {\n        return b;\n    }\n    else {\n        if (full > Math.PI) {\n            return rotate(a, -t);\n        }\n        else {\n            return rotate(a, t);\n        }\n    }\n}\nfunction interpolate(a, b, t) {\n    var d = sub(b, a);\n    return add(a, scale(d, t));\n}\nfunction isEqual(a, b) {\n    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) < 0.000001;\n}\nfunction zero() {\n    return make(0, 0);\n}\nfunction randomRay() {\n    var t = 2 * Math.PI * Math.random();\n    return rotate(make(1, 0), t);\n}\nfunction fromPolar(v) {\n    return scale(rayFromAngle(v.t), v.r);\n}\nfunction toPolar(v) {\n    return {\n        t: Math.atan2(v.y, v.x),\n        r: len(v)\n    };\n}\nfunction clamp(v, min, max) {\n    return { x: Math.min(Math.max(v.x, min), max), y: Math.min(Math.max(v.y, min), max) };\n}\n;\nexports.default = {\n    make: make,\n    add: add,\n    scale: scale,\n    sub: sub,\n    len: len,\n    normalize: normalize,\n    distance: distance,\n    distanceSquared: distanceSquared,\n    ray: ray,\n    dot: dot,\n    rotate: rotate,\n    angle: angle,\n    rayFromAngle: rayFromAngle,\n    rotateToward: rotateToward,\n    interpolate: interpolate,\n    isEqual: isEqual,\n    zero: zero,\n    randomRay: randomRay,\n    fromPolar: fromPolar,\n    toPolar: toPolar,\n    divide: divide,\n    clamp: clamp\n};\n\n\n//# sourceURL=webpack:///./src/js/Utils/vector2.ts?");

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