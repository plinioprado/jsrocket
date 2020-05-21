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
  id: 'earth',
  r: 6378100,
  // for legacy move and render div (m)
  g: 9.80665,
  // for legacy move and render div (m/s2)
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
    r: 6378100 + 200000,
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
    mass: 5.98 * Math.pow(10, 24),
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

var helpCalc = {
  fromPolar: function fromPolar(polar) {
    return {
      x: polar.r * Math.sin(polar.dec * Math.PI / 180),
      y: polar.r * Math.cos(polar.dec * Math.PI / 180)
    };
  },
  toPolar: function toPolar(cart) {
    return {
      r: Math.pow(Math.pow(cart.x, 2) + Math.pow(cart.y, 2), .5),
      dec: Math.atan2(cart.x, cart.y) / (Math.PI / 180)
    };
  },
  roundM: function roundM(val) {
    return Math.round(val * 1000000000) / 1000000000;
  },
  distPol: function distPol(obj1Pol, obj2Pol) {
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

    function fromPolar(polar) {
      // todo: eliminate this
      return {
        x: polar.r * Math.sin(polar.dec * Math.PI / 180),
        y: polar.r * Math.cos(polar.dec * Math.PI / 180)
      };
    }
  },
  addPol: function addPol(obj1Pol, obj2Pol) {
    var obj1Car = fromPolar(obj1Pol);
    var obj2Car = fromPolar(obj2Pol);
    var dist = {
      r: Math.sqrt(Math.pow(Math.abs(obj2Car.x + obj1Car.x), 2) + Math.pow(Math.abs(obj2Car.y + obj1Car.y), 2)),
      dec: Math.atan((obj2Car.x + obj1Car.x) / (obj2Car.y + obj1Car.y)) / (Math.PI / 180)
    };
    return dist;

    function fromPolar(polar) {
      // todo: eliminate this
      return {
        x: polar.r * Math.sin(polar.dec * Math.PI / 180),
        y: polar.r * Math.cos(polar.dec * Math.PI / 180)
      };
    }
  },
  toDeg360: function toDeg360(deg) {
    return deg % 360;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (helpCalc);

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
/* harmony import */ var _move_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move-svg */ "./src/move-svg.js");
/* harmony import */ var _earth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earth */ "./src/earth.js");
/* harmony import */ var _moon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moon */ "./src/moon.js");
/* harmony import */ var _iss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iss */ "./src/iss.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helpCalc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpCalc */ "./src/helpCalc.js");







document.onLoad = loadApp;

var app = function app(deps) {
  var objs = deps.objs;
  var canvas = getCanvas();
  var moveSvg = deps.moveSvg(_helpCalc__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var renderSvg = deps.renderSvg(deps.helpCalc);
  var panel = getPanel(objs.earth);
  var ship1 = deps.ship1();
  moveSvg.init(objs);
  var canvasNode = document.getElementById('canvas'); // leave until ship is svg

  renderSvg.create(objs, canvas.state.zoom);
  renderSvg.createOne(ship1, canvas.state.zoom);
  document.onclick = verifyClick;
  document.onkeydown = verifyKey;
  loop();

  function loop() {
    setTimeout(function () {
      if (!canvas.state.play) return;
      canvas.state.time += canvas.state.secondSkip * canvas.state.timeSpeed;
      moveSvg.move(canvas.state.secondSkip, canvas.state.timeSpeed);
      renderSvg.update(objs, canvas.state.zoom);
      ship1.burstUpdate(canvas.state.secondSkip, canvas.state.timeSpeed);
      moveSvg.moveOne(ship1.objList[0], canvas.state.secondSkip, canvas.state.timeSpeed, [objs.earth.objList[2], objs.moon.objList[0]]);
      renderSvg.updateOne(ship1, canvas.state.zoom);
      panel.update();

      if (ship1.objList[0].position.crash) {
        alert('ship crashed');
        return;
      }

      if (!checkTimeOut()) loop();
    }, 1000 * canvas.state.secondSkip);
  }

  function checkTimeOut() {
    var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
    var d = new Date(0, 0, 0, 0, 0, 0, 0);
    d.setSeconds(canvas.state.time);
    var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));

    if (days > 365) {
      alert('Exausted fuel after 1 year of flight. Reload game.');
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
        if (action === 'timePlay') canvas.playStop();else if (action === 'zoomMinus') canvas.zoomMultiply(2);else if (action === 'zoomPlus') canvas.zoomMultiply(.5);else if (action === 'timePlus') canvas.timeMultiply(2);else if (action === 'timeMinus') canvas.timeMultiply(.5);
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') canvas.playStop();else if (keyCode === 'ArrowUp') ship1.addPitch(10);else if (keyCode === 'ArrowDown') ship1.addPitch(-10);else if (keyCode === 'KeyA') ship1.addBurstTNext(1);else if (keyCode === 'KeyZ') ship1.addBurstTNext(-1);else if (keyCode === 'Minus') canvas.zoomMultiply(2);else if (keyCode === 'Equal') canvas.zoomMultiply(.5);else if (keyCode === 'Period') canvas.timeMultiply(2);else if (keyCode === 'Comma') canvas.timeMultiply(.5);else if (keyCode.substring(0, 5) === 'Digit') {
      ship1.setBurstANext(keyCode.replace('Digit', ''));
    }
    if (!canvas.state.play) return;

    if (keyCode === 'Space') {
      ship1.burstStart();
    }
  }

  function getCanvas() {
    var state = {
      widthIni: 2000,
      width: 2000,
      // (m)
      heightPx: 0,
      widthPx: 0,
      zoom: 1,
      play: true,
      time: 0,
      // time passed (s)
      timeSpeed: 1,
      secondSkip: 0.1 // each time loop timming (s)

    };

    var zoomMultiply = function zoomMultiply(times) {
      state.zoom *= times;
      state.zoom = Math.max(state.zoom, 1);
      renderSvg.update(deps.objs, state.zoom);
    };

    var timeMultiply = function timeMultiply(times) {
      var timeSpeed = canvas.state.timeSpeed * times;
      if (timeSpeed < 1) timeSpeed = 1;
      if (timeSpeed > 1000000) timeSpeed = 1000000;
      canvas.state.timeSpeed = parseInt(timeSpeed);
      panel.update('timeSpeed');
    };

    var playStop = function playStop() {
      canvas.state.play = !canvas.state.play;
      document.getElementById('time').style.color = canvas.state.play ? 'white' : 'red';
      panel.update('timePlay');
      if (canvas.state.play) loop();
    };

    return {
      playStop: playStop,
      state: state,
      timeMultiply: timeMultiply,
      zoomMultiply: zoomMultiply
    };
  }

  function getPanel(earth) {
    var position = {};
    var content = {
      // xxx
      alt: function alt() {
        var unit = 'm';
        var alt = position.r - earth.r;

        if (alt > 1000) {
          alt /= 1000;
          unit = 'km';
        }

        return Math.round(alt).toLocaleString('en-US') + unit;
      },
      "long": function long() {
        return convLong(position.dec);
      },
      pitch: function pitch() {
        return convDeg(toDeg180(90 - position.pitchDec));
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
      speed: function speed() {
        return Math.round(position.vR * 3.6).toLocaleString('en-US') + 'km/h';
      },
      burstA: function burstA() {
        var a = (position.burst.a / earth.g).toFixed(0);
        var aNext = (position.burst.aNext / earth.g).toFixed(0);
        return a + 'g (' + aNext + 'g)';
      },
      burstT: function burstT() {
        return Math.round(position.burst.t) + 's (' + position.burst.tNext.toFixed(0) + 's)';
      },
      scale: function scale() {
        var scale = canvas.state.width / 10 * canvas.state.zoom;
        return convMkm(scale);
        g;
      },
      time: function time() {
        var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
        var d = new Date(0, 0, 0, 0, 0, 0, 0);
        d.setSeconds(canvas.state.time);
        var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
        return days + 'd ' + d.toLocaleTimeString('en-US', {
          hour12: false
        });
      },
      head: function head() {
        return convDeg(position.vDec);
      },
      zoom: function zoom() {
        var zoom = canvas.state.zoom;
        return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
      },
      timeSpeed: function timeSpeed() {
        return convKM(canvas.state.timeSpeed);
      },
      timePlay: function timePlay() {
        return canvas.state.play ? 'Pause' : 'Play';
      }
    };

    var update = function update(key) {
      if (key) {
        document.getElementById(key).innerText = content[key]();
      } else {
        position = ship1.objList[0].position;
        var keys = Object.keys(content);
        keys.forEach(function (element) {
          document.getElementById(element).innerText = content[element]();
        });
      }
    };

    function convDeg(deg) {
      var txt = Math.round(deg) + String.fromCharCode(176);
      return txt;
    }

    function convLong(deg) {
      var txt = parseInt(deg) + String.fromCharCode(176);
      var min = ((deg - parseInt(deg)) * 60).toFixed(2);
      if (min < 10) txt += '0';
      txt += min + '\'';
      return txt;
    }

    function convMkm(d) {
      return d < 1000 ? d + 'm' : d / 1000 + 'km';
    }

    function convKM(d) {
      var txt = d;
      if (d >= 1000) txt = parseInt(d / 1000) + 'k';else if (d >= 1000000) txt = parseInt(d / 1000000) + 'M';
      return txt;
    }

    function toDeg180(deg) {
      var ret = deg % 360;
      if (ret > 180) ret = ret - 360;
      return ret;
    }

    return {
      update: update
    };
  }
};

