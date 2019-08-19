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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar flocking_1 = __webpack_require__(/*! ./Flocking/flocking */ \"./src/js/BackgroundProcesses/Flocking/flocking.ts\");\nvar pathfindingInstance_1 = __webpack_require__(/*! ./Pathfinding/pathfindingInstance */ \"./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts\");\nvar statemachine_1 = __webpack_require__(/*! ./StateMachine/statemachine */ \"./src/js/BackgroundProcesses/StateMachine/statemachine.ts\");\nvar BGCanvas = /** @class */ (function () {\n    function BGCanvas(id, process) {\n        this.canvas = document.getElementById(id);\n        this.parent = this.canvas.parentElement;\n        this.resizeCanvas();\n        this.content = new process(this.canvas);\n        window.addEventListener('resize', this.resizeCanvas.bind(this));\n    }\n    BGCanvas.prototype.resizeCanvas = function () {\n        this.canvas.width = this.parent.offsetWidth;\n        this.canvas.height = this.parent.offsetHeight;\n    };\n    return BGCanvas;\n}());\nexports.BGCanvas = BGCanvas;\nvar flocking = new BGCanvas('flocking-stage', flocking_1.Flock);\nvar pathfinding = new BGCanvas('pathfinding-stage', pathfindingInstance_1.PathfindingInstance);\nvar statemachine = new BGCanvas('statemachine-stage', statemachine_1.StateMachine);\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/BGCanvas.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Flocking/boid.ts":
/*!*****************************************************!*\
  !*** ./src/js/BackgroundProcesses/Flocking/boid.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar Boid = /** @class */ (function () {\n    function Boid(canvas, x, y) {\n        this.canvas = canvas;\n        this.position = vector2_1.default.make(x, y);\n        this.velocity = vector2_1.default.make(0, 0);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.maxForce = 0.2;\n        this.maxSpeed = 6;\n        this.alignmentDistance = 80;\n        this.separationDistance = 30;\n        this.cohesionDistance = 110;\n        this.velocity.x = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;\n        this.velocity.y = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;\n    }\n    Boid.prototype.update = function (boids) {\n        this.flock(boids);\n        this.run();\n        this.checkBorder();\n    };\n    Boid.prototype.run = function () {\n        this.velocity = vector2_1.default.add(this.velocity, this.accelaration);\n        this.velocity = vector2_1.default.clamp(this.velocity, -this.maxSpeed, this.maxSpeed);\n        this.position = vector2_1.default.add(this.position, this.velocity);\n        this.accelaration = vector2_1.default.make(0, 0);\n        this.angle = this.getAngle(this.velocity);\n    };\n    Boid.prototype.flock = function (boids) {\n        var align = this.allignment(boids);\n        var separate = this.separation(boids);\n        var cohese = this.cohesion(boids);\n        separate = vector2_1.default.scale(separate, 3);\n        this.applyForce(align);\n        this.applyForce(separate);\n        this.applyForce(cohese);\n    };\n    Boid.prototype.getAngle = function (v) {\n        var heading = vector2_1.default.make(v.x, v.y);\n        heading = vector2_1.default.normalize(heading);\n        return Math.atan2(heading.y, heading.x);\n    };\n    Boid.prototype.applyForce = function (force) {\n        this.accelaration = vector2_1.default.add(this.accelaration, force);\n    };\n    Boid.prototype.seek = function (targetVector) {\n        var desired = vector2_1.default.sub(targetVector, this.position);\n        desired = vector2_1.default.normalize(desired);\n        desired = vector2_1.default.scale(desired, this.maxSpeed);\n        var steer = vector2_1.default.sub(desired, this.velocity);\n        steer = vector2_1.default.clamp(steer, -this.maxForce, this.maxForce);\n        return steer;\n    };\n    Boid.prototype.allignment = function (boids) {\n        var alignmentVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.alignmentDistance)) {\n                alignmentVector = vector2_1.default.add(alignmentVector, boid.velocity);\n                count++;\n            }\n        }\n        if (count > 0) {\n            alignmentVector = vector2_1.default.divide(alignmentVector, count);\n            alignmentVector = vector2_1.default.normalize(alignmentVector);\n            alignmentVector = vector2_1.default.scale(alignmentVector, this.maxSpeed);\n            var steer = vector2_1.default.sub(alignmentVector, this.velocity);\n            steer = vector2_1.default.clamp(alignmentVector, -this.maxForce, this.maxForce);\n            return steer;\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.separation = function (boids) {\n        var separationVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.separationDistance)) {\n                var diff = vector2_1.default.sub(this.position, boid.position);\n                diff = vector2_1.default.normalize(diff);\n                diff = vector2_1.default.divide(diff, d);\n                separationVector = vector2_1.default.add(separationVector, diff);\n                count++;\n            }\n        }\n        if (count > 0) {\n            separationVector = vector2_1.default.divide(separationVector, count);\n            separationVector = vector2_1.default.normalize(separationVector);\n            separationVector = vector2_1.default.scale(separationVector, this.maxSpeed);\n            separationVector = vector2_1.default.sub(separationVector, this.velocity);\n            separationVector = vector2_1.default.clamp(separationVector, -this.maxForce, this.maxForce);\n        }\n        return separationVector;\n    };\n    Boid.prototype.cohesion = function (boids) {\n        var coheseVector = vector2_1.default.make(0, 0);\n        var count = 0;\n        for (var i = 0; i < boids.length; i++) {\n            var boid = boids[i];\n            var d = vector2_1.default.distance(this.position, boid.position);\n            if ((d > 0) && (d < this.cohesionDistance)) {\n                coheseVector = vector2_1.default.add(coheseVector, boid.position);\n                count++;\n            }\n        }\n        if (count > 0) {\n            coheseVector = vector2_1.default.divide(coheseVector, count);\n            return this.seek(coheseVector);\n        }\n        else {\n            return vector2_1.default.make(0, 0);\n        }\n    };\n    Boid.prototype.checkBorder = function () {\n        var width = this.canvas.width;\n        var height = this.canvas.height;\n        if (this.position.x < -10)\n            this.position.x = width + 2;\n        if (this.position.y < -10)\n            this.position.y = height + 2;\n        if (this.position.x > width + 30)\n            this.position.x = -10;\n        if (this.position.y > height + 30)\n            this.position.y = -10;\n    };\n    Boid.prototype.draw = function (ctx) {\n        ctx.strokeStyle = '#20C20E';\n        ctx.beginPath();\n        ctx.moveTo(this.position.x, this.position.y);\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));\n        ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));\n        ctx.closePath();\n        ctx.stroke();\n    };\n    return Boid;\n}());\nexports.default = Boid;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Flocking/boid.ts?");

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

