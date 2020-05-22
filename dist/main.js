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
  var ship1Data = deps.ship1();
  var ship1 = ship1Data.objList[0];
  moveSvg.init(objs);
  renderSvg.setObjCenter(objs.earth.objList[2]);
  renderSvg.create(objs, canvas.state.zoom, canvas.getRefObj(objs));
  renderSvg.createOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs));
  document.onclick = verifyClick;
  document.onkeydown = verifyKey;
  loop();

  function loop() {
    setTimeout(function () {
      if (!canvas.state.play) return;
      canvas.state.time += canvas.state.secondSkip * canvas.state.timeSpeed;
      moveSvg.move(canvas.state.secondSkip, canvas.state.timeSpeed);
      renderSvg.update(objs, canvas.state.zoom, canvas.getRefObj(objs));
      ship1Data.burstUpdate(canvas.state.secondSkip, canvas.state.timeSpeed);
      moveSvg.moveOne(ship1, canvas.state.secondSkip, canvas.state.timeSpeed, [objs.earth.objList[2], objs.moon.objList[0]]);
      renderSvg.updateOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs));
      panel.update();

      if (ship1.position.crash) {
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
        if (action === 'timePlay') canvas.playStop();else if (action === 'zoomMinus') canvas.zoomMultiply(2);else if (action === 'zoomPlus') canvas.zoomMultiply(.5);else if (action === 'timePlus') canvas.timeMultiply(2);else if (action === 'timeMinus') canvas.timeMultiply(.5);else if (action === 'modalClose') console.log('will close modalx');
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') canvas.playStop();else if (keyCode === 'ArrowUp') ship1Data.addPitch(10);else if (keyCode === 'ArrowDown') ship1Data.addPitch(-10);else if (keyCode === 'KeyA') ship1Data.addBurstTNext(1);else if (keyCode === 'KeyZ') ship1Data.addBurstTNext(-1);else if (keyCode === 'Minus') canvas.zoomMultiply(2);else if (keyCode === 'Equal') canvas.zoomMultiply(.5);else if (keyCode === 'Period') canvas.timeMultiply(2);else if (keyCode === 'Comma') canvas.timeMultiply(.5);else if (keyCode === 'KeyV') canvas.setRef();else if (keyCode.substring(0, 5) === 'Digit') {
      ship1Data.setBurstANext(keyCode.replace('Digit', ''));
    }
    if (!canvas.state.play) return;

    if (keyCode === 'Space') {
      ship1Data.burstStart();
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
      secondSkip: 0.1,
      // each time loop timming (s)
      ref: 'earth'
    };

    var zoomMultiply = function zoomMultiply(times) {
      state.zoom *= times;
      state.zoom = Math.max(state.zoom, 1);
      renderSvg.update(deps.objs, state.zoom, canvas.getRefObj(objs));
      renderSvg.updateOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs));
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

    var setRef = function setRef() {
      if (state.ref === 'earth') state.ref = 'moon';else state.ref = 'earth';
    };

    var getRefObj = function getRefObj(objs) {
      var obj = 'hey';
      if (state.ref === 'earth') obj = objs.earth.objList[2];else obj = objs.moon.objList[0];
      return obj;
    };

    return {
      playStop: playStop,
      state: state,
      timeMultiply: timeMultiply,
      zoomMultiply: zoomMultiply,
      setRef: setRef,
      getRefObj: getRefObj
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
      },
      ref: function ref() {
        return canvas.state.ref;
      }
    };

    var update = function update(key) {
      if (key) {
        document.getElementById(key).innerText = content[key]();
      } else {
        position = ship1.position;
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

  function modalClose() {
    console.log('will clode modal');
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
  var objCenter;
  var viewCenter;
  var burstNode;
  init();

  function init() {
    canvasNode = document.getElementById('canvas');
    viewCenter = getViewCenter(canvasNode);
  }

  var create = function create(objs, zoom, refObj) {
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];

      if (obj.objList) {
        obj.objList.forEach(function (obj) {
          createObj(canvasNode, obj);
        });
      }
    });
    update(objs, zoom, refObj);
  };

  var createOne = function createOne(obj, zoom, refObj) {
    obj.objList.forEach(function (obj) {
      createObj(canvasNode, obj);
    });
    updateObj(obj.objList[0], zoom, refObj);
  };

  var updateOne = function updateOne(obj, zoom, refObj) {
    updateObj(obj.objList[0], zoom, refObj);
  };

  var update = function update(objs, zoom, refObj) {
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];
      if (obj.renderType === 'svg') updateObj(obj, zoom, refObj);
      obj.objList.forEach(function (obj) {
        updateObj(obj, zoom, refObj);
      });
    });
  };

  var setObjCenter = function setObjCenter(obj) {
    objCenter = obj;
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

  function updateObj(obj, zoom, refObj) {
    var cart = helpCalc.fromPolar({
      r: obj.position.r,
      dec: obj.position.dec
    });
    var trim = getTrim(zoom, refObj);
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

  function getTrim(zoom, refObj) {
    var refCar = helpCalc.fromPolar({
      r: refObj.position.r,
      dec: refObj.position.dec
    });
    var trimY = refObj.r;
    if (zoom < 10000) trimY = refObj.r + 200 * zoom;
    if (zoom > objCenter.r) trimY = 0;
    var trim = {
      x: -refCar.x / zoom,
      y: (refCar.y + trimY) / zoom
    };
    return trim;
  }

  return {
    create: create,
    createOne: createOne,
    update: update,
    updateOne: updateOne,
    setObjCenter: setObjCenter
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VhcnRoLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwQ2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZS1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiXSwibmFtZXMiOlsiZWFydGgiLCJpZCIsInIiLCJnIiwib2JqTGlzdCIsInJlbmRlclR5cGUiLCJwb3NpdGlvbiIsImRlYyIsInJlbmRlciIsImZvcm1hdCIsImNvbG9yIiwibWFzcyIsIk1hdGgiLCJwb3ciLCJ3aWR0aCIsImhlaWdodCIsImhlbHBDYWxjIiwiZnJvbVBvbGFyIiwicG9sYXIiLCJ4Iiwic2luIiwiUEkiLCJ5IiwiY29zIiwidG9Qb2xhciIsImNhcnQiLCJhdGFuMiIsInJvdW5kTSIsInZhbCIsInJvdW5kIiwiZGlzdFBvbCIsIm9iajFQb2wiLCJvYmoyUG9sIiwib2JqMUNhciIsIm9iajJDYXIiLCJkaXN0Iiwic3FydCIsImFicyIsImF0YW4iLCJkZXYiLCJhZGRQb2wiLCJ0b0RlZzM2MCIsImRlZyIsImRvY3VtZW50Iiwib25Mb2FkIiwibG9hZEFwcCIsImFwcCIsImRlcHMiLCJvYmpzIiwiY2FudmFzIiwiZ2V0Q2FudmFzIiwibW92ZVN2ZyIsInJlbmRlclN2ZyIsInBhbmVsIiwiZ2V0UGFuZWwiLCJzaGlwMURhdGEiLCJzaGlwMSIsImluaXQiLCJzZXRPYmpDZW50ZXIiLCJjcmVhdGUiLCJzdGF0ZSIsInpvb20iLCJnZXRSZWZPYmoiLCJjcmVhdGVPbmUiLCJvbmNsaWNrIiwidmVyaWZ5Q2xpY2siLCJvbmtleWRvd24iLCJ2ZXJpZnlLZXkiLCJsb29wIiwic2V0VGltZW91dCIsInBsYXkiLCJ0aW1lIiwic2Vjb25kU2tpcCIsInRpbWVTcGVlZCIsIm1vdmUiLCJ1cGRhdGUiLCJidXJzdFVwZGF0ZSIsIm1vdmVPbmUiLCJtb29uIiwidXBkYXRlT25lIiwiY3Jhc2giLCJhbGVydCIsImNoZWNrVGltZU91dCIsImQwIiwiRGF0ZSIsImQiLCJzZXRTZWNvbmRzIiwiZGF5cyIsInBhcnNlSW50IiwiZSIsInRhcmdldCIsIm5vZGVOYW1lIiwicmVhbExpbmsiLCJocmVmIiwiYWN0aW9uIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJwcmV2ZW50RGVmYXVsdCIsInBsYXlTdG9wIiwiem9vbU11bHRpcGx5IiwidGltZU11bHRpcGx5IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJjb2RlIiwiYWRkUGl0Y2giLCJhZGRCdXJzdFROZXh0Iiwic2V0UmVmIiwic2V0QnVyc3RBTmV4dCIsImJ1cnN0U3RhcnQiLCJ3aWR0aEluaSIsImhlaWdodFB4Iiwid2lkdGhQeCIsInJlZiIsInRpbWVzIiwibWF4IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9iaiIsImNvbnRlbnQiLCJhbHQiLCJ1bml0IiwidG9Mb2NhbGVTdHJpbmciLCJjb252TG9uZyIsInBpdGNoIiwiY29udkRlZyIsInRvRGVnMTgwIiwicGl0Y2hEZWMiLCJjbGltYiIsInZEZWMiLCJ2UiIsInZPcmJpdCIsInYiLCJzcGVlZCIsImJ1cnN0QSIsImEiLCJidXJzdCIsInRvRml4ZWQiLCJhTmV4dCIsImJ1cnN0VCIsInQiLCJ0TmV4dCIsInNjYWxlIiwiY29udk1rbSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIxMiIsImhlYWQiLCJjb252S00iLCJ0aW1lUGxheSIsImtleSIsImlubmVyVGV4dCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInR4dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pbiIsInJldCIsIm1vZGFsQ2xvc2UiLCJpc3MiLCJkYXRhIiwiaSIsImxlbmd0aCIsImoiLCJuZXdEYXRhIiwiZ09ianMiLCJhUG9sYXIiLCJnUG9sYXIiLCJnZXRMb2NhbEciLCJ2UG9sYXIiLCJwb3NQb2xhciIsImFDYXJ0IiwiZ0NhcnQiLCJ2Q2FydCIsInBvc0NhcnQiLCJnUiIsImdEZWMiLCJtYXNzMiIsInBvc0NhcnRTaGlwIiwicG9zQ2FydENlbnRlciIsImRpc3QyIiwiZ1IyIiwiZ0RlYzIiLCJnUG9sIiwiY2FudmFzTm9kZSIsIm9iakNlbnRlciIsInZpZXdDZW50ZXIiLCJidXJzdE5vZGUiLCJnZXRWaWV3Q2VudGVyIiwicmVmT2JqIiwiY3JlYXRlT2JqIiwidXBkYXRlT2JqIiwicGFyZW50Tm9kZSIsInN2Z25zIiwibmV3Tm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwic3Ryb2tlIiwic3Ryb2tlRGFzaGFycmF5Iiwic3RkRGV2aWF0aW9uIiwiY2xpcFBhdGgiLCJmaWx0ZXIiLCJwb2ludHMiLCJjeCIsImN5IiwicngiLCJyeSIsInBhcmVudElkIiwiY2FudmFzU3ZnTm9kZSIsImdldFN2Z0NhbnZhc05vZGUiLCJhcHBlbmRDaGlsZCIsInRyaW0iLCJnZXRUcmltIiwic3ZnVGFnIiwibm9kZSIsInJQeCIsInRyYW5zZm9ybSIsInZpc2liaWxpdHkiLCJjaGlsZHJlbiIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicmVmQ2FyIiwidHJpbVkiLCJjcmFzaGVkIiwiYWRkIiwiZ05leHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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R0FBa0NxRixHQUEzQyxFQUFnRCxDQUFoRCxDQUFsQztBQUNELEdBRkQ7O0FBSUEsTUFBTXRILGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3VILEtBQUQsRUFBVztBQUMvQixRQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQnBPLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsUUFBWCxDQUFvQnVJLEtBQXBCLENBQTBCRSxLQUExQixHQUFrQ25JLElBQUksQ0FBQ2lCLEtBQUwsQ0FBVzJNLEtBQUssR0FBRyxHQUFSLEdBQWMsR0FBekIsSUFBOEIsR0FBaEU7QUFDakIsR0FGRDs7QUFJQSxNQUFJdEgsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUMxQjlHLFdBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsUUFBWCxDQUFvQnVJLEtBQXBCLENBQTBCRCxDQUExQixHQUE4QnhJLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsUUFBWCxDQUFvQnVJLEtBQXBCLENBQTBCRSxLQUF4RDtBQUNBM0ksV0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxRQUFYLENBQW9CdUksS0FBcEIsQ0FBMEJJLENBQTFCLEdBQThCN0ksT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxRQUFYLENBQW9CdUksS0FBcEIsQ0FBMEJLLEtBQXhEO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0xuQyxpQkFBYSxFQUFiQSxhQURLO0FBRUxELFlBQVEsRUFBUkEsUUFGSztBQUdMSSxjQUFVLEVBQVZBLFVBSEs7QUFJTHRDLGVBQVcsRUFBWEEsV0FKSztBQUtMeEUsV0FBTyxFQUFQQSxPQUxLO0FBTUw2RyxpQkFBYSxFQUFiQTtBQU5LLEdBQVA7QUFRRCxDQWpIRDs7QUFtSGV6RCxvRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBlYXJ0aCA9IHtcbiAgaWQ6ICdlYXJ0aCcsXG5cdHI6IDYzNzgxMDAsIC8vIGZvciBsZWdhY3kgbW92ZSBhbmQgcmVuZGVyIGRpdiAobSlcblx0ZzogOS44MDY2NSwgLy8gZm9yIGxlZ2FjeSBtb3ZlIGFuZCByZW5kZXIgZGl2IChtL3MyKVxuICBvYmpMaXN0OiBbXG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aExlbycsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDYzNzgxMDAgKyAxMDAwMDAwLFxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCxcblx0XHRcdFx0ZGVjOiAwXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnIzMwMzAzMCdcblx0XHRcdH1cblx0XHR9LFx0XG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aEF0bScsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDYzNzgxMDAgKyAyMDAwMDAsXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRyOiAwLFxuXHRcdFx0XHRkZWM6IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICcjQUREOEU2J1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdlYXJ0aCcsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcbiAgICAgIHI6IDYzNzgxMDAsIC8vIG1cbiAgICAgIG1hc3M6IDUuOTggKiBNYXRoLnBvdygxMCwgMjQpLCAvLyBrZ1xuXHRcdFx0ZzogOS44MDY2NSwgLy8gbS9zMlxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICdibHVlJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdiYXNlMScsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDEwMCwgLy8gbSAvIGZvciBub3dcblx0XHRcdHdpZHRoOiAxMDAsIC8vIG1hbmRhdG9yeSAobSlcblx0XHRcdGhlaWdodDogNSwgLy8gbWFuZGF0b3J5IChtKVxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogNjM3ODEwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAncmVjdCcsIC8vIGZvciBub3dcblx0XHRcdFx0Y29sb3I6ICd5ZWxsb3cnXG5cdFx0XHR9XG5cdFx0fVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVhcnRoOyIsInZhciBoZWxwQ2FsYyA9IHtcblxuICBmcm9tUG9sYXI6IChwb2xhcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgeTogcG9sYXIuciAqIE1hdGguY29zKHBvbGFyLmRlYyAqIE1hdGguUEkvMTgwKVxuICAgIH1cbiAgfSxcblxuICB0b1BvbGFyOiAoY2FydCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByOiAoKGNhcnQueCAqKiAyICsgY2FydC55ICoqIDIpICoqIC41KSxcbiAgICAgIGRlYzogKE1hdGguYXRhbjIoY2FydC54LCBjYXJ0LnkpIC8gKE1hdGguUEkvMTgwKSlcbiAgICB9XG4gIH0sXG5cbiAgcm91bmRNOiAodmFsKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTAwMDAwMDAwMCkgLyAxMDAwMDAwMDAwO1xuICB9LFxuXG4gIGRpc3RQb2w6IChvYmoxUG9sLCBvYmoyUG9sKSA9PiB7XG4gICAgY29uc3Qgb2JqMUNhciA9IGZyb21Qb2xhcihvYmoxUG9sKTtcbiAgICBjb25zdCBvYmoyQ2FyID0gZnJvbVBvbGFyKG9iajJQb2wpO1xuICAgIGNvbnN0IGRpc3QgPSB7XG4gICAgICByOiBNYXRoLnNxcnQoTWF0aC5hYnMob2JqMkNhci54IC0gb2JqMUNhci54KSAqKiAyICsgTWF0aC5hYnMob2JqMkNhci55IC0gb2JqMUNhci55KSAqKiAyKSxcbiAgICAgIGRlYzogTWF0aC5hdGFuKChvYmoyQ2FyLnkgLSBvYmoxQ2FyLnkpIC8gKG9iajJDYXIueCAtIG9iajFDYXIueCkpIC8gKE1hdGguUEkvMTgwKVxuICAgIH1cblxuICAgIGlmIChkaXN0LnIgPCAwKSB7XG4gICAgICBkaXN0ID0ge1xuICAgICAgICByOiAtZGlzdC5yLFxuICAgICAgICBkZXY6ICgxODAgLSBkaXN0LmRlYykgJSAzNjBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdDtcblxuICAgIGZ1bmN0aW9uIGZyb21Qb2xhcihwb2xhcikgeyAvLyB0b2RvOiBlbGltaW5hdGUgdGhpc1xuICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgICB5OiBwb2xhci5yICogTWF0aC5jb3MocG9sYXIuZGVjICogTWF0aC5QSS8xODApXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFkZFBvbDogKG9iajFQb2wsIG9iajJQb2wpID0+IHtcblxuICAgIGNvbnN0IG9iajFDYXIgPSBmcm9tUG9sYXIob2JqMVBvbCk7XG4gICAgY29uc3Qgb2JqMkNhciA9IGZyb21Qb2xhcihvYmoyUG9sKTtcbiAgICBjb25zdCBkaXN0ID0ge1xuICAgICAgcjogTWF0aC5zcXJ0KE1hdGguYWJzKG9iajJDYXIueCArIG9iajFDYXIueCkgKiogMiArIE1hdGguYWJzKG9iajJDYXIueSArIG9iajFDYXIueSkgKiogMiksXG4gICAgICBkZWM6IE1hdGguYXRhbigob2JqMkNhci54ICsgb2JqMUNhci54KSAvIChvYmoyQ2FyLnkgKyBvYmoxQ2FyLnkpKSAvIChNYXRoLlBJLzE4MClcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdDtcblxuICAgIGZ1bmN0aW9uIGZyb21Qb2xhcihwb2xhcikgeyAvLyB0b2RvOiBlbGltaW5hdGUgdGhpc1xuICAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2xhci5yICogTWF0aC5zaW4ocG9sYXIuZGVjICogTWF0aC5QSS8xODApLFxuICAgICAgICB5OiBwb2xhci5yICogTWF0aC5jb3MocG9sYXIuZGVjICogTWF0aC5QSS8xODApXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRvRGVnMzYwOiAoZGVnKSA9PiB7XG4gICAgcmV0dXJuIGRlZyAlIDM2MDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBDYWxjOyIsImltcG9ydCByZW5kZXJTdmcgZnJvbSAnLi9yZW5kZXItc3ZnJztcbmltcG9ydCBtb3ZlU3ZnIGZyb20gJy4vbW92ZS1zdmcnO1xuaW1wb3J0IGVhcnRoIGZyb20gJy4vZWFydGgnO1xuaW1wb3J0IG1vb24gZnJvbSAnLi9tb29uJztcbmltcG9ydCBpc3MgZnJvbSAnLi9pc3MnO1xuaW1wb3J0IHNoaXAxIGZyb20gJy4vc2hpcCc7XG5cbmltcG9ydCBoZWxwQ2FsYyBmcm9tICcuL2hlbHBDYWxjJztcblxuZG9jdW1lbnQub25Mb2FkID0gbG9hZEFwcDtcblxudmFyIGFwcCA9IGZ1bmN0aW9uKGRlcHMpe1xuXG4gIHZhciBvYmpzID0gZGVwcy5vYmpzO1xuICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIHZhciBtb3ZlU3ZnID0gZGVwcy5tb3ZlU3ZnKGhlbHBDYWxjKTtcbiAgdmFyIHJlbmRlclN2ZyA9IGRlcHMucmVuZGVyU3ZnKGRlcHMuaGVscENhbGMpXG4gIHZhciBwYW5lbCA9IGdldFBhbmVsKG9ianMuZWFydGgpO1xuICB2YXIgc2hpcDFEYXRhID0gZGVwcy5zaGlwMSgpO1xuICB2YXIgc2hpcDEgPSBzaGlwMURhdGEub2JqTGlzdFswXTtcblxuICBtb3ZlU3ZnLmluaXQob2Jqcyk7XG5cbiAgcmVuZGVyU3ZnLnNldE9iakNlbnRlcihvYmpzLmVhcnRoLm9iakxpc3RbMl0pXG4gIHJlbmRlclN2Zy5jcmVhdGUob2JqcywgY2FudmFzLnN0YXRlLnpvb20sIGNhbnZhcy5nZXRSZWZPYmoob2JqcykpO1xuICByZW5kZXJTdmcuY3JlYXRlT25lKHNoaXAxRGF0YSwgY2FudmFzLnN0YXRlLnpvb20sIGNhbnZhcy5nZXRSZWZPYmoob2JqcykpO1xuXG4gIGRvY3VtZW50Lm9uY2xpY2sgPSB2ZXJpZnlDbGljaztcbiAgZG9jdW1lbnQub25rZXlkb3duID0gdmVyaWZ5S2V5O1xuXG4gIGxvb3AoKTtcblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWNhbnZhcy5zdGF0ZS5wbGF5KSByZXR1cm47XG4gICAgICBjYW52YXMuc3RhdGUudGltZSArPSAoY2FudmFzLnN0YXRlLnNlY29uZFNraXAgKiBjYW52YXMuc3RhdGUudGltZVNwZWVkKTtcblxuICAgICAgbW92ZVN2Zy5tb3ZlKGNhbnZhcy5zdGF0ZS5zZWNvbmRTa2lwLCBjYW52YXMuc3RhdGUudGltZVNwZWVkKTtcbiAgICAgIHJlbmRlclN2Zy51cGRhdGUob2JqcywgY2FudmFzLnN0YXRlLnpvb20sIGNhbnZhcy5nZXRSZWZPYmoob2JqcykpO1xuXG4gICAgICBzaGlwMURhdGEuYnVyc3RVcGRhdGUoY2FudmFzLnN0YXRlLnNlY29uZFNraXAsIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQpO1xuICAgICAgbW92ZVN2Zy5tb3ZlT25lKHNoaXAxLCBjYW52YXMuc3RhdGUuc2Vjb25kU2tpcCwgY2FudmFzLnN0YXRlLnRpbWVTcGVlZCwgW29ianMuZWFydGgub2JqTGlzdFsyXSxvYmpzLm1vb24ub2JqTGlzdFswXV0pO1xuICAgICAgcmVuZGVyU3ZnLnVwZGF0ZU9uZShzaGlwMURhdGEsIGNhbnZhcy5zdGF0ZS56b29tLCBjYW52YXMuZ2V0UmVmT2JqKG9ianMpKTtcbiAgICAgIHBhbmVsLnVwZGF0ZSgpO1xuXG4gICAgICBpZiAoc2hpcDEucG9zaXRpb24uY3Jhc2gpIHtcbiAgICAgICAgYWxlcnQoJ3NoaXAgY3Jhc2hlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghY2hlY2tUaW1lT3V0KCkpIGxvb3AoKTtcbiAgICB9LCAxMDAwICogY2FudmFzLnN0YXRlLnNlY29uZFNraXApO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjaGVja1RpbWVPdXQoKSB7XG4gICAgdmFyIGQwID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICBkLnNldFNlY29uZHMoY2FudmFzLnN0YXRlLnRpbWUpO1xuICAgIHZhciBkYXlzID0gcGFyc2VJbnQoKGQgLSBkMCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIFxuICAgIGlmIChkYXlzID4gMzY1KSB7XG4gICAgICBhbGVydCgnRXhhdXN0ZWQgZnVlbCBhZnRlciAxIHllYXIgb2YgZmxpZ2h0LiBSZWxvYWQgZ2FtZS4nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlDbGljayhlKSB7XG4gICAgaWYoZS50YXJnZXQubm9kZU5hbWUgPT0gJ0EnKSB7XG4gICAgICB2YXIgcmVhbExpbmsgPSBlLnRhcmdldC5ocmVmXG4gICAgICB2YXIgYWN0aW9uID0gcmVhbExpbmtcbiAgICAgICAgLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbisnLyMvJywgJycpXG4gICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsICcnKTtcblxuICAgICAgaWYgKCFbJ2ZpbGU6JywnaHR0cDonXS5pbmNsdWRlcyhhY3Rpb24uc3Vic3RyaW5nKDAsNSkpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uID09PSAndGltZVBsYXknKSBjYW52YXMucGxheVN0b3AoKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnem9vbU1pbnVzJykgY2FudmFzLnpvb21NdWx0aXBseSgyKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnem9vbVBsdXMnKSBjYW52YXMuem9vbU11bHRpcGx5KC41KTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAndGltZVBsdXMnKSBjYW52YXMudGltZU11bHRpcGx5KDIpO1xuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICd0aW1lTWludXMnKSBjYW52YXMudGltZU11bHRpcGx5KC41KTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnbW9kYWxDbG9zZScpIGNvbnNvbGUubG9nKCd3aWxsIGNsb3NlIG1vZGFseCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZlcmlmeUtleShlKSB7XG4gICAgdmFyIGtleUNvZGUgPSBlLmNvZGU7XG4gICAgaWYgKGtleUNvZGUgPT09ICdLZXlQJykgY2FudmFzLnBsYXlTdG9wKCk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0Fycm93VXAnKSBzaGlwMURhdGEuYWRkUGl0Y2goMTApO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdBcnJvd0Rvd24nKSBzaGlwMURhdGEuYWRkUGl0Y2goLTEwKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnS2V5QScpIHNoaXAxRGF0YS5hZGRCdXJzdFROZXh0KDEpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdLZXlaJykgc2hpcDFEYXRhLmFkZEJ1cnN0VE5leHQoLTEpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdNaW51cycpIGNhbnZhcy56b29tTXVsdGlwbHkoMik7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0VxdWFsJykgY2FudmFzLnpvb21NdWx0aXBseSguNSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ1BlcmlvZCcpIGNhbnZhcy50aW1lTXVsdGlwbHkoMik7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0NvbW1hJykgY2FudmFzLnRpbWVNdWx0aXBseSguNSk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0tleVYnKSBjYW52YXMuc2V0UmVmKCk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZS5zdWJzdHJpbmcoMCw1KSA9PT0gJ0RpZ2l0Jykge1xuICAgICAgc2hpcDFEYXRhLnNldEJ1cnN0QU5leHQoa2V5Q29kZS5yZXBsYWNlKCdEaWdpdCcsICcnKSlcbiAgICB9XG4gICAgaWYgKCFjYW52YXMuc3RhdGUucGxheSkgcmV0dXJuO1xuXG4gICAgaWYgKGtleUNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgIHNoaXAxRGF0YS5idXJzdFN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2FudmFzKCkge1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHdpZHRoSW5pOiAyMDAwLFxuICAgICAgd2lkdGg6IDIwMDAsIC8vIChtKVxuICAgICAgaGVpZ2h0UHg6IDAsXG4gICAgICB3aWR0aFB4OiAwLFxuICAgICAgem9vbTogMSxcbiAgICAgIHBsYXk6IHRydWUsXG4gICAgICB0aW1lOiAwLCAvLyB0aW1lIHBhc3NlZCAocylcbiAgICAgIHRpbWVTcGVlZDogMSxcbiAgICAgIHNlY29uZFNraXA6IDAuMSwgLy8gZWFjaCB0aW1lIGxvb3AgdGltbWluZyAocylcbiAgICAgIHJlZjogJ2VhcnRoJ1xuICAgIH1cblxuICAgIHZhciB6b29tTXVsdGlwbHkgPSBmdW5jdGlvbih0aW1lcykge1xuICAgICAgc3RhdGUuem9vbSAqPSB0aW1lcztcbiAgICAgIHN0YXRlLnpvb20gPSBNYXRoLm1heChzdGF0ZS56b29tLCAxKTtcbiAgICAgIHJlbmRlclN2Zy51cGRhdGUoZGVwcy5vYmpzLCBzdGF0ZS56b29tLCBjYW52YXMuZ2V0UmVmT2JqKG9ianMpKTtcbiAgICAgIHJlbmRlclN2Zy51cGRhdGVPbmUoc2hpcDFEYXRhLCBjYW52YXMuc3RhdGUuem9vbSwgY2FudmFzLmdldFJlZk9iaihvYmpzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRpbWVNdWx0aXBseSA9IGZ1bmN0aW9uKHRpbWVzKSB7XG4gICAgICB2YXIgdGltZVNwZWVkID0gY2FudmFzLnN0YXRlLnRpbWVTcGVlZCAqIHRpbWVzO1xuICAgICAgaWYgKHRpbWVTcGVlZCA8IDEpIHRpbWVTcGVlZCA9IDE7XG4gICAgICBpZiAodGltZVNwZWVkID4gMTAwMDAwMCkgdGltZVNwZWVkID0gMTAwMDAwMDtcbiAgICAgIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQgPSBwYXJzZUludCh0aW1lU3BlZWQpO1xuICAgICAgcGFuZWwudXBkYXRlKCd0aW1lU3BlZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgcGxheVN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNhbnZhcy5zdGF0ZS5wbGF5ID0gIWNhbnZhcy5zdGF0ZS5wbGF5O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5zdHlsZS5jb2xvciA9IGNhbnZhcy5zdGF0ZS5wbGF5ID8gJ3doaXRlJyA6ICdyZWQnO1xuICAgICAgcGFuZWwudXBkYXRlKCd0aW1lUGxheScpO1xuICAgICAgaWYgKGNhbnZhcy5zdGF0ZS5wbGF5KSBsb29wKCk7XG4gICAgfVxuXG4gICAgdmFyIHNldFJlZiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHN0YXRlLnJlZiA9PT0gJ2VhcnRoJykgc3RhdGUucmVmID0gJ21vb24nO1xuICAgICAgZWxzZSBzdGF0ZS5yZWYgPSAnZWFydGgnO1xuICAgIH1cblxuICAgIHZhciBnZXRSZWZPYmogPSBmdW5jdGlvbihvYmpzKSB7XG4gICAgICB2YXIgb2JqID0gJ2hleSc7XG4gICAgICBpZiAoc3RhdGUucmVmID09PSAnZWFydGgnKSBvYmogPSBvYmpzLmVhcnRoLm9iakxpc3RbMl07XG4gICAgICBlbHNlIG9iaiA9IG9ianMubW9vbi5vYmpMaXN0WzBdO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxheVN0b3AsXG4gICAgICBzdGF0ZSxcbiAgICAgIHRpbWVNdWx0aXBseSxcbiAgICAgIHpvb21NdWx0aXBseSxcbiAgICAgIHNldFJlZixcbiAgICAgIGdldFJlZk9ialxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsKGVhcnRoKSB7XG5cbiAgICB2YXIgcG9zaXRpb24gPSB7fTtcblxuICAgIHZhciBjb250ZW50ID0geyAvLyB4eHhcbiAgICAgIGFsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1bml0ID0gJ20nO1xuICAgICAgICB2YXIgYWx0ID0gcG9zaXRpb24uciAtIGVhcnRoLnI7XG4gICAgICAgIGlmIChhbHQgPiAxMDAwKSB7XG4gICAgICAgICAgYWx0IC89ICAxMDAwXG4gICAgICAgICAgdW5pdCA9ICdrbSc7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhbHQpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpICsgdW5pdDtcbiAgICAgIH0sXG4gICAgICBsb25nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZMb25nKHBvc2l0aW9uLmRlYyk7XG4gICAgICB9LFxuICAgICAgcGl0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29udkRlZyh0b0RlZzE4MCg5MCAtIHBvc2l0aW9uLnBpdGNoRGVjKSk7XG4gICAgICB9LFxuICAgICAgY2xpbWI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdkRlYyA9IHBvc2l0aW9uLnZEZWMgKyBwb3NpdGlvbi5kZWM7XG4gICAgICAgIHZhciBjbGltYiA9IHBvc2l0aW9uLnZSICogTWF0aC5jb3ModkRlYyAqIChNYXRoLlBJLzE4MCkpXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGNsaW1iICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICAgIH0sXG4gICAgICB2T3JiaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdkRlYyA9IHBvc2l0aW9uLnZEZWMgKyBwb3NpdGlvbi5kZWM7XG4gICAgICAgIHZhciB2ID0gcG9zaXRpb24udlIgKiBNYXRoLnNpbih2RGVjICogKE1hdGguUEkvMTgwKSlcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodiAqIDMuNikudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyAna20vaCc7XG4gICAgICB9LFxuICAgICAgc3BlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChwb3NpdGlvbi52UiAqIDMuNikudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyAna20vaCc7XG4gICAgICB9LFxuICAgICAgYnVyc3RBOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSAocG9zaXRpb24uYnVyc3QuYSAvIGVhcnRoLmcpLnRvRml4ZWQoMCk7XG4gICAgICAgIHZhciBhTmV4dCA9IChwb3NpdGlvbi5idXJzdC5hTmV4dCAvIGVhcnRoLmcpLnRvRml4ZWQoMCk7XG4gICAgICAgIHJldHVybiBhICsgJ2cgKCcgKyBhTmV4dCArICdnKSc7XG4gICAgICB9LFxuICAgICAgYnVyc3RUOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQocG9zaXRpb24uYnVyc3QudCkgKyAncyAoJyArIHBvc2l0aW9uLmJ1cnN0LnROZXh0LnRvRml4ZWQoMCkgKyAncyknO1xuICAgICAgfSxcbiAgICAgIHNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gY2FudmFzLnN0YXRlLndpZHRoIC8gMTAgICogY2FudmFzLnN0YXRlLnpvb207XG4gICAgICAgIHJldHVybiBjb252TWttKHNjYWxlKTtnXG4gICAgICB9LFxuICAgICAgdGltZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkMCA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICBkLnNldFNlY29uZHMoY2FudmFzLnN0YXRlLnRpbWUpO1xuICAgICAgICB2YXIgZGF5cyA9IHBhcnNlSW50KChkIC0gZDApIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgcmV0dXJuIGRheXMgKyAnZCAnICsgZC50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IGZhbHNlIH0pO1xuICAgICAgfSxcbiAgICAgIGhlYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29udkRlZyhwb3NpdGlvbi52RGVjKTtcbiAgICAgIH0sXG4gICAgICB6b29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHpvb20gID0gY2FudmFzLnN0YXRlLnpvb21cbiAgICAgICAgcmV0dXJuIHpvb20gPCAxMDAwID8gem9vbSA6IE1hdGgucm91bmQoem9vbSAvIDEwMDApICsgJ2snO1xuICAgICAgfSxcbiAgICAgIHRpbWVTcGVlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb252S00oY2FudmFzLnN0YXRlLnRpbWVTcGVlZCk7XG4gICAgICB9LFxuICAgICAgdGltZVBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2FudmFzLnN0YXRlLnBsYXkgPyAnUGF1c2UnIDogJ1BsYXknO1xuICAgICAgfSxcbiAgICAgIHJlZjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjYW52YXMuc3RhdGUucmVmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS5pbm5lclRleHQgPSBjb250ZW50W2tleV0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uID0gc2hpcDEucG9zaXRpb247XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29udGVudCk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkuaW5uZXJUZXh0ID0gY29udGVudFtlbGVtZW50XSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252RGVnKGRlZykge1xuICAgICAgdmFyIHR4dCA9IE1hdGgucm91bmQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udkxvbmcoZGVnKSB7XG4gICAgICB2YXIgdHh0ID0gcGFyc2VJbnQoZGVnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgICAgIHZhciBtaW4gPSAoKGRlZyAtIHBhcnNlSW50KGRlZykpICogNjApLnRvRml4ZWQoMik7XG4gICAgICBpZiAobWluIDwgMTApIHR4dCArPSAnMCc7XG4gICAgICB0eHQgKz0gbWluICsgJ1xcJyc7XG4gICAgICByZXR1cm4gdHh0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZNa20oZCkge1xuICAgICAgcmV0dXJuIChkIDwgMTAwMCkgPyBkICsgJ20nIDogZC8xMDAwICsgJ2ttJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252S00oZCkge1xuICAgICAgdmFyIHR4dCA9IGQ7XG4gICAgICBpZiAoZCA+PSAxMDAwKSB0eHQgPSBwYXJzZUludChkLzEwMDApICsgJ2snO1xuICAgICAgZWxzZSBpZiAoZCA+PSAxMDAwMDAwKSB0eHQgPSBwYXJzZUludChkLzEwMDAwMDApICsgJ00nO1xuICAgICAgcmV0dXJuIHR4dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0RlZzE4MChkZWcpIHtcbiAgICAgIHZhciByZXQgPSBkZWcgJSAzNjA7XG4gICAgICBpZiAocmV0ID4gMTgwKSByZXQgPSByZXQgLSAzNjA7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb2RhbENsb3NlKCkge1xuICAgIGNvbnNvbGUubG9nKCd3aWxsIGNsb2RlIG1vZGFsJylcbiAgfVxuXG59XG5cbnZhciBsb2FkQXBwID0gKGZ1bmN0aW9uKCkge1xuXG4gIHZhciBkZXBzID0ge1xuICAgIHJlbmRlclN2ZzogcmVuZGVyU3ZnLFxuICAgIG1vdmVTdmc6IG1vdmVTdmcsXG4gICAgc2hpcDE6IHNoaXAxLFxuICAgIG9ianM6IHtcbiAgICAgIGVhcnRoOiBlYXJ0aCxcbiAgICAgIG1vb246IG1vb24sXG4gICAgICBpc3M6IGlzcyxcbiAgICB9LFxuICAgIGhlbHBDYWxjOiBoZWxwQ2FsY1xuICB9XG5cbiAgYXBwKGRlcHMpO1xufSkoKVxuXG4iLCJ2YXIgaXNzID0ge1xuXHRpZDogJ2lzcycsXG5cdG9iakxpc3Q6IFtcblx0XHR7XG5cdFx0XHRpZDogJ2lzcycsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcblx0XHRcdHI6IDEwMCwgLy8gbVxuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogNjM3ODEwMCArIDMwOTAwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogMCwgLy8gZGVjbGluYXRpb24gKGRlZyksIGNvdWxkIGJlIGFueSB2YWx1ZSBiZWNhdXNlIHIgPSAwXG5cdFx0XHRcdHZSOiAwLFxuXHRcdFx0XHR2RGVjOiAzNjAgLyAoOTIuNjggKiA2MDApXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnI2Q5ZDlkOSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdGlkOiAnaXNzT3JiaXQnLFxuXHRcdC8vIFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0Ly8gXHRyOiA2Mzc4MTAwICsgMzA5MDAwLCAvLyBtXG5cdFx0Ly8gXHRwb3NpdGlvbjoge1xuXHRcdC8vIFx0XHRyOiAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHQvLyBcdFx0ZGVjOiAwLCAvLyBkZWNsaW5hdGlvbiAoZGVnKSwgY291bGQgYmUgYW55IHZhbHVlIGJlY2F1c2UgciA9IDBcblx0XHQvLyBcdFx0dlI6IDAsIC8vIGRpc3RhbmNlIGZyb20gZWFydGggY2VudGVyIChtKVxuXHRcdC8vIFx0XHR2RGVjOiAwIC8vIG9yYml0YWwgc3BlZWQgKGRlYy9zKVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdHJlbmRlcjoge1xuXHRcdC8vIFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdC8vIFx0XHRjb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHQvLyBcdFx0c3Ryb2tlOiAnd2hpdGUnLFxuXHRcdC8vIFx0XHRzdHJva2VEYXNoYXJyYXk6ICcxLDQnXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzczsiLCJ2YXIgbW9vbiA9IHtcblx0aWQ6ICdtb29uJyxcblx0b2JqTGlzdDogW1xuXHRcdHtcblx0XHRcdGlkOiAnbW9vbicsXG5cdFx0XHRyZW5kZXJUeXBlOiAnc3ZnJyxcbiAgICAgIHI6IDE3MzgwMDAsIC8vIG1cbiAgICAgIG1hc3M6IDcuMzQ3NjcgKiBNYXRoLnBvdygxMCwgMjIpLCAvLyBrZ1xuXHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0cjogMzg0MDAwMDAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHRcdFx0ZGVjOiA5MCwgLy8gZGVjbGluYXRpb24gKGRlZyksIGNvdWxkIGJlIGFueSB2YWx1ZSBiZWNhdXNlIHIgPSAwXG5cdFx0XHRcdHZSOiAwLFxuXHRcdFx0XHR2RGVjOiAzNjAgLyAoMjcuMzIyICogMjQgKiA2MCAqIDYwMClcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICcjRjVGM0NFJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8ge1xuXHRcdC8vIFx0aWQ6ICdtb29uT3JiaXQnLFxuXHRcdC8vIFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0Ly8gXHRyOiAzODQwMDAwMDAsIC8vIG1cblx0XHQvLyBcdHBvc2l0aW9uOiB7XG5cdFx0Ly8gXHRcdHI6IDAsIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyIChtKVxuXHRcdC8vIFx0XHRkZWM6IDAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdHJlbmRlcjoge1xuXHRcdC8vIFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdC8vIFx0XHRjb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHQvLyBcdFx0c3Ryb2tlOiAnd2hpdGUnLFxuXHRcdC8vIFx0XHRzdHJva2VEYXNoYXJyYXk6ICcxLDQnXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vb247IiwibGV0IG1vdmVTdmcgPSAoaGVscENhbGMpID0+IHtcblxuICBsZXQgZGF0YSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGluaXQob2Jqcykge1xuICAgIC8vIGNhbGxlZCBhdCBpbml0XG5cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9ianMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9iakxpc3QgPSBvYmpzW2tleXNbaV1dLm9iakxpc3Q7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iakxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG9iaiA9IG9iakxpc3Rbal07XG4gICAgICAgIGlmIChvYmoucG9zaXRpb24udlIgfHwgb2JqLnBvc2l0aW9uLnZEZWMpIHsgLy8gd2lsbCBtb3ZlXG4gICAgICAgICAgY29uc3QgbmV3RGF0YSA9IG9iai5wb3NpdGlvbjtcbiAgICAgICAgICBuZXdEYXRhLmlkID0gb2JqLmlkO1xuICAgICAgICAgIGRhdGEgPSBbLi4uZGF0YSwgbmV3RGF0YV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3ZlID0gKHNlY29uZFNraXAsIHRpbWVTcGVlZCkgPT4ge1xuICAgIC8vIGNhbGxlZCBhdCBpbml0IGFuZCBlYWNoIGxvb3AgaXRlcmFjaW9uXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IGRhdGFbaV07XG4gICAgICBwb3NpdGlvbi5yICs9IHBvc2l0aW9uLnZSICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICAgIHBvc2l0aW9uLmRlYyArPSBwb3NpdGlvbi52RGVjICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3ZlT25lID0gKG9iaiwgc2Vjb25kU2tpcCwgdGltZVNwZWVkLCBnT2JqcykgPT4ge1xuICAgIHZhciBhUG9sYXIgPSB7cjogb2JqLnBvc2l0aW9uLmJ1cnN0LmEsIGRlYzogKG9iai5wb3NpdGlvbi5kZWMgKyBvYmoucG9zaXRpb24ucGl0Y2hEZWMpICUgMzYwfTtcbiAgICB2YXIgZ1BvbGFyID0gZ2V0TG9jYWxHKG9iaiwgZ09ianMpOyAvL3tyOiAtZ2V0TG9jYWxHKG9iaiwgZ09ianMpLCBkZWM6IG9iai5wb3NpdGlvbi5kZWN9O1xuICAgIHZhciB2UG9sYXIgPSB7cjogb2JqLnBvc2l0aW9uLnZSLCBkZWM6IG9iai5wb3NpdGlvbi52RGVjfTtcbiAgICB2YXIgcG9zUG9sYXIgPSB7cjogb2JqLnBvc2l0aW9uLnIsIGRlYzogb2JqLnBvc2l0aW9uLmRlY307XG4gICAgaWYgKChwb3NQb2xhci5yIDwgZ09ianNbMF0ucikgfHwgKHBvc1BvbGFyLnIgPT09IGdPYmpzWzBdLnIgJiYgYVBvbGFyLnIgPD0gMCkpIHtcbiAgICAgIG9iai5wb3NpdGlvbi5yID0gZ09ianNbMF0ucjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYUNhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIoYVBvbGFyKTtcbiAgICB2YXIgZ0NhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIoZ1BvbGFyKTtcbiAgICB2YXIgdkNhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIodlBvbGFyKTtcbiAgICB2YXIgcG9zQ2FydCA9IGhlbHBDYWxjLmZyb21Qb2xhcihwb3NQb2xhcik7XG5cbiAgICB2Q2FydC54ICs9IChhQ2FydC54ICsgZ0NhcnQueCkgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIHZDYXJ0LnkgKz0gKGFDYXJ0LnkgKyBnQ2FydC55KSAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgcG9zQ2FydC54ICs9IHZDYXJ0LnggKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIHBvc0NhcnQueSArPSB2Q2FydC55ICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcblxuICAgIHZQb2xhciA9IGhlbHBDYWxjLnRvUG9sYXIodkNhcnQpO1xuICAgIHBvc1BvbGFyID0gaGVscENhbGMudG9Qb2xhcihwb3NDYXJ0KTtcbiAgICBpZiAocG9zUG9sYXIuciA8PSBnT2Jqc1swXS5yICYmIHZQb2xhci5yID4gKDUwIC8gMy42KSkge1xuICAgICAgdlBvbGFyLnIgPSAwO1xuICAgICAgdlBvbGFyLmRlYyA9IDA7XG4gICAgICBwb3NQb2xhci5yID0gZ09ianNbMF0uciAtIDEwO1xuICAgICAgb2JqLnBvc2l0aW9uLmNyYXNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvYmoucG9zaXRpb24udlIgPSBoZWxwQ2FsYy5yb3VuZE0odlBvbGFyLnIpO1xuICAgIG9iai5wb3NpdGlvbi52RGVjID0gaGVscENhbGMucm91bmRNKHZQb2xhci5kZWMpO1xuICAgIG9iai5wb3NpdGlvbi5yID0gaGVscENhbGMucm91bmRNKHBvc1BvbGFyLnIpO1xuICAgIG9iai5wb3NpdGlvbi5kZWMgPSBoZWxwQ2FsYy5yb3VuZE0ocG9zUG9sYXIuZGVjKTtcblxuICAgIGZ1bmN0aW9uIGdldExvY2FsRyhvYmosIGdPYmpzKSB7XG5cbiAgICAgIC8vIEVhcnRoXG4gICAgICBjb25zdCBtYXNzID0gZ09ianNbMF0ubWFzcztcbiAgICAgIGNvbnN0IGRpc3QgPSBvYmoucG9zaXRpb24ucjtcbiAgICAgIGNvbnN0IGdSID0gKDYuNjcgKiBNYXRoLnBvdygxMCwgLTExKSkgKiBtYXNzIC8gKGRpc3QgKiogMik7XG4gICAgICBjb25zdCBnRGVjID0gKDE4MCAtIG9iai5wb3NpdGlvbi5kZWMpO1xuICAgICAgLy9jb25zb2xlLmxvZygnZ0VhcnRoPScsIHtyOiBnUiwgZGVjOiBnRGVjfSlcbiAgICAgIFxuICAgICAgLy9Nb29uXG4gICAgICBjb25zdCBtYXNzMiA9IGdPYmpzWzFdLm1hc3M7XG4gICAgICBjb25zdCBwb3NDYXJ0U2hpcCA9IHtyOiBvYmoucG9zaXRpb24uciwgZGVjOiBvYmoucG9zaXRpb24uZGVjfTtcbiAgICAgIGNvbnN0IHBvc0NhcnRDZW50ZXIgPSB7cjogZ09ianNbMV0ucG9zaXRpb24uciwgZGVjOiBnT2Jqc1sxXS5wb3NpdGlvbi5kZWN9O1xuICAgICAgY29uc3QgZGlzdDIgPSBoZWxwQ2FsYy5kaXN0UG9sKHBvc0NhcnRTaGlwLCBwb3NDYXJ0Q2VudGVyKTtcbiAgICAgIGNvbnN0IGdSMiA9ICg2LjY3ICogTWF0aC5wb3coMTAsIC0xMSkpICogbWFzczIgLyAoZGlzdDIuciAqKiAyKTtcbiAgICAgIGNvbnN0IGdEZWMyID0gZGlzdDIuZGVjO1xuICAgICAgLy9jb25zb2xlLmxvZygnZ01vb249Jywge3I6IGdSMiwgZGVjOiBnRGVjMn0pXG5cbiAgICAgIGNvbnN0IGdQb2wgPSBoZWxwQ2FsYy5hZGRQb2woe3I6IGdSLCBkZWM6IGdEZWN9LCB7cjogZ1IyLCBkZWM6IGdEZWMyfSlcblxuICAgICAgcmV0dXJuIGdQb2xcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBtb3ZlLFxuICAgIG1vdmVPbmVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3ZlU3ZnIiwiXG5sZXQgcmVuZGVyU3ZnID0gKGhlbHBDYWxjKSA9PiB7XG5cbiAgbGV0IGNhbnZhc05vZGU7XG4gIGxldCBvYmpDZW50ZXI7XG4gIGxldCB2aWV3Q2VudGVyO1xuICBsZXQgYnVyc3ROb2RlO1xuXG4gIGluaXQoKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICB2aWV3Q2VudGVyID0gZ2V0Vmlld0NlbnRlcihjYW52YXNOb2RlKTtcbiAgfVxuXG4gIGxldCBjcmVhdGUgPSAob2Jqcywgem9vbSwgcmVmT2JqKSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpzKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBvYmogPSBvYmpzW2tleV07XG4gICAgICBpZiAob2JqLm9iakxpc3QpIHtcbiAgICAgICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgIGNyZWF0ZU9iaihjYW52YXNOb2RlLCBvYmopO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHVwZGF0ZShvYmpzLCB6b29tLCByZWZPYmopO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlT25lID0gKG9iaiwgem9vbSwgcmVmT2JqKSA9PiB7XG4gICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY3JlYXRlT2JqKGNhbnZhc05vZGUsIG9iaik7XG4gICAgfSlcbiAgICBcbiAgICB1cGRhdGVPYmoob2JqLm9iakxpc3RbMF0sIHpvb20sIHJlZk9iailcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9uZSA9IChvYmosIHpvb20sIHJlZk9iaikgPT4ge1xuICAgIHVwZGF0ZU9iaihvYmoub2JqTGlzdFswXSwgem9vbSwgcmVmT2JqKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKG9ianMsIHpvb20sIHJlZk9iaikgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2Jqcyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgb2JqID0gb2Jqc1trZXldO1xuXG4gICAgICBpZiAob2JqLnJlbmRlclR5cGUgPT09ICdzdmcnKSB1cGRhdGVPYmoob2JqLCB6b29tLCByZWZPYmopO1xuICAgICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICB1cGRhdGVPYmoob2JqLCB6b29tLCByZWZPYmopO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNldE9iakNlbnRlciA9IChvYmopID0+IHtcbiAgICBvYmpDZW50ZXIgPSBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmooY2FudmFzTm9kZSwgb2JqKSB7XG5cbiAgICBsZXQgcGFyZW50Tm9kZTtcbiAgICBsZXQgc3ZnbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCBvYmoucmVuZGVyLmZvcm1hdCk7XG4gICAgaWYgKG9iai5pZCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaWQnLCBvYmouaWQpO1xuXG4gICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmoucmVuZGVyKTsgLy8gb3B0aW9uIHRvIGJlbG93XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gXHRpZiAoa2V5c1tpXSAhPT0gJ2Zvcm1hdCcgJiYga2V5c1tpXSAhPT0gJ3BhcmVudElkJykge1xuICAgIC8vIFx0XHQvL25ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5c1tpXSwgb2JqLnJlbmRlcltrZXlzW2ldXSk7XG4gICAgLy8gXHR9XG4gICAgLy8gfVxuICAgIFxuICAgIGlmIChvYmoucmVuZGVyLmNvbG9yKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgb2JqLnJlbmRlci5jb2xvcik7XG4gICAgaWYgKG9iai5yZW5kZXIuc3Ryb2tlKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2UnLCBvYmoucmVuZGVyLnN0cm9rZSk7XG4gICAgaWYgKG9iai5yZW5kZXIuc3Ryb2tlRGFzaGFycmF5KSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2UtZGFzaGFycmF5Jywgb2JqLnJlbmRlci5zdHJva2VEYXNoYXJyYXkpO1xuICAgIGlmIChvYmoucmVuZGVyLnN0ZERldmlhdGlvbikgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3RkRGV2aWF0aW9uJywgb2JqLnJlbmRlci5zdGREZXZpYXRpb24pO1xuICAgIGlmIChvYmoucmVuZGVyLmNsaXBQYXRoKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjbGlwLXBhdGgnLCBvYmoucmVuZGVyLmNsaXBQYXRoKTtcbiAgICBpZiAob2JqLnJlbmRlci5maWx0ZXIpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbHRlcicsIG9iai5yZW5kZXIuZmlsdGVyKTtcbiAgICBpZiAob2JqLnJlbmRlci5wb2ludHMpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3BvaW50cycsIG9iai5yZW5kZXIucG9pbnRzKTtcbiAgICBpZiAob2JqLnJlbmRlci54IHx8IG9iai5yZW5kZXIueCA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIG9iai5yZW5kZXIueCk7XG4gICAgaWYgKG9iai5yZW5kZXIueSB8fCBvYmoucmVuZGVyLnkgPT09IDApIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBvYmoucmVuZGVyLnkpO1xuICAgIGlmIChvYmoucmVuZGVyLndpZHRoIHx8IG9iai5yZW5kZXIud2lkdGggPT09IDApIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgb2JqLnJlbmRlci53aWR0aCk7XG4gICAgaWYgKG9iai5yZW5kZXIuaGVpZ2h0IHx8IG9iai5yZW5kZXIuaGVpZ2h0ID09PSAwKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBvYmoucmVuZGVyLmhlaWdodCk7XG4gICAgaWYgKG9iai5yZW5kZXIuY3gpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4Jywgb2JqLnJlbmRlci5jeCk7XG4gICAgaWYgKG9iai5yZW5kZXIuY3kpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5Jywgb2JqLnJlbmRlci5jeSk7XG4gICAgaWYgKG9iai5yZW5kZXIucngpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3J4Jywgb2JqLnJlbmRlci5yeCk7XG4gICAgaWYgKG9iai5yZW5kZXIucnkpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3J5Jywgb2JqLnJlbmRlci5yeSk7XG4gICAgLy8geSwgeSwgd2lkdGggYW5kIGhlaWdodCBtYXkgYmUgYXNzaWduZWQgaW4gdXBkYXRlT2JqKCksIHRyYW5zZm9ybSB3aWxsXG5cbiAgICBpZiAob2JqLnJlbmRlci5wYXJlbnRJZCkge1xuICAgICAgcGFyZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5yZW5kZXIucGFyZW50SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2FudmFzU3ZnTm9kZSA9IGdldFN2Z0NhbnZhc05vZGUoY2FudmFzTm9kZSk7XG4gICAgICBjYW52YXNOb2RlLmFwcGVuZENoaWxkKGNhbnZhc1N2Z05vZGUpO1xuICAgICAgcGFyZW50Tm9kZSA9IGNhbnZhc1N2Z05vZGU7XG4gICAgfVxuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICBpZiAob2JqLmlkID09PSAnc2hpcEJ1cnN0JykgYnVyc3ROb2RlID0gbmV3Tm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9iaihvYmosIHpvb20sIHJlZk9iaikge1xuICAgIGNvbnN0IGNhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIoe1xuICAgICAgcjogb2JqLnBvc2l0aW9uLnIsXG4gICAgICBkZWM6IG9iai5wb3NpdGlvbi5kZWNcbiAgICB9KTtcblxuICAgIGNvbnN0IHRyaW0gPSBnZXRUcmltKHpvb20sIHJlZk9iaik7XG5cbiAgICBjb25zdCBzdmdUYWcgPSBvYmoucmVuZGVyLmZvcm1hdDtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9iai5pZCk7XG4gICAgaWYgKHN2Z1RhZyA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGxldCByUHggPSBNYXRoLm1heCgyLCBvYmouciAvIHpvb20pO1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsICh2aWV3Q2VudGVyLnggKyB0cmltLnggKyBjYXJ0LnggLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsICh2aWV3Q2VudGVyLnkgKyB0cmltLnkgLSBjYXJ0LnkgLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgclB4KTtcbiAgICB9IGVsc2UgaWYgKHN2Z1RhZyA9PT0gJ3JlY3QnKSB7XG4gICAgICBjb25zdCB3aWR0aFB4ID0gTWF0aC5tYXgoMiwgb2JqLndpZHRoIC8gem9vbSk7XG4gICAgICBjb25zdCBoZWlnaHRQeCA9IE1hdGgubWF4KDIsIG9iai5oZWlnaHQgLyB6b29tKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsICh2aWV3Q2VudGVyLnggKyB0cmltLnggLSBjYXJ0Lngvem9vbSAtICh3aWR0aFB4IC8gMikpKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCAodmlld0NlbnRlci55ICsgdHJpbS55IC0gY2FydC55IC8gem9vbSkpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aFB4KTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIGhlaWdodFB4KTtcbiAgICB9IGVsc2UgaWYgKG9iai5pZCA9PT0gJ3NoaXAxJykge1xuICAgICAgY29uc3QgeCA9ICh2aWV3Q2VudGVyLnggKyB0cmltLnggKyBjYXJ0Lngvem9vbSAtIDEwKTtcbiAgICAgIGNvbnN0IHkgPSAodmlld0NlbnRlci55ICsgdHJpbS55IC0gY2FydC55IC8gem9vbSAtIDEwKTtcbiAgICAgIGNvbnN0IHBpdGNoID0gb2JqLnBvc2l0aW9uLnBpdGNoRGVjO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9LCR7eX0pIHJvdGF0ZSgke3BpdGNofSlgO1xuICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IG9iai5wb3NpdGlvbi5idXJzdC5hID4gMCA/ICAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG4gICAgICBidXJzdE5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3Zpc2liaWxpdHknLCB2aXNpYmlsaXR5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdmdDYW52YXNOb2RlKGNhbnZhc05vZGUpIHtcbiAgICB2YXIgY2FudmFzU3ZnTm9kZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbnZhc05vZGUuY2hpbGRyZW5baV0uaWQgPT09ICdjYW52YXNTdmcnKSBjYW52YXNTdmdOb2RlID0gY2FudmFzTm9kZS5jaGlsZHJlbltpXTtcbiAgICB9XG5cbiAgICBpZiAoIWNhbnZhc1N2Z05vZGUpIHtcbiAgICAgIGxldCBzdmducyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICBjYW52YXNTdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnc3ZnJyk7XG4gICAgICBjYW52YXNTdmdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdpZCcsICdjYW52YXNTdmcnKTtcbiAgICAgIGNhbnZhc1N2Z05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIGNhbnZhc1N2Z05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsICcxMDAlJyk7ICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbnZhc1N2Z05vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3Q2VudGVyKGNhbnZhc05vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeTogY2FudmFzTm9kZS5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgeDogY2FudmFzTm9kZS5vZmZzZXRXaWR0aCAvIDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmltKHpvb20sIHJlZk9iaikge1xuICAgIGxldCByZWZDYXIgPSBoZWxwQ2FsYy5mcm9tUG9sYXIoe3I6IHJlZk9iai5wb3NpdGlvbi5yLCBkZWM6IHJlZk9iai5wb3NpdGlvbi5kZWN9KVxuXG4gICAgbGV0IHRyaW1ZID0gcmVmT2JqLnI7XG4gICAgaWYgKHpvb20gPCAxMDAwMCApIHRyaW1ZID0gcmVmT2JqLnIgKyAyMDAgKiB6b29tIDtcbiAgICBpZiAoem9vbSA+IG9iakNlbnRlci5yICkgdHJpbVkgPSAwO1xuXG4gICAgY29uc3QgdHJpbSA9IHtcbiAgICAgIHg6IC1yZWZDYXIueCAvIHpvb20sXG4gICAgICB5OiAocmVmQ2FyLnkgKyB0cmltWSkgIC8gem9vbVxuICAgIH1cbiAgICByZXR1cm4gdHJpbTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIGNyZWF0ZU9uZSxcbiAgICB1cGRhdGUsXG4gICAgdXBkYXRlT25lLFxuICAgIHNldE9iakNlbnRlclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclN2ZzsiLCJsZXQgc2hpcDEgPSAoKSA9PiB7XG5cbiAgY29uc3Qgb2JqTGlzdCA9IFtcbiAgICB7XG4gICAgICBpZDogJ3NoaXAxJyxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHI6IDYzNzgxMDAsIC8vIGRpc3RhbmNlIChtKVxuICAgICAgICBkZWM6IDAsIC8vIGRlY2xpbmF0aW9uIChkZWcpXG4gICAgICAgIHZSOiAwLCAvLyB2IHNwZWVkIChtL3MpXG4gICAgICAgIHZEZWM6IDAsIC8vIGhlYWRpbmcsIG9yIHYgZGVjbGluYXRpb24gKGRlZylcbiAgICAgICAgcGl0Y2hEZWM6IDAsIC8vIGF0dGl0dWRlIHBpdGNoIChkZWcpXG4gICAgICAgIGJ1cnN0OiB7XG4gICAgICAgICAgYTogMCwvLyBjdXJyZW50IGJ1cnN0IGFjY2VsZXJhdGlvbiAobS9zMilcbiAgICAgICAgICBhTmV4dDogTWF0aC5yb3VuZCg0ICogOS44MDY2NSksIC8vIHNlbGVjdGVkIGFjY2VsZXJhdGlvbiBmb3IgbmV4dCBidXJzdCAobS9zMilcbiAgICAgICAgICB0OiAwLCAvLyBjdXJyZW50IGJ1cnN0IHJlbWFpbmluZyB0aW1lIChzKVxuICAgICAgICAgIHROZXh0OiA0IC8vIHNlbGVjdGVkIHRpbWUgZm9yIG5leHQgYnVyc3QgKHMpXG4gICAgICAgIH0sXG4gICAgICAgIGNyYXNoZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIGZvcm1hdDogJ2cnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMjAwLDIwMCkgcm90YXRlKDApJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzaGlwYmx1cicsXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ2ZpbHRlcicsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwYmx1cicsXG4gICAgICAgIGZvcm1hdDogJ2ZlR2F1c3NpYW5CbHVyJyxcbiAgICAgICAgc3RkRGV2aWF0aW9uOiBcIjEuNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NoaXBjcm9wJyxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAnY2xpcFBhdGgnLFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcGNyb3AnLFxuICAgICAgICBmb3JtYXQ6ICdyZWN0JyxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogOCxcbiAgICAgICAgd2lkdGg6MTAsXG4gICAgICAgIGhlaWdodDogMTdcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc2hpcEJ1cnN0JyxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAnZWxsaXBzZScsXG4gICAgICAgIGN4OiA1LFxuICAgICAgICBjeTogMjMsXG4gICAgICAgIHJ4OjUsXG4gICAgICAgIHJ5OiAnMTInLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIGNsaXBQYXRoOiAndXJsKCNzaGlwY3JvcCknLFxuICAgICAgICBmaWx0ZXI6ICd1cmwoI3NoaXBibHVyKScsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nIC8vIG9yICd2aXNpYmxlJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcDEnLFxuICAgICAgICBmb3JtYXQ6ICdwb2x5Z29uJyxcbiAgICAgICAgcG9pbnRzOiAnNSwwIDEwLDEwIDUsNy41IDAsMTAnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgfVxuICAgIH1cbiAgXVxuXG4gIGNvbnN0IGJ1cnN0VXBkYXRlID0gKHNlY29uZFNraXAsIHRpbWVTcGVlZCkgPT4ge1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCAtPSBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIGlmIChvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnQgPD0gMCApIHtcbiAgICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCA9IDA7XG4gICAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LmEgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFBpdGNoID0gKGFkZCkgPT4ge1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24ucGl0Y2hEZWMgPSAob2JqTGlzdFswXS5wb3NpdGlvbi5waXRjaERlYyArPSBhZGQpICUgMzYwO1xuICB9XG5cbiAgY29uc3QgYWRkQnVyc3RUTmV4dCA9IChhZGQpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnROZXh0ID0gTWF0aC5tYXgob2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dCArIGFkZCwgMCk7XG4gIH1cblxuICBjb25zdCBzZXRCdXJzdEFOZXh0ID0gKGdOZXh0KSA9PiB7XG4gICAgaWYgKGdOZXh0IDw9IDkpIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYU5leHQgPSBNYXRoLnJvdW5kKGdOZXh0ICogOS44ICogMTAwKS8xMDA7XG4gIH1cblxuICB2YXIgYnVyc3RTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYSA9IG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYU5leHQ7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50ID0gb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkQnVyc3RUTmV4dCxcbiAgICBhZGRQaXRjaCxcbiAgICBidXJzdFN0YXJ0LFxuICAgIGJ1cnN0VXBkYXRlLFxuICAgIG9iakxpc3QsXG4gICAgc2V0QnVyc3RBTmV4dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXAxOyJdLCJzb3VyY2VSb290IjoiIn0=