var loadApp = function () {
  var deps = {
    renderSvg: _render_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
    moveSvg: _move_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    ship1: _ship__WEBPACK_IMPORTED_MODULE_5__["default"],
    objs: {
      earth: _earth__WEBPACK_IMPORTED_MODULE_2__["default"],
      moon: _moon__WEBPACK_IMPORTED_MODULE_3__["default"],
      iss: _iss__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    helpCalc: _helpCalc__WEBPACK_IMPORTED_MODULE_6__["default"]
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
  id: 'iss',
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
  } // {
  // 	id: 'issOrbit',
  // 	renderType: 'svg',
  // 	r: 6378100 + 309000, // m
  // 	position: {
  // 		r: 0, // distance from center (m)
  // 		dec: 0, // declination (deg), could be any value because r = 0
  // 		vR: 0, // distance from earth center (m)
  // 		vDec: 0 // orbital speed (dec/s)
  // 	},
  // 	render: {
  // 		format: 'circle',
  // 		color: 'transparent',
  // 		stroke: 'white',
  // 		strokeDasharray: '1,4'
  // 	}
  // }
  ]
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
  id: 'moon',
  objList: [{
    id: 'moon',
    renderType: 'svg',
    r: 1738000,
    // m
    mass: 7.34767 * Math.pow(10, 22),
    // kg
    position: {
      r: 384000000,
      // distance from center (m)
      dec: 90,
      // declination (deg), could be any value because r = 0
      vR: 0,
      vDec: 360 / (27.322 * 24 * 60 * 600)
    },
    render: {
      format: 'circle',
      color: '#F5F3CE'
    }
  } // {
  // 	id: 'moonOrbit',
  // 	renderType: 'svg',
  // 	r: 384000000, // m
  // 	position: {
  // 		r: 0, // distance from center (m)
  // 		dec: 0, // declination (deg), could be any value because r = 0
  // 	},
  // 	render: {
  // 		format: 'circle',
  // 		color: 'transparent',
  // 		stroke: 'white',
  // 		strokeDasharray: '1,4'
  // 	}
  // }
  ]
};
/* harmony default export */ __webpack_exports__["default"] = (moon);

/***/ }),

/***/ "./src/move-svg.js":
/*!*************************!*\
  !*** ./src/move-svg.js ***!
  \*************************/
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
    // called at init
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
    // called at init and each loop iteracion
    for (var i = 0; i < data.length; i++) {
      var position = data[i];
      position.r += position.vR * secondSkip * timeSpeed;
      position.dec += position.vDec * secondSkip * timeSpeed;
    }
  };

  var moveOne = function moveOne(obj, secondSkip, timeSpeed, gObjs) {
    var aPolar = {
      r: obj.position.burst.a,
      dec: (obj.position.dec + obj.position.pitchDec) % 360
    };
    var gPolar = getLocalG(obj, gObjs); //{r: -getLocalG(obj, gObjs), dec: obj.position.dec};

    var vPolar = {
      r: obj.position.vR,
      dec: obj.position.vDec
    };
    var posPolar = {
      r: obj.position.r,
      dec: obj.position.dec
    };

    if (posPolar.r < gObjs[0].r || posPolar.r === gObjs[0].r && aPolar.r <= 0) {
      obj.position.r = gObjs[0].r;
      return;
    }

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

    if (posPolar.r <= gObjs[0].r && vPolar.r > 50 / 3.6) {
      vPolar.r = 0;
      vPolar.dec = 0;
      posPolar.r = gObjs[0].r - 10;
      obj.position.crash = true;
    }

    obj.position.vR = helpCalc.roundM(vPolar.r);
    obj.position.vDec = helpCalc.roundM(vPolar.dec);
    obj.position.r = helpCalc.roundM(posPolar.r);
    obj.position.dec = helpCalc.roundM(posPolar.dec);

    function getLocalG(obj, gObjs) {
      // Earth
      var mass = gObjs[0].mass;
      var dist = obj.position.r;
      var gR = 6.67 * Math.pow(10, -11) * mass / Math.pow(dist, 2);
      var gDec = 180 - obj.position.dec; //console.log('gEarth=', {r: gR, dec: gDec})
      //Moon

      var mass2 = gObjs[1].mass;
      var posCartShip = {
        r: obj.position.r,
        dec: obj.position.dec
      };
      var posCartCenter = {
        r: gObjs[1].position.r,
        dec: gObjs[1].position.dec
      };
      var dist2 = helpCalc.distPol(posCartShip, posCartCenter);
      var gR2 = 6.67 * Math.pow(10, -11) * mass2 / Math.pow(dist2.r, 2);
      var gDec2 = dist2.dec; //console.log('gMoon=', {r: gR2, dec: gDec2})

      var gPol = helpCalc.addPol({
        r: gR,
        dec: gDec
      }, {
        r: gR2,
        dec: gDec2
      });
      return gPol;
    }
  };

  return {
    init: init,
    move: move,
    moveOne: moveOne
  };
};