/***/ "./src/js/BackgroundProcesses/Pathfinding/grid.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/grid.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tile_1 = __webpack_require__(/*! ./tile */ \"./src/js/BackgroundProcesses/Pathfinding/tile.ts\");\nvar settings_1 = __webpack_require__(/*! ../../Utils/settings */ \"./src/js/Utils/settings.ts\");\nvar gridUtils_1 = __webpack_require__(/*! ../../Utils/gridUtils */ \"./src/js/Utils/gridUtils.ts\");\nvar Grid = /** @class */ (function () {\n    function Grid() {\n        this.width = settings_1.default.gridWidth;\n        this.height = settings_1.default.gridHeight;\n        this.generateGrid();\n    }\n    Grid.prototype.generateGrid = function () {\n        this.map = [];\n        for (var x = 0; x < this.width; x++) {\n            this.map[x] = [];\n            for (var y = 0; y < this.height; y++) {\n                this.map[x][y] = new tile_1.default(x, y);\n            }\n        }\n    };\n    Grid.prototype.draw = function (ctx) {\n        for (var x = 0; x < this.width; x++) {\n            for (var y = 0; y < this.height; y++) {\n                var ct = this.getTile(x, y);\n                ctx.strokeStyle = '#20C20E';\n                ctx.strokeRect(ct.WorldPosition.x, ct.WorldPosition.y, settings_1.default.tileDiameter, settings_1.default.tileDiameter);\n            }\n        }\n    };\n    Grid.prototype.getTile = function (x, y) {\n        return this.map[x][y];\n    };\n    Grid.prototype.getNeighbours = function (tile) {\n        var _this = this;\n        return gridUtils_1.default.getAdjacentGridPoints(tile.GridPosition).map(function (gp) { return _this.getTile(gp.x, gp.y); });\n    };\n    return Grid;\n}());\nexports.default = Grid;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/grid.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts":
/*!**********************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PathRequestManager = /** @class */ (function () {\n    function PathRequestManager() {\n        this.pathRequestQueue = [];\n    }\n    Object.defineProperty(PathRequestManager.prototype, \"Pathfinder\", {\n        set: function (p) {\n            this.pathfinder = p;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    PathRequestManager.prototype.requestPath = function (start, end, callback) {\n        var newRequest = new PathRequest(start, end, callback);\n        console.log(newRequest);\n        this.pathRequestQueue.push(newRequest);\n        this.TryProcessNext();\n    };\n    PathRequestManager.prototype.FinishedProcessingPath = function (path, succes) {\n        this.currentRequest.callback(path, succes);\n        this.isProcessingPath = false;\n        this.TryProcessNext();\n    };\n    PathRequestManager.prototype.TryProcessNext = function () {\n        if (!this.isProcessingPath && this.pathRequestQueue.length > 0) {\n            this.currentRequest = this.pathRequestQueue.shift();\n            console.log(this.currentRequest);\n            this.isProcessingPath = true;\n            this.pathfinder.findPath(this.currentRequest.pathStart, this.currentRequest.pathEnd);\n        }\n    };\n    Object.defineProperty(PathRequestManager, \"Instance\", {\n        get: function () {\n            return this._instance || (this._instance = new this());\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return PathRequestManager;\n}());\nexports.default = PathRequestManager;\nvar PathRequest = /** @class */ (function () {\n    function PathRequest(start, end, callback) {\n        this.pathStart = start;\n        this.pathEnd = end;\n        this.callback = callback;\n    }\n    return PathRequest;\n}());\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts":
/*!**************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar pathRequestManager_1 = __webpack_require__(/*! ./pathRequestManager */ \"./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar settings_1 = __webpack_require__(/*! ../../Utils/settings */ \"./src/js/Utils/settings.ts\");\nvar Pathfinder = /** @class */ (function () {\n    function Pathfinder(position) {\n        this.gridPosition = position;\n        this.path = [];\n        this.currentPathIndex = 0;\n        this.getPath(vector2_1.default.make(5, 5));\n    }\n    Pathfinder.prototype.onPathFound = function (path, pathSuccess) {\n        if (pathSuccess) {\n            this.path = path;\n        }\n    };\n    Pathfinder.prototype.followPath = function () {\n        if (this.path.length > 0) {\n            if (this.currentPathIndex < this.path.length) {\n                this.target = this.path[this.currentPathIndex];\n                this.gridPosition = this.target;\n                this.currentPathIndex++;\n            }\n            else {\n                this.path = [];\n                return;\n            }\n        }\n    };\n    Pathfinder.prototype.getPath = function (targetPosition) {\n        pathRequestManager_1.default.Instance.requestPath(this.gridPosition, targetPosition, this.onPathFound.bind(this));\n    };\n    Pathfinder.prototype.draw = function (ctx) {\n        ctx.fillStyle = '#20C20E';\n        ctx.arc(this.gridPosition.x * settings_1.default.tileDiameter + (settings_1.default.tileDiameter / 2), this.gridPosition.y * settings_1.default.tileDiameter + (settings_1.default.tileDiameter / 2), settings_1.default.tileDiameter / 2, 0, 2 * Math.PI);\n        ctx.fill();\n    };\n    return Pathfinder;\n}());\nexports.default = Pathfinder;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts":
/*!***************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar pathRequestManager_1 = __webpack_require__(/*! ./pathRequestManager */ \"./src/js/BackgroundProcesses/Pathfinding/pathRequestManager.ts\");\nvar Pathfinding = /** @class */ (function () {\n    function Pathfinding(grid) {\n        this.grid = grid;\n        pathRequestManager_1.default.Instance.Pathfinder = this;\n    }\n    Pathfinding.prototype.findPath = function (startPosition, targetPosition) {\n        var start = this.grid.getTile(startPosition.x, startPosition.y);\n        var end = this.grid.getTile(targetPosition.x, targetPosition.y);\n        var path = [];\n        var pathFound = false;\n        var openSet = [];\n        var closedSet = [];\n        openSet.push(start);\n        while (openSet.length > 0) {\n            var currentTile = openSet[0];\n            for (var i = 1; i < openSet.length; i++) {\n                if (openSet[i].fCost < currentTile.fCost || openSet[i].fCost == currentTile.fCost && openSet[i].hCost < currentTile.hCost) {\n                    currentTile = openSet[i];\n                }\n            }\n            openSet.splice(openSet.indexOf(currentTile), 1);\n            closedSet.push(currentTile);\n            if (currentTile == end) {\n                pathFound = true;\n                break;\n            }\n            var neighbours = this.grid.getNeighbours(currentTile);\n            for (var i = 0; i < neighbours.length; i++) {\n                var neighbour = neighbours[i];\n                if (!neighbour.Walkable || closedSet.indexOf(neighbour) > 0) {\n                    continue;\n                }\n                var newMovementCost = currentTile.gCost + this.getDistance(currentTile, neighbour);\n                if (newMovementCost < neighbour.gCost || !(openSet.indexOf(neighbour) > 0)) {\n                    neighbour.gCost = newMovementCost;\n                    neighbour.hCost = this.getDistance(neighbour, end);\n                    neighbour.parent = currentTile;\n                    if (!(openSet.indexOf(neighbour) > 0)) {\n                        openSet.push(neighbour);\n                    }\n                }\n            }\n        }\n        if (pathFound) {\n            path = this.retracePath(start, end);\n        }\n        pathRequestManager_1.default.Instance.FinishedProcessingPath(path, pathFound);\n    };\n    Pathfinding.prototype.retracePath = function (startTile, targetTile) {\n        var path = [];\n        var waypoints = [];\n        var currentTile = targetTile;\n        while (currentTile != startTile) {\n            path.push(currentTile);\n            waypoints.push(currentTile.GridPosition);\n            currentTile = currentTile.parent;\n        }\n        waypoints.reverse();\n        return waypoints;\n    };\n    Pathfinding.prototype.getDistance = function (tileA, tileB) {\n        var distX = Math.abs(tileA.GridPosition.x - tileB.GridPosition.x);\n        var distY = Math.abs(tileA.GridPosition.y - tileB.GridPosition.y);\n        if (distX > distY) {\n            return 14 * distY + 10 * (distX - distY);\n        }\n        else {\n            return 14 * distX + 10 * (distY - distX);\n        }\n    };\n    return Pathfinding;\n}());\nexports.default = Pathfinding;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts":
/*!***********************************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar grid_1 = __webpack_require__(/*! ./grid */ \"./src/js/BackgroundProcesses/Pathfinding/grid.ts\");\nvar pathfinder_1 = __webpack_require__(/*! ./pathfinder */ \"./src/js/BackgroundProcesses/Pathfinding/pathfinder.ts\");\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar pathfinding_1 = __webpack_require__(/*! ./pathfinding */ \"./src/js/BackgroundProcesses/Pathfinding/pathfinding.ts\");\nvar PathfindingInstance = /** @class */ (function () {\n    function PathfindingInstance(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.grid = new grid_1.default();\n        this.grid.draw(this.ctx);\n        var pathfinding = new pathfinding_1.default(this.grid);\n        this.pathfinder = new pathfinder_1.default(vector2_1.default.make(1, 1));\n        this.pathfinder.draw(this.ctx);\n        setInterval(this.update.bind(this), 500);\n    }\n    PathfindingInstance.prototype.update = function () {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.beginPath();\n        this.pathfinder.followPath();\n        this.grid.draw(this.ctx);\n        this.pathfinder.draw(this.ctx);\n    };\n    return PathfindingInstance;\n}());\nexports.PathfindingInstance = PathfindingInstance;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/pathfindingInstance.ts?");

/***/ }),

