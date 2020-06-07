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

/***/ "./src/earth.js":
/*!**********************!*\
  !*** ./src/earth.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var earth = {
  mainId: 'earth',
  objList: [{
    id: 'earthLeo',
    renderType: 'svg',
    r: 6378100 + 1000000,
    position: {
      r: 0,
      dec: 0
    },
    render: {
      format: 'circle',
      color: '#303030'
    }
  }, {
    id: 'earthAtm',
    renderType: 'svg',
    r: 6378100 + 100000,
    position: {
      r: 0,
      dec: 0
    },
    render: {
      format: 'circle',
      color: '#ADD8E6'
    }
  }, {
    id: 'earth',
    renderType: 'svg',
    r: 6378100,
    // m
    mass: 5.98e24,
    // kg
    g: 9.80665,
    // m/s2
    position: {
      r: 0,
      // distance from center (m)
      dec: 0 // declination (deg), could be any value because r = 0

    },
    render: {
      format: 'circle',
      color: 'blue'
    }
  }, {
    id: 'base1',
    renderType: 'svg',
    r: 100,
    // m / for now
    width: 100,
    // mandatory (m)
    height: 5,
    // mandatory (m)
    position: {
      r: 6378100,
      // distance from center (m)
      dec: 0 // declination (deg), could be any value because r = 0

    },
    render: {
      format: 'rect',
      // for now
      color: 'yellow'
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (earth);

/***/ }),

/***/ "./src/helpCalc.js":
/*!*************************!*\
  !*** ./src/helpCalc.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var getHelpCalc = function getHelpCalc() {
  // declared because they use themselves so need hoisting
  function toPolar(cart) {
    var dec = Math.atan2(cart.x, cart.y) / (Math.PI / 180) % 360;
    if (dec < 0) dec += 360;
    return {
      r: Math.pow(Math.pow(cart.x, 2) + Math.pow(cart.y, 2), .5),
      dec: dec
    };
  }

  function fromPolar(polar) {
    return {
      x: polar.r * Math.sin(polar.dec * Math.PI / 180),
      y: polar.r * Math.cos(polar.dec * Math.PI / 180)
    };
  }

  function roundM(val) {
    return Math.round(val * 1000000000) / 1000000000;
  }

  var distPol = function distPol(obj1Pol, obj2Pol) {
    var obj1Car = fromPolar(obj1Pol);
    var obj2Car = fromPolar(obj2Pol);
    var dist = {
      r: Math.sqrt(Math.pow(Math.abs(obj2Car.x - obj1Car.x), 2) + Math.pow(Math.abs(obj2Car.y - obj1Car.y), 2)),
      dec: Math.atan((obj2Car.y - obj1Car.y) / (obj2Car.x - obj1Car.x)) / (Math.PI / 180)
    };

    if (dist.r < 0) {
      dist = (_readOnlyError("dist"), {
        r: -dist.r,
        dev: (180 - dist.dec) % 360
      });
    }

    return dist;
  };

  function addPol(obj1Pol, obj2Pol) {
    var obj1Car = fromPolar(obj1Pol);
    var obj2Car = fromPolar(obj2Pol);
    var dist = toPolar({
      x: obj1Car.x + obj2Car.x,
      y: obj1Car.y + obj2Car.y
    });
    return dist;
  }

  function toDeg360(deg) {
    var ret = deg % 360;
    if (ret < 0) ret += 360;
    return ret;
  }

  function getVObj(obj) {
    // for objs with vDec
    return {
      r: Math.atan(obj.position.vDec * Math.PI / 180) * obj.position.r,
      dec: toDeg360(obj.position.dec + 90)
    };
  }

  function toDeg180(deg) {
    var ret = deg;
    if (ret < -180) ret = 360 + ret;
    return ret;
  }

  return {
    fromPolar: fromPolar,
    toPolar: toPolar,
    distPol: distPol,
    roundM: roundM,
    addPol: addPol,
    toDeg360: toDeg360,
    toDeg180: toDeg180,
    getVObj: getVObj
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getHelpCalc);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-svg */ "./src/render-svg.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move */ "./src/move.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/panel.js");
/* harmony import */ var _earth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earth */ "./src/earth.js");
/* harmony import */ var _moon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moon */ "./src/moon.js");
/* harmony import */ var _iss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iss */ "./src/iss.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helpCalc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpCalc */ "./src/helpCalc.js");








document.onLoad = loadApp;

var app = function app(deps) {
  var state = {
    width: 4000,
    // (m)
    play: true,
    timerStart: 0,
    timerSkip: 0,
    timer: 0,
    timeSpeed: 1,
    // * n means n times faster
    timeSkip: 0.1,
    // each time loop timming (s)
    time: 0,
    // time passed (s)
    ship1: null,
    render: null
  };
  var objs = deps.objs;
  var helpCalc = deps.getHelpCalc();
  var move = deps.move(helpCalc);
  var render = deps.render(helpCalc);
  var ship1Data = deps.ship1(helpCalc);
  var ship1 = ship1Data.objList[0];
  var panel = deps.getPanel(helpCalc, state, ship1);
  var refObjs = {
    earth: objs.earth.objList[2],
    moon: objs.moon.objList[0]
  };
  render.init(state, refObjs);
  ship1Data.init(state);
  move.init(objs);
  render.create(objs, getRefObj(), state.render);
  render.createOne(ship1Data, getRefObj(), state.render);
  document.onclick = verifyClick;
  document.onkeydown = verifyKey;
  state.timerStart = Date.now();
  loop();

  function loop() {
    setTimeout(function () {
      // starts updating time because tracks how long this loop takes
      state.time += state.timeSkip * state.timeSpeed; // game over

      if (ship1.position.crash) modalOpen('ship crashed. Reload game.');
      if (ship1.position.crash || !state.play || checkTimeOut()) return; // move and render

      move.move(state.timeSkip, state.timeSpeed);
      ship1Data.burstUpdate(state.timeSkip, state.timeSpeed);
      move.moveOne(ship1, state.timeSkip, state.timeSpeed, [objs.earth.objList[2], objs.moon.objList[0]], state);
      renderUpdate();
      panel.update(); // skip for next regular loop

      state.timer = Date.now() - state.timerStart;
      var timerNext = Math.floor((state.timer + 1000 * state.timeSkip) / 100) * 100;
      state.timerSkip = timerNext - state.timer;
      loop();
    }, state.timerSkip);
  }

  function renderUpdate() {
    render.update(objs, getRefObj(), state.render, ship1);
    render.updateOne(ship1Data, getRefObj(), state.render, ship1);
    render.updateTrail(ship1Data, getRefObj(), state.render, ship1, state.ship1);
  }

  function checkTimeOut() {
    if (state.time / (60 * 60 * 24) > 365) {
      modalOpen('Exausted fuel after 1 year of flight. Reload game.');
      return true;
    }

    return false;
  }

  function verifyClick(e) {
    if (e.target.nodeName == 'A') {
      var realLink = e.target.href;
      var action = realLink.replace(window.location.origin + '/#/', '').replace(window.location.search, '');

      if (!['file:', 'http:'].includes(action.substring(0, 5))) {
        e.preventDefault();
        if (action === 'timePlay') playStop();else if (action === 'zoomMinus') zoomMultiply(2);else if (action === 'zoomPlus') zoomMultiply(.5);else if (action === 'timePlus') timeMultiply(2);else if (action === 'timeMinus') timeMultiply(.5);else if (action === 'modalClose') modalClose();
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') playStop();else if (keyCode === 'ArrowUp') ship1Data.addPitch(10);else if (keyCode === 'ArrowDown') ship1Data.addPitch(-10);else if (keyCode === 'KeyA') ship1Data.addBurstTNext(1);else if (keyCode === 'KeyZ') ship1Data.addBurstTNext(-1);else if (keyCode === 'Minus') zoomMultiply(2);else if (keyCode === 'Equal') zoomMultiply(.5);else if (keyCode === 'Period') timeMultiply(2);else if (keyCode === 'Comma') timeMultiply(.5);else if (keyCode === 'KeyT') ship1Data.showTrail(state.ship1);else if (keyCode === 'KeyV') state.render.refId = render.setRef(state.render.refId);else if (keyCode.substring(0, 5) === 'Digit') {
      ship1Data.setBurstANext(keyCode.replace('Digit', ''));
    }
    if (!state.play) return;

    if (keyCode === 'Space') {
      ship1Data.burstStart();
    }
  }

  function getRefObj() {
    return state.render.refObjs[state.render.refId];
  }

  function playStop() {
    state.play = !state.play;
    document.getElementById('time').style.color = state.play ? 'white' : 'red';
    panel.update('timePlay');
    if (state.play) loop();
  }

  function zoomMultiply(times) {
    state.render.zoom *= times;
    state.render.zoom = Math.max(state.render.zoom, 1);
    if (!state.play) renderUpdate();
  }

  function timeMultiply(times) {
    var timeSpeed = state.timeSpeed * times;
    if (timeSpeed < 1) timeSpeed = 1;
    if (timeSpeed > 2000) timeSpeed = 2000;
    state.timeSpeed = parseInt(timeSpeed);
    panel.update('timeSpeed');
  }

  function modalClose() {
    var classList = document.getElementById('modal').classList;
    classList.remove('modalOpen');
    classList.add('modalClosed');
    document.getElementById('modalcontent').innerText = '';
  }

  function modalOpen(msg) {
    var classList = document.getElementById('modal').classList;
    classList.remove('modalClosed');
    classList.add('modalOpen');
    document.getElementById('modalcontent').innerText = msg;
  }
};

var loadApp = function () {
  var deps = {
    render: _render_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
    move: _move__WEBPACK_IMPORTED_MODULE_1__["default"],
    ship1: _ship__WEBPACK_IMPORTED_MODULE_6__["default"],
    getPanel: _panel__WEBPACK_IMPORTED_MODULE_2__["default"],
    objs: {
      earth: _earth__WEBPACK_IMPORTED_MODULE_3__["default"],
      moon: _moon__WEBPACK_IMPORTED_MODULE_4__["default"],
      iss: _iss__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    getHelpCalc: _helpCalc__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  app(deps);
}();

/***/ }),

/***/ "./src/iss.js":
/*!********************!*\
  !*** ./src/iss.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var iss = {
  mainId: 'iss',
  objList: [{
    id: 'iss',
    renderType: 'svg',
    r: 100,
    // m
    position: {
      r: 6378100 + 309000,
      // distance from center (m)
      dec: 0,
      // declination (deg), could be any value because r = 0
      vR: 0,
      vDec: 360 / (92.68 * 600)
    },
    render: {
      format: 'circle',
      color: '#d9d9d9'
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (iss);

/***/ }),

/***/ "./src/moon.js":
/*!*********************!*\
  !*** ./src/moon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var moon = {
  mainId: 'moon',
  objList: [{
    id: 'moon',
    renderType: 'svg',
    r: 1738000,
    // m
    mass: 7.34767e22,
    // kg
    position: {
      r: 384000000,
      // distance from center (m)
      dec: 90,
      // declination (deg), could be any value because r = 0
      vR: 0,
      vDec: 1.52502e-5 // 360 deg each 27.322 days

    },
    render: {
      format: 'circle',
      color: '#F5F3CE'
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (moon);

/***/ }),