/* harmony default export */ __webpack_exports__["default"] = (moveSvg);

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
  var canvasNode;
  var viewCenter;
  var burstNode;
  init();

  function init() {
    canvasNode = document.getElementById('canvas');
    viewCenter = getViewCenter(canvasNode);
  }

  var create = function create(objs, zoom) {
    // called at init
    var keys = Object.keys(objs); // children before to hender behind

    keys.forEach(function (key) {
      var obj = objs[key];

      if (obj.objList) {
        obj.objList.forEach(function (obj) {
          createObj(canvasNode, obj);
        });
      }
    });
    update(objs, zoom);
  };

  var createOne = function createOne(obj, zoom) {
    // called at init
    obj.objList.forEach(function (obj) {
      createObj(canvasNode, obj);
    });
    updateObj(obj.objList[0], zoom);
  };

  var updateOne = function updateOne(obj, zoom) {
    updateObj(obj.objList[0], zoom);
  };

  var update = function update(objs, zoom) {
    // called at init and each loop iteracion
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];
      if (obj.renderType === 'svg') updateObj(obj, zoom);
      obj.objList.forEach(function (obj) {
        updateObj(obj, zoom);
      });
    });
  };

  function createObj(canvasNode, obj) {
    var parentNode;
    var svgns = 'http://www.w3.org/2000/svg';
    var newNode = document.createElementNS(svgns, obj.render.format);
    if (obj.id) newNode.setAttributeNS(null, 'id', obj.id); // let keys = Object.keys(obj.render); // option to below
    // for (let i = 0; i < keys.length; i++) {
    // 	if (keys[i] !== 'format' && keys[i] !== 'parentId') {
    // 		//newNode.setAttributeNS(null, keys[i], obj.render[keys[i]]);
    // 	}
    // }

    if (obj.render.color) newNode.setAttributeNS(null, 'fill', obj.render.color);
    if (obj.render.stroke) newNode.setAttributeNS(null, 'stroke', obj.render.stroke);
    if (obj.render.strokeDasharray) newNode.setAttributeNS(null, 'stroke-dasharray', obj.render.strokeDasharray);
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
    if (obj.render.ry) newNode.setAttributeNS(null, 'ry', obj.render.ry); // y, y, width and height may be assigned in updateObj(), transform will

    if (obj.render.parentId) {
      parentNode = document.getElementById(obj.render.parentId);
    } else {
      var canvasSvgNode = getSvgCanvasNode(canvasNode);
      canvasNode.appendChild(canvasSvgNode);
      parentNode = canvasSvgNode;
    }

    parentNode.appendChild(newNode);
    if (obj.id === 'shipBurst') burstNode = newNode;
  }

  function updateObj(obj, zoom) {
    var cart = helpCalc.fromPolar({
      r: obj.position.r,
      dec: obj.position.dec
    });
    var trim = getTrim(zoom);
    var svgTag = obj.render.format;
    var node = document.getElementById(obj.id);

    if (svgTag === 'circle') {
      var rPx = Math.max(2, obj.r / zoom);
      node.setAttributeNS(null, 'cx', viewCenter.x + trim.x + cart.x / zoom);
      node.setAttributeNS(null, 'cy', viewCenter.y + trim.y - cart.y / zoom);
      node.setAttributeNS(null, 'r', rPx);
    } else if (svgTag === 'rect') {
      var widthPx = Math.max(2, obj.width / zoom);
      var heightPx = Math.max(2, obj.height / zoom);
      node.setAttributeNS(null, 'x', viewCenter.x + trim.x - cart.x / zoom - widthPx / 2);
      node.setAttributeNS(null, 'y', viewCenter.y + trim.y - cart.y / zoom);
      node.setAttributeNS(null, 'width', widthPx);
      node.setAttributeNS(null, 'height', heightPx);
    } else if (obj.id === 'ship1') {
      var x = viewCenter.x + trim.x + cart.x / zoom - 10;
      var y = viewCenter.y + trim.y - cart.y / zoom - 10;
      var pitch = obj.position.pitchDec;
      var transform = "translate(".concat(x, ",").concat(y, ") rotate(").concat(pitch, ")");
      var visibility = obj.position.burst.a > 0 ? 'visible' : 'hidden';
      node.setAttributeNS(null, 'transform', transform);
      burstNode.setAttributeNS(null, 'visibility', visibility);
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

  function getTrim(zoom) {
    var trimY = 6378100;
    if (zoom < 10000) trimY = 6378100 + 200 * zoom;
    if (zoom > 100000 / 2) trimY = 6378100 / 2;
    if (zoom > 100000) trimY = 0;
    var trim = {
      x: 0 / zoom,
      y: trimY / zoom
    };
    return trim;
  }

  return {
    create: create,
    createOne: createOne,
    update: update,
    updateOne: updateOne
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
var ship1 = function ship1() {
  var objList = [{
    id: 'ship1',
    position: {
      r: 6378100,
      // distance (m)
      dec: 0,
      // declination (deg)
      vR: 0,
      // v speed (m/s)
      vDec: 0,
      // heading, or v declination (deg)
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
    objList[0].position.pitchDec = (objList[0].position.pitchDec += add) % 360;
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

  return {
    addBurstTNext: addBurstTNext,
    addPitch: addPitch,
    burstStart: burstStart,
    burstUpdate: burstUpdate,
    objList: objList,
    setBurstANext: setBurstANext
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ship1);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VhcnRoLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwQ2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZS1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiXSwibmFtZXMiOlsiZWFydGgiLCJpZCIsInIiLCJnIiwib2JqTGlzdCIsInJlbmRlclR5cGUiLCJwb3NpdGlvbiIsImRlYyIsInJlbmRlciIsImZvcm1hdCIsImNvbG9yIiwibWFzcyIsIk1hdGgiLCJwb3ciLCJ3aWR0aCIsImhlaWdodCIsImhlbHBDYWxjIiwiZnJvbVBvbGFyIiwicG9sYXIiLCJ4Iiwic2luIiwiUEkiLCJ5IiwiY29zIiwidG9Qb2xhciIsImNhcnQiLCJhdGFuMiIsInJvdW5kTSIsInZhbCIsInJvdW5kIiwiZGlzdFBvbCIsIm9iajFQb2wiLCJvYmoyUG9sIiwib2JqMUNhciIsIm9iajJDYXIiLCJkaXN0Iiwic3FydCIsImFicyIsImF0YW4iLCJkZXYiLCJhZGRQb2wiLCJ0b0RlZzM2MCIsImRlZyIsImRvY3VtZW50Iiwib25Mb2FkIiwibG9hZEFwcCIsImFwcCIsImRlcHMiLCJvYmpzIiwiY2FudmFzIiwiZ2V0Q2FudmFzIiwibW92ZVN2ZyIsInJlbmRlclN2ZyIsInBhbmVsIiwiZ2V0UGFuZWwiLCJzaGlwMSIsImluaXQiLCJjYW52YXNOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGUiLCJzdGF0ZSIsInpvb20iLCJjcmVhdGVPbmUiLCJvbmNsaWNrIiwidmVyaWZ5Q2xpY2siLCJvbmtleWRvd24iLCJ2ZXJpZnlLZXkiLCJsb29wIiwic2V0VGltZW91dCIsInBsYXkiLCJ0aW1lIiwic2Vjb25kU2tpcCIsInRpbWVTcGVlZCIsIm1vdmUiLCJ1cGRhdGUiLCJidXJzdFVwZGF0ZSIsIm1vdmVPbmUiLCJtb29uIiwidXBkYXRlT25lIiwiY3Jhc2giLCJhbGVydCIsImNoZWNrVGltZU91dCIsImQwIiwiRGF0ZSIsImQiLCJzZXRTZWNvbmRzIiwiZGF5cyIsInBhcnNlSW50IiwiZSIsInRhcmdldCIsIm5vZGVOYW1lIiwicmVhbExpbmsiLCJocmVmIiwiYWN0aW9uIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJwcmV2ZW50RGVmYXVsdCIsInBsYXlTdG9wIiwiem9vbU11bHRpcGx5IiwidGltZU11bHRpcGx5Iiwia2V5Q29kZSIsImNvZGUiLCJhZGRQaXRjaCIsImFkZEJ1cnN0VE5leHQiLCJzZXRCdXJzdEFOZXh0IiwiYnVyc3RTdGFydCIsIndpZHRoSW5pIiwiaGVpZ2h0UHgiLCJ3aWR0aFB4IiwidGltZXMiLCJtYXgiLCJzdHlsZSIsImNvbnRlbnQiLCJhbHQiLCJ1bml0IiwidG9Mb2NhbGVTdHJpbmciLCJjb252TG9uZyIsInBpdGNoIiwiY29udkRlZyIsInRvRGVnMTgwIiwicGl0Y2hEZWMiLCJjbGltYiIsInZEZWMiLCJ2UiIsInZPcmJpdCIsInYiLCJzcGVlZCIsImJ1cnN0QSIsImEiLCJidXJzdCIsInRvRml4ZWQiLCJhTmV4dCIsImJ1cnN0VCIsInQiLCJ0TmV4dCIsInNjYWxlIiwiY29udk1rbSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIxMiIsImhlYWQiLCJjb252S00iLCJ0aW1lUGxheSIsImtleSIsImlubmVyVGV4dCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInR4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pbiIsInJldCIsImlzcyIsImRhdGEiLCJpIiwibGVuZ3RoIiwiaiIsIm9iaiIsIm5ld0RhdGEiLCJnT2JqcyIsImFQb2xhciIsImdQb2xhciIsImdldExvY2FsRyIsInZQb2xhciIsInBvc1BvbGFyIiwiYUNhcnQiLCJnQ2FydCIsInZDYXJ0IiwicG9zQ2FydCIsImdSIiwiZ0RlYyIsIm1hc3MyIiwicG9zQ2FydFNoaXAiLCJwb3NDYXJ0Q2VudGVyIiwiZGlzdDIiLCJnUjIiLCJnRGVjMiIsImdQb2wiLCJ2aWV3Q2VudGVyIiwiYnVyc3ROb2RlIiwiZ2V0Vmlld0NlbnRlciIsImNyZWF0ZU9iaiIsInVwZGF0ZU9iaiIsInBhcmVudE5vZGUiLCJzdmducyIsIm5ld05vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGVOUyIsInN0cm9rZSIsInN0cm9rZURhc2hhcnJheSIsInN0ZERldmlhdGlvbiIsImNsaXBQYXRoIiwiZmlsdGVyIiwicG9pbnRzIiwiY3giLCJjeSIsInJ4IiwicnkiLCJwYXJlbnRJZCIsImNhbnZhc1N2Z05vZGUiLCJnZXRTdmdDYW52YXNOb2RlIiwiYXBwZW5kQ2hpbGQiLCJ0cmltIiwiZ2V0VHJpbSIsInN2Z1RhZyIsIm5vZGUiLCJyUHgiLCJ0cmFuc2Zvcm0iLCJ2aXNpYmlsaXR5IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInRyaW1ZIiwiY3Jhc2hlZCIsImFkZCIsImdOZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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SGV0RCxvRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBlYXJ0aCA9IHtcbiAgaWQ6ICdlYXJ0aCcsXG5cdHI6IDYzNzgxMDAsIC8vIGZvciBsZWdhY3kgbW92ZSBhbmQgcmVuZGVyIGRpdiAobSlcblx0ZzogOS44MDY2NSwgLy8gZm9yIGxlZ2FjeSBtb3ZlIGFuZCByZW5kZXIgZGl2IChtL3MyKVxuICBvYmpMaXN0OiBbXG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aExlbycsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDYzNzgxMDAgKyAxMDAwMDAwLFxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCxcblx0XHRcdFx0ZGVjOiAwXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnIzMwMzAzMCdcblx0XHRcdH1cblx0XHR9LFx0XG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aEF0bScsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDYzNzgxMDAgKyAyMDAwMDAsXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRyOiAwLFxuXHRcdFx0XHRkZWM6IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICcjQUREOEU2J1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aCcsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcbiAgICAgIHI6IDYzNzgxMDAsIC8vIG1cbiAgICAgIG1hc3M6IDUuOTggKiBNYXRoLnBvdygxMCwgMjQpLCAvLyBrZ1xuXHRcdFx0ZzogOS44MDY2NSwgLy8gbS9zMlxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICdibHVlJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdiYXNlMScsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDEwMCwgLy8gbSAvIGZvciBub3dcblx0XHRcdHdpZHRoOiAxMDAsIC8vIG1hbmRhdG9yeSAobSlcblx0XHRcdGhlaWdodDogNSwgLy8gbWFuZGF0b3J5IChtKVxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogNjM3ODEwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAncmVjdCcsIC8vIGZvciBub3dcblx0XHRcdFx0Y29sb3I6ICd5ZWxsb3cnXG5cdFx0XHR9XG5cdFx0fVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVhcnRoOyIsInZhciBoZWxwQ2FsYyA9IHtcblxuICBmcm9tUG9sYXI6IChwb2xhcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgeTogcG9sYXIuciAqIE1hdGguY29zKHBvbGFyLmRlYyAqIE1hdGguUEkvMTgwKVxuICAgIH1cbiAgfSxcblxuICB0b1BvbGFyOiAoY2FydCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByOiAoKGNhcnQueCAqKiAyICsgY2FydC55ICoqIDIpICoqIC41KSxcbiAgICAgIGRlYzogKE1hdGguYXRhbjIoY2FydC54LCBjYXJ0LnkpIC8gKE1hdGguUEkvMTgwKSlcbiAgICB9XG4gIH0sXG5cbiAgcm91bmRNOiAodmFsKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTAwMDAwMDAwMCkgLyAxMDAwMDAwMDAwO1xuICB9LFxuXG4gIGRpc3RQb2w6IChvYmoxUG9sLCBvYmoyUG9sKSA9PiB7XG4gICAgY29uc3Qgb2JqMUNhciA9IGZyb21Qb2xhcihvYmoxUG9sKTtcbiAgICBjb25zdCBvYmoyQ2FyID0gZnJvbVBvbGFyKG9iajJQb2wpO1xuICAgIGNvbnN0IGRpc3QgPSB7XG4gICAgICByOiBNYXRoLnNxcnQoTWF0aC5hYnMob2JqMkNhci54IC0gb2JqMUNhci54KSAqKiAyICsgTWF0aC5hYnMob2JqMkNhci55IC0gb2JqMUNhci55KSAqKiAyKSxcbiAgICAgIGRlYzogTWF0aC5hdGFuKChvYmoyQ2FyLnkgLSBvYmoxQ2FyLnkpIC8gKG9iajJDYXIueCAtIG9iajFDYXIueCkpIC8gKE1hdGguUEkvMTgwKVxuICAgIH1cblxuICAgIGlmIChkaXN0LnIgPCAwKSB7XG4gICAgICBkaXN0ID0ge1xuICAgICAgICByOiAtZGlzdC5yLFxuICAgICAgICBkZXY6ICgxODAgLSBkaXN0LmRlYykgJSAzNjBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdDtcblxuICAgIGZ1bmN0aW9uIGZyb21Qb2xhcihwb2xhcikgeyAvLyB0b2RvOiBlbGltaW5hdGUgdGhpc1xuICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgICB5OiBwb2xhci5yICogTWF0aC5jb3MocG9sYXIuZGVjICogTWF0aC5QSS8xODApXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFkZFBvbDogKG9iajFQb2wsIG9iajJQb2wpID0+IHtcblxuICAgIGNvbnN0IG9iajFDYXIgPSBmcm9tUG9sYXIob2JqMVBvbCk7XG4gICAgY29uc3Qgb2JqMkNhciA9IGZyb21Qb2xhcihvYmoyUG9sKTtcbiAgICBjb25zdCBkaXN0ID0ge1xuICAgICAgcjogTWF0aC5zcXJ0KE1hdGguYWJzKG9iajJDYXIueCArIG9iajFDYXIueCkgKiogMiArIE1hdGguYWJzKG9iajJDYXIueSArIG9iajFDYXIueSkgKiogMiksXG4gICAgICBkZWM6IE1hdGguYXRhbigob2JqMkNhci54ICsgb2JqMUNhci54KSAvIChvYmoyQ2FyLnkgKyBvYmoxQ2FyLnkpKSAvIChNYXRoLlBJLzE4MClcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdDtcblxuICAgIGZ1bmN0aW9uIGZyb21Qb2xhcihwb2xhcikgeyAvLyB0b2RvOiBlbGltaW5hdGUgdGhpc1xuICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgICB5OiBwb2xhci5yICogTWF0aC5jb3MocG9sYXIuZGVjICogTWF0aC5QSS8xODApXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRvRGVnMzYwOiAoZGVnKSA9PiB7XG4gICAgcmV0dXJuIGRlZyAlIDM2MDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBDYWxjOyIsImltcG9ydCByZW5kZXJTdmcgZnJvbSAnLi9yZW5kZXItc3ZnJztcbmltcG9ydCBtb3ZlU3ZnIGZyb20gJy4vbW92ZS1zdmcnO1xuaW1wb3J0IGVhcnRoIGZyb20gJy4vZWFydGgnO1xuaW1wb3J0IG1vb24gZnJvbSAnLi9tb29uJztcbmltcG9ydCBpc3MgZnJvbSAnLi9pc3MnO1xuaW1wb3J0IHNoaXAxIGZyb20gJy4vc2hpcCc7XG5cbmltcG9ydCBoZWxwQ2FsYyBmcm9tICcuL2hlbHBDYWxjJztcblxuZG9jdW1lbnQub25Mb2FkID0gbG9hZEFwcDtcblxudmFyIGFwcCA9IGZ1bmN0aW9uKGRlcHMpe1xuXG4gIHZhciBvYmpzID0gZGVwcy5vYmpzO1xuICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIHZhciBtb3ZlU3ZnID0gZGVwcy5tb3ZlU3ZnKGhlbHBDYWxjKTtcbiAgdmFyIHJlbmRlclN2ZyA9IGRlcHMucmVuZGVyU3ZnKGRlcHMuaGVscENhbGMpXG4gIHZhciBwYW5lbCA9IGdldFBhbmVsKG9ianMuZWFydGgpO1xuICB2YXIgc2hpcDEgPSBkZXBzLnNoaXAxKCk7XG5cbiAgbW92ZVN2Zy5pbml0KG9ianMpO1xuXG4gIHZhciBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyAvLyBsZWF2ZSB1bnRpbCBzaGlwIGlzIHN2Z1xuXG4gIHJlbmRlclN2Zy5jcmVhdGUob2JqcywgY2FudmFzLnN0YXRlLnpvb20pO1xuICByZW5kZXJTdmcuY3JlYXRlT25lKHNoaXAxLCBjYW52YXMuc3RhdGUuem9vbSk7XG5cbiAgZG9jdW1lbnQub25jbGljayA9IHZlcmlmeUNsaWNrO1xuICBkb2N1bWVudC5vbmtleWRvd24gPSB2ZXJpZnlLZXk7XG5cbiAgbG9vcCgpO1xuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghY2FudmFzLnN0YXRlLnBsYXkpIHJldHVybjtcbiAgICAgIGNhbnZhcy5zdGF0ZS50aW1lICs9IChjYW52YXMuc3RhdGUuc2Vjb25kU2tpcCAqIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQpO1xuXG4gICAgICBtb3ZlU3ZnLm1vdmUoY2FudmFzLnN0YXRlLnNlY29uZFNraXAsIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQpO1xuICAgICAgcmVuZGVyU3ZnLnVwZGF0ZShvYmpzLCBjYW52YXMuc3RhdGUuem9vbSk7XG5cbiAgICAgIHNoaXAxLmJ1cnN0VXBkYXRlKGNhbnZhcy5zdGF0ZS5zZWNvbmRTa2lwLCBjYW52YXMuc3RhdGUudGltZVNwZWVkKTtcbiAgICAgIG1vdmVTdmcubW92ZU9uZShzaGlwMS5vYmpMaXN0WzBdLCBjYW52YXMuc3RhdGUuc2Vjb25kU2tpcCwgY2FudmFzLnN0YXRlLnRpbWVTcGVlZCwgW29ianMuZWFydGgub2JqTGlzdFsyXSxvYmpzLm1vb24ub2JqTGlzdFswXV0pO1xuICAgICAgcmVuZGVyU3ZnLnVwZGF0ZU9uZShzaGlwMSwgY2FudmFzLnN0YXRlLnpvb20pO1xuICAgICAgcGFuZWwudXBkYXRlKCk7XG5cbiAgICAgIGlmIChzaGlwMS5vYmpMaXN0WzBdLnBvc2l0aW9uLmNyYXNoKSB7XG4gICAgICAgIGFsZXJ0KCdzaGlwIGNyYXNoZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIWNoZWNrVGltZU91dCgpKSBsb29wKCk7XG4gICAgfSwgMTAwMCAqIGNhbnZhcy5zdGF0ZS5zZWNvbmRTa2lwKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2hlY2tUaW1lT3V0KCkge1xuICAgIHZhciBkMCA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIHZhciBkID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgZC5zZXRTZWNvbmRzKGNhbnZhcy5zdGF0ZS50aW1lKTtcbiAgICB2YXIgZGF5cyA9IHBhcnNlSW50KChkIC0gZDApIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBcbiAgICBpZiAoZGF5cyA+IDM2NSkge1xuICAgICAgYWxlcnQoJ0V4YXVzdGVkIGZ1ZWwgYWZ0ZXIgMSB5ZWFyIG9mIGZsaWdodC4gUmVsb2FkIGdhbWUuJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5Q2xpY2soZSkge1xuICAgIGlmKGUudGFyZ2V0Lm5vZGVOYW1lID09ICdBJykge1xuICAgICAgdmFyIHJlYWxMaW5rID0gZS50YXJnZXQuaHJlZlxuICAgICAgdmFyIGFjdGlvbiA9IHJlYWxMaW5rXG4gICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy8jLycsICcnKVxuICAgICAgICAucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLCAnJyk7XG5cbiAgICAgIGlmICghWydmaWxlOicsJ2h0dHA6J10uaW5jbHVkZXMoYWN0aW9uLnN1YnN0cmluZygwLDUpKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RpbWVQbGF5JykgY2FudmFzLnBsYXlTdG9wKCk7XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3pvb21NaW51cycpIGNhbnZhcy56b29tTXVsdGlwbHkoMik7XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3pvb21QbHVzJykgY2FudmFzLnpvb21NdWx0aXBseSguNSk7XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3RpbWVQbHVzJykgY2FudmFzLnRpbWVNdWx0aXBseSgyKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAndGltZU1pbnVzJykgY2FudmFzLnRpbWVNdWx0aXBseSguNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5S2V5KGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUuY29kZTtcbiAgICBpZiAoa2V5Q29kZSA9PT0gJ0tleVAnKSBjYW52YXMucGxheVN0b3AoKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnQXJyb3dVcCcpIHNoaXAxLmFkZFBpdGNoKDEwKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnQXJyb3dEb3duJykgc2hpcDEuYWRkUGl0Y2goLTEwKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnS2V5QScpIHNoaXAxLmFkZEJ1cnN0VE5leHQoMSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0tleVonKSBzaGlwMS5hZGRCdXJzdFROZXh0KC0xKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnTWludXMnKSBjYW52YXMuem9vbU11bHRpcGx5KDIpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdFcXVhbCcpIGNhbnZhcy56b29tTXVsdGlwbHkoLjUpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdQZXJpb2QnKSBjYW52YXMudGltZU11bHRpcGx5KDIpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdDb21tYScpIGNhbnZhcy50aW1lTXVsdGlwbHkoLjUpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUuc3Vic3RyaW5nKDAsNSkgPT09ICdEaWdpdCcpIHtcbiAgICAgIHNoaXAxLnNldEJ1cnN0QU5leHQoa2V5Q29kZS5yZXBsYWNlKCdEaWdpdCcsICcnKSlcbiAgICB9XG4gICAgaWYgKCFjYW52YXMuc3RhdGUucGxheSkgcmV0dXJuO1xuXG4gICAgaWYgKGtleUNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgIHNoaXAxLmJ1cnN0U3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDYW52YXMoKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgd2lkdGhJbmk6IDIwMDAsXG4gICAgICB3aWR0aDogMjAwMCwgLy8gKG0pXG4gICAgICBoZWlnaHRQeDogMCxcbiAgICAgIHdpZHRoUHg6IDAsXG4gICAgICB6b29tOiAxLFxuICAgICAgcGxheTogdHJ1ZSxcbiAgICAgIHRpbWU6IDAsIC8vIHRpbWUgcGFzc2VkIChzKVxuICAgICAgdGltZVNwZWVkOiAxLFxuICAgICAgc2Vjb25kU2tpcDogMC4xLCAvLyBlYWNoIHRpbWUgbG9vcCB0aW1taW5nIChzKVxuICAgIH1cblxuICAgIHZhciB6b29tTXVsdGlwbHkgPSBmdW5jdGlvbih0aW1lcykge1xuICAgICAgc3RhdGUuem9vbSAqPSB0aW1lcztcbiAgICAgIHN0YXRlLnpvb20gPSBNYXRoLm1heChzdGF0ZS56b29tLCAxKTtcbiAgICAgIHJlbmRlclN2Zy51cGRhdGUoZGVwcy5vYmpzLCBzdGF0ZS56b29tKVxuICAgIH1cblxuICAgIHZhciB0aW1lTXVsdGlwbHkgPSBmdW5jdGlvbih0aW1lcykge1xuICAgICAgdmFyIHRpbWVTcGVlZCA9IGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQgKiB0aW1lcztcbiAgICAgIGlmICh0aW1lU3BlZWQgPCAxKSB0aW1lU3BlZWQgPSAxO1xuICAgICAgaWYgKHRpbWVTcGVlZCA+IDEwMDAwMDApIHRpbWVTcGVlZCA9IDEwMDAwMDA7XG4gICAgICBjYW52YXMuc3RhdGUudGltZVNwZWVkID0gcGFyc2VJbnQodGltZVNwZWVkKTtcbiAgICAgIHBhbmVsLnVwZGF0ZSgndGltZVNwZWVkJyk7XG4gICAgfVxuXG4gICAgdmFyIHBsYXlTdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMuc3RhdGUucGxheSA9ICFjYW52YXMuc3RhdGUucGxheTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykuc3R5bGUuY29sb3IgPSBjYW52YXMuc3RhdGUucGxheSA/ICd3aGl0ZScgOiAncmVkJztcbiAgICAgIHBhbmVsLnVwZGF0ZSgndGltZVBsYXknKTtcbiAgICAgIGlmIChjYW52YXMuc3RhdGUucGxheSkgbG9vcCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbGF5U3RvcCxcbiAgICAgIHN0YXRlLFxuICAgICAgdGltZU11bHRpcGx5LFxuICAgICAgem9vbU11bHRpcGx5XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWwoZWFydGgpIHtcblxuICAgIHZhciBwb3NpdGlvbiA9IHt9O1xuXG4gICAgdmFyIGNvbnRlbnQgPSB7IC8vIHh4eFxuICAgICAgYWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVuaXQgPSAnbSc7XG4gICAgICAgIHZhciBhbHQgPSBwb3NpdGlvbi5yIC0gZWFydGgucjtcbiAgICAgICAgaWYgKGFsdCA+IDEwMDApIHtcbiAgICAgICAgICBhbHQgLz0gIDEwMDBcbiAgICAgICAgICB1bml0ID0gJ2ttJztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFsdCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyB1bml0O1xuICAgICAgfSxcbiAgICAgIGxvbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29udkxvbmcocG9zaXRpb24uZGVjKTtcbiAgICAgIH0sXG4gICAgICBwaXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb252RGVnKHRvRGVnMTgwKDkwIC0gcG9zaXRpb24ucGl0Y2hEZWMpKTtcbiAgICAgIH0sXG4gICAgICBjbGltYjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2RGVjID0gcG9zaXRpb24udkRlYyArIHBvc2l0aW9uLmRlYztcbiAgICAgICAgdmFyIGNsaW1iID0gcG9zaXRpb24udlIgKiBNYXRoLmNvcyh2RGVjICogKE1hdGguUEkvMTgwKSlcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoY2xpbWIgKiAzLjYpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpICsgJ2ttL2gnO1xuICAgICAgfSxcbiAgICAgIHZPcmJpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2RGVjID0gcG9zaXRpb24udkRlYyArIHBvc2l0aW9uLmRlYztcbiAgICAgICAgdmFyIHYgPSBwb3NpdGlvbi52UiAqIE1hdGguc2luKHZEZWMgKiAoTWF0aC5QSS8xODApKVxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICAgIH0sXG4gICAgICBzcGVlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBvc2l0aW9uLnZSICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICAgIH0sXG4gICAgICBidXJzdEE6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSA9IChwb3NpdGlvbi5idXJzdC5hIC8gZWFydGguZykudG9GaXhlZCgwKTtcbiAgICAgICAgdmFyIGFOZXh0ID0gKHBvc2l0aW9uLmJ1cnN0LmFOZXh0IC8gZWFydGguZykudG9GaXhlZCgwKTtcbiAgICAgICAgcmV0dXJuIGEgKyAnZyAoJyArIGFOZXh0ICsgJ2cpJztcbiAgICAgIH0sXG4gICAgICBidXJzdFQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChwb3NpdGlvbi5idXJzdC50KSArICdzICgnICsgcG9zaXRpb24uYnVyc3QudE5leHQudG9GaXhlZCgwKSArICdzKSc7XG4gICAgICB9LFxuICAgICAgc2NhbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2NhbGUgPSBjYW52YXMuc3RhdGUud2lkdGggLyAxMCAgKiBjYW52YXMuc3RhdGUuem9vbTtcbiAgICAgICAgcmV0dXJuIGNvbnZNa20oc2NhbGUpO2dcbiAgICAgIH0sXG4gICAgICB0aW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGQwID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIGQuc2V0U2Vjb25kcyhjYW52YXMuc3RhdGUudGltZSk7XG4gICAgICAgIHZhciBkYXlzID0gcGFyc2VJbnQoKGQgLSBkMCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICByZXR1cm4gZGF5cyArICdkICcgKyBkLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXIxMjogZmFsc2UgfSk7XG4gICAgICB9LFxuICAgICAgaGVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb252RGVnKHBvc2l0aW9uLnZEZWMpO1xuICAgICAgfSxcbiAgICAgIHpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgem9vbSAgPSBjYW52YXMuc3RhdGUuem9vbVxuICAgICAgICByZXR1cm4gem9vbSA8IDEwMDAgPyB6b29tIDogTWF0aC5yb3VuZCh6b29tIC8gMTAwMCkgKyAnayc7XG4gICAgICB9LFxuICAgICAgdGltZVNwZWVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZLTShjYW52YXMuc3RhdGUudGltZVNwZWVkKTtcbiAgICAgIH0sXG4gICAgICB0aW1lUGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjYW52YXMuc3RhdGUucGxheSA/ICdQYXVzZScgOiAnUGxheSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpLmlubmVyVGV4dCA9IGNvbnRlbnRba2V5XSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24gPSBzaGlwMS5vYmpMaXN0WzBdLnBvc2l0aW9uO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnQpO1xuICAgICAgICBrZXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkuaW5uZXJUZXh0ID0gY29udGVudFtlbGVtZW50XSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252RGVnKGRlZykge1xuICAgICAgdmFyIHR4dCA9IE1hdGgucm91bmQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udkxvbmcoZGVnKSB7XG4gICAgICB2YXIgdHh0ID0gcGFyc2VJbnQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICAgIHZhciBtaW4gPSAoKGRlZyAtIHBhcnNlSW50KGRlZykpICogNjApLnRvRml4ZWQoMik7XG4gICAgICBpZiAobWluIDwgMTApIHR4dCArPSAnMCc7XG4gICAgICB0eHQgKz0gbWluICsgJ1xcJyc7XG4gICAgICByZXR1cm4gdHh0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZNa20oZCkge1xuICAgICAgcmV0dXJuIChkIDwgMTAwMCkgPyBkICsgJ20nIDogZC8xMDAwICsgJ2ttJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252S00oZCkge1xuICAgICAgdmFyIHR4dCA9IGQ7XG4gICAgICBpZiAoZCA+PSAxMDAwKSB0eHQgPSBwYXJzZUludChkLzEwMDApICsgJ2snO1xuICAgICAgZWxzZSBpZiAoZCA+PSAxMDAwMDAwKSB0eHQgPSBwYXJzZUludChkLzEwMDAwMDApICsgJ00nO1xuICAgICAgcmV0dXJuIHR4dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0RlZzE4MChkZWcpIHtcbiAgICAgIHZhciByZXQgPSBkZWcgJSAzNjA7XG4gICAgICBpZiAocmV0ID4gMTgwKSByZXQgPSByZXQgLSAzNjA7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVcbiAgICB9XG4gIH1cblxufVxuXG52YXIgbG9hZEFwcCA9IChmdW5jdGlvbigpIHtcblxuICB2YXIgZGVwcyA9IHtcbiAgICByZW5kZXJTdmc6IHJlbmRlclN2ZyxcbiAgICBtb3ZlU3ZnOiBtb3ZlU3ZnLFxuICAgIHNoaXAxOiBzaGlwMSxcbiAgICBvYmpzOiB7XG4gICAgICBlYXJ0aDogZWFydGgsXG4gICAgICBtb29uOiBtb29uLFxuICAgICAgaXNzOiBpc3MsXG4gICAgfSxcbiAgICBoZWxwQ2FsYzogaGVscENhbGNcbiAgfVxuXG4gIGFwcChkZXBzKTtcbn0pKClcblxuIiwidmFyIGlzcyA9IHtcblx0aWQ6ICdpc3MnLFxuXHRvYmpMaXN0OiBbXG5cdFx0e1xuXHRcdFx0aWQ6ICdpc3MnLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0XHRyOiAxMDAsIC8vIG1cblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDYzNzgxMDAgKyAzMDkwMDAsIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyIChtKVxuXHRcdFx0XHRkZWM6IDAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0XHR2UjogMCxcblx0XHRcdFx0dkRlYzogMzYwIC8gKDkyLjY4ICogNjAwKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyNkOWQ5ZDknXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyB7XG5cdFx0Ly8gXHRpZDogJ2lzc09yYml0Jyxcblx0XHQvLyBcdHJlbmRlclR5cGU6ICdzdmcnLFxuXHRcdC8vIFx0cjogNjM3ODEwMCArIDMwOTAwMCwgLy8gbVxuXHRcdC8vIFx0cG9zaXRpb246IHtcblx0XHQvLyBcdFx0cjogMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0Ly8gXHRcdGRlYzogMCwgLy8gZGVjbGluYXRpb24gKGRlZyksIGNvdWxkIGJlIGFueSB2YWx1ZSBiZWNhdXNlIHIgPSAwXG5cdFx0Ly8gXHRcdHZSOiAwLCAvLyBkaXN0YW5jZSBmcm9tIGVhcnRoIGNlbnRlciAobSlcblx0XHQvLyBcdFx0dkRlYzogMCAvLyBvcmJpdGFsIHNwZWVkIChkZWMvcylcblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRyZW5kZXI6IHtcblx0XHQvLyBcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHQvLyBcdFx0Y29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0Ly8gXHRcdHN0cm9rZTogJ3doaXRlJyxcblx0XHQvLyBcdFx0c3Ryb2tlRGFzaGFycmF5OiAnMSw0J1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc3M7IiwidmFyIG1vb24gPSB7XG5cdGlkOiAnbW9vbicsXG5cdG9iakxpc3Q6IFtcblx0XHR7XG5cdFx0XHRpZDogJ21vb24nLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG4gICAgICByOiAxNzM4MDAwLCAvLyBtXG4gICAgICBtYXNzOiA3LjM0NzY3ICogTWF0aC5wb3coMTAsIDIyKSwgLy8ga2dcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDM4NDAwMDAwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogOTAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0XHR2UjogMCxcblx0XHRcdFx0dkRlYzogMzYwIC8gKDI3LjMyMiAqIDI0ICogNjAgKiA2MDApXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnI0Y1RjNDRSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdGlkOiAnbW9vbk9yYml0Jyxcblx0XHQvLyBcdHJlbmRlclR5cGU6ICdzdmcnLFxuXHRcdC8vIFx0cjogMzg0MDAwMDAwLCAvLyBtXG5cdFx0Ly8gXHRwb3NpdGlvbjoge1xuXHRcdC8vIFx0XHRyOiAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHQvLyBcdFx0ZGVjOiAwLCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRyZW5kZXI6IHtcblx0XHQvLyBcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHQvLyBcdFx0Y29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0Ly8gXHRcdHN0cm9rZTogJ3doaXRlJyxcblx0XHQvLyBcdFx0c3Ryb2tlRGFzaGFycmF5OiAnMSw0J1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb29uOyIsImxldCBtb3ZlU3ZnID0gKGhlbHBDYWxjKSA9PiB7XG5cbiAgbGV0IGRhdGEgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0KG9ianMpIHtcbiAgICAvLyBjYWxsZWQgYXQgaW5pdFxuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmpMaXN0ID0gb2Jqc1trZXlzW2ldXS5vYmpMaXN0O1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmpMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvYmogPSBvYmpMaXN0W2pdO1xuICAgICAgICBpZiAob2JqLnBvc2l0aW9uLnZSIHx8IG9iai5wb3NpdGlvbi52RGVjKSB7IC8vIHdpbGwgbW92ZVxuICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBvYmoucG9zaXRpb247XG4gICAgICAgICAgbmV3RGF0YS5pZCA9IG9iai5pZDtcbiAgICAgICAgICBkYXRhID0gWy4uLmRhdGEsIG5ld0RhdGFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbW92ZSA9IChzZWNvbmRTa2lwLCB0aW1lU3BlZWQpID0+IHtcbiAgICAvLyBjYWxsZWQgYXQgaW5pdCBhbmQgZWFjaCBsb29wIGl0ZXJhY2lvblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSBkYXRhW2ldO1xuICAgICAgcG9zaXRpb24uciArPSBwb3NpdGlvbi52UiAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgICBwb3NpdGlvbi5kZWMgKz0gcG9zaXRpb24udkRlYyAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbW92ZU9uZSA9IChvYmosIHNlY29uZFNraXAsIHRpbWVTcGVlZCwgZ09ianMpID0+IHtcbiAgICB2YXIgYVBvbGFyID0ge3I6IG9iai5wb3NpdGlvbi5idXJzdC5hLCBkZWM6IChvYmoucG9zaXRpb24uZGVjICsgb2JqLnBvc2l0aW9uLnBpdGNoRGVjKSAlIDM2MH07XG4gICAgdmFyIGdQb2xhciA9IGdldExvY2FsRyhvYmosIGdPYmpzKTsgLy97cjogLWdldExvY2FsRyhvYmosIGdPYmpzKSwgZGVjOiBvYmoucG9zaXRpb24uZGVjfTtcbiAgICB2YXIgdlBvbGFyID0ge3I6IG9iai5wb3NpdGlvbi52UiwgZGVjOiBvYmoucG9zaXRpb24udkRlY307XG4gICAgdmFyIHBvc1BvbGFyID0ge3I6IG9iai5wb3NpdGlvbi5yLCBkZWM6IG9iai5wb3NpdGlvbi5kZWN9O1xuICAgIGlmICgocG9zUG9sYXIuciA8IGdPYmpzWzBdLnIpIHx8IChwb3NQb2xhci5yID09PSBnT2Jqc1swXS5yICYmIGFQb2xhci5yIDw9IDApKSB7XG4gICAgICBvYmoucG9zaXRpb24uciA9IGdPYmpzWzBdLnI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKGFQb2xhcik7XG4gICAgdmFyIGdDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKGdQb2xhcik7XG4gICAgdmFyIHZDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKHZQb2xhcik7XG4gICAgdmFyIHBvc0NhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIocG9zUG9sYXIpO1xuXG4gICAgdkNhcnQueCArPSAoYUNhcnQueCArIGdDYXJ0LngpICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICB2Q2FydC55ICs9IChhQ2FydC55ICsgZ0NhcnQueSkgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIHBvc0NhcnQueCArPSB2Q2FydC54ICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICBwb3NDYXJ0LnkgKz0gdkNhcnQueSAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG5cbiAgICB2UG9sYXIgPSBoZWxwQ2FsYy50b1BvbGFyKHZDYXJ0KTtcbiAgICBwb3NQb2xhciA9IGhlbHBDYWxjLnRvUG9sYXIocG9zQ2FydCk7XG4gICAgaWYgKHBvc1BvbGFyLnIgPD0gZ09ianNbMF0uciAmJiB2UG9sYXIuciA+ICg1MCAvIDMuNikpIHtcbiAgICAgIHZQb2xhci5yID0gMDtcbiAgICAgIHZQb2xhci5kZWMgPSAwO1xuICAgICAgcG9zUG9sYXIuciA9IGdPYmpzWzBdLnIgLSAxMDtcbiAgICAgIG9iai5wb3NpdGlvbi5jcmFzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgb2JqLnBvc2l0aW9uLnZSID0gaGVscENhbGMucm91bmRNKHZQb2xhci5yKTtcbiAgICBvYmoucG9zaXRpb24udkRlYyA9IGhlbHBDYWxjLnJvdW5kTSh2UG9sYXIuZGVjKTtcbiAgICBvYmoucG9zaXRpb24uciA9IGhlbHBDYWxjLnJvdW5kTShwb3NQb2xhci5yKTtcbiAgICBvYmoucG9zaXRpb24uZGVjID0gaGVscENhbGMucm91bmRNKHBvc1BvbGFyLmRlYyk7XG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhbEcob2JqLCBnT2Jqcykge1xuXG4gICAgICAvLyBFYXJ0aFxuICAgICAgY29uc3QgbWFzcyA9IGdPYmpzWzBdLm1hc3M7XG4gICAgICBjb25zdCBkaXN0ID0gb2JqLnBvc2l0aW9uLnI7XG4gICAgICBjb25zdCBnUiA9ICg2LjY3ICogTWF0aC5wb3coMTAsIC0xMSkpICogbWFzcyAvIChkaXN0ICoqIDIpO1xuICAgICAgY29uc3QgZ0RlYyA9ICgxODAgLSBvYmoucG9zaXRpb24uZGVjKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2dFYXJ0aD0nLCB7cjogZ1IsIGRlYzogZ0RlY30pXG4gICAgICBcbiAgICAgIC8vTW9vblxuICAgICAgY29uc3QgbWFzczIgPSBnT2Jqc1sxXS5tYXNzO1xuICAgICAgY29uc3QgcG9zQ2FydFNoaXAgPSB7cjogb2JqLnBvc2l0aW9uLnIsIGRlYzogb2JqLnBvc2l0aW9uLmRlY307XG4gICAgICBjb25zdCBwb3NDYXJ0Q2VudGVyID0ge3I6IGdPYmpzWzFdLnBvc2l0aW9uLnIsIGRlYzogZ09ianNbMV0ucG9zaXRpb24uZGVjfTtcbiAgICAgIGNvbnN0IGRpc3QyID0gaGVscENhbGMuZGlzdFBvbChwb3NDYXJ0U2hpcCwgcG9zQ2FydENlbnRlcik7XG4gICAgICBjb25zdCBnUjIgPSAoNi42NyAqIE1hdGgucG93KDEwLCAtMTEpKSAqIG1hc3MyIC8gKGRpc3QyLnIgKiogMik7XG4gICAgICBjb25zdCBnRGVjMiA9IGRpc3QyLmRlYztcbiAgICAgIC8vY29uc29sZS5sb2coJ2dNb29uPScsIHtyOiBnUjIsIGRlYzogZ0RlYzJ9KVxuXG4gICAgICBjb25zdCBnUG9sID0gaGVscENhbGMuYWRkUG9sKHtyOiBnUiwgZGVjOiBnRGVjfSwge3I6IGdSMiwgZGVjOiBnRGVjMn0pXG5cbiAgICAgIHJldHVybiBnUG9sXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgbW92ZSxcbiAgICBtb3ZlT25lXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW92ZVN2ZyIsIlxubGV0IHJlbmRlclN2ZyA9IChoZWxwQ2FsYykgPT4ge1xuXG4gIGxldCBjYW52YXNOb2RlO1xuICBsZXQgdmlld0NlbnRlcjtcbiAgbGV0IGJ1cnN0Tm9kZTtcblxuICBpbml0KClcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgdmlld0NlbnRlciA9IGdldFZpZXdDZW50ZXIoY2FudmFzTm9kZSk7XG4gIH1cblxuICBsZXQgY3JlYXRlID0gKG9ianMsIHpvb20pID0+IHtcbiAgICAvLyBjYWxsZWQgYXQgaW5pdFxuICAgIFxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2Jqcyk7IC8vIGNoaWxkcmVuIGJlZm9yZSB0byBoZW5kZXIgYmVoaW5kXG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgb2JqID0gb2Jqc1trZXldO1xuICAgICAgaWYgKG9iai5vYmpMaXN0KSB7XG4gICAgICAgIG9iai5vYmpMaXN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICBjcmVhdGVPYmooY2FudmFzTm9kZSwgb2JqKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cGRhdGUob2Jqcywgem9vbSk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVPbmUgPSAob2JqLCB6b29tKSA9PiB7XG4gICAgLy8gY2FsbGVkIGF0IGluaXRcblxuICAgIG9iai5vYmpMaXN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNyZWF0ZU9iaihjYW52YXNOb2RlLCBvYmopO1xuICAgIH0pXG4gICAgXG4gICAgdXBkYXRlT2JqKG9iai5vYmpMaXN0WzBdLCB6b29tKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlT25lID0gKG9iaiwgem9vbSkgPT4ge1xuICAgIHVwZGF0ZU9iaihvYmoub2JqTGlzdFswXSwgem9vbSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZSA9IChvYmpzLCB6b29tKSA9PiB7XG4gICAgLy8gY2FsbGVkIGF0IGluaXQgYW5kIGVhY2ggbG9vcCBpdGVyYWNpb25cblxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2Jqcyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgb2JqID0gb2Jqc1trZXldO1xuXG4gICAgICBpZiAob2JqLnJlbmRlclR5cGUgPT09ICdzdmcnKSB1cGRhdGVPYmoob2JqLCB6b29tKTtcbiAgICAgIG9iai5vYmpMaXN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgdXBkYXRlT2JqKG9iaiwgem9vbSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqKGNhbnZhc05vZGUsIG9iaikge1xuXG4gICAgbGV0IHBhcmVudE5vZGU7XG4gICAgbGV0IHN2Z25zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgb2JqLnJlbmRlci5mb3JtYXQpO1xuICAgIGlmIChvYmouaWQpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgb2JqLmlkKTtcblxuICAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqLnJlbmRlcik7IC8vIG9wdGlvbiB0byBiZWxvd1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIFx0aWYgKGtleXNbaV0gIT09ICdmb3JtYXQnICYmIGtleXNbaV0gIT09ICdwYXJlbnRJZCcpIHtcbiAgICAvLyBcdFx0Ly9uZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsIGtleXNbaV0sIG9iai5yZW5kZXJba2V5c1tpXV0pO1xuICAgIC8vIFx0fVxuICAgIC8vIH1cbiAgICBcbiAgICBpZiAob2JqLnJlbmRlci5jb2xvcikgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsIG9iai5yZW5kZXIuY29sb3IpO1xuICAgIGlmIChvYmoucmVuZGVyLnN0cm9rZSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlJywgb2JqLnJlbmRlci5zdHJva2UpO1xuICAgIGlmIChvYmoucmVuZGVyLnN0cm9rZURhc2hhcnJheSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLWRhc2hhcnJheScsIG9iai5yZW5kZXIuc3Ryb2tlRGFzaGFycmF5KTtcbiAgICBpZiAob2JqLnJlbmRlci5zdGREZXZpYXRpb24pIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0ZERldmlhdGlvbicsIG9iai5yZW5kZXIuc3RkRGV2aWF0aW9uKTtcbiAgICBpZiAob2JqLnJlbmRlci5jbGlwUGF0aCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY2xpcC1wYXRoJywgb2JqLnJlbmRlci5jbGlwUGF0aCk7XG4gICAgaWYgKG9iai5yZW5kZXIuZmlsdGVyKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWx0ZXInLCBvYmoucmVuZGVyLmZpbHRlcik7XG4gICAgaWYgKG9iai5yZW5kZXIucG9pbnRzKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwb2ludHMnLCBvYmoucmVuZGVyLnBvaW50cyk7XG4gICAgaWYgKG9iai5yZW5kZXIueCB8fCBvYmoucmVuZGVyLnggPT09IDApIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBvYmoucmVuZGVyLngpO1xuICAgIGlmIChvYmoucmVuZGVyLnkgfHwgb2JqLnJlbmRlci55ID09PSAwKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5Jywgb2JqLnJlbmRlci55KTtcbiAgICBpZiAob2JqLnJlbmRlci53aWR0aCB8fCBvYmoucmVuZGVyLndpZHRoID09PSAwKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIG9iai5yZW5kZXIud2lkdGgpO1xuICAgIGlmIChvYmoucmVuZGVyLmhlaWdodCB8fCBvYmoucmVuZGVyLmhlaWdodCA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgb2JqLnJlbmRlci5oZWlnaHQpO1xuICAgIGlmIChvYmoucmVuZGVyLmN4KSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIG9iai5yZW5kZXIuY3gpO1xuICAgIGlmIChvYmoucmVuZGVyLmN5KSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIG9iai5yZW5kZXIuY3kpO1xuICAgIGlmIChvYmoucmVuZGVyLnJ4KSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyeCcsIG9iai5yZW5kZXIucngpO1xuICAgIGlmIChvYmoucmVuZGVyLnJ5KSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyeScsIG9iai5yZW5kZXIucnkpO1xuICAgIC8vIHksIHksIHdpZHRoIGFuZCBoZWlnaHQgbWF5IGJlIGFzc2lnbmVkIGluIHVwZGF0ZU9iaigpLCB0cmFuc2Zvcm0gd2lsbFxuXG4gICAgaWYgKG9iai5yZW5kZXIucGFyZW50SWQpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmoucmVuZGVyLnBhcmVudElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1N2Z05vZGUgPSBnZXRTdmdDYW52YXNOb2RlKGNhbnZhc05vZGUpO1xuICAgICAgY2FudmFzTm9kZS5hcHBlbmRDaGlsZChjYW52YXNTdmdOb2RlKTtcbiAgICAgIHBhcmVudE5vZGUgPSBjYW52YXNTdmdOb2RlO1xuICAgIH1cblxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgaWYgKG9iai5pZCA9PT0gJ3NoaXBCdXJzdCcpIGJ1cnN0Tm9kZSA9IG5ld05vZGU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPYmoob2JqLCB6b29tKSB7XG4gICAgY29uc3QgY2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcih7XG4gICAgICByOiBvYmoucG9zaXRpb24ucixcbiAgICAgIGRlYzogb2JqLnBvc2l0aW9uLmRlY1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHJpbSA9IGdldFRyaW0oem9vbSk7XG5cbiAgICBjb25zdCBzdmdUYWcgPSBvYmoucmVuZGVyLmZvcm1hdDtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5pZCk7XG4gICAgaWYgKHN2Z1RhZyA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGxldCByUHggPSBNYXRoLm1heCgyLCBvYmouciAvIHpvb20pO1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsICh2aWV3Q2VudGVyLnggKyB0cmltLnggKyBjYXJ0LnggLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsICh2aWV3Q2VudGVyLnkgKyB0cmltLnkgLSBjYXJ0LnkgLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgclB4KTtcbiAgICB9IGVsc2UgaWYgKHN2Z1RhZyA9PT0gJ3JlY3QnKSB7XG4gICAgICBjb25zdCB3aWR0aFB4ID0gTWF0aC5tYXgoMiwgb2JqLndpZHRoIC8gem9vbSk7XG4gICAgICBjb25zdCBoZWlnaHRQeCA9IE1hdGgubWF4KDIsIG9iai5oZWlnaHQgLyB6b29tKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsICh2aWV3Q2VudGVyLnggKyB0cmltLnggLSBjYXJ0Lngvem9vbSAtICh3aWR0aFB4IC8gMikpKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCAodmlld0NlbnRlci55ICsgdHJpbS55IC0gY2FydC55IC8gem9vbSkpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aFB4KTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIGhlaWdodFB4KTtcbiAgICB9IGVsc2UgaWYgKG9iai5pZCA9PT0gJ3NoaXAxJykge1xuICAgICAgY29uc3QgeCA9ICh2aWV3Q2VudGVyLnggKyB0cmltLnggKyBjYXJ0Lngvem9vbSAtIDEwKTtcbiAgICAgIGNvbnN0IHkgPSAodmlld0NlbnRlci55ICsgdHJpbS55IC0gY2FydC55IC8gem9vbSAtIDEwKTtcbiAgICAgIGNvbnN0IHBpdGNoID0gb2JqLnBvc2l0aW9uLnBpdGNoRGVjO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9LCR7eX0pIHJvdGF0ZSgke3BpdGNofSlgO1xuICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IG9iai5wb3NpdGlvbi5idXJzdC5hID4gMCA/ICAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG4gICAgICBidXJzdE5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3Zpc2liaWxpdHknLCB2aXNpYmlsaXR5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdmdDYW52YXNOb2RlKGNhbnZhc05vZGUpIHtcblxuICAgIHZhciBjYW52YXNTdmdOb2RlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbnZhc05vZGUuY2hpbGRyZW5baV0uaWQgPT09ICdjYW52YXNTdmcnKSBjYW52YXNTdmdOb2RlID0gY2FudmFzTm9kZS5jaGlsZHJlbltpXTtcbiAgICB9XG5cbiAgICBpZiAoIWNhbnZhc1N2Z05vZGUpIHtcbiAgICAgIGxldCBzdmducyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICBjYW52YXNTdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnc3ZnJyk7XG4gICAgICBjYW52YXNTdmdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdpZCcsICdjYW52YXNTdmcnKTtcbiAgICAgIGNhbnZhc1N2Z05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIGNhbnZhc1N2Z05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsICcxMDAlJyk7ICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbnZhc1N2Z05vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3Q2VudGVyKGNhbnZhc05vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeTogY2FudmFzTm9kZS5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgeDogY2FudmFzTm9kZS5vZmZzZXRXaWR0aCAvIDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmltKHpvb20pIHtcblxuICAgIHZhciB0cmltWSA9IDYzNzgxMDA7XG4gICAgaWYgKHpvb20gPDEwMDAwICkgdHJpbVkgPSA2Mzc4MTAwICsgMjAwICogem9vbSA7XG4gICAgaWYgKHpvb20gPiAxMDAwMDAgLyAyICkgdHJpbVkgPSA2Mzc4MTAwIC8gMjtcbiAgICBpZiAoem9vbSA+IDEwMDAwMCApIHRyaW1ZID0gMDtcblxuICAgIGxldCB0cmltID0ge1xuICAgICAgeDogMCAvIHpvb20sXG4gICAgICB5OiB0cmltWSAgLyB6b29tXG4gICAgfVxuICAgIHJldHVybiB0cmltO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgY3JlYXRlT25lLFxuICAgIHVwZGF0ZSxcbiAgICB1cGRhdGVPbmVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdmc7IiwibGV0IHNoaXAxID0gKCkgPT4ge1xuXG4gIGNvbnN0IG9iakxpc3QgPSBbXG4gICAge1xuICAgICAgaWQ6ICdzaGlwMScsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICByOiA2Mzc4MTAwLCAvLyBkaXN0YW5jZSAobSlcbiAgICAgICAgZGVjOiAwLCAvLyBkZWNsaW5hdGlvbiAoZGVnKVxuICAgICAgICB2UjogMCwgLy8gdiBzcGVlZCAobS9zKVxuICAgICAgICB2RGVjOiAwLCAvLyBoZWFkaW5nLCBvciB2IGRlY2xpbmF0aW9uIChkZWcpXG4gICAgICAgIHBpdGNoRGVjOiAwLCAvLyBhdHRpdHVkZSBwaXRjaCAoZGVnKVxuICAgICAgICBidXJzdDoge1xuICAgICAgICAgIGE6IDAsLy8gY3VycmVudCBidXJzdCBhY2NlbGVyYXRpb24gKG0vczIpXG4gICAgICAgICAgYU5leHQ6IE1hdGgucm91bmQoNCAqIDkuODA2NjUpLCAvLyBzZWxlY3RlZCBhY2NlbGVyYXRpb24gZm9yIG5leHQgYnVyc3QgKG0vczIpXG4gICAgICAgICAgdDogMCwgLy8gY3VycmVudCBidXJzdCByZW1haW5pbmcgdGltZSAocylcbiAgICAgICAgICB0TmV4dDogNCAvLyBzZWxlY3RlZCB0aW1lIGZvciBuZXh0IGJ1cnN0IChzKVxuICAgICAgICB9LFxuICAgICAgICBjcmFzaGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBmb3JtYXQ6ICdnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDIwMCwyMDApIHJvdGF0ZSgwKSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc2hpcGJsdXInLFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcDEnLFxuICAgICAgICBmb3JtYXQ6ICdmaWx0ZXInLFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcGJsdXInLFxuICAgICAgICBmb3JtYXQ6ICdmZUdhdXNzaWFuQmx1cicsXG4gICAgICAgIHN0ZERldmlhdGlvbjogXCIxLjVcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzaGlwY3JvcCcsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ2NsaXBQYXRoJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXBjcm9wJyxcbiAgICAgICAgZm9ybWF0OiAncmVjdCcsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDgsXG4gICAgICAgIHdpZHRoOjEwLFxuICAgICAgICBoZWlnaHQ6IDE3XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NoaXBCdXJzdCcsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ2VsbGlwc2UnLFxuICAgICAgICBjeDogNSxcbiAgICAgICAgY3k6IDIzLFxuICAgICAgICByeDo1LFxuICAgICAgICByeTogJzEyJyxcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICBjbGlwUGF0aDogJ3VybCgjc2hpcGNyb3ApJyxcbiAgICAgICAgZmlsdGVyOiAndXJsKCNzaGlwYmx1ciknLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyAvLyBvciAndmlzaWJsZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAncG9seWdvbicsXG4gICAgICAgIHBvaW50czogJzUsMCAxMCwxMCA1LDcuNSAwLDEwJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgIH1cbiAgICB9XG4gIF1cblxuICBjb25zdCBidXJzdFVwZGF0ZSA9IChzZWNvbmRTa2lwLCB0aW1lU3BlZWQpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnQgLT0gc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICBpZiAob2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50IDw9IDAgKSB7XG4gICAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnQgPSAwO1xuICAgICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC5hID0gMDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRQaXRjaCA9IChhZGQpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLnBpdGNoRGVjID0gKG9iakxpc3RbMF0ucG9zaXRpb24ucGl0Y2hEZWMgKz0gYWRkKSAlIDM2MDtcbiAgfVxuXG4gIGNvbnN0IGFkZEJ1cnN0VE5leHQgPSAoYWRkKSA9PiB7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dCA9IE1hdGgubWF4KG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudE5leHQgKyBhZGQsIDApO1xuICB9XG5cbiAgY29uc3Qgc2V0QnVyc3RBTmV4dCA9IChnTmV4dCkgPT4ge1xuICAgIGlmIChnTmV4dCA8PSA5KSBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmFOZXh0ID0gTWF0aC5yb3VuZChnTmV4dCAqIDkuOCAqIDEwMCkvMTAwO1xuICB9XG5cbiAgdmFyIGJ1cnN0U3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmEgPSBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmFOZXh0O1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCA9IG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudE5leHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEJ1cnN0VE5leHQsXG4gICAgYWRkUGl0Y2gsXG4gICAgYnVyc3RTdGFydCxcbiAgICBidXJzdFVwZGF0ZSxcbiAgICBvYmpMaXN0LFxuICAgIHNldEJ1cnN0QU5leHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwMTsiXSwic291cmNlUm9vdCI6IiJ9