/***/ "./src/js/BackgroundProcesses/Pathfinding/tile.ts":
/*!********************************************************!*\
  !*** ./src/js/BackgroundProcesses/Pathfinding/tile.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vector2_1 = __webpack_require__(/*! ../../Utils/vector2 */ \"./src/js/Utils/vector2.ts\");\nvar settings_1 = __webpack_require__(/*! ../../Utils/settings */ \"./src/js/Utils/settings.ts\");\nvar Tile = /** @class */ (function () {\n    function Tile(x, y) {\n        this.gCost = 0;\n        this.hCost = 0;\n        this.gridPosition = vector2_1.default.make(x, y);\n        this.walkable = true;\n    }\n    Tile.prototype.compareTo = function (tile) {\n        var compare = this.fCost - tile.fCost;\n        if (compare == 0) {\n            compare = this.hCost - tile.hCost;\n        }\n        return -compare;\n    };\n    Object.defineProperty(Tile.prototype, \"GridPosition\", {\n        get: function () { return this.gridPosition; },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"Walkable\", {\n        get: function () {\n            return this.walkable;\n        },\n        set: function (value) {\n            this.walkable = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"WorldPosition\", {\n        get: function () {\n            return vector2_1.default.make(this.gridPosition.x * settings_1.default.tileDiameter, this.gridPosition.y * settings_1.default.tileDiameter);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Tile.prototype, \"fCost\", {\n        get: function () {\n            return this.gCost + this.hCost;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Tile;\n}());\nexports.default = Tile;\n\n\n//# sourceURL=webpack:///./src/js/BackgroundProcesses/Pathfinding/tile.ts?");

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