/***/ "./src/move.js":
/*!*********************!*\
  !*** ./src/move.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moveSvg = function moveSvg(helpCalc) {
  var data = [];

  function init(objs) {
    var keys = Object.keys(objs);

    for (var i = 0; i < keys.length; i++) {
      var objList = objs[keys[i]].objList;

      for (var j = 0; j < objList.length; j++) {
        var obj = objList[j];

        if (obj.position.vR || obj.position.vDec) {
          // will move
          var newData = obj.position;
          newData.id = obj.id;
          data = [].concat(_toConsumableArray(data), [newData]);
        }
      }
    }
  }

  var move = function move(secondSkip, timeSpeed) {
    for (var i = 0; i < data.length; i++) {
      var position = data[i];
      position.r += position.vR * secondSkip * timeSpeed;
      position.dec += position.vDec * secondSkip * timeSpeed;
    }
  };

  var moveOne = function moveOne(obj, secondSkip, timeSpeed, gObjs, state) {
    var aPolar = {
      r: obj.position.burst.a,
      dec: obj.position.pitchDec
    };
    var vPolar = {
      r: obj.position.vR,
      dec: obj.position.vDec
    };
    var posPolar = {
      r: obj.position.r,
      dec: obj.position.dec
    };
    var posDecOld = posPolar.dec;
    var altEarth = posPolar.r - gObjs[0].r;
    var gPolar = getLocalG(obj, gObjs);
    var altMoon = obj.panel.altMoon;
    if (altEarth <= 0 || altMoon <= 0) gPolar = {
      r: 0,
      dec: 0
    }; // If landing

    if (altEarth < 0 && vPolar.r !== 0) {
      obj.position.vR = 0;
      obj.position.r = gObjs[0].r;
      if (vPolar.r > 50 / 3.6) obj.position.crash = true;
      return;
    } else if (altMoon < 0 && vPolar.r !== 0) {
      var vMoon = helpCalc.getVObj(gObjs[1]);
      obj.position.vR = vMoon.r;
      obj.position.vDec = vMoon.dec;
      obj.position.burst.a = 0;
      if (vPolar.r > 50 * 3.6) obj.position.crash = true;
      return;
    } // calc new position


    var aCart = helpCalc.fromPolar(aPolar);
    var gCart = helpCalc.fromPolar(gPolar);
    var vCart = helpCalc.fromPolar(vPolar);
    var posCart = helpCalc.fromPolar(posPolar);
    vCart.x += (aCart.x + gCart.x) * secondSkip * timeSpeed;
    vCart.y += (aCart.y + gCart.y) * secondSkip * timeSpeed;
    posCart.x += vCart.x * secondSkip * timeSpeed;
    posCart.y += vCart.y * secondSkip * timeSpeed;
    vPolar = helpCalc.toPolar(vCart);
    posPolar = helpCalc.toPolar(posCart);
    posPolar.r = Math.round(posPolar.r); // Update new posion

    obj.position.vR = vPolar.r;
    obj.position.vDec = vPolar.dec;
    obj.position.r = Math.round(posPolar.r);
    obj.position.dec = posPolar.dec;
    obj.position.pitchDec = helpCalc.toDeg360(obj.position.pitchDec - posDecOld + obj.position.dec);
    obj.panel.altEarth = Math.round(obj.position.r - gObjs[0].r); //update Trail

    updateTrail(posPolar, state);
  };

  function getLocalG(obj, gObjs) {
    // Earth
    var mass = gObjs[0].mass;
    var dist = obj.position.r;
    var gR = 6.67e-11 * mass / Math.pow(dist, 2);
    var gDec = helpCalc.toDeg360(180 + obj.position.dec);
    if (dist < gObjs[0].r) gR = 0;
    obj.panel.gEarth = gR;
    obj.panel.headEarth = gDec; //Moon

    var mass2 = gObjs[1].mass;
    var posPolShip = {
      r: obj.position.r,
      dec: obj.position.dec
    };
    var posPolCenter = {
      r: gObjs[1].position.r,
      dec: gObjs[1].position.dec
    };
    var dist2 = helpCalc.distPol(posPolShip, posPolCenter);
    var gR2 = 6.67e-11 * mass2 / Math.pow(dist2.r, 2);
    var gDec2 = helpCalc.toDeg360(180 + dist2.dec);
    obj.panel.altMoon = Math.round(dist2.r - gObjs[1].r);
    if (obj.panel.altMoon <= 0) gR2 = 0;
    obj.panel.gMoon = gR2;
    obj.panel.headMoon = gDec2;
    var gPol = helpCalc.addPol({
      r: gR,
      dec: gDec
    }, {
      r: gR2,
      dec: gDec2
    });
    return gPol;
  }

  function updateTrail(posPolar, state) {
    var maxLenght = state.ship1.trail.maxLenght;
    var points = state.ship1.trail.points;
    if (posPolar.r === points[points.length - 2] && posPolar.dec === points[points.length - 1]) return;
    points.push(posPolar.r);
    points.push(posPolar.dec);

    while (points.length > maxLenght * 2) {
      points.shift();
      points.shift();
    }
  }

  return {
    init: init,
    move: move,
    moveOne: moveOne
  };
};

/* harmony default export */ __webpack_exports__["default"] = (moveSvg);

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getPanel = function getPanel(helpCalc, state, ship1) {
  var position = {};
  var panel = {};
  create(state);

  function create(state) {
    console.log('will create from', state);
  }

  var content = {
    alt: function alt() {
      var alt = state.render.refId === 'earth' ? panel.altEarth : panel.altMoon;
      var unit = 'm';

      if (alt > 1000) {
        alt /= 1000;
        unit = 'km';
      }

      return Math.round(alt).toLocaleString('en-US') + unit;
    },
    "long": function long() {
      var _long = state.render.refId === 'earth' ? panel.headEarth : panel.headMoon;

      return formatLong((180 - _long) % 360);
    },
    pitch: function pitch() {
      var pitch = helpCalc.toDeg360(position.pitchDec - position.dec);
      return formatDeg(helpCalc.toDeg180(90 - pitch));
    },
    climb: function climb() {
      var vDec = position.vDec + position.dec;
      var climb = position.vR * Math.cos(vDec * (Math.PI / 180));
      return Math.round(climb * 3.6).toLocaleString('en-US') + 'km/h';
    },
    vOrbit: function vOrbit() {
      var vDec = position.vDec + position.dec;
      var v = position.vR * Math.sin(vDec * (Math.PI / 180));
      return Math.round(v * 3.6).toLocaleString('en-US') + 'km/h';
    },
    gLocal: function gLocal() {
      return (state.render.refId === 'earth' ? panel.gEarth : panel.gMoon).toFixed(2) + 'm/s2';
    },
    speed: function speed() {
      return Math.round(position.vR * 3.6).toLocaleString('en-US') + 'km/h';
    },
    burstA: function burstA() {
      var a = (position.burst.a / 9.8).toFixed(0);
      var aNext = (position.burst.aNext / 9.8).toFixed(0);
      return a + 'g (' + aNext + 'g)';
    },
    burstT: function burstT() {
      return Math.round(position.burst.t) + 's (' + position.burst.tNext.toFixed(0) + 's)';
    },
    scale: function scale() {
      var scale = state.width / 10 * state.render.zoom;
      return formatMkm(scale);
      g;
    },
    time: function time() {
      var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
      var d = new Date(0, 0, 0, 0, 0, 0, 0);
      d.setSeconds(state.time);
      var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
      return days + 'd ' + d.toLocaleTimeString('en-US', {
        hour12: false
      });
    },
    head: function head() {
      return formatDeg(position.vDec);
    },
    zoom: function zoom() {
      var zoom = state.render.zoom;
      return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
    },
    timeSpeed: function timeSpeed() {
      return formatKM(state.timeSpeed);
    },
    timePlay: function timePlay() {
      return state.play ? 'Pause' : 'Play';
    },
    ref: function ref() {
      return state.render.refId;
    }
  };

  var update = function update(key) {
    if (key) {
      document.getElementById(key).innerText = content[key]();
    } else {
      position = ship1.position;
      panel = ship1.panel;
      var keys = Object.keys(content);
      keys.forEach(function (element) {
        document.getElementById(element).innerText = content[element]();
      });
    }
  };

  function formatDeg(deg) {
    var txt = Math.round(deg) + String.fromCharCode(176);
    return txt;
  }

  function formatLong(deg) {
    var txt = parseInt(deg) + String.fromCharCode(176);
    var min = ((deg - parseInt(deg)) * 60).toFixed(2);
    if (min < 10) txt += '0';
    txt += min + '\'';
    return txt;
  }

  function formatMkm(d) {
    return d < 1000 ? d + 'm' : d / 1000 + 'km';
  }

  function formatKM(d) {
    var txt = d;
    if (d >= 1000) txt = parseInt(d / 1000) + 'k';else if (d >= 1000000) txt = parseInt(d / 1000000) + 'M';
    return txt;
  }

  return {
    update: update
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getPanel);

/***/ }),