/***/ "./src/js/BotNavigation/app.ts":
/*!*************************************!*\
  !*** ./src/js/BotNavigation/app.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar events_1 = __webpack_require__(/*! ../Utils/events */ \"./src/js/Utils/events.ts\");\nvar console_1 = __webpack_require__(/*! ./console */ \"./src/js/BotNavigation/console.ts\");\nvar Bot = /** @class */ (function () {\n    function Bot() {\n        this.botConsole = new console_1.default();\n        events_1.default.on('command', this.executeCommand.bind(this));\n    }\n    Bot.prototype.executeCommand = function (cmd) {\n        console.log(cmd);\n    };\n    return Bot;\n}());\nexports.Bot = Bot;\nvar niekbot = new Bot();\n\n\n//# sourceURL=webpack:///./src/js/BotNavigation/app.ts?");

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

/***/ "./src/js/Utils/gridUtils.ts":
/*!***********************************!*\
  !*** ./src/js/Utils/gridUtils.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/Utils/settings.ts\");\nvar vector2_1 = __webpack_require__(/*! ./vector2 */ \"./src/js/Utils/vector2.ts\");\nvar GridUtils = /** @class */ (function () {\n    function GridUtils() {\n    }\n    GridUtils.inGridBounds = function (x, y) {\n        if (x < settings_1.default.gridWidth && y < settings_1.default.gridHeight && x >= 0 && y >= 0) {\n            return true;\n        }\n        return false;\n    };\n    GridUtils.getAdjacentGridPoints = function (tile) {\n        var neighbours = [];\n        for (var x = -1; x <= 1; x++) {\n            for (var y = -1; y <= 1; y++) {\n                if (x == 0 && y == 0) {\n                    continue;\n                }\n                var cX = tile.x + x;\n                var cY = tile.x + y;\n                if (GridUtils.inGridBounds(cX, cY)) {\n                    var neighbour = vector2_1.default.make(cX, cY);\n                    neighbours.push(neighbour);\n                }\n            }\n        }\n        return neighbours;\n    };\n    GridUtils.inWorldBounds = function (x, y) {\n        if (x < settings_1.default.gridWidth * 64 && y < settings_1.default.gridHeight * 64 && x >= 0 && y >= 0) {\n            return true;\n        }\n        return false;\n    };\n    return GridUtils;\n}());\nexports.default = GridUtils;\n\n\n//# sourceURL=webpack:///./src/js/Utils/gridUtils.ts?");

/***/ }),

/***/ "./src/js/Utils/settings.ts":
/*!**********************************!*\
  !*** ./src/js/Utils/settings.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Settings = /** @class */ (function () {\n    function Settings() {\n    }\n    Settings.tileDiameter = 30;\n    Settings.gridWidth = 11;\n    Settings.gridHeight = 20;\n    return Settings;\n}());\nexports.default = Settings;\n\n\n//# sourceURL=webpack:///./src/js/Utils/settings.ts?");

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