/***/ "./src/render-svg.js":
/*!***************************!*\
  !*** ./src/render-svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var renderSvg = function renderSvg(helpCalc) {
  var init = function init(initState, refObjs) {
    initState.render = {
      refId: 'earth',
      refObjs: refObjs,
      zoom: 1,
      canvasNode: null,
      initState: null
    };
    initState.render.canvasNode = document.getElementById('canvas'), initState.render.viewCenter = getViewCenter(initState.render.canvasNode);
  };

  var create = function create(objs, refObjs, stateRender) {
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];

      if (obj.objList) {
        obj.objList.forEach(function (obj) {
          createObj(stateRender.canvasNode, obj);
        });
      }
    });
    update(objs, refObjs, stateRender);
  };

  var createOne = function createOne(obj, refObjs, stateRender) {
    obj.objList.forEach(function (obj) {
      createObj(stateRender.canvasNode, obj);
      if (obj.id === 'shipBurst') stateRender.burstNode = document.getElementById(obj.id);
    });
    updateObj(obj.objList[0], refObjs, stateRender);
  };

  var updateOne = function updateOne(obj, refObjs, stateRender, ship1) {
    updateObj(obj.objList[0], refObjs, stateRender, ship1);
  };

  var updateTrail = function updateTrail(obj, refObj, stateRender, ship1, stateShip1) {
    obj.objList[6].render.display = stateShip1.trail.display;
    var points = stateShip1.trail.points;
    var shipDec = obj.objList[0].position.dec;
    var trim = getTrim(stateRender.zoom, refObj, stateRender.refId, stateRender.canvasNode, shipDec);
    var newPoints = '';

    for (var i = 0; i < points.length; i += 2) {
      var cart = helpCalc.fromPolar({
        r: points[i],
        dec: points[i + 1]
      });
      var x = stateRender.viewCenter.x + trim.x + cart.x / stateRender.zoom;
      var y = stateRender.viewCenter.y + trim.y - cart.y / stateRender.zoom;
      newPoints += x + ',' + y + ' ';
    }

    obj.objList[6].render.points = newPoints;
    updateObj(obj.objList[6], refObj, stateRender, ship1);
  };

  var update = function update(objs, refObj, stateRender, ship1) {
    // xxx
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];
      obj.objList.forEach(function (obj) {
        updateObj(obj, refObj, stateRender, ship1);
      });
    });
  };

  var setRef = function setRef(ref) {
    return ref === 'earth' ? 'moon' : 'earth';
  };

  function createObj(canvasNode, obj) {
    var parentNode;
    var svgns = 'http://www.w3.org/2000/svg';
    var newNode = document.createElementNS(svgns, obj.render.format); // Core attibutes

    if (obj.id) newNode.setAttributeNS(null, 'id', obj.id); // Element attibutes

    if (obj.render.stdDeviation) newNode.setAttributeNS(null, 'stdDeviation', obj.render.stdDeviation);
    if (obj.render.clipPath) newNode.setAttributeNS(null, 'clip-path', obj.render.clipPath);
    if (obj.render.filter) newNode.setAttributeNS(null, 'filter', obj.render.filter);
    if (obj.render.points) newNode.setAttributeNS(null, 'points', obj.render.points);
    if (obj.render.x || obj.render.x === 0) newNode.setAttributeNS(null, 'x', obj.render.x);
    if (obj.render.y || obj.render.y === 0) newNode.setAttributeNS(null, 'y', obj.render.y);
    if (obj.render.width || obj.render.width === 0) newNode.setAttributeNS(null, 'width', obj.render.width);
    if (obj.render.height || obj.render.height === 0) newNode.setAttributeNS(null, 'height', obj.render.height);
    if (obj.render.cx) newNode.setAttributeNS(null, 'cx', obj.render.cx);
    if (obj.render.cy) newNode.setAttributeNS(null, 'cy', obj.render.cy);
    if (obj.render.rx) newNode.setAttributeNS(null, 'rx', obj.render.rx);
    if (obj.render.ry) newNode.setAttributeNS(null, 'ry', obj.render.ry); // y, y, width and height may be updated in updateObj(), transform will
    //Presentation attibutes

    if (obj.render.display) newNode.setAttributeNS(null, 'display', obj.render.display);
    if (obj.render.color) newNode.setAttributeNS(null, 'fill', obj.render.color);
    if (obj.render.stroke) newNode.setAttributeNS(null, 'stroke', obj.render.stroke);
    if (obj.render.strokeDasharray) newNode.setAttributeNS(null, 'stroke-dasharray', obj.render.strokeDasharray); // display may be updated in updateObj()

    if (obj.render.parentId) {
      parentNode = document.getElementById(obj.render.parentId);
    } else {
      var canvasSvgNode = getSvgCanvasNode(canvasNode);
      canvasNode.appendChild(canvasSvgNode);
      parentNode = canvasSvgNode;
    }

    parentNode.appendChild(newNode); //if (obj.id === 'shipBurst') burstNode = newNode;
  }

  function updateObj(obj, refObj, stateRender, ship1) {
    var node = document.getElementById(obj.id);
    var viewCenter = stateRender.viewCenter;
    var shipDec = ship1 ? ship1.position.dec : 0; // create con't call with ship1

    var cart = helpCalc.fromPolar({
      r: obj.position ? obj.position.r : null,
      dec: obj.position ? obj.position.dec : null
    });
    var zoom = stateRender.zoom;
    var trim = getTrim(zoom, refObj, stateRender.refId, stateRender.canvasNode, shipDec);
    var svgTag = obj.render.format;

    if (svgTag === 'circle') {
      node.setAttributeNS(null, 'cx', viewCenter.x + trim.x + cart.x / zoom);
      node.setAttributeNS(null, 'cy', viewCenter.y + trim.y - cart.y / zoom);
      node.setAttributeNS(null, 'r', Math.max(2, obj.r / zoom));
    } else if (svgTag === 'rect') {
      var widthPx = Math.max(2, obj.width / zoom);
      var heightPx = Math.max(2, obj.height / zoom);
      node.setAttributeNS(null, 'x', viewCenter.x + trim.x - cart.x / zoom - widthPx / 2);
      node.setAttributeNS(null, 'y', viewCenter.y + trim.y - cart.y / zoom);
      node.setAttributeNS(null, 'width', widthPx);
      node.setAttributeNS(null, 'height', heightPx);
    } else if (obj.id === 'ship1Trail') {
      node.setAttributeNS(null, 'display', obj.render.display ? 'block' : 'none');
      node.setAttributeNS(null, 'points', obj.render.points);
    } else if (obj.id === 'ship1') {
      var x = viewCenter.x + trim.x + cart.x / zoom - 5;
      var y = viewCenter.y + trim.y - cart.y / zoom - 10;
      var pitch = obj.position.pitchDec;
      var transform = "translate(".concat(x, ",").concat(y, ") rotate(").concat(pitch, ",5,5)");
      var visibility = obj.position.burst.a > 0 ? 'visible' : 'hidden';
      node.setAttributeNS(null, 'transform', transform);
      if (stateRender.burstNode) stateRender.burstNode.setAttributeNS(null, 'visibility', visibility);
    }
  }

  function getSvgCanvasNode(canvasNode) {
    var canvasSvgNode;

    for (var i = 0; i < canvasNode.children.length; i++) {
      if (canvasNode.children[i].id === 'canvasSvg') canvasSvgNode = canvasNode.children[i];
    }

    if (!canvasSvgNode) {
      var svgns = 'http://www.w3.org/2000/svg';
      canvasSvgNode = document.createElementNS(svgns, 'svg');
      canvasSvgNode.setAttributeNS(null, 'id', 'canvasSvg');
      canvasSvgNode.setAttributeNS(null, 'width', '100%');
      canvasSvgNode.setAttributeNS(null, 'height', '100%');
    }

    return canvasSvgNode;
  }

  function getViewCenter(canvasNode) {
    return {
      y: canvasNode.offsetHeight / 2,
      x: canvasNode.offsetWidth / 2
    };
  }

  function getTrim(zoom, refObj, refId, canvasNode, shipDec) {
    var refCar = helpCalc.fromPolar({
      r: refObj.position.r,
      dec: refObj.position.dec
    });
    var canvasMinSize = Math.min(canvasNode.offsetWidth, canvasNode.offsetHeight) * zoom;
    var refObjWidth = refObj.r * 2;
    var trim;
    var ratio = refObjWidth / canvasMinSize;
    var closeMinRatio = refId === 'moon' ? 1 : 5;

    if (ratio > closeMinRatio) {
      // close, surface on botton
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObj.r / zoom + 200
      };
    } else if (ratio < 1) {
      // distant, center
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom
      };
    } else {
      trim = {
        // intermediate
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObj.r / zoom + 20
      };
      if (shipDec > 45 && shipDec <= 135) trim = {
        x: -trim.y,
        y: -trim.x
      }; // right
      else if (shipDec > 135 && shipDec <= 225) trim = {
          x: trim.x,
          y: -trim.y
        }; // bottom
        else if (shipDec > 225 && shipDec <= 325) trim = {
            x: trim.y,
            y: trim.x
          }; // left
    }

    return trim;
  }

  return {
    create: create,
    createOne: createOne,
    init: init,
    setRef: setRef,
    update: update,
    updateOne: updateOne,
    updateTrail: updateTrail
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderSvg);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ship1 = function ship1(helpCalc) {
  var mainId = 'ship1';

  var init = function init(initState) {
    initState.ship1 = {
      trail: {
        maxLenght: 900,
        points: [],
        display: true
      }
    };
  };

  var objList = [{
    id: 'ship1',
    panel: {
      gEarth: 9.8,
      gMoon: 0,
      altEarth: 0,
      altMoon: 0,
      headEarth: 0,
      headMoon: 0
    },
    position: {
      r: 6378100,
      // 0, // distance (m), (384000000 ** 2 + 1738000 ** 2) ** .5 for moon
      dec: 0,
      // d0eclination (deg), 90 - Math.atan(1738000 / 384000000) * (180 / Math.PI) for moon
      vR: 0,
      // v speed (m/s), 280 for moon
      vDec: 0,
      // heading, or v declination (deg), 180 for moon
      pitchDec: 0,
      // attitude pitch (deg)
      burst: {
        a: 0,
        // current burst acceleration (m/s2)
        aNext: Math.round(4 * 9.80665),
        // selected acceleration for next burst (m/s2)
        t: 0,
        // current burst remaining time (s)
        tNext: 4 // selected time for next burst (s)

      },
      crashed: false
    },
    render: {
      format: 'g',
      transform: 'translate(200,200) rotate(0)'
    }
  }, {
    id: 'shipblur',
    render: {
      parentId: 'ship1',
      format: 'filter'
    }
  }, {
    render: {
      parentId: 'shipblur',
      format: 'feGaussianBlur',
      stdDeviation: "1.5"
    }
  }, {
    id: 'shipcrop',
    render: {
      parentId: 'ship1',
      format: 'clipPath'
    }
  }, {
    render: {
      parentId: 'shipcrop',
      format: 'rect',
      x: 0,
      y: 8,
      width: 10,
      height: 17
    }
  }, {
    id: 'shipBurst',
    render: {
      parentId: 'ship1',
      format: 'ellipse',
      cx: 5,
      cy: 23,
      rx: 5,
      ry: '12',
      color: 'red',
      clipPath: 'url(#shipcrop)',
      filter: 'url(#shipblur)',
      visibility: 'hidden' // or 'visible'

    }
  }, {
    id: 'ship1Trail',
    render: {
      format: 'polyline',
      points: '0,0 0,1',
      color: 'none',
      stroke: 'white',
      display: true
    }
  }, {
    render: {
      parentId: 'ship1',
      format: 'polygon',
      points: '5,0 10,10 5,7.5 0,10',
      color: 'white'
    }
  }];

  var burstUpdate = function burstUpdate(secondSkip, timeSpeed) {
    objList[0].position.burst.t -= secondSkip * timeSpeed;

    if (objList[0].position.burst.t <= 0) {
      objList[0].position.burst.t = 0;
      objList[0].position.burst.a = 0;
    }
  };

  var addPitch = function addPitch(add) {
    var pitch = helpCalc.toDeg360(objList[0].position.pitchDec + add);
    objList[0].position.pitchDec = pitch;
  };

  var addBurstTNext = function addBurstTNext(add) {
    objList[0].position.burst.tNext = Math.max(objList[0].position.burst.tNext + add, 0);
  };

  var setBurstANext = function setBurstANext(gNext) {
    if (gNext <= 9) objList[0].position.burst.aNext = Math.round(gNext * 9.8 * 100) / 100;
  };

  var burstStart = function burstStart() {
    objList[0].position.burst.a = objList[0].position.burst.aNext;
    objList[0].position.burst.t = objList[0].position.burst.tNext;
  };

  var showTrail = function showTrail(shipState) {
    shipState.trail.display = !shipState.trail.display;
  };

  return {
    init: init,
    mainId: mainId,
    addBurstTNext: addBurstTNext,
    addPitch: addPitch,
    burstStart: burstStart,
    burstUpdate: burstUpdate,
    objList: objList,
    setBurstANext: setBurstANext,
    showTrail: showTrail
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ship1);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VhcnRoLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwQ2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiXSwibmFtZXMiOlsiZWFydGgiLCJtYWluSWQiLCJvYmpMaXN0IiwiaWQiLCJyZW5kZXJUeXBlIiwiciIsInBvc2l0aW9uIiwiZGVjIiwicmVuZGVyIiwiZm9ybWF0IiwiY29sb3IiLCJtYXNzIiwiZyIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVscENhbGMiLCJ0b1BvbGFyIiwiY2FydCIsIk1hdGgiLCJhdGFuMiIsIngiLCJ5IiwiUEkiLCJmcm9tUG9sYXIiLCJwb2xhciIsInNpbiIsImNvcyIsInJvdW5kTSIsInZhbCIsInJvdW5kIiwiZGlzdFBvbCIsIm9iajFQb2wiLCJvYmoyUG9sIiwib2JqMUNhciIsIm9iajJDYXIiLCJkaXN0Iiwic3FydCIsImFicyIsImF0YW4iLCJkZXYiLCJhZGRQb2wiLCJ0b0RlZzM2MCIsImRlZyIsInJldCIsImdldFZPYmoiLCJvYmoiLCJ2RGVjIiwidG9EZWcxODAiLCJkb2N1bWVudCIsIm9uTG9hZCIsImxvYWRBcHAiLCJhcHAiLCJkZXBzIiwic3RhdGUiLCJwbGF5IiwidGltZXJTdGFydCIsInRpbWVyU2tpcCIsInRpbWVyIiwidGltZVNwZWVkIiwidGltZVNraXAiLCJ0aW1lIiwic2hpcDEiLCJvYmpzIiwiaGVscENhbGMiLCJtb3ZlIiwic2hpcDFEYXRhIiwicGFuZWwiLCJnZXRQYW5lbCIsInJlZk9ianMiLCJtb29uIiwiaW5pdCIsImNyZWF0ZSIsImdldFJlZk9iaiIsImNyZWF0ZU9uZSIsIm9uY2xpY2siLCJ2ZXJpZnlDbGljayIsIm9ua2V5ZG93biIsInZlcmlmeUtleSIsIkRhdGUiLCJub3ciLCJsb29wIiwic2V0VGltZW91dCIsImNyYXNoIiwibW9kYWxPcGVuIiwiY2hlY2tUaW1lT3V0IiwiYnVyc3RVcGRhdGUiLCJtb3ZlT25lIiwicmVuZGVyVXBkYXRlIiwidXBkYXRlIiwidGltZXJOZXh0IiwiZmxvb3IiLCJ1cGRhdGVPbmUiLCJ1cGRhdGVUcmFpbCIsImUiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInJlYWxMaW5rIiwiaHJlZiIsImFjdGlvbiIsInJlcGxhY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlYXJjaCIsImluY2x1ZGVzIiwic3Vic3RyaW5nIiwicHJldmVudERlZmF1bHQiLCJwbGF5U3RvcCIsInpvb21NdWx0aXBseSIsInRpbWVNdWx0aXBseSIsIm1vZGFsQ2xvc2UiLCJrZXlDb2RlIiwiY29kZSIsImFkZFBpdGNoIiwiYWRkQnVyc3RUTmV4dCIsInNob3dUcmFpbCIsInJlZklkIiwic2V0UmVmIiwic2V0QnVyc3RBTmV4dCIsImJ1cnN0U3RhcnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidGltZXMiLCJ6b29tIiwibWF4IiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lclRleHQiLCJtc2ciLCJyZW5kZXJTdmciLCJpc3MiLCJ2UiIsIm1vdmVTdmciLCJkYXRhIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJqIiwibmV3RGF0YSIsInNlY29uZFNraXAiLCJnT2JqcyIsImFQb2xhciIsImJ1cnN0IiwiYSIsInBpdGNoRGVjIiwidlBvbGFyIiwicG9zUG9sYXIiLCJwb3NEZWNPbGQiLCJhbHRFYXJ0aCIsImdQb2xhciIsImdldExvY2FsRyIsImFsdE1vb24iLCJ2TW9vbiIsImFDYXJ0IiwiZ0NhcnQiLCJ2Q2FydCIsInBvc0NhcnQiLCJnUiIsImdEZWMiLCJnRWFydGgiLCJoZWFkRWFydGgiLCJtYXNzMiIsInBvc1BvbFNoaXAiLCJwb3NQb2xDZW50ZXIiLCJkaXN0MiIsImdSMiIsImdEZWMyIiwiZ01vb24iLCJoZWFkTW9vbiIsImdQb2wiLCJtYXhMZW5naHQiLCJ0cmFpbCIsInBvaW50cyIsInB1c2giLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwiYWx0IiwidW5pdCIsInRvTG9jYWxlU3RyaW5nIiwibG9uZyIsImZvcm1hdExvbmciLCJwaXRjaCIsImZvcm1hdERlZyIsImNsaW1iIiwidk9yYml0IiwidiIsImdMb2NhbCIsInRvRml4ZWQiLCJzcGVlZCIsImJ1cnN0QSIsImFOZXh0IiwiYnVyc3RUIiwidCIsInROZXh0Iiwic2NhbGUiLCJmb3JtYXRNa20iLCJkMCIsImQiLCJzZXRTZWNvbmRzIiwiZGF5cyIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIxMiIsImhlYWQiLCJmb3JtYXRLTSIsInRpbWVQbGF5IiwicmVmIiwia2V5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0eHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW4iLCJpbml0U3RhdGUiLCJjYW52YXNOb2RlIiwidmlld0NlbnRlciIsImdldFZpZXdDZW50ZXIiLCJzdGF0ZVJlbmRlciIsImNyZWF0ZU9iaiIsImJ1cnN0Tm9kZSIsInVwZGF0ZU9iaiIsInJlZk9iaiIsInN0YXRlU2hpcDEiLCJkaXNwbGF5Iiwic2hpcERlYyIsInRyaW0iLCJnZXRUcmltIiwibmV3UG9pbnRzIiwicGFyZW50Tm9kZSIsInN2Z25zIiwibmV3Tm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwic3RkRGV2aWF0aW9uIiwiY2xpcFBhdGgiLCJmaWx0ZXIiLCJjeCIsImN5IiwicngiLCJyeSIsInN0cm9rZSIsInN0cm9rZURhc2hhcnJheSIsInBhcmVudElkIiwiY2FudmFzU3ZnTm9kZSIsImdldFN2Z0NhbnZhc05vZGUiLCJhcHBlbmRDaGlsZCIsIm5vZGUiLCJzdmdUYWciLCJ3aWR0aFB4IiwiaGVpZ2h0UHgiLCJ0cmFuc2Zvcm0iLCJ2aXNpYmlsaXR5IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInJlZkNhciIsImNhbnZhc01pblNpemUiLCJyZWZPYmpXaWR0aCIsInJhdGlvIiwiY2xvc2VNaW5SYXRpbyIsImNyYXNoZWQiLCJnTmV4dCIsInNoaXBTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQUlBLEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsT0FERTtBQUVWQyxTQUFPLEVBQUUsQ0FDVDtBQUNDQyxNQUFFLEVBQUUsVUFETDtBQUVDQyxjQUFVLEVBQUUsS0FGYjtBQUdDQyxLQUFDLEVBQUUsVUFBVSxPQUhkO0FBSUNDLFlBQVEsRUFBRTtBQUNURCxPQUFDLEVBQUUsQ0FETTtBQUVURSxTQUFHLEVBQUU7QUFGSSxL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akIsR0FGRDs7QUFJQSxNQUFJbkosVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQnJILFdBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQjJJLEtBQXBCLENBQTBCQyxDQUExQixHQUE4QmhKLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQjJJLEtBQXBCLENBQTBCa0QsS0FBeEQ7QUFDQWpNLFdBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQjJJLEtBQXBCLENBQTBCb0QsQ0FBMUIsR0FBOEJuTSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0IySSxLQUFwQixDQUEwQnFELEtBQXhEO0FBQ0QsR0FIRDs7QUFLQSxNQUFJbkYsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3dKLFNBQUQsRUFBZTtBQUM3QkEsYUFBUyxDQUFDN0YsS0FBVixDQUFnQnNELE9BQWhCLEdBQTBCLENBQUN1QyxTQUFTLENBQUM3RixLQUFWLENBQWdCc0QsT0FBM0M7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFDTDlKLFFBQUksRUFBSkEsSUFESztBQUVMckUsVUFBTSxFQUFOQSxNQUZLO0FBR0xpSCxpQkFBYSxFQUFiQSxhQUhLO0FBSUxELFlBQVEsRUFBUkEsUUFKSztBQUtMTSxjQUFVLEVBQVZBLFVBTEs7QUFNTGxDLGVBQVcsRUFBWEEsV0FOSztBQU9MbkYsV0FBTyxFQUFQQSxPQVBLO0FBUUxvSCxpQkFBYSxFQUFiQSxhQVJLO0FBU0xILGFBQVMsRUFBVEE7QUFUSyxHQUFQO0FBV0QsQ0F0SkQ7O0FBd0pldEQsb0VBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZWFydGggPSB7XG4gIG1haW5JZDogJ2VhcnRoJyxcbiAgb2JqTGlzdDogW1xuXHRcdHtcblx0XHRcdGlkOiAnZWFydGhMZW8nLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0XHRyOiA2Mzc4MTAwICsgMTAwMDAwMCxcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDAsXG5cdFx0XHRcdGRlYzogMFxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyMzMDMwMzAnXG5cdFx0XHR9XG5cdFx0fSxcdFxuXHRcdHtcblx0XHRcdGlkOiAnZWFydGhBdG0nLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0XHRyOiA2Mzc4MTAwICsgMTAwMDAwLFxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCxcblx0XHRcdFx0ZGVjOiAwXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnI0FERDhFNidcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiAnZWFydGgnLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG4gICAgICByOiA2Mzc4MTAwLCAvLyBtXG4gICAgICBtYXNzOiA1Ljk4ZTI0LCAvLyBrZ1xuXHRcdFx0ZzogOS44MDY2NSwgLy8gbS9zMlxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICdibHVlJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdiYXNlMScsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDEwMCwgLy8gbSAvIGZvciBub3dcblx0XHRcdHdpZHRoOiAxMDAsIC8vIG1hbmRhdG9yeSAobSlcblx0XHRcdGhlaWdodDogNSwgLy8gbWFuZGF0b3J5IChtKVxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogNjM3ODEwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAncmVjdCcsIC8vIGZvciBub3dcblx0XHRcdFx0Y29sb3I6ICd5ZWxsb3cnXG5cdFx0XHR9XG5cdFx0fVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVhcnRoOyIsInZhciBnZXRIZWxwQ2FsYyA9ICgpID0+IHtcbiAgLy8gZGVjbGFyZWQgYmVjYXVzZSB0aGV5IHVzZSB0aGVtc2VsdmVzIHNvIG5lZWQgaG9pc3RpbmdcblxuICBmdW5jdGlvbiB0b1BvbGFyKGNhcnQpIHtcbiAgICBsZXQgZGVjID0gKE1hdGguYXRhbjIoY2FydC54LCBjYXJ0LnkpIC8gKE1hdGguUEkvMTgwKSkgJSAzNjA7XG4gICAgaWYgKGRlYyA8IDApIGRlYys9IDM2MFxuICAgIHJldHVybiB7XG4gICAgICByOiAoKGNhcnQueCAqKiAyICsgY2FydC55ICoqIDIpICoqIC41KSxcbiAgICAgIGRlYzogZGVjXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZnJvbVBvbGFyKHBvbGFyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBvbGFyLnIgKiBNYXRoLnNpbihwb2xhci5kZWMgKiBNYXRoLlBJLzE4MCksXG4gICAgICB5OiBwb2xhci5yICogTWF0aC5jb3MocG9sYXIuZGVjICogTWF0aC5QSS8xODApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm91bmRNKHZhbCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIDEwMDAwMDAwMDApIC8gMTAwMDAwMDAwMDtcbiAgfVxuXG4gIGNvbnN0IGRpc3RQb2wgPSAob2JqMVBvbCwgb2JqMlBvbCkgPT4ge1xuICAgIGNvbnN0IG9iajFDYXIgPSBmcm9tUG9sYXIob2JqMVBvbCk7XG4gICAgY29uc3Qgb2JqMkNhciA9IGZyb21Qb2xhcihvYmoyUG9sKTtcbiAgICBjb25zdCBkaXN0ID0ge1xuICAgICAgcjogTWF0aC5zcXJ0KE1hdGguYWJzKG9iajJDYXIueCAtIG9iajFDYXIueCkgKiogMiArIE1hdGguYWJzKG9iajJDYXIueSAtIG9iajFDYXIueSkgKiogMiksXG4gICAgICBkZWM6IE1hdGguYXRhbigob2JqMkNhci55IC0gb2JqMUNhci55KSAvIChvYmoyQ2FyLnggLSBvYmoxQ2FyLngpKSAvIChNYXRoLlBJLzE4MClcbiAgICB9XG5cbiAgICBpZiAoZGlzdC5yIDwgMCkge1xuICAgICAgZGlzdCA9IHtcbiAgICAgICAgcjogLWRpc3QucixcbiAgICAgICAgZGV2OiAoMTgwIC0gZGlzdC5kZWMpICUgMzYwXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQb2wob2JqMVBvbCwgb2JqMlBvbCkge1xuXG4gICAgY29uc3Qgb2JqMUNhciA9IGZyb21Qb2xhcihvYmoxUG9sKTtcbiAgICBjb25zdCBvYmoyQ2FyID0gZnJvbVBvbGFyKG9iajJQb2wpO1xuICAgIGNvbnN0IGRpc3QgPSB0b1BvbGFyKHt4OiAob2JqMUNhci54ICsgb2JqMkNhci54KSwgeTogKG9iajFDYXIueSArIG9iajJDYXIueSl9KVxuXG4gICAgcmV0dXJuIGRpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiB0b0RlZzM2MChkZWcpIHtcbiAgICBsZXQgcmV0ID0gZGVnICUgMzYwO1xuICAgIGlmIChyZXQgPCAwKSByZXQgKz0gMzYwXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZPYmoob2JqKSB7XG4gICAgLy8gZm9yIG9ianMgd2l0aCB2RGVjXG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IE1hdGguYXRhbihvYmoucG9zaXRpb24udkRlYyAqIE1hdGguUEkvMTgwKSAqIG9iai5wb3NpdGlvbi5yLFxuICAgICAgZGVjOiB0b0RlZzM2MChvYmoucG9zaXRpb24uZGVjICsgOTApXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRGVnMTgwKGRlZykge1xuICAgIGxldCByZXQgPSBkZWc7XG4gICAgaWYgKHJldCA8IC0xODApIHJldCA9IDM2MCArIHJldDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tUG9sYXIsXG4gICAgdG9Qb2xhcixcbiAgICBkaXN0UG9sLFxuICAgIHJvdW5kTSxcbiAgICBhZGRQb2wsXG4gICAgdG9EZWczNjAsXG4gICAgdG9EZWcxODAsXG4gICAgZ2V0Vk9ialxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SGVscENhbGM7IiwiaW1wb3J0IHJlbmRlclN2ZyBmcm9tICcuL3JlbmRlci1zdmcnO1xuaW1wb3J0IG1vdmUgZnJvbSAnLi9tb3ZlJztcbmltcG9ydCBnZXRQYW5lbCBmcm9tICcuL3BhbmVsJztcbmltcG9ydCBlYXJ0aCBmcm9tICcuL2VhcnRoJztcbmltcG9ydCBtb29uIGZyb20gJy4vbW9vbic7XG5pbXBvcnQgaXNzIGZyb20gJy4vaXNzJztcbmltcG9ydCBzaGlwMSBmcm9tICcuL3NoaXAnO1xuXG5pbXBvcnQgZ2V0SGVscENhbGMgZnJvbSAnLi9oZWxwQ2FsYyc7XG5cbmRvY3VtZW50Lm9uTG9hZCA9IGxvYWRBcHA7XG5cbnZhciBhcHAgPSBmdW5jdGlvbihkZXBzKXtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgd2lkdGg6IDQwMDAsIC8vIChtKVxuICAgIHBsYXk6IHRydWUsXG4gICAgdGltZXJTdGFydDogMCxcbiAgICB0aW1lclNraXA6IDAsXG4gICAgdGltZXI6IDAsXG4gICAgdGltZVNwZWVkOiAxLCAvLyAqIG4gbWVhbnMgbiB0aW1lcyBmYXN0ZXJcbiAgICB0aW1lU2tpcDogMC4xLCAvLyBlYWNoIHRpbWUgbG9vcCB0aW1taW5nIChzKVxuICAgIHRpbWU6IDAsIC8vIHRpbWUgcGFzc2VkIChzKVxuICAgIHNoaXAxOiBudWxsLFxuICAgIHJlbmRlcjogbnVsbFxuICB9XG5cbiAgdmFyIG9ianMgPSBkZXBzLm9ianM7XG4gIHZhciBoZWxwQ2FsYyA9IGRlcHMuZ2V0SGVscENhbGMoKVxuICB2YXIgbW92ZSA9IGRlcHMubW92ZShoZWxwQ2FsYyk7XG4gIHZhciByZW5kZXIgPSBkZXBzLnJlbmRlcihoZWxwQ2FsYyk7XG4gIHZhciBzaGlwMURhdGEgPSBkZXBzLnNoaXAxKGhlbHBDYWxjKTtcbiAgdmFyIHNoaXAxID0gc2hpcDFEYXRhLm9iakxpc3RbMF07XG4gIHZhciBwYW5lbCA9IGRlcHMuZ2V0UGFuZWwoaGVscENhbGMsIHN0YXRlLCBzaGlwMSk7XG5cbiAgdmFyIHJlZk9ianMgPSB7ZWFydGg6IG9ianMuZWFydGgub2JqTGlzdFsyXSwgbW9vbjogb2Jqcy5tb29uLm9iakxpc3RbMF19XG4gIHJlbmRlci5pbml0KHN0YXRlLCByZWZPYmpzKTtcbiAgc2hpcDFEYXRhLmluaXQoc3RhdGUpO1xuICBtb3ZlLmluaXQob2Jqcyk7XG5cbiAgcmVuZGVyLmNyZWF0ZShvYmpzLCBnZXRSZWZPYmooKSwgc3RhdGUucmVuZGVyKTtcbiAgcmVuZGVyLmNyZWF0ZU9uZShzaGlwMURhdGEsIGdldFJlZk9iaigpLCBzdGF0ZS5yZW5kZXIpO1xuXG4gIGRvY3VtZW50Lm9uY2xpY2sgPSB2ZXJpZnlDbGljaztcbiAgZG9jdW1lbnQub25rZXlkb3duID0gdmVyaWZ5S2V5O1xuXG4gIHN0YXRlLnRpbWVyU3RhcnQgPSBEYXRlLm5vdygpO1xuICBsb29wKCk7XG5cbiAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgLy8gc3RhcnRzIHVwZGF0aW5nIHRpbWUgYmVjYXVzZSB0cmFja3MgaG93IGxvbmcgdGhpcyBsb29wIHRha2VzXG4gICAgICBzdGF0ZS50aW1lICs9IChzdGF0ZS50aW1lU2tpcCAqIHN0YXRlLnRpbWVTcGVlZCk7XG5cbiAgICAgIC8vIGdhbWUgb3ZlclxuICAgICAgaWYgKHNoaXAxLnBvc2l0aW9uLmNyYXNoKSBtb2RhbE9wZW4oJ3NoaXAgY3Jhc2hlZC4gUmVsb2FkIGdhbWUuJyk7XG4gICAgICBpZiAoc2hpcDEucG9zaXRpb24uY3Jhc2ggfHwgIXN0YXRlLnBsYXkgfHwgY2hlY2tUaW1lT3V0KCkpIHJldHVybjtcblxuICAgICAgLy8gbW92ZSBhbmQgcmVuZGVyXG4gICAgICBtb3ZlLm1vdmUoc3RhdGUudGltZVNraXAsIHN0YXRlLnRpbWVTcGVlZCk7XG4gICAgICBzaGlwMURhdGEuYnVyc3RVcGRhdGUoc3RhdGUudGltZVNraXAsIHN0YXRlLnRpbWVTcGVlZCk7XG4gICAgICBtb3ZlLm1vdmVPbmUoc2hpcDEsIHN0YXRlLnRpbWVTa2lwLCBzdGF0ZS50aW1lU3BlZWQsIFtvYmpzLmVhcnRoLm9iakxpc3RbMl0sb2Jqcy5tb29uLm9iakxpc3RbMF1dLCBzdGF0ZSk7XG4gICAgICByZW5kZXJVcGRhdGUoKTtcbiAgICAgIHBhbmVsLnVwZGF0ZSgpO1xuXG4gICAgICAvLyBza2lwIGZvciBuZXh0IHJlZ3VsYXIgbG9vcFxuICAgICAgc3RhdGUudGltZXIgPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXJTdGFydDtcbiAgICAgIHZhciB0aW1lck5leHQgPSBNYXRoLmZsb29yKChzdGF0ZS50aW1lciArIDEwMDAgKiBzdGF0ZS50aW1lU2tpcCkgLyAxMDApICogMTAwO1xuICAgICAgc3RhdGUudGltZXJTa2lwID0gdGltZXJOZXh0IC0gc3RhdGUudGltZXI7XG5cbiAgICAgIGxvb3AoKTtcbiAgICB9LCBzdGF0ZS50aW1lclNraXApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVXBkYXRlKCkge1xuICAgIHJlbmRlci51cGRhdGUob2JqcywgZ2V0UmVmT2JqKCksIHN0YXRlLnJlbmRlciwgc2hpcDEpO1xuICAgIHJlbmRlci51cGRhdGVPbmUoc2hpcDFEYXRhLCBnZXRSZWZPYmooKSwgc3RhdGUucmVuZGVyLCBzaGlwMSk7XG4gICAgcmVuZGVyLnVwZGF0ZVRyYWlsKHNoaXAxRGF0YSwgZ2V0UmVmT2JqKCksIHN0YXRlLnJlbmRlciwgc2hpcDEsIHN0YXRlLnNoaXAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVGltZU91dCgpIHtcbiAgICBpZiAoKHN0YXRlLnRpbWUvKDYwICogNjAgKiAyNCkpID4gMzY1KSB7XG4gICAgICBtb2RhbE9wZW4oJ0V4YXVzdGVkIGZ1ZWwgYWZ0ZXIgMSB5ZWFyIG9mIGZsaWdodC4gUmVsb2FkIGdhbWUuJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5Q2xpY2soZSkge1xuICAgIGlmKGUudGFyZ2V0Lm5vZGVOYW1lID09ICdBJykge1xuICAgICAgdmFyIHJlYWxMaW5rID0gZS50YXJnZXQuaHJlZlxuICAgICAgdmFyIGFjdGlvbiA9IHJlYWxMaW5rXG4gICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy8jLycsICcnKVxuICAgICAgICAucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLCAnJyk7XG5cbiAgICAgIGlmICghWydmaWxlOicsJ2h0dHA6J10uaW5jbHVkZXMoYWN0aW9uLnN1YnN0cmluZygwLDUpKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RpbWVQbGF5JykgcGxheVN0b3AoKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnem9vbU1pbnVzJykgem9vbU11bHRpcGx5KDIpO1xuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICd6b29tUGx1cycpIHpvb21NdWx0aXBseSguNSk7XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3RpbWVQbHVzJykgdGltZU11bHRpcGx5KDIpO1xuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICd0aW1lTWludXMnKSB0aW1lTXVsdGlwbHkoLjUpO1xuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICdtb2RhbENsb3NlJykgbW9kYWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZlcmlmeUtleShlKSB7XG4gICAgdmFyIGtleUNvZGUgPSBlLmNvZGU7XG4gICAgaWYgKGtleUNvZGUgPT09ICdLZXlQJykgcGxheVN0b3AoKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnQXJyb3dVcCcpIHNoaXAxRGF0YS5hZGRQaXRjaCgxMCk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0Fycm93RG93bicpIHNoaXAxRGF0YS5hZGRQaXRjaCgtMTApO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdLZXlBJykgc2hpcDFEYXRhLmFkZEJ1cnN0VE5leHQoMSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0tleVonKSBzaGlwMURhdGEuYWRkQnVyc3RUTmV4dCgtMSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ01pbnVzJykgem9vbU11bHRpcGx5KDIpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdFcXVhbCcpIHpvb21NdWx0aXBseSguNSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ1BlcmlvZCcpIHRpbWVNdWx0aXBseSgyKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnQ29tbWEnKSB0aW1lTXVsdGlwbHkoLjUpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdLZXlUJykgc2hpcDFEYXRhLnNob3dUcmFpbChzdGF0ZS5zaGlwMSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0tleVYnKSBzdGF0ZS5yZW5kZXIucmVmSWQgPSByZW5kZXIuc2V0UmVmKHN0YXRlLnJlbmRlci5yZWZJZCk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZS5zdWJzdHJpbmcoMCw1KSA9PT0gJ0RpZ2l0Jykge1xuICAgICAgc2hpcDFEYXRhLnNldEJ1cnN0QU5leHQoa2V5Q29kZS5yZXBsYWNlKCdEaWdpdCcsICcnKSlcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5wbGF5KSByZXR1cm47XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgc2hpcDFEYXRhLmJ1cnN0U3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZWZPYmooKSB7XG4gICAgcmV0dXJuIHN0YXRlLnJlbmRlci5yZWZPYmpzW3N0YXRlLnJlbmRlci5yZWZJZF07XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5U3RvcCgpIHtcbiAgICBzdGF0ZS5wbGF5ID0gIXN0YXRlLnBsYXk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5zdHlsZS5jb2xvciA9IHN0YXRlLnBsYXkgPyAnd2hpdGUnIDogJ3JlZCc7XG4gICAgcGFuZWwudXBkYXRlKCd0aW1lUGxheScpO1xuICAgIGlmIChzdGF0ZS5wbGF5KSBsb29wKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTXVsdGlwbHkodGltZXMpIHtcbiAgICBzdGF0ZS5yZW5kZXIuem9vbSAqPSB0aW1lcztcbiAgICBzdGF0ZS5yZW5kZXIuem9vbSA9IE1hdGgubWF4KHN0YXRlLnJlbmRlci56b29tLCAxKTtcbiAgICBpZiAoIXN0YXRlLnBsYXkpIHJlbmRlclVwZGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZU11bHRpcGx5KHRpbWVzKSB7XG4gICAgdmFyIHRpbWVTcGVlZCA9IHN0YXRlLnRpbWVTcGVlZCAqIHRpbWVzO1xuICAgIGlmICh0aW1lU3BlZWQgPCAxKSB0aW1lU3BlZWQgPSAxO1xuICAgIGlmICh0aW1lU3BlZWQgPiAyMDAwKSB0aW1lU3BlZWQgPSAyMDAwO1xuICAgIHN0YXRlLnRpbWVTcGVlZCA9IHBhcnNlSW50KHRpbWVTcGVlZCk7XG4gICAgcGFuZWwudXBkYXRlKCd0aW1lU3BlZWQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsQ2xvc2UoKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKCdtb2RhbE9wZW4nKTtcbiAgICBjbGFzc0xpc3QuYWRkKCdtb2RhbENsb3NlZCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGNvbnRlbnQnKS5pbm5lclRleHQgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsT3Blbihtc2cpIHtcbiAgICB2YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsQ2xvc2VkJylcbiAgICBjbGFzc0xpc3QuYWRkKCdtb2RhbE9wZW4nKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxjb250ZW50JykuaW5uZXJUZXh0ID0gbXNnXG4gIH1cbn1cblxudmFyIGxvYWRBcHAgPSAoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGRlcHMgPSB7XG4gICAgcmVuZGVyOiByZW5kZXJTdmcsXG4gICAgbW92ZTogbW92ZSxcbiAgICBzaGlwMTogc2hpcDEsXG4gICAgZ2V0UGFuZWw6IGdldFBhbmVsLFxuICAgIG9ianM6IHtcbiAgICAgIGVhcnRoOiBlYXJ0aCxcbiAgICAgIG1vb246IG1vb24sXG4gICAgICBpc3M6IGlzcyxcbiAgICB9LFxuICAgIGdldEhlbHBDYWxjOiBnZXRIZWxwQ2FsY1xuICB9XG5cbiAgYXBwKGRlcHMpO1xufSkoKVxuXG4iLCJ2YXIgaXNzID0ge1xuXHRtYWluSWQ6ICdpc3MnLFxuXHRvYmpMaXN0OiBbXG5cdFx0e1xuXHRcdFx0aWQ6ICdpc3MnLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0XHRyOiAxMDAsIC8vIG1cblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDYzNzgxMDAgKyAzMDkwMDAsIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyIChtKVxuXHRcdFx0XHRkZWM6IDAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0XHR2UjogMCxcblx0XHRcdFx0dkRlYzogMzYwIC8gKDkyLjY4ICogNjAwKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyNkOWQ5ZDknXG5cdFx0XHR9XG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzczsiLCJ2YXIgbW9vbiA9IHtcblx0bWFpbklkOiAnbW9vbicsXG5cdG9iakxpc3Q6IFtcblx0XHR7XG5cdFx0XHRpZDogJ21vb24nLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG4gICAgICByOiAxNzM4MDAwLCAvLyBtXG4gICAgICBtYXNzOiA3LjM0NzY3ZTIyLCAvLyBrZ1xuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMzg0MDAwMDAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHRcdFx0ZGVjOiA5MCwgLy8gZGVjbGluYXRpb24gKGRlZyksIGNvdWxkIGJlIGFueSB2YWx1ZSBiZWNhdXNlIHIgPSAwXG5cdFx0XHRcdHZSOiAwLFxuXHRcdFx0XHR2RGVjOiAxLjUyNTAyZS01IC8vIDM2MCBkZWcgZWFjaCAyNy4zMjIgZGF5c1xuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyNGNUYzQ0UnXG5cdFx0XHR9XG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vb247IiwibGV0IG1vdmVTdmcgPSAoaGVscENhbGMpID0+IHtcblxuICBsZXQgZGF0YSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXQob2Jqcykge1xuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmpMaXN0ID0gb2Jqc1trZXlzW2ldXS5vYmpMaXN0O1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmpMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvYmogPSBvYmpMaXN0W2pdO1xuICAgICAgICBpZiAob2JqLnBvc2l0aW9uLnZSIHx8IG9iai5wb3NpdGlvbi52RGVjKSB7IC8vIHdpbGwgbW92ZVxuICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBvYmoucG9zaXRpb247XG4gICAgICAgICAgbmV3RGF0YS5pZCA9IG9iai5pZDtcbiAgICAgICAgICBkYXRhID0gWy4uLmRhdGEsIG5ld0RhdGFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbW92ZSA9IChzZWNvbmRTa2lwLCB0aW1lU3BlZWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IGRhdGFbaV07XG4gICAgICBwb3NpdGlvbi5yICs9IHBvc2l0aW9uLnZSICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICAgIHBvc2l0aW9uLmRlYyArPSBwb3NpdGlvbi52RGVjICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3ZlT25lID0gKG9iaiwgc2Vjb25kU2tpcCwgdGltZVNwZWVkLCBnT2Jqcywgc3RhdGUpID0+IHtcblxuICAgIHZhciBhUG9sYXIgPSB7cjogb2JqLnBvc2l0aW9uLmJ1cnN0LmEsIGRlYzogb2JqLnBvc2l0aW9uLnBpdGNoRGVjfTtcbiAgICB2YXIgdlBvbGFyID0ge3I6IG9iai5wb3NpdGlvbi52UiwgZGVjOiBvYmoucG9zaXRpb24udkRlY307XG4gICAgdmFyIHBvc1BvbGFyID0ge3I6IG9iai5wb3NpdGlvbi5yLCBkZWM6IG9iai5wb3NpdGlvbi5kZWN9O1xuICAgIHZhciBwb3NEZWNPbGQgPSBwb3NQb2xhci5kZWM7XG5cbiAgICB2YXIgYWx0RWFydGggPSBwb3NQb2xhci5yIC0gZ09ianNbMF0ucjtcbiAgICB2YXIgZ1BvbGFyID0gZ2V0TG9jYWxHKG9iaiwgZ09ianMpO1xuICAgIHZhciBhbHRNb29uID0gb2JqLnBhbmVsLmFsdE1vb247XG4gICAgaWYgKGFsdEVhcnRoIDw9IDAgfHwgYWx0TW9vbiA8PSAwKSBnUG9sYXIgPSB7cjogMCwgZGVjOiAwfTtcblxuICAgIC8vIElmIGxhbmRpbmdcbiAgICBpZiAoYWx0RWFydGggPCAwICYmIHZQb2xhci5yICE9PSAwKSB7ICBcbiAgICAgIG9iai5wb3NpdGlvbi52UiA9IDA7XG4gICAgICBvYmoucG9zaXRpb24uciA9IGdPYmpzWzBdLnI7XG4gICAgICBpZiAodlBvbGFyLnIgPiAoNTAgLyAzLjYpKSBvYmoucG9zaXRpb24uY3Jhc2ggPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYWx0TW9vbiA8IDAgJiYgdlBvbGFyLnIgIT09IDApIHtcbiAgICAgIGxldCB2TW9vbiA9IGhlbHBDYWxjLmdldFZPYmooZ09ianNbMV0pO1xuICAgICAgb2JqLnBvc2l0aW9uLnZSID0gdk1vb24ucjtcbiAgICAgIG9iai5wb3NpdGlvbi52RGVjID0gdk1vb24uZGVjO1xuICAgICAgb2JqLnBvc2l0aW9uLmJ1cnN0LmEgPSAwO1xuICAgICAgaWYgKHZQb2xhci5yID4gKDUwICogMy42KSkgb2JqLnBvc2l0aW9uLmNyYXNoID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYWxjIG5ldyBwb3NpdGlvblxuICAgIHZhciBhQ2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcihhUG9sYXIpO1xuICAgIHZhciBnQ2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcihnUG9sYXIpO1xuICAgIHZhciB2Q2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcih2UG9sYXIpO1xuICAgIHZhciBwb3NDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKHBvc1BvbGFyKTtcblxuICAgIHZDYXJ0LnggKz0gKGFDYXJ0LnggKyBnQ2FydC54KSAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgdkNhcnQueSArPSAoYUNhcnQueSArIGdDYXJ0LnkpICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICBwb3NDYXJ0LnggKz0gdkNhcnQueCAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgcG9zQ2FydC55ICs9IHZDYXJ0LnkgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuXG4gICAgdlBvbGFyID0gaGVscENhbGMudG9Qb2xhcih2Q2FydCk7XG4gICAgcG9zUG9sYXIgPSBoZWxwQ2FsYy50b1BvbGFyKHBvc0NhcnQpO1xuICAgIHBvc1BvbGFyLnIgPSBNYXRoLnJvdW5kKHBvc1BvbGFyLnIpO1xuXG4gICAgLy8gVXBkYXRlIG5ldyBwb3Npb25cbiAgICBvYmoucG9zaXRpb24udlIgPSB2UG9sYXIucjtcbiAgICBvYmoucG9zaXRpb24udkRlYyA9IHZQb2xhci5kZWM7XG4gICAgb2JqLnBvc2l0aW9uLnIgPSBNYXRoLnJvdW5kKHBvc1BvbGFyLnIpO1xuICAgIG9iai5wb3NpdGlvbi5kZWMgPSBwb3NQb2xhci5kZWM7XG4gICAgb2JqLnBvc2l0aW9uLnBpdGNoRGVjID0gaGVscENhbGMudG9EZWczNjAob2JqLnBvc2l0aW9uLnBpdGNoRGVjIC0gcG9zRGVjT2xkICsgb2JqLnBvc2l0aW9uLmRlYylcbiAgICBvYmoucGFuZWwuYWx0RWFydGggPSBNYXRoLnJvdW5kKG9iai5wb3NpdGlvbi5yIC0gZ09ianNbMF0ucik7XG5cbiAgICAvL3VwZGF0ZSBUcmFpbFxuICAgIHVwZGF0ZVRyYWlsKHBvc1BvbGFyLCBzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb2NhbEcob2JqLCBnT2Jqcykge1xuXG4gICAgLy8gRWFydGhcbiAgICBjb25zdCBtYXNzID0gZ09ianNbMF0ubWFzcztcbiAgICBjb25zdCBkaXN0ID0gb2JqLnBvc2l0aW9uLnI7XG4gICAgbGV0IGdSID0gNi42N2UtMTEgKiBtYXNzIC8gKGRpc3QgKiogMik7XG4gICAgY29uc3QgZ0RlYyA9IGhlbHBDYWxjLnRvRGVnMzYwKDE4MCArIG9iai5wb3NpdGlvbi5kZWMpO1xuICAgIFxuICAgIGlmIChkaXN0IDwgZ09ianNbMF0ucikgIGdSID0gMDtcbiAgICBvYmoucGFuZWwuZ0VhcnRoID0gZ1I7XG4gICAgb2JqLnBhbmVsLmhlYWRFYXJ0aCA9IGdEZWM7XG4gICAgXG4gICAgLy9Nb29uXG4gICAgY29uc3QgbWFzczIgPSBnT2Jqc1sxXS5tYXNzO1xuICAgIGNvbnN0IHBvc1BvbFNoaXAgPSB7cjogb2JqLnBvc2l0aW9uLnIsIGRlYzogb2JqLnBvc2l0aW9uLmRlY307XG4gICAgY29uc3QgcG9zUG9sQ2VudGVyID0ge3I6IGdPYmpzWzFdLnBvc2l0aW9uLnIsIGRlYzogZ09ianNbMV0ucG9zaXRpb24uZGVjfTtcbiAgICBjb25zdCBkaXN0MiA9IGhlbHBDYWxjLmRpc3RQb2wocG9zUG9sU2hpcCwgcG9zUG9sQ2VudGVyKTtcbiAgICBsZXQgZ1IyID0gNi42N2UtMTEgKiBtYXNzMiAvIChkaXN0Mi5yICoqIDIpO1xuICAgIGNvbnN0IGdEZWMyID0gaGVscENhbGMudG9EZWczNjAoMTgwICsgZGlzdDIuZGVjKTtcblxuICAgIG9iai5wYW5lbC5hbHRNb29uID0gTWF0aC5yb3VuZChkaXN0Mi5yIC0gZ09ianNbMV0ucik7XG4gICAgXG4gICAgaWYgKG9iai5wYW5lbC5hbHRNb29uIDw9IDApIGdSMiA9IDA7XG4gICAgb2JqLnBhbmVsLmdNb29uID0gZ1IyO1xuICAgIG9iai5wYW5lbC5oZWFkTW9vbiA9IGdEZWMyO1xuXG4gICAgY29uc3QgZ1BvbCA9IGhlbHBDYWxjLmFkZFBvbCh7cjogZ1IsIGRlYzogZ0RlY30sIHtyOiBnUjIsIGRlYzogZ0RlYzJ9KTtcbiAgICBcbiAgICByZXR1cm4gZ1BvbFxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVHJhaWwocG9zUG9sYXIsIHN0YXRlKSB7XG4gICAgdmFyIG1heExlbmdodCA9IHN0YXRlLnNoaXAxLnRyYWlsLm1heExlbmdodDtcbiAgICB2YXIgcG9pbnRzID0gc3RhdGUuc2hpcDEudHJhaWwucG9pbnRzO1xuICAgIGlmIChwb3NQb2xhci5yID09PSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdXG4gICAgICAmJiBwb3NQb2xhci5kZWMgPT09IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pIHJldHVybjtcbiAgICBwb2ludHMucHVzaChwb3NQb2xhci5yKTtcbiAgICBwb2ludHMucHVzaChwb3NQb2xhci5kZWMpO1xuICAgIHdoaWxlIChwb2ludHMubGVuZ3RoID4gbWF4TGVuZ2h0ICogMikge1xuICAgICAgcG9pbnRzLnNoaWZ0KCk7XG4gICAgICBwb2ludHMuc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgbW92ZSxcbiAgICBtb3ZlT25lXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92ZVN2ZyIsIlxubGV0IGdldFBhbmVsID0gKGhlbHBDYWxjLCBzdGF0ZSwgc2hpcDEpID0+IHtcblxuICB2YXIgcG9zaXRpb24gPSB7fTtcbiAgdmFyIHBhbmVsID0ge31cblxuICBjcmVhdGUoc3RhdGUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZShzdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKCd3aWxsIGNyZWF0ZSBmcm9tJywgc3RhdGUpO1xuICB9XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgYWx0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbHQgPSBzdGF0ZS5yZW5kZXIucmVmSWQgPT09ICdlYXJ0aCcgPyBwYW5lbC5hbHRFYXJ0aCA6IHBhbmVsLmFsdE1vb247XG4gICAgICB2YXIgdW5pdCA9ICdtJztcbiAgICAgIGlmIChhbHQgPiAxMDAwKSB7XG4gICAgICAgIGFsdCAvPSAgMTAwMFxuICAgICAgICB1bml0ID0gJ2ttJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFsdCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyB1bml0O1xuICAgIH0sXG4gICAgbG9uZzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbG9uZyA9IHN0YXRlLnJlbmRlci5yZWZJZCA9PT0gJ2VhcnRoJyA/IHBhbmVsLmhlYWRFYXJ0aCA6IHBhbmVsLmhlYWRNb29uO1xuICAgICAgcmV0dXJuIGZvcm1hdExvbmcoKDE4MCAgLSBsb25nKSAlIDM2MCk7XG4gICAgfSxcbiAgICBwaXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGl0Y2ggPSBoZWxwQ2FsYy50b0RlZzM2MChwb3NpdGlvbi5waXRjaERlYyAtIHBvc2l0aW9uLmRlYylcbiAgICAgIHJldHVybiBmb3JtYXREZWcoaGVscENhbGMudG9EZWcxODAoOTAgLSBwaXRjaCApKVxuICAgIH0sXG4gICAgY2xpbWI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZEZWMgPSBwb3NpdGlvbi52RGVjICsgcG9zaXRpb24uZGVjO1xuICAgICAgdmFyIGNsaW1iID0gcG9zaXRpb24udlIgKiBNYXRoLmNvcyh2RGVjICogKE1hdGguUEkvMTgwKSlcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGNsaW1iICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICB9LFxuICAgIHZPcmJpdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdkRlYyA9IHBvc2l0aW9uLnZEZWMgKyBwb3NpdGlvbi5kZWM7XG4gICAgICB2YXIgdiA9IHBvc2l0aW9uLnZSICogTWF0aC5zaW4odkRlYyAqIChNYXRoLlBJLzE4MCkpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICB9LFxuICAgIGdMb2NhbDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHN0YXRlLnJlbmRlci5yZWZJZCA9PT0gJ2VhcnRoJyA/IHBhbmVsLmdFYXJ0aCA6IHBhbmVsLmdNb29uKS50b0ZpeGVkKDIpICsgJ20vczInO1xuICAgIH0sXG4gICAgc3BlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocG9zaXRpb24udlIgKiAzLjYpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpICsgJ2ttL2gnO1xuICAgIH0sXG4gICAgYnVyc3RBOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhID0gKHBvc2l0aW9uLmJ1cnN0LmEgLyA5LjgpLnRvRml4ZWQoMCk7XG4gICAgICB2YXIgYU5leHQgPSAocG9zaXRpb24uYnVyc3QuYU5leHQgLyA5LjgpLnRvRml4ZWQoMCk7XG4gICAgICByZXR1cm4gYSArICdnICgnICsgYU5leHQgKyAnZyknO1xuICAgIH0sXG4gICAgYnVyc3RUOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBvc2l0aW9uLmJ1cnN0LnQpICsgJ3MgKCcgKyBwb3NpdGlvbi5idXJzdC50TmV4dC50b0ZpeGVkKDApICsgJ3MpJztcbiAgICB9LFxuICAgIHNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY2FsZSA9IHN0YXRlLndpZHRoIC8gMTAgICogc3RhdGUucmVuZGVyLnpvb207XG4gICAgICByZXR1cm4gZm9ybWF0TWttKHNjYWxlKTtnXG4gICAgfSxcbiAgICB0aW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkMCA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgIGQuc2V0U2Vjb25kcyhzdGF0ZS50aW1lKTtcbiAgICAgIHZhciBkYXlzID0gcGFyc2VJbnQoKGQgLSBkMCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgcmV0dXJuIGRheXMgKyAnZCAnICsgZC50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IGZhbHNlIH0pO1xuICAgIH0sXG4gICAgaGVhZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RGVnKHBvc2l0aW9uLnZEZWMpO1xuICAgIH0sXG4gICAgem9vbTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgem9vbSAgPSBzdGF0ZS5yZW5kZXIuem9vbVxuICAgICAgcmV0dXJuIHpvb20gPCAxMDAwID8gem9vbSA6IE1hdGgucm91bmQoem9vbSAvIDEwMDApICsgJ2snO1xuICAgIH0sXG4gICAgdGltZVNwZWVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmb3JtYXRLTShzdGF0ZS50aW1lU3BlZWQpO1xuICAgIH0sXG4gICAgdGltZVBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnBsYXkgPyAnUGF1c2UnIDogJ1BsYXknO1xuICAgIH0sXG4gICAgcmVmOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5yZW5kZXIucmVmSWQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIHVwZGF0ZSA9IChrZXkpID0+IHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpLmlubmVyVGV4dCA9IGNvbnRlbnRba2V5XSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvbiA9IHNoaXAxLnBvc2l0aW9uO1xuICAgICAgcGFuZWwgPSBzaGlwMS5wYW5lbDtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29udGVudCk7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS5pbm5lclRleHQgPSBjb250ZW50W2VsZW1lbnRdKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXREZWcoZGVnKSB7XG4gICAgdmFyIHR4dCA9IE1hdGgucm91bmQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICByZXR1cm4gdHh0O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TG9uZyhkZWcpIHtcbiAgICB2YXIgdHh0ID0gcGFyc2VJbnQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICB2YXIgbWluID0gKChkZWcgLSBwYXJzZUludChkZWcpKSAqIDYwKS50b0ZpeGVkKDIpO1xuICAgIGlmIChtaW4gPCAxMCkgdHh0ICs9ICcwJztcbiAgICB0eHQgKz0gbWluICsgJ1xcJyc7XG4gICAgcmV0dXJuIHR4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdE1rbShkKSB7XG4gICAgcmV0dXJuIChkIDwgMTAwMCkgPyBkICsgJ20nIDogZC8xMDAwICsgJ2ttJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdEtNKGQpIHtcbiAgICB2YXIgdHh0ID0gZDtcbiAgICBpZiAoZCA+PSAxMDAwKSB0eHQgPSBwYXJzZUludChkLzEwMDApICsgJ2snO1xuICAgIGVsc2UgaWYgKGQgPj0gMTAwMDAwMCkgdHh0ID0gcGFyc2VJbnQoZC8xMDAwMDAwKSArICdNJztcbiAgICByZXR1cm4gdHh0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRQYW5lbFxuIiwiXG5sZXQgcmVuZGVyU3ZnID0gKGhlbHBDYWxjKSA9PiB7XG5cbiAgY29uc3QgaW5pdCA9IChpbml0U3RhdGUsIHJlZk9ianMpID0+IHtcbiAgICBpbml0U3RhdGUucmVuZGVyID0ge1xuICAgICAgcmVmSWQ6ICdlYXJ0aCcsXG4gICAgICByZWZPYmpzOiByZWZPYmpzLFxuICAgICAgem9vbTogMSxcbiAgICAgIGNhbnZhc05vZGU6IG51bGwsXG4gICAgICBpbml0U3RhdGU6IG51bGxcbiAgICB9XG4gICAgaW5pdFN0YXRlLnJlbmRlci5jYW52YXNOb2RlICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSxcbiAgICBpbml0U3RhdGUucmVuZGVyLnZpZXdDZW50ZXIgPSBnZXRWaWV3Q2VudGVyKGluaXRTdGF0ZS5yZW5kZXIuY2FudmFzTm9kZSk7XG4gIH1cblxuICBjb25zdCBjcmVhdGUgPSAob2JqcywgcmVmT2Jqcywgc3RhdGVSZW5kZXIpID0+IHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9ianMpO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG9iaiA9IG9ianNba2V5XTtcbiAgICAgIGlmIChvYmoub2JqTGlzdCkge1xuICAgICAgICBvYmoub2JqTGlzdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgY3JlYXRlT2JqKHN0YXRlUmVuZGVyLmNhbnZhc05vZGUsIG9iaik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gICAgdXBkYXRlKG9ianMsIHJlZk9ianMsIHN0YXRlUmVuZGVyKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU9uZSA9IChvYmosIHJlZk9ianMsIHN0YXRlUmVuZGVyKSA9PiB7XG4gICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY3JlYXRlT2JqKHN0YXRlUmVuZGVyLmNhbnZhc05vZGUsIG9iaik7XG4gICAgICBpZiAob2JqLmlkID09PSAnc2hpcEJ1cnN0Jykgc3RhdGVSZW5kZXIuYnVyc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmlkKTtcblxuICAgIH0pXG4gICAgdXBkYXRlT2JqKG9iai5vYmpMaXN0WzBdLCByZWZPYmpzLCBzdGF0ZVJlbmRlcilcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9uZSA9IChvYmosIHJlZk9ianMsIHN0YXRlUmVuZGVyLCBzaGlwMSkgPT4ge1xuICAgIHVwZGF0ZU9iaihvYmoub2JqTGlzdFswXSwgcmVmT2Jqcywgc3RhdGVSZW5kZXIsIHNoaXAxKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRyYWlsID0gKG9iaiwgcmVmT2JqLCBzdGF0ZVJlbmRlciwgc2hpcDEsIHN0YXRlU2hpcDEpID0+IHtcbiAgICBvYmoub2JqTGlzdFs2XS5yZW5kZXIuZGlzcGxheSA9IHN0YXRlU2hpcDEudHJhaWwuZGlzcGxheTtcbiAgICBjb25zdCBwb2ludHMgPSBzdGF0ZVNoaXAxLnRyYWlsLnBvaW50cztcbiAgICBjb25zdCBzaGlwRGVjID0gb2JqLm9iakxpc3RbMF0ucG9zaXRpb24uZGVjO1xuXG4gICAgY29uc3QgdHJpbSA9IGdldFRyaW0oc3RhdGVSZW5kZXIuem9vbSwgcmVmT2JqLCBzdGF0ZVJlbmRlci5yZWZJZCwgc3RhdGVSZW5kZXIuY2FudmFzTm9kZSwgc2hpcERlYyk7XG4gICAgbGV0IG5ld1BvaW50cyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSs9Mikge1xuICAgICAgY29uc3QgY2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcih7XG4gICAgICAgIHI6IHBvaW50c1tpXSwgXG4gICAgICAgIGRlYzogcG9pbnRzW2kgKyAxXVxuICAgICAgfSk7XG4gICAgICBjb25zdCB4ID0gc3RhdGVSZW5kZXIudmlld0NlbnRlci54ICsgdHJpbS54ICsgY2FydC54IC8gc3RhdGVSZW5kZXIuem9vbTtcbiAgICAgIGNvbnN0IHkgPSBzdGF0ZVJlbmRlci52aWV3Q2VudGVyLnkgKyB0cmltLnkgLSBjYXJ0LnkgLyBzdGF0ZVJlbmRlci56b29tXG4gICAgICBuZXdQb2ludHMgKz0gKHggKyAnLCcgKyB5ICsgJyAnKVxuICAgIH1cbiAgICBvYmoub2JqTGlzdFs2XS5yZW5kZXIucG9pbnRzID0gbmV3UG9pbnRzO1xuICAgIHVwZGF0ZU9iaihvYmoub2JqTGlzdFs2XSwgcmVmT2JqLCBzdGF0ZVJlbmRlciwgc2hpcDEpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKG9ianMsIHJlZk9iaiwgc3RhdGVSZW5kZXIsIHNoaXAxKSA9PiB7IC8vIHh4eFxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2Jqcyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgb2JqID0gb2Jqc1trZXldO1xuICAgICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICB1cGRhdGVPYmoob2JqLCByZWZPYmosIHN0YXRlUmVuZGVyLCBzaGlwMSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2V0UmVmID0gKHJlZikgPT4ge1xuICAgIHJldHVybiByZWYgPT09ICdlYXJ0aCcgPyAnbW9vbicgOiAnZWFydGgnO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqKGNhbnZhc05vZGUsIG9iaikge1xuICAgIGxldCBwYXJlbnROb2RlO1xuICAgIGxldCBzdmducyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgbGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsIG9iai5yZW5kZXIuZm9ybWF0KTtcbiAgICBcbiAgICAvLyBDb3JlIGF0dGlidXRlc1xuICAgIGlmIChvYmouaWQpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgb2JqLmlkKTtcblxuICAgIC8vIEVsZW1lbnQgYXR0aWJ1dGVzXG4gICAgaWYgKG9iai5yZW5kZXIuc3RkRGV2aWF0aW9uKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdGREZXZpYXRpb24nLCBvYmoucmVuZGVyLnN0ZERldmlhdGlvbik7XG4gICAgaWYgKG9iai5yZW5kZXIuY2xpcFBhdGgpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2NsaXAtcGF0aCcsIG9iai5yZW5kZXIuY2xpcFBhdGgpO1xuICAgIGlmIChvYmoucmVuZGVyLmZpbHRlcikgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsdGVyJywgb2JqLnJlbmRlci5maWx0ZXIpO1xuICAgIGlmIChvYmoucmVuZGVyLnBvaW50cykgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncG9pbnRzJywgb2JqLnJlbmRlci5wb2ludHMpO1xuICAgIGlmIChvYmoucmVuZGVyLnggfHwgb2JqLnJlbmRlci54ID09PSAwKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4Jywgb2JqLnJlbmRlci54KTtcbiAgICBpZiAob2JqLnJlbmRlci55IHx8IG9iai5yZW5kZXIueSA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIG9iai5yZW5kZXIueSk7XG4gICAgaWYgKG9iai5yZW5kZXIud2lkdGggfHwgb2JqLnJlbmRlci53aWR0aCA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBvYmoucmVuZGVyLndpZHRoKTtcbiAgICBpZiAob2JqLnJlbmRlci5oZWlnaHQgfHwgb2JqLnJlbmRlci5oZWlnaHQgPT09IDApIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIG9iai5yZW5kZXIuaGVpZ2h0KTtcbiAgICBpZiAob2JqLnJlbmRlci5jeCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCBvYmoucmVuZGVyLmN4KTtcbiAgICBpZiAob2JqLnJlbmRlci5jeSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3knLCBvYmoucmVuZGVyLmN5KTtcbiAgICBpZiAob2JqLnJlbmRlci5yeCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncngnLCBvYmoucmVuZGVyLnJ4KTtcbiAgICBpZiAob2JqLnJlbmRlci5yeSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncnknLCBvYmoucmVuZGVyLnJ5KTtcbiAgICAvLyB5LCB5LCB3aWR0aCBhbmQgaGVpZ2h0IG1heSBiZSB1cGRhdGVkIGluIHVwZGF0ZU9iaigpLCB0cmFuc2Zvcm0gd2lsbFxuXG4gICAgLy9QcmVzZW50YXRpb24gYXR0aWJ1dGVzXG4gICAgaWYgKG9iai5yZW5kZXIuZGlzcGxheSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZGlzcGxheScsIG9iai5yZW5kZXIuZGlzcGxheSk7XG4gICAgaWYgKG9iai5yZW5kZXIuY29sb3IpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbGwnLCBvYmoucmVuZGVyLmNvbG9yKTtcbiAgICBpZiAob2JqLnJlbmRlci5zdHJva2UpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZScsIG9iai5yZW5kZXIuc3Ryb2tlKTtcbiAgICBpZiAob2JqLnJlbmRlci5zdHJva2VEYXNoYXJyYXkpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZS1kYXNoYXJyYXknLCBvYmoucmVuZGVyLnN0cm9rZURhc2hhcnJheSk7XG4gICAgLy8gZGlzcGxheSBtYXkgYmUgdXBkYXRlZCBpbiB1cGRhdGVPYmooKVxuXG4gICAgaWYgKG9iai5yZW5kZXIucGFyZW50SWQpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmoucmVuZGVyLnBhcmVudElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1N2Z05vZGUgPSBnZXRTdmdDYW52YXNOb2RlKGNhbnZhc05vZGUpO1xuICAgICAgY2FudmFzTm9kZS5hcHBlbmRDaGlsZChjYW52YXNTdmdOb2RlKTtcbiAgICAgIHBhcmVudE5vZGUgPSBjYW52YXNTdmdOb2RlO1xuICAgIH1cblxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgLy9pZiAob2JqLmlkID09PSAnc2hpcEJ1cnN0JykgYnVyc3ROb2RlID0gbmV3Tm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9iaihvYmosIHJlZk9iaiwgc3RhdGVSZW5kZXIsIHNoaXAxKSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouaWQpO1xuICAgIGxldCB2aWV3Q2VudGVyID0gc3RhdGVSZW5kZXIudmlld0NlbnRlcjtcbiAgICBjb25zdCBzaGlwRGVjID0gc2hpcDEgPyBzaGlwMS5wb3NpdGlvbi5kZWMgOiAwOyAvLyBjcmVhdGUgY29uJ3QgY2FsbCB3aXRoIHNoaXAxXG4gICAgY29uc3QgY2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcih7XG4gICAgICByOiBvYmoucG9zaXRpb24gPyBvYmoucG9zaXRpb24uciA6IG51bGwsXG4gICAgICBkZWM6IG9iai5wb3NpdGlvbiA/IG9iai5wb3NpdGlvbi5kZWMgOiBudWxsXG4gICAgfSk7XG4gICAgY29uc3Qgem9vbSA9IHN0YXRlUmVuZGVyLnpvb207XG4gICAgY29uc3QgdHJpbSA9IGdldFRyaW0oem9vbSwgcmVmT2JqLCBzdGF0ZVJlbmRlci5yZWZJZCwgc3RhdGVSZW5kZXIuY2FudmFzTm9kZSwgc2hpcERlYyk7XG4gICAgY29uc3Qgc3ZnVGFnID0gb2JqLnJlbmRlci5mb3JtYXQ7XG4gICAgaWYgKHN2Z1RhZyA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgKHZpZXdDZW50ZXIueCArIHRyaW0ueCArIGNhcnQueCAvIHpvb20pKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgKHZpZXdDZW50ZXIueSArIHRyaW0ueSAtIGNhcnQueSAvIHpvb20pKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3InLCBNYXRoLm1heCgyLCBvYmouciAvIHpvb20pKTtcbiAgICB9IGVsc2UgaWYgKHN2Z1RhZyA9PT0gJ3JlY3QnKSB7XG4gICAgICBjb25zdCB3aWR0aFB4ID0gTWF0aC5tYXgoMiwgb2JqLndpZHRoIC8gem9vbSk7XG4gICAgICBjb25zdCBoZWlnaHRQeCA9IE1hdGgubWF4KDIsIG9iai5oZWlnaHQgLyB6b29tKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCAodmlld0NlbnRlci54ICsgdHJpbS54IC0gY2FydC54L3pvb20gLSAod2lkdGhQeCAvIDIpKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgKHZpZXdDZW50ZXIueSArIHRyaW0ueSAtIGNhcnQueSAvIHpvb20pKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgd2lkdGhQeCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBoZWlnaHRQeCk7XG4gICAgfSBlbHNlIGlmIChvYmouaWQgPT09ICdzaGlwMVRyYWlsJykge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZGlzcGxheScsIG9iai5yZW5kZXIuZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZScpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncG9pbnRzJywgb2JqLnJlbmRlci5wb2ludHMpO1xuICAgIH0gZWxzZSBpZiAob2JqLmlkID09PSAnc2hpcDEnKSB7XG4gICAgICBjb25zdCB4ID0gKHZpZXdDZW50ZXIueCArIHRyaW0ueCArIGNhcnQueC96b29tIC0gNSk7XG4gICAgICBjb25zdCB5ID0gKHZpZXdDZW50ZXIueSArIHRyaW0ueSAtIGNhcnQueSAvIHpvb20gLSAxMCk7XG4gICAgICBjb25zdCBwaXRjaCA9IG9iai5wb3NpdGlvbi5waXRjaERlYztcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fSwke3l9KSByb3RhdGUoJHtwaXRjaH0sNSw1KWA7XG4gICAgICBjb25zdCB2aXNpYmlsaXR5ID0gb2JqLnBvc2l0aW9uLmJ1cnN0LmEgPiAwID8gICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcbiAgICAgIGlmIChzdGF0ZVJlbmRlci5idXJzdE5vZGUpIHN0YXRlUmVuZGVyLmJ1cnN0Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlzaWJpbGl0eScsIHZpc2liaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN2Z0NhbnZhc05vZGUoY2FudmFzTm9kZSkge1xuICAgIHZhciBjYW52YXNTdmdOb2RlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FudmFzTm9kZS5jaGlsZHJlbltpXS5pZCA9PT0gJ2NhbnZhc1N2ZycpIGNhbnZhc1N2Z05vZGUgPSBjYW52YXNOb2RlLmNoaWxkcmVuW2ldO1xuICAgIH1cblxuICAgIGlmICghY2FudmFzU3ZnTm9kZSkge1xuICAgICAgbGV0IHN2Z25zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICAgIGNhbnZhc1N2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdzdmcnKTtcbiAgICAgIGNhbnZhc1N2Z05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgJ2NhbnZhc1N2ZycpO1xuICAgICAgY2FudmFzU3ZnTm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgY2FudmFzU3ZnTm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgJzEwMCUnKTsgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzU3ZnTm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdDZW50ZXIoY2FudmFzTm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB5OiBjYW52YXNOb2RlLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICB4OiBjYW52YXNOb2RlLm9mZnNldFdpZHRoIC8gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRyaW0oem9vbSwgcmVmT2JqLCByZWZJZCwgY2FudmFzTm9kZSwgc2hpcERlYykge1xuICAgIGNvbnN0IHJlZkNhciA9IGhlbHBDYWxjLmZyb21Qb2xhcih7cjogcmVmT2JqLnBvc2l0aW9uLnIsIGRlYzogcmVmT2JqLnBvc2l0aW9uLmRlY30pXG4gICAgY29uc3QgY2FudmFzTWluU2l6ZSA9IE1hdGgubWluKGNhbnZhc05vZGUub2Zmc2V0V2lkdGgsIGNhbnZhc05vZGUub2Zmc2V0SGVpZ2h0KSAqIHpvb21cbiAgICBjb25zdCByZWZPYmpXaWR0aCA9IHJlZk9iai5yICogMjtcblxuICAgIGxldCB0cmltO1xuICAgIGNvbnN0IHJhdGlvID0gcmVmT2JqV2lkdGgvY2FudmFzTWluU2l6ZTtcbiAgICBjb25zdCBjbG9zZU1pblJhdGlvID0gcmVmSWQgPT09ICdtb29uJyA/IDEgOiA1O1xuICAgIGlmIChyYXRpbyA+IGNsb3NlTWluUmF0aW8pIHsgLy8gY2xvc2UsIHN1cmZhY2Ugb24gYm90dG9uXG4gICAgICB0cmltID0ge1xuICAgICAgICB4OiAtcmVmQ2FyLnggLyB6b29tLFxuICAgICAgICB5OiByZWZDYXIueSAvIHpvb20gKyByZWZPYmouciAvIHpvb20gKyAyMDBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhdGlvIDwgMSkgeyAvLyBkaXN0YW50LCBjZW50ZXJcbiAgICAgIHRyaW0gPSB7eDogLXJlZkNhci54IC8gem9vbSwgeTogcmVmQ2FyLnkgLyB6b29tfVxuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICB0cmltID0geyAvLyBpbnRlcm1lZGlhdGVcbiAgICAgICAgeDogLXJlZkNhci54IC8gem9vbSxcbiAgICAgICAgeTogcmVmQ2FyLnkgLyB6b29tICsgcmVmT2JqLnIgLyB6b29tICsgMjBcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwRGVjID4gNDUgJiYgc2hpcERlYyA8PSAxMzUpIHRyaW0gPSB7eDogLXRyaW0ueSwgeTogLXRyaW0ueH0gLy8gcmlnaHRcbiAgICAgIGVsc2UgaWYgKHNoaXBEZWMgPiAxMzUgJiYgc2hpcERlYyA8PSAyMjUpIHRyaW0gPSB7eDogdHJpbS54LCB5OiAtdHJpbS55fSAvLyBib3R0b21cbiAgICAgIGVsc2UgaWYgKHNoaXBEZWMgPiAyMjUgJiYgc2hpcERlYyA8PSAzMjUpIHRyaW0gPSB7eDogdHJpbS55LCB5OiB0cmltLnh9OyAvLyBsZWZ0XG4gICAgfVxuICAgIHJldHVybiB0cmltO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgY3JlYXRlT25lLFxuICAgIGluaXQsXG4gICAgc2V0UmVmLFxuICAgIHVwZGF0ZSxcbiAgICB1cGRhdGVPbmUsXG4gICAgdXBkYXRlVHJhaWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdmc7IiwiY29uc3Qgc2hpcDEgPSAoaGVscENhbGMpID0+IHtcbiAgY29uc3QgbWFpbklkID0gJ3NoaXAxJztcblxuICBjb25zdCBpbml0ID0gKGluaXRTdGF0ZSkgPT4ge1xuICAgIGluaXRTdGF0ZS5zaGlwMSA9IHtcbiAgICAgIHRyYWlsOiB7XG4gICAgICAgIG1heExlbmdodDogOTAwLFxuICAgICAgICBwb2ludHM6IFtdLFxuICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBvYmpMaXN0ID0gW1xuICAgIHtcbiAgICAgIGlkOiAnc2hpcDEnLFxuICAgICAgcGFuZWw6IHtcbiAgICAgICAgZ0VhcnRoOiA5LjgsXG4gICAgICAgIGdNb29uOiAwLFxuICAgICAgICBhbHRFYXJ0aDogMCxcbiAgICAgICAgYWx0TW9vbjogMCxcbiAgICAgICAgaGVhZEVhcnRoOiAwLFxuICAgICAgICBoZWFkTW9vbjogMFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHI6IDYzNzgxMDAsIC8vIDAsIC8vIGRpc3RhbmNlIChtKSwgKDM4NDAwMDAwMCAqKiAyICsgMTczODAwMCAqKiAyKSAqKiAuNSBmb3IgbW9vblxuICAgICAgICBkZWM6IDAsIC8vIGQwZWNsaW5hdGlvbiAoZGVnKSwgOTAgLSBNYXRoLmF0YW4oMTczODAwMCAvIDM4NDAwMDAwMCkgKiAoMTgwIC8gTWF0aC5QSSkgZm9yIG1vb25cbiAgICAgICAgdlI6IDAsIC8vIHYgc3BlZWQgKG0vcyksIDI4MCBmb3IgbW9vblxuICAgICAgICB2RGVjOiAwLCAvLyBoZWFkaW5nLCBvciB2IGRlY2xpbmF0aW9uIChkZWcpLCAxODAgZm9yIG1vb25cbiAgICAgICAgcGl0Y2hEZWM6IDAsIC8vIGF0dGl0dWRlIHBpdGNoIChkZWcpXG4gICAgICAgIGJ1cnN0OiB7XG4gICAgICAgICAgYTogMCwvLyBjdXJyZW50IGJ1cnN0IGFjY2VsZXJhdGlvbiAobS9zMilcbiAgICAgICAgICBhTmV4dDogTWF0aC5yb3VuZCg0ICogOS44MDY2NSksIC8vIHNlbGVjdGVkIGFjY2VsZXJhdGlvbiBmb3IgbmV4dCBidXJzdCAobS9zMilcbiAgICAgICAgICB0OiAwLCAvLyBjdXJyZW50IGJ1cnN0IHJlbWFpbmluZyB0aW1lIChzKVxuICAgICAgICAgIHROZXh0OiA0IC8vIHNlbGVjdGVkIHRpbWUgZm9yIG5leHQgYnVyc3QgKHMpXG4gICAgICAgIH0sXG4gICAgICAgIGNyYXNoZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIGZvcm1hdDogJ2cnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMjAwLDIwMCkgcm90YXRlKDApJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzaGlwYmx1cicsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ2ZpbHRlcicsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwYmx1cicsXG4gICAgICAgIGZvcm1hdDogJ2ZlR2F1c3NpYW5CbHVyJyxcbiAgICAgICAgc3RkRGV2aWF0aW9uOiBcIjEuNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NoaXBjcm9wJyxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAnY2xpcFBhdGgnLFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcGNyb3AnLFxuICAgICAgICBmb3JtYXQ6ICdyZWN0JyxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogOCxcbiAgICAgICAgd2lkdGg6MTAsXG4gICAgICAgIGhlaWdodDogMTdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc2hpcEJ1cnN0JyxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAnZWxsaXBzZScsXG4gICAgICAgIGN4OiA1LFxuICAgICAgICBjeTogMjMsXG4gICAgICAgIHJ4OjUsXG4gICAgICAgIHJ5OiAnMTInLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIGNsaXBQYXRoOiAndXJsKCNzaGlwY3JvcCknLFxuICAgICAgICBmaWx0ZXI6ICd1cmwoI3NoaXBibHVyKScsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nIC8vIG9yICd2aXNpYmxlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBcbiAgICAgIGlkOiAnc2hpcDFUcmFpbCcsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgZm9ybWF0OiAncG9seWxpbmUnLFxuICAgICAgICBwb2ludHM6ICcwLDAgMCwxJyxcbiAgICAgICAgY29sb3I6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiAnd2hpdGUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ3BvbHlnb24nLFxuICAgICAgICBwb2ludHM6ICc1LDAgMTAsMTAgNSw3LjUgMCwxMCcsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICB9XG4gICAgfVxuICBdXG5cbiAgY29uc3QgYnVyc3RVcGRhdGUgPSAoc2Vjb25kU2tpcCwgdGltZVNwZWVkKSA9PiB7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50IC09IHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgaWYgKG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCA8PSAwICkge1xuICAgICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50ID0gMDtcbiAgICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYSA9IDA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkUGl0Y2ggPSAoYWRkKSA9PiB7XG4gICAgbGV0IHBpdGNoID0gaGVscENhbGMudG9EZWczNjAob2JqTGlzdFswXS5wb3NpdGlvbi5waXRjaERlYyArIGFkZCk7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5waXRjaERlYyA9IHBpdGNoO1xuICB9XG5cbiAgY29uc3QgYWRkQnVyc3RUTmV4dCA9IChhZGQpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnROZXh0ID0gTWF0aC5tYXgob2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dCArIGFkZCwgMCk7XG4gIH1cblxuICBjb25zdCBzZXRCdXJzdEFOZXh0ID0gKGdOZXh0KSA9PiB7XG4gICAgaWYgKGdOZXh0IDw9IDkpIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYU5leHQgPSBNYXRoLnJvdW5kKGdOZXh0ICogOS44ICogMTAwKS8xMDA7XG4gIH1cblxuICB2YXIgYnVyc3RTdGFydCA9ICgpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmEgPSBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmFOZXh0O1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCA9IG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudE5leHQ7XG4gIH1cblxuICB2YXIgc2hvd1RyYWlsID0gKHNoaXBTdGF0ZSkgPT4ge1xuICAgIHNoaXBTdGF0ZS50cmFpbC5kaXNwbGF5ID0gIXNoaXBTdGF0ZS50cmFpbC5kaXNwbGF5O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIG1haW5JZCxcbiAgICBhZGRCdXJzdFROZXh0LFxuICAgIGFkZFBpdGNoLFxuICAgIGJ1cnN0U3RhcnQsXG4gICAgYnVyc3RVcGRhdGUsXG4gICAgb2JqTGlzdCxcbiAgICBzZXRCdXJzdEFOZXh0LFxuICAgIHNob3dUcmFpbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXAxOyJdLCJzb3VyY2VSb290IjoiIn0=