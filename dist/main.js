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
    toDeg180: toDeg180
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
/* harmony import */ var _move_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move-svg */ "./src/move-svg.js");
/* harmony import */ var _earth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earth */ "./src/earth.js");
/* harmony import */ var _moon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moon */ "./src/moon.js");
/* harmony import */ var _iss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iss */ "./src/iss.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _helpCalc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpCalc */ "./src/helpCalc.js");







document.onLoad = loadApp;

var app = function app(deps) {
  var objs = deps.objs;
  var helpCalc = deps.getHelpCalc();
  var moveSvg = deps.moveSvg(helpCalc);
  var renderSvg = deps.renderSvg(helpCalc);
  var ship1Data = deps.ship1(helpCalc);
  var canvas = getCanvas();
  var panel = getPanel(helpCalc);
  var ship1 = ship1Data.objList[0];
  moveSvg.init(objs);
  renderSvg.create(objs, canvas.state.zoom, canvas.getRefObj(objs), canvas.state.ref);
  renderSvg.createOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs)), canvas.state.ref;
  document.onclick = verifyClick;
  document.onkeydown = verifyKey;
  loop();

  function loop() {
    setTimeout(function () {
      if (!canvas.state.play) return;
      canvas.state.time += canvas.state.secondSkip * canvas.state.timeSpeed;
      moveSvg.move(canvas.state.secondSkip, canvas.state.timeSpeed);
      renderSvg.update(objs, canvas.state.zoom, canvas.getRefObj(objs), canvas.state.ref);
      ship1Data.burstUpdate(canvas.state.secondSkip, canvas.state.timeSpeed);
      moveSvg.moveOne(ship1, canvas.state.secondSkip, canvas.state.timeSpeed, [objs.earth.objList[2], objs.moon.objList[0]]);
      renderSvg.updateOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs), canvas.state.ref);
      panel.update();

      if (ship1.position.crash) {
        modalOpen('ship crashed. Reload game.');
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
        if (action === 'timePlay') canvas.playStop();else if (action === 'zoomMinus') canvas.zoomMultiply(2);else if (action === 'zoomPlus') canvas.zoomMultiply(.5);else if (action === 'timePlus') canvas.timeMultiply(2);else if (action === 'timeMinus') canvas.timeMultiply(.5);else if (action === 'modalClose') modalClose();
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
      renderSvg.update(objs, state.zoom, canvas.getRefObj(objs), canvas.state.ref);
      renderSvg.updateOne(ship1Data, canvas.state.zoom, canvas.getRefObj(objs), canvas.state.ref);
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

  function getPanel(helpCalc) {
    var position = {};
    var panel = {};
    var content = {
      // xxx
      alt: function alt() {
        var alt = canvas.state.ref === 'earth' ? panel.altEarth : panel.altMoon;
        var unit = 'm';

        if (alt > 1000) {
          alt /= 1000;
          unit = 'km';
        }

        return Math.round(alt).toLocaleString('en-US') + unit;
      },
      "long": function long() {
        var _long = canvas.state.ref === 'earth' ? panel.headEarth : panel.headMoon;

        return convLong((180 - _long) % 360);
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
        return (canvas.state.ref === 'earth' ? panel.gEarth : panel.gMoon).toFixed(2) + 'm/s2';
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
        return formatDeg(position.vDec);
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

    return {
      update: update
    };
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
    renderSvg: _render_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
    moveSvg: _move_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    ship1: _ship__WEBPACK_IMPORTED_MODULE_5__["default"],
    objs: {
      earth: _earth__WEBPACK_IMPORTED_MODULE_2__["default"],
      moon: _moon__WEBPACK_IMPORTED_MODULE_3__["default"],
      iss: _iss__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    getHelpCalc: _helpCalc__WEBPACK_IMPORTED_MODULE_6__["default"]
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
  }]
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

  var moveOne = function moveOne(obj, secondSkip, timeSpeed, gObjs) {
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
    var gPolar = altEarth > 0 ? getLocalG(obj, gObjs) : {
      r: 0,
      dec: 0
    }; // Landing

    if (altEarth < 0 && vPolar.r !== 0) {
      console.log('landed earth', obj.panel.altEarth);
      obj.position.vR = 0;
      obj.position.r = gObjs[0].r;
      if (vPolar.r > 50 / 3.6) obj.position.crash = true;
      return;
    } else if (obj.panel.altMoon < 0 && vPolar.r !== 0) {
      console.log('landed moon', obj.panel.altMoon);
      obj.position.vR = 0;
      if (vPolar.r > 1000 / 3.6) obj.position.crash = true;
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
    posPolar.r = Math.round(posPolar.r);
    obj.position.vR = vPolar.r;
    obj.position.vDec = vPolar.dec;
    obj.position.r = posPolar.r;
    obj.position.dec = posPolar.dec;
    obj.position.pitchDec = helpCalc.toDeg360(obj.position.pitchDec - posDecOld + obj.position.dec);
    obj.panel.altEarth = Math.round(obj.position.r - gObjs[0].r);
  };

  function getLocalG(obj, gObjs) {
    // Earth
    var mass = gObjs[0].mass;
    var dist = obj.position.r;
    var gR = 6.67 * Math.pow(10, -11) * mass / Math.pow(dist, 2);
    var gDec = helpCalc.toDeg360(180 + obj.position.dec);
    if (dist < gObjs[0].r) gR = 0;
    obj.panel.gEarth = gR;
    obj.panel.headEarth = gDec; //Moon

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
    var gDec2 = helpCalc.toDeg360(180 + dist2.dec);
    obj.panel.gMoon = gR2;
    obj.panel.altMoon = Math.round(dist2.r - gObjs[1].r);
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
  var shipDec;
  init();

  function init() {
    canvasNode = document.getElementById('canvas');
    viewCenter = getViewCenter(canvasNode);
  }

  var create = function create(objs, zoom, refObjs, refId) {
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];

      if (obj.objList) {
        obj.objList.forEach(function (obj) {
          createObj(canvasNode, obj);
        });
      }
    });
    update(objs, zoom, refObjs, refId);
  };

  var createOne = function createOne(obj, zoom, refObjs, refId) {
    obj.objList.forEach(function (obj) {
      createObj(canvasNode, obj);
    });
    updateObj(obj.objList[0], zoom, refObjs, refId);
  };

  var updateOne = function updateOne(obj, zoom, refObjs, refId) {
    updateObj(obj.objList[0], zoom, refObjs, refId);
    shipDec = obj.objList[0].position.dec;
  };

  var update = function update(objs, zoom, refObjs, refId) {
    var keys = Object.keys(objs);
    keys.forEach(function (key) {
      var obj = objs[key];
      if (obj.renderType === 'svg') updateObj(obj, zoom, refObjs, refId);
      obj.objList.forEach(function (obj) {
        updateObj(obj, zoom, refObjs, refId);
      });
    });
  };

  function createObj(canvasNode, obj) {
    var parentNode;
    var svgns = 'http://www.w3.org/2000/svg';
    var newNode = document.createElementNS(svgns, obj.render.format);
    if (obj.id) newNode.setAttributeNS(null, 'id', obj.id);
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

  function updateObj(obj, zoom, refObjs, refId) {
    var cart = helpCalc.fromPolar({
      r: obj.position.r,
      dec: obj.position.dec
    });
    var trim = getTrim(zoom, refObjs, refId);
    var node = document.getElementById(obj.id);
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
    } else if (obj.id === 'ship1') {
      var x = viewCenter.x + trim.x + cart.x / zoom - 5;
      var y = viewCenter.y + trim.y - cart.y / zoom - 10;
      var pitch = obj.position.pitchDec;
      var transform = "translate(".concat(x, ",").concat(y, ") rotate(").concat(pitch, ",5,5)");
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

  function getTrim(zoom, refObjs, refId) {
    var refCar = helpCalc.fromPolar({
      r: refObjs.position.r,
      dec: refObjs.position.dec
    });
    var canvasMinSize = Math.min(canvasNode.offsetWidth, canvasNode.offsetHeight) * zoom;
    var refObjWidth = refObjs.r * 2;
    var trim;
    var ratio = refObjWidth / canvasMinSize;
    var closeMinRatio = refId === 'moon' ? .5 : 5;

    if (ratio > closeMinRatio) {
      // close, surface on botton
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObjs.r / zoom + 200
      };
    } else if (ratio < .5 || refId === 'moon') {
      // distant, center
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom
      };
    } else {
      trim = {
        // intermediate
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObjs.r / zoom + 20
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
var ship1 = function ship1(helpCalc) {
  var mainId = 'ship1';
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

  return {
    mainId: mainId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VhcnRoLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwQ2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZS1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci1zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiXSwibmFtZXMiOlsiZWFydGgiLCJtYWluSWQiLCJvYmpMaXN0IiwiaWQiLCJyZW5kZXJUeXBlIiwiciIsInBvc2l0aW9uIiwiZGVjIiwicmVuZGVyIiwiZm9ybWF0IiwiY29sb3IiLCJtYXNzIiwiTWF0aCIsInBvdyIsImciLCJ3aWR0aCIsImhlaWdodCIsImdldEhlbHBDYWxjIiwidG9Qb2xhciIsImNhcnQiLCJhdGFuMiIsIngiLCJ5IiwiUEkiLCJmcm9tUG9sYXIiLCJwb2xhciIsInNpbiIsImNvcyIsInJvdW5kTSIsInZhbCIsInJvdW5kIiwiZGlzdFBvbCIsIm9iajFQb2wiLCJvYmoyUG9sIiwib2JqMUNhciIsIm9iajJDYXIiLCJkaXN0Iiwic3FydCIsImFicyIsImF0YW4iLCJkZXYiLCJhZGRQb2wiLCJ0b0RlZzM2MCIsImRlZyIsInJldCIsInRvRGVnMTgwIiwiZG9jdW1lbnQiLCJvbkxvYWQiLCJsb2FkQXBwIiwiYXBwIiwiZGVwcyIsIm9ianMiLCJoZWxwQ2FsYyIsIm1vdmVTdmciLCJyZW5kZXJTdmciLCJzaGlwMURhdGEiLCJzaGlwMSIsImNhbnZhcyIsImdldENhbnZhcyIsInBhbmVsIiwiZ2V0UGFuZWwiLCJpbml0IiwiY3JlYXRlIiwic3RhdGUiLCJ6b29tIiwiZ2V0UmVmT2JqIiwicmVmIiwiY3JlYXRlT25lIiwib25jbGljayIsInZlcmlmeUNsaWNrIiwib25rZXlkb3duIiwidmVyaWZ5S2V5IiwibG9vcCIsInNldFRpbWVvdXQiLCJwbGF5IiwidGltZSIsInNlY29uZFNraXAiLCJ0aW1lU3BlZWQiLCJtb3ZlIiwidXBkYXRlIiwiYnVyc3RVcGRhdGUiLCJtb3ZlT25lIiwibW9vbiIsInVwZGF0ZU9uZSIsImNyYXNoIiwibW9kYWxPcGVuIiwiY2hlY2tUaW1lT3V0IiwiZDAiLCJEYXRlIiwiZCIsInNldFNlY29uZHMiLCJkYXlzIiwicGFyc2VJbnQiLCJlIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJyZWFsTGluayIsImhyZWYiLCJhY3Rpb24iLCJyZXBsYWNlIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZWFyY2giLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsInByZXZlbnREZWZhdWx0IiwicGxheVN0b3AiLCJ6b29tTXVsdGlwbHkiLCJ0aW1lTXVsdGlwbHkiLCJtb2RhbENsb3NlIiwia2V5Q29kZSIsImNvZGUiLCJhZGRQaXRjaCIsImFkZEJ1cnN0VE5leHQiLCJzZXRSZWYiLCJzZXRCdXJzdEFOZXh0IiwiYnVyc3RTdGFydCIsIndpZHRoSW5pIiwiaGVpZ2h0UHgiLCJ3aWR0aFB4IiwidGltZXMiLCJtYXgiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib2JqIiwiY29udGVudCIsImFsdCIsImFsdEVhcnRoIiwiYWx0TW9vbiIsInVuaXQiLCJ0b0xvY2FsZVN0cmluZyIsImxvbmciLCJoZWFkRWFydGgiLCJoZWFkTW9vbiIsImNvbnZMb25nIiwicGl0Y2giLCJwaXRjaERlYyIsImZvcm1hdERlZyIsImNsaW1iIiwidkRlYyIsInZSIiwidk9yYml0IiwidiIsImdMb2NhbCIsImdFYXJ0aCIsImdNb29uIiwidG9GaXhlZCIsInNwZWVkIiwiYnVyc3RBIiwiYSIsImJ1cnN0IiwiYU5leHQiLCJidXJzdFQiLCJ0IiwidE5leHQiLCJzY2FsZSIsImNvbnZNa20iLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyMTIiLCJoZWFkIiwiY29udktNIiwidGltZVBsYXkiLCJrZXkiLCJpbm5lclRleHQiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0eHQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtc2ciLCJpc3MiLCJkYXRhIiwiaSIsImxlbmd0aCIsImoiLCJuZXdEYXRhIiwiZ09ianMiLCJhUG9sYXIiLCJ2UG9sYXIiLCJwb3NQb2xhciIsInBvc0RlY09sZCIsImdQb2xhciIsImdldExvY2FsRyIsImNvbnNvbGUiLCJsb2ciLCJhQ2FydCIsImdDYXJ0IiwidkNhcnQiLCJwb3NDYXJ0IiwiZ1IiLCJnRGVjIiwibWFzczIiLCJwb3NDYXJ0U2hpcCIsInBvc0NhcnRDZW50ZXIiLCJkaXN0MiIsImdSMiIsImdEZWMyIiwiZ1BvbCIsImNhbnZhc05vZGUiLCJ2aWV3Q2VudGVyIiwiYnVyc3ROb2RlIiwic2hpcERlYyIsImdldFZpZXdDZW50ZXIiLCJyZWZPYmpzIiwicmVmSWQiLCJjcmVhdGVPYmoiLCJ1cGRhdGVPYmoiLCJwYXJlbnROb2RlIiwic3ZnbnMiLCJuZXdOb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJzdHJva2UiLCJzdHJva2VEYXNoYXJyYXkiLCJzdGREZXZpYXRpb24iLCJjbGlwUGF0aCIsImZpbHRlciIsInBvaW50cyIsImN4IiwiY3kiLCJyeCIsInJ5IiwicGFyZW50SWQiLCJjYW52YXNTdmdOb2RlIiwiZ2V0U3ZnQ2FudmFzTm9kZSIsImFwcGVuZENoaWxkIiwidHJpbSIsImdldFRyaW0iLCJub2RlIiwic3ZnVGFnIiwidHJhbnNmb3JtIiwidmlzaWJpbGl0eSIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJyZWZDYXIiLCJjYW52YXNNaW5TaXplIiwicmVmT2JqV2lkdGgiLCJyYXRpbyIsImNsb3NlTWluUmF0aW8iLCJjcmFzaGVkIiwiZ05leHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFJQSxLQUFLLEdBQUc7QUFDVkMsUUFBTSxFQUFFLE9BREU7QUFFVkMsU0FBTyxFQUFFLENBQ1Q7QUFDQ0MsTUFBRSxFQUFFLFVBREw7QUFFQ0MsY0FBVSxFQUFFLEtBRmI7QUFHQ0MsS0FBQyxFQUFFLFVBQVUsT0FIZDtBQUlDQyxZQUFRLEVBQUU7QUFDVEQsT0FBQyxFQUFFLENBRE07QUFFVEUsU0FBRyxFQUFFO0FBRkksS0FKWDtBQVFDQyxVQUFNLEVBQUU7QUFDUEMsWUFBTSxFQUFFLFFBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFSVCxHQURTLEVBY1Q7QUFDQ1AsTUFBRSxFQUFFLFVBREw7QUFFQ0MsY0FBVSxFQUFFLEtBRmI7QUFHQ0MsS0FBQyxFQUFFLFVBQVUsTUFIZDtBQUlDQyxZQUFRLEVBQUU7QUFDVEQsT0FBQyxFQUFFLENBRE07QUFFVEUsU0FBRyxFQUFFO0FBRkksS0FKWDtBQVFDQyxVQUFNLEVBQUU7QUFDUEMsWUFBTSxFQUFFLFFBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFSVCxHQWRTLEVBMkJUO0FBQ0NQLE1BQUUsRUFBRSxPQURMO0FBRUNDLGNBQVUsRUFBRSxLQUZiO0FBR0lDLEtBQUMsRUFBRSxPQUhQO0FBR2dCO0FBQ1pNLFFBQUksRUFBRSxPQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWEsRUFBYixDQUpqQjtBQUltQztBQUNsQ0MsS0FBQyxFQUFFLE9BTEo7QUFLYTtBQUNaUixZQUFRLEVBQUU7QUFDVEQsT0FBQyxFQUFFLENBRE07QUFDSDtBQUNORSxTQUFHLEVBQUUsQ0FGSSxDQUVGOztBQUZFLEtBTlg7QUFVQ0MsVUFBTSxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxRQUREO0FBRVBDLFdBQUssRUFBRTtBQUZBO0FBVlQsR0EzQlMsRUEwQ1Q7QUFDQ1AsTUFBRSxFQUFFLE9BREw7QUFFQ0MsY0FBVSxFQUFFLEtBRmI7QUFHQ0MsS0FBQyxFQUFFLEdBSEo7QUFHUztBQUNSVSxTQUFLLEVBQUUsR0FKUjtBQUlhO0FBQ1pDLFVBQU0sRUFBRSxDQUxUO0FBS1k7QUFDWFYsWUFBUSxFQUFFO0FBQ1RELE9BQUMsRUFBRSxPQURNO0FBQ0c7QUFDWkUsU0FBRyxFQUFFLENBRkksQ0FFRjs7QUFGRSxLQU5YO0FBVUNDLFVBQU0sRUFBRTtBQUNQQyxZQUFNLEVBQUUsTUFERDtBQUNTO0FBQ2hCQyxXQUFLLEVBQUU7QUFGQTtBQVZULEdBMUNTO0FBRkMsQ0FBWjtBQThEZVYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDOURBLElBQUlpQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCO0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsUUFBSVosR0FBRyxHQUFJSyxJQUFJLENBQUNRLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxDQUFoQixFQUFtQkYsSUFBSSxDQUFDRyxDQUF4QixLQUE4QlYsSUFBSSxDQUFDVyxFQUFMLEdBQVEsR0FBdEMsQ0FBRCxHQUErQyxHQUF6RDtBQUNBLFFBQUloQixHQUFHLEdBQUcsQ0FBVixFQUFhQSxHQUFHLElBQUcsR0FBTjtBQUNiLFdBQU87QUFDTEYsT0FBQyxXQUFJLFNBQUFjLElBQUksQ0FBQ0UsQ0FBTCxFQUFVLENBQVYsYUFBY0YsSUFBSSxDQUFDRyxDQUFuQixFQUF3QixDQUF4QixDQUFKLEVBQWtDLEVBQWxDLENBREk7QUFFTGYsU0FBRyxFQUFFQTtBQUZBLEtBQVA7QUFJRDs7QUFFRCxXQUFTaUIsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsV0FBTztBQUNMSixPQUFDLEVBQUVJLEtBQUssQ0FBQ3BCLENBQU4sR0FBVU8sSUFBSSxDQUFDYyxHQUFMLENBQVNELEtBQUssQ0FBQ2xCLEdBQU4sR0FBWUssSUFBSSxDQUFDVyxFQUFqQixHQUFvQixHQUE3QixDQURSO0FBRUxELE9BQUMsRUFBRUcsS0FBSyxDQUFDcEIsQ0FBTixHQUFVTyxJQUFJLENBQUNlLEdBQUwsQ0FBU0YsS0FBSyxDQUFDbEIsR0FBTixHQUFZSyxJQUFJLENBQUNXLEVBQWpCLEdBQW9CLEdBQTdCO0FBRlIsS0FBUDtBQUlEOztBQUVELFdBQVNLLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ25CLFdBQU9qQixJQUFJLENBQUNrQixLQUFMLENBQVdELEdBQUcsR0FBRyxVQUFqQixJQUErQixVQUF0QztBQUNEOztBQUVELE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFzQjtBQUNwQyxRQUFNQyxPQUFPLEdBQUdWLFNBQVMsQ0FBQ1EsT0FBRCxDQUF6QjtBQUNBLFFBQU1HLE9BQU8sR0FBR1gsU0FBUyxDQUFDUyxPQUFELENBQXpCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHO0FBQ1gvQixPQUFDLEVBQUVPLElBQUksQ0FBQ3lCLElBQUwsQ0FBVSxTQUFBekIsSUFBSSxDQUFDMEIsR0FBTCxDQUFTSCxPQUFPLENBQUNkLENBQVIsR0FBWWEsT0FBTyxDQUFDYixDQUE3QixHQUFtQyxDQUFuQyxhQUF1Q1QsSUFBSSxDQUFDMEIsR0FBTCxDQUFTSCxPQUFPLENBQUNiLENBQVIsR0FBWVksT0FBTyxDQUFDWixDQUE3QixDQUF2QyxFQUEwRSxDQUExRSxDQUFWLENBRFE7QUFFWGYsU0FBRyxFQUFFSyxJQUFJLENBQUMyQixJQUFMLENBQVUsQ0FBQ0osT0FBTyxDQUFDYixDQUFSLEdBQVlZLE9BQU8sQ0FBQ1osQ0FBckIsS0FBMkJhLE9BQU8sQ0FBQ2QsQ0FBUixHQUFZYSxPQUFPLENBQUNiLENBQS9DLENBQVYsS0FBZ0VULElBQUksQ0FBQ1csRUFBTCxHQUFRLEdBQXhFO0FBRk0sS0FBYjs7QUFLQSxRQUFJYSxJQUFJLENBQUMvQixDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNkK0IsVUFBSSw0QkFBRztBQUNML0IsU0FBQyxFQUFFLENBQUMrQixJQUFJLENBQUMvQixDQURKO0FBRUxtQyxXQUFHLEVBQUUsQ0FBQyxNQUFNSixJQUFJLENBQUM3QixHQUFaLElBQW1CO0FBRm5CLE9BQUgsQ0FBSjtBQUlEOztBQUVELFdBQU82QixJQUFQO0FBQ0QsR0FoQkQ7O0FBa0JBLFdBQVNLLE1BQVQsQ0FBZ0JULE9BQWhCLEVBQXlCQyxPQUF6QixFQUFrQztBQUVoQyxRQUFNQyxPQUFPLEdBQUdWLFNBQVMsQ0FBQ1EsT0FBRCxDQUF6QjtBQUNBLFFBQU1HLE9BQU8sR0FBR1gsU0FBUyxDQUFDUyxPQUFELENBQXpCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHbEIsT0FBTyxDQUFDO0FBQUNHLE9BQUMsRUFBR2EsT0FBTyxDQUFDYixDQUFSLEdBQVljLE9BQU8sQ0FBQ2QsQ0FBekI7QUFBNkJDLE9BQUMsRUFBR1ksT0FBTyxDQUFDWixDQUFSLEdBQVlhLE9BQU8sQ0FBQ2I7QUFBckQsS0FBRCxDQUFwQjtBQUVBLFdBQU9jLElBQVA7QUFDRDs7QUFFRCxXQUFTTSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUNyQixRQUFJQyxHQUFHLEdBQUdELEdBQUcsR0FBRyxHQUFoQjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxDQUFWLEVBQWFBLEdBQUcsSUFBSSxHQUFQO0FBQ2IsV0FBT0EsR0FBUDtBQUNEOztBQUdELFdBQVNDLFFBQVQsQ0FBa0JGLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUlDLEdBQUcsR0FBR0QsR0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxDQUFDLEdBQVgsRUFBZ0JBLEdBQUcsR0FBRyxNQUFNQSxHQUFaO0FBQ2hCLFdBQU9BLEdBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0xwQixhQUFTLEVBQVRBLFNBREs7QUFFTE4sV0FBTyxFQUFQQSxPQUZLO0FBR0xhLFdBQU8sRUFBUEEsT0FISztBQUlMSCxVQUFNLEVBQU5BLE1BSks7QUFLTGEsVUFBTSxFQUFOQSxNQUxLO0FBTUxDLFlBQVEsRUFBUkEsUUFOSztBQU9MRyxZQUFRLEVBQVJBO0FBUEssR0FBUDtBQVVELENBekVEOztBQTJFZTVCLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTZCLFFBQVEsQ0FBQ0MsTUFBVCxHQUFrQkMsT0FBbEI7O0FBRUEsSUFBSUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBU0MsSUFBVCxFQUFjO0FBRXRCLE1BQUlDLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBR0YsSUFBSSxDQUFDakMsV0FBTCxFQUFmO0FBQ0EsTUFBSW9DLE9BQU8sR0FBR0gsSUFBSSxDQUFDRyxPQUFMLENBQWFELFFBQWIsQ0FBZDtBQUNBLE1BQUlFLFNBQVMsR0FBR0osSUFBSSxDQUFDSSxTQUFMLENBQWVGLFFBQWYsQ0FBaEI7QUFDQSxNQUFJRyxTQUFTLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXSixRQUFYLENBQWhCO0FBQ0EsTUFBSUssTUFBTSxHQUFHQyxTQUFTLEVBQXRCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNSLFFBQUQsQ0FBcEI7QUFFQSxNQUFJSSxLQUFLLEdBQUdELFNBQVMsQ0FBQ3JELE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBWjtBQUVBbUQsU0FBTyxDQUFDUSxJQUFSLENBQWFWLElBQWI7QUFFQUcsV0FBUyxDQUFDUSxNQUFWLENBQWlCWCxJQUFqQixFQUF1Qk0sTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQXBDLEVBQTBDUCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJkLElBQWpCLENBQTFDLEVBQWtFTSxNQUFNLENBQUNNLEtBQVAsQ0FBYUcsR0FBL0U7QUFDQVosV0FBUyxDQUFDYSxTQUFWLENBQW9CWixTQUFwQixFQUErQkUsTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQTVDLEVBQWtEUCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJkLElBQWpCLENBQWxELEdBQTJFTSxNQUFNLENBQUNNLEtBQVAsQ0FBYUcsR0FBeEY7QUFFQXBCLFVBQVEsQ0FBQ3NCLE9BQVQsR0FBbUJDLFdBQW5CO0FBQ0F2QixVQUFRLENBQUN3QixTQUFULEdBQXFCQyxTQUFyQjtBQUVBQyxNQUFJOztBQUVKLFdBQVNBLElBQVQsR0FBZ0I7QUFDZEMsY0FBVSxDQUFDLFlBQVc7QUFDcEIsVUFBSSxDQUFDaEIsTUFBTSxDQUFDTSxLQUFQLENBQWFXLElBQWxCLEVBQXdCO0FBQ3hCakIsWUFBTSxDQUFDTSxLQUFQLENBQWFZLElBQWIsSUFBc0JsQixNQUFNLENBQUNNLEtBQVAsQ0FBYWEsVUFBYixHQUEwQm5CLE1BQU0sQ0FBQ00sS0FBUCxDQUFhYyxTQUE3RDtBQUVBeEIsYUFBTyxDQUFDeUIsSUFBUixDQUFhckIsTUFBTSxDQUFDTSxLQUFQLENBQWFhLFVBQTFCLEVBQXNDbkIsTUFBTSxDQUFDTSxLQUFQLENBQWFjLFNBQW5EO0FBQ0F2QixlQUFTLENBQUN5QixNQUFWLENBQWlCNUIsSUFBakIsRUFBdUJNLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxJQUFwQyxFQUEwQ1AsTUFBTSxDQUFDUSxTQUFQLENBQWlCZCxJQUFqQixDQUExQyxFQUFrRU0sTUFBTSxDQUFDTSxLQUFQLENBQWFHLEdBQS9FO0FBRUFYLGVBQVMsQ0FBQ3lCLFdBQVYsQ0FBc0J2QixNQUFNLENBQUNNLEtBQVAsQ0FBYWEsVUFBbkMsRUFBK0NuQixNQUFNLENBQUNNLEtBQVAsQ0FBYWMsU0FBNUQ7QUFDQXhCLGFBQU8sQ0FBQzRCLE9BQVIsQ0FBZ0J6QixLQUFoQixFQUF1QkMsTUFBTSxDQUFDTSxLQUFQLENBQWFhLFVBQXBDLEVBQWdEbkIsTUFBTSxDQUFDTSxLQUFQLENBQWFjLFNBQTdELEVBQXdFLENBQUMxQixJQUFJLENBQUNuRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBRCxFQUF1QmlELElBQUksQ0FBQytCLElBQUwsQ0FBVWhGLE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBdkIsQ0FBeEU7QUFDQW9ELGVBQVMsQ0FBQzZCLFNBQVYsQ0FBb0I1QixTQUFwQixFQUErQkUsTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQTVDLEVBQWtEUCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJkLElBQWpCLENBQWxELEVBQTBFTSxNQUFNLENBQUNNLEtBQVAsQ0FBYUcsR0FBdkY7QUFDQVAsV0FBSyxDQUFDb0IsTUFBTjs7QUFFQSxVQUFJdkIsS0FBSyxDQUFDbEQsUUFBTixDQUFlOEUsS0FBbkIsRUFBMEI7QUFDeEJDLGlCQUFTLENBQUMsNEJBQUQsQ0FBVDtBQUNBO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDQyxZQUFZLEVBQWpCLEVBQXFCZCxJQUFJO0FBQzFCLEtBbEJTLEVBa0JQLE9BQU9mLE1BQU0sQ0FBQ00sS0FBUCxDQUFhYSxVQWxCYixDQUFWO0FBbUJEOztBQUVELFdBQVNVLFlBQVQsR0FBd0I7QUFDdEIsUUFBSUMsRUFBRSxHQUFHLElBQUlDLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBVDtBQUNBLFFBQUlDLENBQUMsR0FBRyxJQUFJRCxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQVI7QUFDQUMsS0FBQyxDQUFDQyxVQUFGLENBQWFqQyxNQUFNLENBQUNNLEtBQVAsQ0FBYVksSUFBMUI7QUFDQSxRQUFJZ0IsSUFBSSxHQUFHQyxRQUFRLENBQUMsQ0FBQ0gsQ0FBQyxHQUFHRixFQUFMLEtBQVksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUE3QixDQUFELENBQW5COztBQUVBLFFBQUlJLElBQUksR0FBRyxHQUFYLEVBQWdCO0FBQ2ROLGVBQVMsQ0FBQyxvREFBRCxDQUFUO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsV0FBU2hCLFdBQVQsQ0FBcUJ3QixDQUFyQixFQUF3QjtBQUN0QixRQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsUUFBVCxJQUFxQixHQUF4QixFQUE2QjtBQUMzQixVQUFJQyxRQUFRLEdBQUdILENBQUMsQ0FBQ0MsTUFBRixDQUFTRyxJQUF4QjtBQUNBLFVBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUNsQkcsT0FEVSxDQUNGQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXVCLEtBRHJCLEVBQzRCLEVBRDVCLEVBRVZILE9BRlUsQ0FFRkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxNQUZkLEVBRXNCLEVBRnRCLENBQWI7O0FBSUEsVUFBSSxDQUFDLENBQUMsT0FBRCxFQUFTLE9BQVQsRUFBa0JDLFFBQWxCLENBQTJCTixNQUFNLENBQUNPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsQ0FBM0IsQ0FBTCxFQUF3RDtBQUN0RFosU0FBQyxDQUFDYSxjQUFGO0FBRUEsWUFBSVIsTUFBTSxLQUFLLFVBQWYsRUFBMkJ6QyxNQUFNLENBQUNrRCxRQUFQLEdBQTNCLEtBQ0ssSUFBSVQsTUFBTSxLQUFLLFdBQWYsRUFBNEJ6QyxNQUFNLENBQUNtRCxZQUFQLENBQW9CLENBQXBCLEVBQTVCLEtBQ0EsSUFBSVYsTUFBTSxLQUFLLFVBQWYsRUFBMkJ6QyxNQUFNLENBQUNtRCxZQUFQLENBQW9CLEVBQXBCLEVBQTNCLEtBQ0EsSUFBSVYsTUFBTSxLQUFLLFVBQWYsRUFBMkJ6QyxNQUFNLENBQUNvRCxZQUFQLENBQW9CLENBQXBCLEVBQTNCLEtBQ0EsSUFBSVgsTUFBTSxLQUFLLFdBQWYsRUFBNEJ6QyxNQUFNLENBQUNvRCxZQUFQLENBQW9CLEVBQXBCLEVBQTVCLEtBQ0EsSUFBSVgsTUFBTSxLQUFLLFlBQWYsRUFBNkJZLFVBQVU7QUFDN0M7QUFDRjtBQUNGOztBQUVELFdBQVN2QyxTQUFULENBQW1Cc0IsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBSWtCLE9BQU8sR0FBR2xCLENBQUMsQ0FBQ21CLElBQWhCO0FBQ0EsUUFBSUQsT0FBTyxLQUFLLE1BQWhCLEVBQXdCdEQsTUFBTSxDQUFDa0QsUUFBUCxHQUF4QixLQUNLLElBQUlJLE9BQU8sS0FBSyxTQUFoQixFQUEyQnhELFNBQVMsQ0FBQzBELFFBQVYsQ0FBbUIsRUFBbkIsRUFBM0IsS0FDQSxJQUFJRixPQUFPLEtBQUssV0FBaEIsRUFBNkJ4RCxTQUFTLENBQUMwRCxRQUFWLENBQW1CLENBQUMsRUFBcEIsRUFBN0IsS0FDQSxJQUFJRixPQUFPLEtBQUssTUFBaEIsRUFBd0J4RCxTQUFTLENBQUMyRCxhQUFWLENBQXdCLENBQXhCLEVBQXhCLEtBQ0EsSUFBSUgsT0FBTyxLQUFLLE1BQWhCLEVBQXdCeEQsU0FBUyxDQUFDMkQsYUFBVixDQUF3QixDQUFDLENBQXpCLEVBQXhCLEtBQ0EsSUFBSUgsT0FBTyxLQUFLLE9BQWhCLEVBQXlCdEQsTUFBTSxDQUFDbUQsWUFBUCxDQUFvQixDQUFwQixFQUF6QixLQUNBLElBQUlHLE9BQU8sS0FBSyxPQUFoQixFQUF5QnRELE1BQU0sQ0FBQ21ELFlBQVAsQ0FBb0IsRUFBcEIsRUFBekIsS0FDQSxJQUFJRyxPQUFPLEtBQUssUUFBaEIsRUFBMEJ0RCxNQUFNLENBQUNvRCxZQUFQLENBQW9CLENBQXBCLEVBQTFCLEtBQ0EsSUFBSUUsT0FBTyxLQUFLLE9BQWhCLEVBQXlCdEQsTUFBTSxDQUFDb0QsWUFBUCxDQUFvQixFQUFwQixFQUF6QixLQUNBLElBQUlFLE9BQU8sS0FBSyxNQUFoQixFQUF3QnRELE1BQU0sQ0FBQzBELE1BQVAsR0FBeEIsS0FDQSxJQUFJSixPQUFPLENBQUNOLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsTUFBMkIsT0FBL0IsRUFBd0M7QUFDM0NsRCxlQUFTLENBQUM2RCxhQUFWLENBQXdCTCxPQUFPLENBQUNaLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIsRUFBekIsQ0FBeEI7QUFDRDtBQUNELFFBQUksQ0FBQzFDLE1BQU0sQ0FBQ00sS0FBUCxDQUFhVyxJQUFsQixFQUF3Qjs7QUFFeEIsUUFBSXFDLE9BQU8sS0FBSyxPQUFoQixFQUF5QjtBQUN2QnhELGVBQVMsQ0FBQzhELFVBQVY7QUFDRDtBQUNGOztBQUVELFdBQVMzRCxTQUFULEdBQXFCO0FBQ25CLFFBQUlLLEtBQUssR0FBRztBQUNWdUQsY0FBUSxFQUFFLElBREE7QUFFVnZHLFdBQUssRUFBRSxJQUZHO0FBRUc7QUFDYndHLGNBQVEsRUFBRSxDQUhBO0FBSVZDLGFBQU8sRUFBRSxDQUpDO0FBS1Z4RCxVQUFJLEVBQUUsQ0FMSTtBQU1WVSxVQUFJLEVBQUUsSUFOSTtBQU9WQyxVQUFJLEVBQUUsQ0FQSTtBQU9EO0FBQ1RFLGVBQVMsRUFBRSxDQVJEO0FBU1ZELGdCQUFVLEVBQUUsR0FURjtBQVNPO0FBQ2pCVixTQUFHLEVBQUU7QUFWSyxLQUFaOztBQWFBLFFBQUkwQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTYSxLQUFULEVBQWdCO0FBQ2pDMUQsV0FBSyxDQUFDQyxJQUFOLElBQWN5RCxLQUFkO0FBQ0ExRCxXQUFLLENBQUNDLElBQU4sR0FBYXBELElBQUksQ0FBQzhHLEdBQUwsQ0FBUzNELEtBQUssQ0FBQ0MsSUFBZixFQUFxQixDQUFyQixDQUFiO0FBQ0FWLGVBQVMsQ0FBQ3lCLE1BQVYsQ0FBaUI1QixJQUFqQixFQUF1QlksS0FBSyxDQUFDQyxJQUE3QixFQUFtQ1AsTUFBTSxDQUFDUSxTQUFQLENBQWlCZCxJQUFqQixDQUFuQyxFQUEyRE0sTUFBTSxDQUFDTSxLQUFQLENBQWFHLEdBQXhFO0FBQ0FaLGVBQVMsQ0FBQzZCLFNBQVYsQ0FBb0I1QixTQUFwQixFQUErQkUsTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQTVDLEVBQWtEUCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJkLElBQWpCLENBQWxELEVBQTBFTSxNQUFNLENBQUNNLEtBQVAsQ0FBYUcsR0FBdkY7QUFDRCxLQUxEOztBQU9BLFFBQUkyQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTWSxLQUFULEVBQWdCO0FBQ2pDLFVBQUk1QyxTQUFTLEdBQUdwQixNQUFNLENBQUNNLEtBQVAsQ0FBYWMsU0FBYixHQUF5QjRDLEtBQXpDO0FBQ0EsVUFBSTVDLFNBQVMsR0FBRyxDQUFoQixFQUFtQkEsU0FBUyxHQUFHLENBQVo7QUFDbkIsVUFBSUEsU0FBUyxHQUFHLE9BQWhCLEVBQXlCQSxTQUFTLEdBQUcsT0FBWjtBQUN6QnBCLFlBQU0sQ0FBQ00sS0FBUCxDQUFhYyxTQUFiLEdBQXlCZSxRQUFRLENBQUNmLFNBQUQsQ0FBakM7QUFDQWxCLFdBQUssQ0FBQ29CLE1BQU4sQ0FBYSxXQUFiO0FBQ0QsS0FORDs7QUFRQSxRQUFJNEIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVztBQUN4QmxELFlBQU0sQ0FBQ00sS0FBUCxDQUFhVyxJQUFiLEdBQW9CLENBQUNqQixNQUFNLENBQUNNLEtBQVAsQ0FBYVcsSUFBbEM7QUFDQTVCLGNBQVEsQ0FBQzZFLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDbEgsS0FBdEMsR0FBOEMrQyxNQUFNLENBQUNNLEtBQVAsQ0FBYVcsSUFBYixHQUFvQixPQUFwQixHQUE4QixLQUE1RTtBQUNBZixXQUFLLENBQUNvQixNQUFOLENBQWEsVUFBYjtBQUNBLFVBQUl0QixNQUFNLENBQUNNLEtBQVAsQ0FBYVcsSUFBakIsRUFBdUJGLElBQUk7QUFDNUIsS0FMRDs7QUFPQSxRQUFJMkMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBVztBQUN0QixVQUFJcEQsS0FBSyxDQUFDRyxHQUFOLEtBQWMsT0FBbEIsRUFBMkJILEtBQUssQ0FBQ0csR0FBTixHQUFZLE1BQVosQ0FBM0IsS0FDS0gsS0FBSyxDQUFDRyxHQUFOLEdBQVksT0FBWjtBQUNOLEtBSEQ7O0FBS0EsUUFBSUQsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU2QsSUFBVCxFQUFlO0FBQzdCLFVBQUkwRSxHQUFHLEdBQUcsS0FBVjtBQUNBLFVBQUk5RCxLQUFLLENBQUNHLEdBQU4sS0FBYyxPQUFsQixFQUEyQjJELEdBQUcsR0FBRzFFLElBQUksQ0FBQ25ELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQixDQUFuQixDQUFOLENBQTNCLEtBQ0sySCxHQUFHLEdBQUcxRSxJQUFJLENBQUMrQixJQUFMLENBQVVoRixPQUFWLENBQWtCLENBQWxCLENBQU47QUFDTCxhQUFPMkgsR0FBUDtBQUNELEtBTEQ7O0FBT0EsV0FBTztBQUNMbEIsY0FBUSxFQUFSQSxRQURLO0FBRUw1QyxXQUFLLEVBQUxBLEtBRks7QUFHTDhDLGtCQUFZLEVBQVpBLFlBSEs7QUFJTEQsa0JBQVksRUFBWkEsWUFKSztBQUtMTyxZQUFNLEVBQU5BLE1BTEs7QUFNTGxELGVBQVMsRUFBVEE7QUFOSyxLQUFQO0FBUUQ7O0FBRUQsV0FBU0wsUUFBVCxDQUFrQlIsUUFBbEIsRUFBNEI7QUFFMUIsUUFBSTlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSXFELEtBQUssR0FBRyxFQUFaO0FBRUEsUUFBSW1FLE9BQU8sR0FBRztBQUFFO0FBQ2RDLFNBQUcsRUFBRSxlQUFXO0FBQ2QsWUFBSUEsR0FBRyxHQUFHdEUsTUFBTSxDQUFDTSxLQUFQLENBQWFHLEdBQWIsS0FBcUIsT0FBckIsR0FBK0JQLEtBQUssQ0FBQ3FFLFFBQXJDLEdBQWdEckUsS0FBSyxDQUFDc0UsT0FBaEU7QUFDQSxZQUFJQyxJQUFJLEdBQUcsR0FBWDs7QUFDQSxZQUFJSCxHQUFHLEdBQUcsSUFBVixFQUFnQjtBQUNkQSxhQUFHLElBQUssSUFBUjtBQUNBRyxjQUFJLEdBQUcsSUFBUDtBQUNEOztBQUNELGVBQU90SCxJQUFJLENBQUNrQixLQUFMLENBQVdpRyxHQUFYLEVBQWdCSSxjQUFoQixDQUErQixPQUEvQixJQUEwQ0QsSUFBakQ7QUFDRCxPQVRXO0FBVVosY0FBTSxnQkFBVztBQUNmLFlBQUlFLEtBQUksR0FBRzNFLE1BQU0sQ0FBQ00sS0FBUCxDQUFhRyxHQUFiLEtBQXFCLE9BQXJCLEdBQStCUCxLQUFLLENBQUMwRSxTQUFyQyxHQUFpRDFFLEtBQUssQ0FBQzJFLFFBQWxFOztBQUNBLGVBQU9DLFFBQVEsQ0FBQyxDQUFDLE1BQU9ILEtBQVIsSUFBZ0IsR0FBakIsQ0FBZjtBQUNELE9BYlc7QUFjWkksV0FBSyxFQUFFLGlCQUFXO0FBQ2hCLFlBQUlBLEtBQUssR0FBR3BGLFFBQVEsQ0FBQ1YsUUFBVCxDQUFrQnBDLFFBQVEsQ0FBQ21JLFFBQVQsR0FBb0JuSSxRQUFRLENBQUNDLEdBQS9DLENBQVo7QUFDQSxlQUFPbUksU0FBUyxDQUFDdEYsUUFBUSxDQUFDUCxRQUFULENBQWtCLEtBQUsyRixLQUF2QixDQUFELENBQWhCO0FBQ0QsT0FqQlc7QUFrQlpHLFdBQUssRUFBRSxpQkFBVztBQUNoQixZQUFJQyxJQUFJLEdBQUd0SSxRQUFRLENBQUNzSSxJQUFULEdBQWdCdEksUUFBUSxDQUFDQyxHQUFwQztBQUNBLFlBQUlvSSxLQUFLLEdBQUdySSxRQUFRLENBQUN1SSxFQUFULEdBQWNqSSxJQUFJLENBQUNlLEdBQUwsQ0FBU2lILElBQUksSUFBSWhJLElBQUksQ0FBQ1csRUFBTCxHQUFRLEdBQVosQ0FBYixDQUExQjtBQUNBLGVBQU9YLElBQUksQ0FBQ2tCLEtBQUwsQ0FBVzZHLEtBQUssR0FBRyxHQUFuQixFQUF3QlIsY0FBeEIsQ0FBdUMsT0FBdkMsSUFBa0QsTUFBekQ7QUFDRCxPQXRCVztBQXVCWlcsWUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFlBQUlGLElBQUksR0FBR3RJLFFBQVEsQ0FBQ3NJLElBQVQsR0FBZ0J0SSxRQUFRLENBQUNDLEdBQXBDO0FBQ0EsWUFBSXdJLENBQUMsR0FBR3pJLFFBQVEsQ0FBQ3VJLEVBQVQsR0FBY2pJLElBQUksQ0FBQ2MsR0FBTCxDQUFTa0gsSUFBSSxJQUFJaEksSUFBSSxDQUFDVyxFQUFMLEdBQVEsR0FBWixDQUFiLENBQXRCO0FBQ0EsZUFBT1gsSUFBSSxDQUFDa0IsS0FBTCxDQUFXaUgsQ0FBQyxHQUFHLEdBQWYsRUFBb0JaLGNBQXBCLENBQW1DLE9BQW5DLElBQThDLE1BQXJEO0FBQ0QsT0EzQlc7QUE0QlphLFlBQU0sRUFBRSxrQkFBVztBQUNqQixlQUFPLENBQUN2RixNQUFNLENBQUNNLEtBQVAsQ0FBYUcsR0FBYixLQUFxQixPQUFyQixHQUErQlAsS0FBSyxDQUFDc0YsTUFBckMsR0FBOEN0RixLQUFLLENBQUN1RixLQUFyRCxFQUE0REMsT0FBNUQsQ0FBb0UsQ0FBcEUsSUFBeUUsTUFBaEY7QUFDRCxPQTlCVztBQStCWkMsV0FBSyxFQUFFLGlCQUFXO0FBQ2hCLGVBQU94SSxJQUFJLENBQUNrQixLQUFMLENBQVd4QixRQUFRLENBQUN1SSxFQUFULEdBQWMsR0FBekIsRUFBOEJWLGNBQTlCLENBQTZDLE9BQTdDLElBQXdELE1BQS9EO0FBQ0QsT0FqQ1c7QUFrQ1prQixZQUFNLEVBQUUsa0JBQVc7QUFDakIsWUFBSUMsQ0FBQyxHQUFHLENBQUNoSixRQUFRLENBQUNpSixLQUFULENBQWVELENBQWYsR0FBbUIsR0FBcEIsRUFBeUJILE9BQXpCLENBQWlDLENBQWpDLENBQVI7QUFDQSxZQUFJSyxLQUFLLEdBQUcsQ0FBQ2xKLFFBQVEsQ0FBQ2lKLEtBQVQsQ0FBZUMsS0FBZixHQUF1QixHQUF4QixFQUE2QkwsT0FBN0IsQ0FBcUMsQ0FBckMsQ0FBWjtBQUNBLGVBQU9HLENBQUMsR0FBRyxLQUFKLEdBQVlFLEtBQVosR0FBb0IsSUFBM0I7QUFDRCxPQXRDVztBQXVDWkMsWUFBTSxFQUFFLGtCQUFXO0FBQ2pCLGVBQU83SSxJQUFJLENBQUNrQixLQUFMLENBQVd4QixRQUFRLENBQUNpSixLQUFULENBQWVHLENBQTFCLElBQStCLEtBQS9CLEdBQXVDcEosUUFBUSxDQUFDaUosS0FBVCxDQUFlSSxLQUFmLENBQXFCUixPQUFyQixDQUE2QixDQUE3QixDQUF2QyxHQUF5RSxJQUFoRjtBQUNELE9BekNXO0FBMENaUyxXQUFLLEVBQUUsaUJBQVc7QUFDaEIsWUFBSUEsS0FBSyxHQUFHbkcsTUFBTSxDQUFDTSxLQUFQLENBQWFoRCxLQUFiLEdBQXFCLEVBQXJCLEdBQTJCMEMsTUFBTSxDQUFDTSxLQUFQLENBQWFDLElBQXBEO0FBQ0EsZUFBTzZGLE9BQU8sQ0FBQ0QsS0FBRCxDQUFkO0FBQXNCOUksU0FBQztBQUN4QixPQTdDVztBQThDWjZELFVBQUksRUFBRSxnQkFBVztBQUNmLFlBQUlZLEVBQUUsR0FBRyxJQUFJQyxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQVQ7QUFDQSxZQUFJQyxDQUFDLEdBQUcsSUFBSUQsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFSO0FBQ0FDLFNBQUMsQ0FBQ0MsVUFBRixDQUFhakMsTUFBTSxDQUFDTSxLQUFQLENBQWFZLElBQTFCO0FBQ0EsWUFBSWdCLElBQUksR0FBR0MsUUFBUSxDQUFDLENBQUNILENBQUMsR0FBR0YsRUFBTCxLQUFZLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBN0IsQ0FBRCxDQUFuQjtBQUNBLGVBQU9JLElBQUksR0FBRyxJQUFQLEdBQWNGLENBQUMsQ0FBQ3FFLGtCQUFGLENBQXFCLE9BQXJCLEVBQThCO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUE5QixDQUFyQjtBQUNELE9BcERXO0FBcURaQyxVQUFJLEVBQUUsZ0JBQVc7QUFDZixlQUFPdEIsU0FBUyxDQUFDcEksUUFBUSxDQUFDc0ksSUFBVixDQUFoQjtBQUNELE9BdkRXO0FBd0RaNUUsVUFBSSxFQUFFLGdCQUFXO0FBQ2YsWUFBSUEsSUFBSSxHQUFJUCxNQUFNLENBQUNNLEtBQVAsQ0FBYUMsSUFBekI7QUFDQSxlQUFPQSxJQUFJLEdBQUcsSUFBUCxHQUFjQSxJQUFkLEdBQXFCcEQsSUFBSSxDQUFDa0IsS0FBTCxDQUFXa0MsSUFBSSxHQUFHLElBQWxCLElBQTBCLEdBQXREO0FBQ0QsT0EzRFc7QUE0RFphLGVBQVMsRUFBRSxxQkFBVztBQUNwQixlQUFPb0YsTUFBTSxDQUFDeEcsTUFBTSxDQUFDTSxLQUFQLENBQWFjLFNBQWQsQ0FBYjtBQUNELE9BOURXO0FBK0RacUYsY0FBUSxFQUFFLG9CQUFXO0FBQ25CLGVBQU96RyxNQUFNLENBQUNNLEtBQVAsQ0FBYVcsSUFBYixHQUFvQixPQUFwQixHQUE4QixNQUFyQztBQUNELE9BakVXO0FBa0VaUixTQUFHLEVBQUUsZUFBVztBQUNkLGVBQU9ULE1BQU0sQ0FBQ00sS0FBUCxDQUFhRyxHQUFwQjtBQUNEO0FBcEVXLEtBQWQ7O0FBdUVBLFFBQUlhLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVNvRixHQUFULEVBQWM7QUFDekIsVUFBSUEsR0FBSixFQUFTO0FBQ1BySCxnQkFBUSxDQUFDNkUsY0FBVCxDQUF3QndDLEdBQXhCLEVBQTZCQyxTQUE3QixHQUF5Q3RDLE9BQU8sQ0FBQ3FDLEdBQUQsQ0FBUCxFQUF6QztBQUNELE9BRkQsTUFFTztBQUNMN0osZ0JBQVEsR0FBR2tELEtBQUssQ0FBQ2xELFFBQWpCO0FBQ0FxRCxhQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBZDtBQUNBLFlBQUkwRyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZdkMsT0FBWixDQUFYO0FBQ0F1QyxZQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFTQyxPQUFULEVBQWtCO0FBQzdCMUgsa0JBQVEsQ0FBQzZFLGNBQVQsQ0FBd0I2QyxPQUF4QixFQUFpQ0osU0FBakMsR0FBNkN0QyxPQUFPLENBQUMwQyxPQUFELENBQVAsRUFBN0M7QUFDRCxTQUZEO0FBR0Q7QUFDRixLQVhEOztBQWFBLGFBQVM5QixTQUFULENBQW1CL0YsR0FBbkIsRUFBd0I7QUFDdEIsVUFBSThILEdBQUcsR0FBRzdKLElBQUksQ0FBQ2tCLEtBQUwsQ0FBV2EsR0FBWCxJQUFrQitILE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixHQUFwQixDQUE1QjtBQUNBLGFBQU9GLEdBQVA7QUFDRDs7QUFFRCxhQUFTbEMsUUFBVCxDQUFrQjVGLEdBQWxCLEVBQXVCO0FBQ3JCLFVBQUk4SCxHQUFHLEdBQUc3RSxRQUFRLENBQUNqRCxHQUFELENBQVIsR0FBZ0IrSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBcEIsQ0FBMUI7QUFDQSxVQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFDakksR0FBRyxHQUFHaUQsUUFBUSxDQUFDakQsR0FBRCxDQUFmLElBQXdCLEVBQXpCLEVBQTZCd0csT0FBN0IsQ0FBcUMsQ0FBckMsQ0FBVjtBQUNBLFVBQUl5QixHQUFHLEdBQUcsRUFBVixFQUFjSCxHQUFHLElBQUksR0FBUDtBQUNkQSxTQUFHLElBQUlHLEdBQUcsR0FBRyxJQUFiO0FBQ0EsYUFBT0gsR0FBUDtBQUNEOztBQUVELGFBQVNaLE9BQVQsQ0FBaUJwRSxDQUFqQixFQUFvQjtBQUNsQixhQUFRQSxDQUFDLEdBQUcsSUFBTCxHQUFhQSxDQUFDLEdBQUcsR0FBakIsR0FBdUJBLENBQUMsR0FBQyxJQUFGLEdBQVMsSUFBdkM7QUFDRDs7QUFFRCxhQUFTd0UsTUFBVCxDQUFnQnhFLENBQWhCLEVBQW1CO0FBQ2pCLFVBQUlnRixHQUFHLEdBQUdoRixDQUFWO0FBQ0EsVUFBSUEsQ0FBQyxJQUFJLElBQVQsRUFBZWdGLEdBQUcsR0FBRzdFLFFBQVEsQ0FBQ0gsQ0FBQyxHQUFDLElBQUgsQ0FBUixHQUFtQixHQUF6QixDQUFmLEtBQ0ssSUFBSUEsQ0FBQyxJQUFJLE9BQVQsRUFBa0JnRixHQUFHLEdBQUc3RSxRQUFRLENBQUNILENBQUMsR0FBQyxPQUFILENBQVIsR0FBc0IsR0FBNUI7QUFDdkIsYUFBT2dGLEdBQVA7QUFDRDs7QUFFRCxXQUFPO0FBQ0wxRixZQUFNLEVBQU5BO0FBREssS0FBUDtBQUdEOztBQUVELFdBQVMrQixVQUFULEdBQXNCO0FBQ3BCLFFBQUkrRCxTQUFTLEdBQUcvSCxRQUFRLENBQUM2RSxjQUFULENBQXdCLE9BQXhCLEVBQWlDa0QsU0FBakQ7QUFDQUEsYUFBUyxDQUFDQyxNQUFWLENBQWlCLFdBQWpCO0FBQ0FELGFBQVMsQ0FBQ0UsR0FBVixDQUFjLGFBQWQ7QUFDQWpJLFlBQVEsQ0FBQzZFLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0N5QyxTQUF4QyxHQUFvRCxFQUFwRDtBQUNEOztBQUVELFdBQVMvRSxTQUFULENBQW1CMkYsR0FBbkIsRUFBd0I7QUFDdEIsUUFBSUgsU0FBUyxHQUFHL0gsUUFBUSxDQUFDNkUsY0FBVCxDQUF3QixPQUF4QixFQUFpQ2tELFNBQWpEO0FBQ0FBLGFBQVMsQ0FBQ0MsTUFBVixDQUFpQixhQUFqQjtBQUNBRCxhQUFTLENBQUNFLEdBQVYsQ0FBYyxXQUFkO0FBQ0FqSSxZQUFRLENBQUM2RSxjQUFULENBQXdCLGNBQXhCLEVBQXdDeUMsU0FBeEMsR0FBb0RZLEdBQXBEO0FBQ0Q7QUFDRixDQWhTRDs7QUFrU0EsSUFBSWhJLE9BQU8sR0FBSSxZQUFXO0FBRXhCLE1BQUlFLElBQUksR0FBRztBQUNUSSxhQUFTLEVBQUVBLG1EQURGO0FBRVRELFdBQU8sRUFBRUEsaURBRkE7QUFHVEcsU0FBSyxFQUFFQSw2Q0FIRTtBQUlUTCxRQUFJLEVBQUU7QUFDSm5ELFdBQUssRUFBRUEsOENBREg7QUFFSmtGLFVBQUksRUFBRUEsNkNBRkY7QUFHSitGLFNBQUcsRUFBRUEsNENBQUdBO0FBSEosS0FKRztBQVNUaEssZUFBVyxFQUFFQSxpREFBV0E7QUFUZixHQUFYO0FBWUFnQyxLQUFHLENBQUNDLElBQUQsQ0FBSDtBQUNELENBZmEsRUFBZCxDOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQSxJQUFJK0gsR0FBRyxHQUFHO0FBQ1RoTCxRQUFNLEVBQUUsS0FEQztBQUVUQyxTQUFPLEVBQUUsQ0FDUjtBQUNDQyxNQUFFLEVBQUUsS0FETDtBQUVDQyxjQUFVLEVBQUUsS0FGYjtBQUdDQyxLQUFDLEVBQUUsR0FISjtBQUdTO0FBQ1JDLFlBQVEsRUFBRTtBQUNURCxPQUFDLEVBQUUsVUFBVSxNQURKO0FBQ1k7QUFDckJFLFNBQUcsRUFBRSxDQUZJO0FBRUQ7QUFDUnNJLFFBQUUsRUFBRSxDQUhLO0FBSVRELFVBQUksRUFBRSxPQUFPLFFBQVEsR0FBZjtBQUpHLEtBSlg7QUFVQ3BJLFVBQU0sRUFBRTtBQUNQQyxZQUFNLEVBQUUsUUFERDtBQUVQQyxXQUFLLEVBQUU7QUFGQTtBQVZULEdBRFE7QUFGQSxDQUFWO0FBcUJldUssa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUEsSUFBSS9GLElBQUksR0FBRztBQUNWakYsUUFBTSxFQUFFLE1BREU7QUFFVkMsU0FBTyxFQUFFLENBQ1I7QUFDQ0MsTUFBRSxFQUFFLE1BREw7QUFFQ0MsY0FBVSxFQUFFLEtBRmI7QUFHSUMsS0FBQyxFQUFFLE9BSFA7QUFHZ0I7QUFDWk0sUUFBSSxFQUFFLFVBQVVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBSnBCO0FBSXNDO0FBQ3JDUCxZQUFRLEVBQUU7QUFDVEQsT0FBQyxFQUFFLFNBRE07QUFDSztBQUNkRSxTQUFHLEVBQUUsRUFGSTtBQUVBO0FBQ1RzSSxRQUFFLEVBQUUsQ0FISztBQUlURCxVQUFJLEVBQUUsT0FBTyxTQUFTLEVBQVQsR0FBYyxFQUFkLEdBQW1CLEdBQTFCO0FBSkcsS0FMWDtBQVdDcEksVUFBTSxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxRQUREO0FBRVBDLFdBQUssRUFBRTtBQUZBO0FBWFQsR0FEUTtBQUZDLENBQVg7QUFzQmV3RSxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLElBQUk3QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDRCxRQUFELEVBQWM7QUFFMUIsTUFBSThILElBQUksR0FBRyxFQUFYOztBQUVBLFdBQVNySCxJQUFULENBQWNWLElBQWQsRUFBb0I7QUFFbEIsUUFBSWtILElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlsSCxJQUFaLENBQVg7O0FBQ0EsU0FBSyxJQUFJZ0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2QsSUFBSSxDQUFDZSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxVQUFJakwsT0FBTyxHQUFHaUQsSUFBSSxDQUFDa0gsSUFBSSxDQUFDYyxDQUFELENBQUwsQ0FBSixDQUFjakwsT0FBNUI7O0FBQ0EsV0FBSyxJQUFJbUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25MLE9BQU8sQ0FBQ2tMLE1BQTVCLEVBQW9DQyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQUl4RCxHQUFHLEdBQUczSCxPQUFPLENBQUNtTCxDQUFELENBQWpCOztBQUNBLFlBQUl4RCxHQUFHLENBQUN2SCxRQUFKLENBQWF1SSxFQUFiLElBQW1CaEIsR0FBRyxDQUFDdkgsUUFBSixDQUFhc0ksSUFBcEMsRUFBMEM7QUFBRTtBQUMxQyxjQUFNMEMsT0FBTyxHQUFHekQsR0FBRyxDQUFDdkgsUUFBcEI7QUFDQWdMLGlCQUFPLENBQUNuTCxFQUFSLEdBQWEwSCxHQUFHLENBQUMxSCxFQUFqQjtBQUNBK0ssY0FBSSxnQ0FBT0EsSUFBUCxJQUFhSSxPQUFiLEVBQUo7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxNQUFNeEcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0YsVUFBRCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3RDLFNBQUssSUFBSXNHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsVUFBSTdLLFFBQVEsR0FBRzRLLElBQUksQ0FBQ0MsQ0FBRCxDQUFuQjtBQUNBN0ssY0FBUSxDQUFDRCxDQUFULElBQWNDLFFBQVEsQ0FBQ3VJLEVBQVQsR0FBY2pFLFVBQWQsR0FBMkJDLFNBQXpDO0FBQ0F2RSxjQUFRLENBQUNDLEdBQVQsSUFBZ0JELFFBQVEsQ0FBQ3NJLElBQVQsR0FBZ0JoRSxVQUFoQixHQUE2QkMsU0FBN0M7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzRDLEdBQUQsRUFBTWpELFVBQU4sRUFBa0JDLFNBQWxCLEVBQTZCMEcsS0FBN0IsRUFBdUM7QUFFckQsUUFBSUMsTUFBTSxHQUFHO0FBQUNuTCxPQUFDLEVBQUV3SCxHQUFHLENBQUN2SCxRQUFKLENBQWFpSixLQUFiLENBQW1CRCxDQUF2QjtBQUEwQi9JLFNBQUcsRUFBRXNILEdBQUcsQ0FBQ3ZILFFBQUosQ0FBYW1JO0FBQTVDLEtBQWI7QUFDQSxRQUFJZ0QsTUFBTSxHQUFHO0FBQUNwTCxPQUFDLEVBQUV3SCxHQUFHLENBQUN2SCxRQUFKLENBQWF1SSxFQUFqQjtBQUFxQnRJLFNBQUcsRUFBRXNILEdBQUcsQ0FBQ3ZILFFBQUosQ0FBYXNJO0FBQXZDLEtBQWI7QUFDQSxRQUFJOEMsUUFBUSxHQUFHO0FBQUNyTCxPQUFDLEVBQUV3SCxHQUFHLENBQUN2SCxRQUFKLENBQWFELENBQWpCO0FBQW9CRSxTQUFHLEVBQUVzSCxHQUFHLENBQUN2SCxRQUFKLENBQWFDO0FBQXRDLEtBQWY7QUFDQSxRQUFJb0wsU0FBUyxHQUFHRCxRQUFRLENBQUNuTCxHQUF6QjtBQUVBLFFBQUl5SCxRQUFRLEdBQUcwRCxRQUFRLENBQUNyTCxDQUFULEdBQWFrTCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNsTCxDQUFyQztBQUNBLFFBQUl1TCxNQUFNLEdBQUc1RCxRQUFRLEdBQUcsQ0FBWCxHQUFlNkQsU0FBUyxDQUFDaEUsR0FBRCxFQUFNMEQsS0FBTixDQUF4QixHQUF1QztBQUFDbEwsT0FBQyxFQUFFLENBQUo7QUFBT0UsU0FBRyxFQUFFO0FBQVosS0FBcEQsQ0FScUQsQ0FVckQ7O0FBQ0EsUUFBSXlILFFBQVEsR0FBRyxDQUFYLElBQWdCeUQsTUFBTSxDQUFDcEwsQ0FBUCxLQUFhLENBQWpDLEVBQW9DO0FBQ2xDeUwsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmxFLEdBQUcsQ0FBQ2xFLEtBQUosQ0FBVXFFLFFBQXRDO0FBQ0FILFNBQUcsQ0FBQ3ZILFFBQUosQ0FBYXVJLEVBQWIsR0FBa0IsQ0FBbEI7QUFDQWhCLFNBQUcsQ0FBQ3ZILFFBQUosQ0FBYUQsQ0FBYixHQUFpQmtMLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2xMLENBQTFCO0FBQ0EsVUFBSW9MLE1BQU0sQ0FBQ3BMLENBQVAsR0FBWSxLQUFLLEdBQXJCLEVBQTJCd0gsR0FBRyxDQUFDdkgsUUFBSixDQUFhOEUsS0FBYixHQUFxQixJQUFyQjtBQUMzQjtBQUNELEtBTkQsTUFNTyxJQUFJeUMsR0FBRyxDQUFDbEUsS0FBSixDQUFVc0UsT0FBVixHQUFvQixDQUFwQixJQUF5QndELE1BQU0sQ0FBQ3BMLENBQVAsS0FBYSxDQUExQyxFQUE2QztBQUNsRHlMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJsRSxHQUFHLENBQUNsRSxLQUFKLENBQVVzRSxPQUFyQztBQUNBSixTQUFHLENBQUN2SCxRQUFKLENBQWF1SSxFQUFiLEdBQWtCLENBQWxCO0FBQ0EsVUFBSTRDLE1BQU0sQ0FBQ3BMLENBQVAsR0FBWSxPQUFPLEdBQXZCLEVBQTZCd0gsR0FBRyxDQUFDdkgsUUFBSixDQUFhOEUsS0FBYixHQUFxQixJQUFyQjtBQUM3QjtBQUNEOztBQUVELFFBQUk0RyxLQUFLLEdBQUc1SSxRQUFRLENBQUM1QixTQUFULENBQW1CZ0ssTUFBbkIsQ0FBWjtBQUNBLFFBQUlTLEtBQUssR0FBRzdJLFFBQVEsQ0FBQzVCLFNBQVQsQ0FBbUJvSyxNQUFuQixDQUFaO0FBQ0EsUUFBSU0sS0FBSyxHQUFHOUksUUFBUSxDQUFDNUIsU0FBVCxDQUFtQmlLLE1BQW5CLENBQVo7QUFDQSxRQUFJVSxPQUFPLEdBQUcvSSxRQUFRLENBQUM1QixTQUFULENBQW1Ca0ssUUFBbkIsQ0FBZDtBQUVBUSxTQUFLLENBQUM3SyxDQUFOLElBQVcsQ0FBQzJLLEtBQUssQ0FBQzNLLENBQU4sR0FBVTRLLEtBQUssQ0FBQzVLLENBQWpCLElBQXNCdUQsVUFBdEIsR0FBbUNDLFNBQTlDO0FBQ0FxSCxTQUFLLENBQUM1SyxDQUFOLElBQVcsQ0FBQzBLLEtBQUssQ0FBQzFLLENBQU4sR0FBVTJLLEtBQUssQ0FBQzNLLENBQWpCLElBQXNCc0QsVUFBdEIsR0FBbUNDLFNBQTlDO0FBQ0FzSCxXQUFPLENBQUM5SyxDQUFSLElBQWE2SyxLQUFLLENBQUM3SyxDQUFOLEdBQVV1RCxVQUFWLEdBQXVCQyxTQUFwQztBQUNBc0gsV0FBTyxDQUFDN0ssQ0FBUixJQUFhNEssS0FBSyxDQUFDNUssQ0FBTixHQUFVc0QsVUFBVixHQUF1QkMsU0FBcEM7QUFFQTRHLFVBQU0sR0FBR3JJLFFBQVEsQ0FBQ2xDLE9BQVQsQ0FBaUJnTCxLQUFqQixDQUFUO0FBQ0FSLFlBQVEsR0FBR3RJLFFBQVEsQ0FBQ2xDLE9BQVQsQ0FBaUJpTCxPQUFqQixDQUFYO0FBQ0FULFlBQVEsQ0FBQ3JMLENBQVQsR0FBYU8sSUFBSSxDQUFDa0IsS0FBTCxDQUFXNEosUUFBUSxDQUFDckwsQ0FBcEIsQ0FBYjtBQUVBd0gsT0FBRyxDQUFDdkgsUUFBSixDQUFhdUksRUFBYixHQUFrQjRDLE1BQU0sQ0FBQ3BMLENBQXpCO0FBQ0F3SCxPQUFHLENBQUN2SCxRQUFKLENBQWFzSSxJQUFiLEdBQW9CNkMsTUFBTSxDQUFDbEwsR0FBM0I7QUFDQXNILE9BQUcsQ0FBQ3ZILFFBQUosQ0FBYUQsQ0FBYixHQUFpQnFMLFFBQVEsQ0FBQ3JMLENBQTFCO0FBQ0F3SCxPQUFHLENBQUN2SCxRQUFKLENBQWFDLEdBQWIsR0FBbUJtTCxRQUFRLENBQUNuTCxHQUE1QjtBQUNBc0gsT0FBRyxDQUFDdkgsUUFBSixDQUFhbUksUUFBYixHQUF3QnJGLFFBQVEsQ0FBQ1YsUUFBVCxDQUFrQm1GLEdBQUcsQ0FBQ3ZILFFBQUosQ0FBYW1JLFFBQWIsR0FBd0JrRCxTQUF4QixHQUFvQzlELEdBQUcsQ0FBQ3ZILFFBQUosQ0FBYUMsR0FBbkUsQ0FBeEI7QUFDQXNILE9BQUcsQ0FBQ2xFLEtBQUosQ0FBVXFFLFFBQVYsR0FBcUJwSCxJQUFJLENBQUNrQixLQUFMLENBQVcrRixHQUFHLENBQUN2SCxRQUFKLENBQWFELENBQWIsR0FBaUJrTCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNsTCxDQUFyQyxDQUFyQjtBQUNELEdBNUNEOztBQThDQSxXQUFTd0wsU0FBVCxDQUFtQmhFLEdBQW5CLEVBQXdCMEQsS0FBeEIsRUFBK0I7QUFFN0I7QUFDQSxRQUFNNUssSUFBSSxHQUFHNEssS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTNUssSUFBdEI7QUFDQSxRQUFNeUIsSUFBSSxHQUFHeUYsR0FBRyxDQUFDdkgsUUFBSixDQUFhRCxDQUExQjtBQUNBLFFBQUkrTCxFQUFFLEdBQUksT0FBT3hMLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxDQUFDLEVBQWQsQ0FBUixHQUE2QkYsSUFBN0IsWUFBcUN5QixJQUFyQyxFQUE2QyxDQUE3QyxDQUFUO0FBQ0EsUUFBTWlLLElBQUksR0FBR2pKLFFBQVEsQ0FBQ1YsUUFBVCxDQUFrQixNQUFNbUYsR0FBRyxDQUFDdkgsUUFBSixDQUFhQyxHQUFyQyxDQUFiO0FBQ0EsUUFBSTZCLElBQUksR0FBR21KLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2xMLENBQXBCLEVBQXdCK0wsRUFBRSxHQUFHLENBQUw7QUFFeEJ2RSxPQUFHLENBQUNsRSxLQUFKLENBQVVzRixNQUFWLEdBQW1CbUQsRUFBbkI7QUFDQXZFLE9BQUcsQ0FBQ2xFLEtBQUosQ0FBVTBFLFNBQVYsR0FBc0JnRSxJQUF0QixDQVY2QixDQVk3Qjs7QUFDQSxRQUFNQyxLQUFLLEdBQUdmLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzVLLElBQXZCO0FBQ0EsUUFBTTRMLFdBQVcsR0FBRztBQUFDbE0sT0FBQyxFQUFFd0gsR0FBRyxDQUFDdkgsUUFBSixDQUFhRCxDQUFqQjtBQUFvQkUsU0FBRyxFQUFFc0gsR0FBRyxDQUFDdkgsUUFBSixDQUFhQztBQUF0QyxLQUFwQjtBQUNBLFFBQU1pTSxhQUFhLEdBQUc7QUFBQ25NLE9BQUMsRUFBRWtMLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2pMLFFBQVQsQ0FBa0JELENBQXRCO0FBQXlCRSxTQUFHLEVBQUVnTCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNqTCxRQUFULENBQWtCQztBQUFoRCxLQUF0QjtBQUNBLFFBQU1rTSxLQUFLLEdBQUdySixRQUFRLENBQUNyQixPQUFULENBQWlCd0ssV0FBakIsRUFBOEJDLGFBQTlCLENBQWQ7QUFDQSxRQUFNRSxHQUFHLEdBQUksT0FBTzlMLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxDQUFDLEVBQWQsQ0FBUixHQUE2QnlMLEtBQTdCLFlBQXNDRyxLQUFLLENBQUNwTSxDQUE1QyxFQUFpRCxDQUFqRCxDQUFaO0FBQ0EsUUFBTXNNLEtBQUssR0FBR3ZKLFFBQVEsQ0FBQ1YsUUFBVCxDQUFrQixNQUFNK0osS0FBSyxDQUFDbE0sR0FBOUIsQ0FBZDtBQUVBc0gsT0FBRyxDQUFDbEUsS0FBSixDQUFVdUYsS0FBVixHQUFrQndELEdBQWxCO0FBQ0E3RSxPQUFHLENBQUNsRSxLQUFKLENBQVVzRSxPQUFWLEdBQW9CckgsSUFBSSxDQUFDa0IsS0FBTCxDQUFXMkssS0FBSyxDQUFDcE0sQ0FBTixHQUFVa0wsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTbEwsQ0FBOUIsQ0FBcEI7QUFDQXdILE9BQUcsQ0FBQ2xFLEtBQUosQ0FBVTJFLFFBQVYsR0FBcUJxRSxLQUFyQjtBQUNBLFFBQU1DLElBQUksR0FBR3hKLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQjtBQUFDcEMsT0FBQyxFQUFFK0wsRUFBSjtBQUFRN0wsU0FBRyxFQUFFOEw7QUFBYixLQUFoQixFQUFvQztBQUFDaE0sT0FBQyxFQUFFcU0sR0FBSjtBQUFTbk0sU0FBRyxFQUFFb007QUFBZCxLQUFwQyxDQUFiO0FBRUEsV0FBT0MsSUFBUDtBQUNEOztBQUVELFNBQU87QUFDTC9JLFFBQUksRUFBSkEsSUFESztBQUVMaUIsUUFBSSxFQUFKQSxJQUZLO0FBR0xHLFdBQU8sRUFBUEE7QUFISyxHQUFQO0FBS0QsQ0EzR0Q7O0FBNkdlNUIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUEsSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsUUFBRCxFQUFjO0FBRTVCLE1BQUl5SixVQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxPQUFKO0FBRUFuSixNQUFJOztBQUVKLFdBQVNBLElBQVQsR0FBZ0I7QUFDZGdKLGNBQVUsR0FBRy9KLFFBQVEsQ0FBQzZFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBbUYsY0FBVSxHQUFHRyxhQUFhLENBQUNKLFVBQUQsQ0FBMUI7QUFDRDs7QUFFRCxNQUFJL0ksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1gsSUFBRCxFQUFPYSxJQUFQLEVBQWFrSixPQUFiLEVBQXNCQyxLQUF0QixFQUFnQztBQUMzQyxRQUFJOUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWWxILElBQVosQ0FBWDtBQUNBa0gsUUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQUosR0FBRyxFQUFJO0FBQ2xCLFVBQUl0QyxHQUFHLEdBQUcxRSxJQUFJLENBQUNnSCxHQUFELENBQWQ7O0FBQ0EsVUFBSXRDLEdBQUcsQ0FBQzNILE9BQVIsRUFBaUI7QUFDZjJILFdBQUcsQ0FBQzNILE9BQUosQ0FBWXFLLE9BQVosQ0FBb0IsVUFBQTFDLEdBQUcsRUFBSTtBQUN6QnVGLG1CQUFTLENBQUNQLFVBQUQsRUFBYWhGLEdBQWIsQ0FBVDtBQUNELFNBRkQ7QUFHRDtBQUNGLEtBUEQ7QUFRQTlDLFVBQU0sQ0FBQzVCLElBQUQsRUFBT2EsSUFBUCxFQUFha0osT0FBYixFQUFzQkMsS0FBdEIsQ0FBTjtBQUNELEdBWEQ7O0FBYUEsTUFBTWhKLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUMwRCxHQUFELEVBQU03RCxJQUFOLEVBQVlrSixPQUFaLEVBQXFCQyxLQUFyQixFQUErQjtBQUMvQ3RGLE9BQUcsQ0FBQzNILE9BQUosQ0FBWXFLLE9BQVosQ0FBb0IsVUFBQTFDLEdBQUcsRUFBSTtBQUN6QnVGLGVBQVMsQ0FBQ1AsVUFBRCxFQUFhaEYsR0FBYixDQUFUO0FBQ0QsS0FGRDtBQUlBd0YsYUFBUyxDQUFDeEYsR0FBRyxDQUFDM0gsT0FBSixDQUFZLENBQVosQ0FBRCxFQUFpQjhELElBQWpCLEVBQXVCa0osT0FBdkIsRUFBZ0NDLEtBQWhDLENBQVQ7QUFDRCxHQU5EOztBQVFBLE1BQU1oSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDMEMsR0FBRCxFQUFNN0QsSUFBTixFQUFZa0osT0FBWixFQUFxQkMsS0FBckIsRUFBK0I7QUFDL0NFLGFBQVMsQ0FBQ3hGLEdBQUcsQ0FBQzNILE9BQUosQ0FBWSxDQUFaLENBQUQsRUFBaUI4RCxJQUFqQixFQUF1QmtKLE9BQXZCLEVBQWdDQyxLQUFoQyxDQUFUO0FBQ0FILFdBQU8sR0FBR25GLEdBQUcsQ0FBQzNILE9BQUosQ0FBWSxDQUFaLEVBQWVJLFFBQWYsQ0FBd0JDLEdBQWxDO0FBQ0QsR0FIRDs7QUFLQSxNQUFNd0UsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQzVCLElBQUQsRUFBT2EsSUFBUCxFQUFha0osT0FBYixFQUFzQkMsS0FBdEIsRUFBZ0M7QUFDN0MsUUFBSTlDLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlsSCxJQUFaLENBQVg7QUFDQWtILFFBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUFKLEdBQUcsRUFBSTtBQUNsQixVQUFJdEMsR0FBRyxHQUFHMUUsSUFBSSxDQUFDZ0gsR0FBRCxDQUFkO0FBRUEsVUFBSXRDLEdBQUcsQ0FBQ3pILFVBQUosS0FBbUIsS0FBdkIsRUFBOEJpTixTQUFTLENBQUN4RixHQUFELEVBQU03RCxJQUFOLEVBQVlrSixPQUFaLEVBQXFCQyxLQUFyQixDQUFUO0FBQzlCdEYsU0FBRyxDQUFDM0gsT0FBSixDQUFZcUssT0FBWixDQUFvQixVQUFBMUMsR0FBRyxFQUFJO0FBQ3pCd0YsaUJBQVMsQ0FBQ3hGLEdBQUQsRUFBTTdELElBQU4sRUFBWWtKLE9BQVosRUFBcUJDLEtBQXJCLENBQVQ7QUFDRCxPQUZEO0FBR0QsS0FQRDtBQVFELEdBVkQ7O0FBWUEsV0FBU0MsU0FBVCxDQUFtQlAsVUFBbkIsRUFBK0JoRixHQUEvQixFQUFvQztBQUVsQyxRQUFJeUYsVUFBSjtBQUNBLFFBQUlDLEtBQUssR0FBRyw0QkFBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRzFLLFFBQVEsQ0FBQzJLLGVBQVQsQ0FBeUJGLEtBQXpCLEVBQWdDMUYsR0FBRyxDQUFDckgsTUFBSixDQUFXQyxNQUEzQyxDQUFkO0FBQ0EsUUFBSW9ILEdBQUcsQ0FBQzFILEVBQVIsRUFBWXFOLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQzdGLEdBQUcsQ0FBQzFILEVBQXZDO0FBRVosUUFBSTBILEdBQUcsQ0FBQ3JILE1BQUosQ0FBV0UsS0FBZixFQUFzQjhNLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixNQUE3QixFQUFxQzdGLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV0UsS0FBaEQ7QUFDdEIsUUFBSW1ILEdBQUcsQ0FBQ3JILE1BQUosQ0FBV21OLE1BQWYsRUFBdUJILE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixRQUE3QixFQUF1QzdGLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV21OLE1BQWxEO0FBQ3ZCLFFBQUk5RixHQUFHLENBQUNySCxNQUFKLENBQVdvTixlQUFmLEVBQWdDSixPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsa0JBQTdCLEVBQWlEN0YsR0FBRyxDQUFDckgsTUFBSixDQUFXb04sZUFBNUQ7QUFDaEMsUUFBSS9GLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV3FOLFlBQWYsRUFBNkJMLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixjQUE3QixFQUE2QzdGLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV3FOLFlBQXhEO0FBQzdCLFFBQUloRyxHQUFHLENBQUNySCxNQUFKLENBQVdzTixRQUFmLEVBQXlCTixPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsRUFBMEM3RixHQUFHLENBQUNySCxNQUFKLENBQVdzTixRQUFyRDtBQUN6QixRQUFJakcsR0FBRyxDQUFDckgsTUFBSixDQUFXdU4sTUFBZixFQUF1QlAsT0FBTyxDQUFDRSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLFFBQTdCLEVBQXVDN0YsR0FBRyxDQUFDckgsTUFBSixDQUFXdU4sTUFBbEQ7QUFDdkIsUUFBSWxHLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV3dOLE1BQWYsRUFBdUJSLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixRQUE3QixFQUF1QzdGLEdBQUcsQ0FBQ3JILE1BQUosQ0FBV3dOLE1BQWxEO0FBQ3ZCLFFBQUluRyxHQUFHLENBQUNySCxNQUFKLENBQVdhLENBQVgsSUFBZ0J3RyxHQUFHLENBQUNySCxNQUFKLENBQVdhLENBQVgsS0FBaUIsQ0FBckMsRUFBd0NtTSxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0M3RixHQUFHLENBQUNySCxNQUFKLENBQVdhLENBQTdDO0FBQ3hDLFFBQUl3RyxHQUFHLENBQUNySCxNQUFKLENBQVdjLENBQVgsSUFBZ0J1RyxHQUFHLENBQUNySCxNQUFKLENBQVdjLENBQVgsS0FBaUIsQ0FBckMsRUFBd0NrTSxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0M3RixHQUFHLENBQUNySCxNQUFKLENBQVdjLENBQTdDO0FBQ3hDLFFBQUl1RyxHQUFHLENBQUNySCxNQUFKLENBQVdPLEtBQVgsSUFBb0I4RyxHQUFHLENBQUNySCxNQUFKLENBQVdPLEtBQVgsS0FBcUIsQ0FBN0MsRUFBZ0R5TSxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0M3RixHQUFHLENBQUNySCxNQUFKLENBQVdPLEtBQWpEO0FBQ2hELFFBQUk4RyxHQUFHLENBQUNySCxNQUFKLENBQVdRLE1BQVgsSUFBcUI2RyxHQUFHLENBQUNySCxNQUFKLENBQVdRLE1BQVgsS0FBc0IsQ0FBL0MsRUFBa0R3TSxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsUUFBN0IsRUFBdUM3RixHQUFHLENBQUNySCxNQUFKLENBQVdRLE1BQWxEO0FBQ2xELFFBQUk2RyxHQUFHLENBQUNySCxNQUFKLENBQVd5TixFQUFmLEVBQW1CVCxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUM3RixHQUFHLENBQUNySCxNQUFKLENBQVd5TixFQUE5QztBQUNuQixRQUFJcEcsR0FBRyxDQUFDckgsTUFBSixDQUFXME4sRUFBZixFQUFtQlYsT0FBTyxDQUFDRSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DN0YsR0FBRyxDQUFDckgsTUFBSixDQUFXME4sRUFBOUM7QUFDbkIsUUFBSXJHLEdBQUcsQ0FBQ3JILE1BQUosQ0FBVzJOLEVBQWYsRUFBbUJYLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQzdGLEdBQUcsQ0FBQ3JILE1BQUosQ0FBVzJOLEVBQTlDO0FBQ25CLFFBQUl0RyxHQUFHLENBQUNySCxNQUFKLENBQVc0TixFQUFmLEVBQW1CWixPQUFPLENBQUNFLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUM3RixHQUFHLENBQUNySCxNQUFKLENBQVc0TixFQUE5QyxFQXJCZSxDQXNCbEM7O0FBRUEsUUFBSXZHLEdBQUcsQ0FBQ3JILE1BQUosQ0FBVzZOLFFBQWYsRUFBeUI7QUFDdkJmLGdCQUFVLEdBQUd4SyxRQUFRLENBQUM2RSxjQUFULENBQXdCRSxHQUFHLENBQUNySCxNQUFKLENBQVc2TixRQUFuQyxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUMsYUFBYSxHQUFHQyxnQkFBZ0IsQ0FBQzFCLFVBQUQsQ0FBcEM7QUFDQUEsZ0JBQVUsQ0FBQzJCLFdBQVgsQ0FBdUJGLGFBQXZCO0FBQ0FoQixnQkFBVSxHQUFHZ0IsYUFBYjtBQUNEOztBQUVEaEIsY0FBVSxDQUFDa0IsV0FBWCxDQUF1QmhCLE9BQXZCO0FBQ0EsUUFBSTNGLEdBQUcsQ0FBQzFILEVBQUosS0FBVyxXQUFmLEVBQTRCNE0sU0FBUyxHQUFHUyxPQUFaO0FBQzdCOztBQUVELFdBQVNILFNBQVQsQ0FBbUJ4RixHQUFuQixFQUF3QjdELElBQXhCLEVBQThCa0osT0FBOUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzVDLFFBQU1oTSxJQUFJLEdBQUdpQyxRQUFRLENBQUM1QixTQUFULENBQW1CO0FBQzlCbkIsT0FBQyxFQUFFd0gsR0FBRyxDQUFDdkgsUUFBSixDQUFhRCxDQURjO0FBRTlCRSxTQUFHLEVBQUVzSCxHQUFHLENBQUN2SCxRQUFKLENBQWFDO0FBRlksS0FBbkIsQ0FBYjtBQUlBLFFBQU1rTyxJQUFJLEdBQUdDLE9BQU8sQ0FBQzFLLElBQUQsRUFBT2tKLE9BQVAsRUFBZ0JDLEtBQWhCLENBQXBCO0FBQ0EsUUFBSXdCLElBQUksR0FBRzdMLFFBQVEsQ0FBQzZFLGNBQVQsQ0FBd0JFLEdBQUcsQ0FBQzFILEVBQTVCLENBQVg7QUFFQSxRQUFNeU8sTUFBTSxHQUFHL0csR0FBRyxDQUFDckgsTUFBSixDQUFXQyxNQUExQjs7QUFDQSxRQUFJbU8sTUFBTSxLQUFLLFFBQWYsRUFBeUI7QUFDdkJELFVBQUksQ0FBQ2pCLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBaUNaLFVBQVUsQ0FBQ3pMLENBQVgsR0FBZW9OLElBQUksQ0FBQ3BOLENBQXBCLEdBQXdCRixJQUFJLENBQUNFLENBQUwsR0FBUzJDLElBQWxFO0FBQ0EySyxVQUFJLENBQUNqQixjQUFMLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWlDWixVQUFVLENBQUN4TCxDQUFYLEdBQWVtTixJQUFJLENBQUNuTixDQUFwQixHQUF3QkgsSUFBSSxDQUFDRyxDQUFMLEdBQVMwQyxJQUFsRTtBQUNBMkssVUFBSSxDQUFDakIsY0FBTCxDQUFvQixJQUFwQixFQUEwQixHQUExQixFQUErQjlNLElBQUksQ0FBQzhHLEdBQUwsQ0FBUyxDQUFULEVBQVlHLEdBQUcsQ0FBQ3hILENBQUosR0FBUTJELElBQXBCLENBQS9CO0FBQ0QsS0FKRCxNQUlPLElBQUk0SyxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM1QixVQUFNcEgsT0FBTyxHQUFHNUcsSUFBSSxDQUFDOEcsR0FBTCxDQUFTLENBQVQsRUFBWUcsR0FBRyxDQUFDOUcsS0FBSixHQUFZaUQsSUFBeEIsQ0FBaEI7QUFDQSxVQUFNdUQsUUFBUSxHQUFHM0csSUFBSSxDQUFDOEcsR0FBTCxDQUFTLENBQVQsRUFBWUcsR0FBRyxDQUFDN0csTUFBSixHQUFhZ0QsSUFBekIsQ0FBakI7QUFFQTJLLFVBQUksQ0FBQ2pCLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsR0FBMUIsRUFBZ0NaLFVBQVUsQ0FBQ3pMLENBQVgsR0FBZW9OLElBQUksQ0FBQ3BOLENBQXBCLEdBQXdCRixJQUFJLENBQUNFLENBQUwsR0FBTzJDLElBQS9CLEdBQXVDd0QsT0FBTyxHQUFHLENBQWpGO0FBQ0FtSCxVQUFJLENBQUNqQixjQUFMLENBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQWdDWixVQUFVLENBQUN4TCxDQUFYLEdBQWVtTixJQUFJLENBQUNuTixDQUFwQixHQUF3QkgsSUFBSSxDQUFDRyxDQUFMLEdBQVMwQyxJQUFqRTtBQUNBMkssVUFBSSxDQUFDakIsY0FBTCxDQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQ2xHLE9BQW5DO0FBQ0FtSCxVQUFJLENBQUNqQixjQUFMLENBQW9CLElBQXBCLEVBQTBCLFFBQTFCLEVBQW9DbkcsUUFBcEM7QUFDRCxLQVJNLE1BUUEsSUFBSU0sR0FBRyxDQUFDMUgsRUFBSixLQUFXLE9BQWYsRUFBd0I7QUFDN0IsVUFBTWtCLENBQUMsR0FBSXlMLFVBQVUsQ0FBQ3pMLENBQVgsR0FBZW9OLElBQUksQ0FBQ3BOLENBQXBCLEdBQXdCRixJQUFJLENBQUNFLENBQUwsR0FBTzJDLElBQS9CLEdBQXNDLENBQWpEO0FBQ0EsVUFBTTFDLENBQUMsR0FBSXdMLFVBQVUsQ0FBQ3hMLENBQVgsR0FBZW1OLElBQUksQ0FBQ25OLENBQXBCLEdBQXdCSCxJQUFJLENBQUNHLENBQUwsR0FBUzBDLElBQWpDLEdBQXdDLEVBQW5EO0FBQ0EsVUFBTXdFLEtBQUssR0FBR1gsR0FBRyxDQUFDdkgsUUFBSixDQUFhbUksUUFBM0I7QUFDQSxVQUFNb0csU0FBUyx1QkFBZ0J4TixDQUFoQixjQUFxQkMsQ0FBckIsc0JBQWtDa0gsS0FBbEMsVUFBZjtBQUNBLFVBQU1zRyxVQUFVLEdBQUdqSCxHQUFHLENBQUN2SCxRQUFKLENBQWFpSixLQUFiLENBQW1CRCxDQUFuQixHQUF1QixDQUF2QixHQUE0QixTQUE1QixHQUF3QyxRQUEzRDtBQUNBcUYsVUFBSSxDQUFDakIsY0FBTCxDQUFvQixJQUFwQixFQUEwQixXQUExQixFQUF1Q21CLFNBQXZDO0FBQ0E5QixlQUFTLENBQUNXLGNBQVYsQ0FBeUIsSUFBekIsRUFBK0IsWUFBL0IsRUFBNkNvQixVQUE3QztBQUNEO0FBQ0Y7O0FBRUQsV0FBU1AsZ0JBQVQsQ0FBMEIxQixVQUExQixFQUFzQztBQUNwQyxRQUFJeUIsYUFBSjs7QUFFQSxTQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsVUFBVSxDQUFDa0MsUUFBWCxDQUFvQjNELE1BQXhDLEVBQWdERCxDQUFDLEVBQWpELEVBQXFEO0FBQ25ELFVBQUkwQixVQUFVLENBQUNrQyxRQUFYLENBQW9CNUQsQ0FBcEIsRUFBdUJoTCxFQUF2QixLQUE4QixXQUFsQyxFQUErQ21PLGFBQWEsR0FBR3pCLFVBQVUsQ0FBQ2tDLFFBQVgsQ0FBb0I1RCxDQUFwQixDQUFoQjtBQUNoRDs7QUFFRCxRQUFJLENBQUNtRCxhQUFMLEVBQW9CO0FBQ2xCLFVBQUlmLEtBQUssR0FBRyw0QkFBWjtBQUNBZSxtQkFBYSxHQUFHeEwsUUFBUSxDQUFDMkssZUFBVCxDQUF5QkYsS0FBekIsRUFBZ0MsS0FBaEMsQ0FBaEI7QUFDQWUsbUJBQWEsQ0FBQ1osY0FBZCxDQUE2QixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxXQUF6QztBQUNBWSxtQkFBYSxDQUFDWixjQUFkLENBQTZCLElBQTdCLEVBQW1DLE9BQW5DLEVBQTRDLE1BQTVDO0FBQ0FZLG1CQUFhLENBQUNaLGNBQWQsQ0FBNkIsSUFBN0IsRUFBbUMsUUFBbkMsRUFBNkMsTUFBN0M7QUFDRDs7QUFFRCxXQUFPWSxhQUFQO0FBQ0Q7O0FBRUQsV0FBU3JCLGFBQVQsQ0FBdUJKLFVBQXZCLEVBQW1DO0FBQ2pDLFdBQU87QUFDTHZMLE9BQUMsRUFBRXVMLFVBQVUsQ0FBQ21DLFlBQVgsR0FBMEIsQ0FEeEI7QUFFTDNOLE9BQUMsRUFBRXdMLFVBQVUsQ0FBQ29DLFdBQVgsR0FBeUI7QUFGdkIsS0FBUDtBQUlEOztBQUVELFdBQVNQLE9BQVQsQ0FBaUIxSyxJQUFqQixFQUF1QmtKLE9BQXZCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUNyQyxRQUFNK0IsTUFBTSxHQUFHOUwsUUFBUSxDQUFDNUIsU0FBVCxDQUFtQjtBQUFDbkIsT0FBQyxFQUFFNk0sT0FBTyxDQUFDNU0sUUFBUixDQUFpQkQsQ0FBckI7QUFBd0JFLFNBQUcsRUFBRTJNLE9BQU8sQ0FBQzVNLFFBQVIsQ0FBaUJDO0FBQTlDLEtBQW5CLENBQWY7QUFDQSxRQUFNNE8sYUFBYSxHQUFHdk8sSUFBSSxDQUFDZ0ssR0FBTCxDQUFTaUMsVUFBVSxDQUFDb0MsV0FBcEIsRUFBaUNwQyxVQUFVLENBQUNtQyxZQUE1QyxJQUE0RGhMLElBQWxGO0FBQ0EsUUFBTW9MLFdBQVcsR0FBR2xDLE9BQU8sQ0FBQzdNLENBQVIsR0FBWSxDQUFoQztBQUVBLFFBQUlvTyxJQUFKO0FBQ0EsUUFBTVksS0FBSyxHQUFHRCxXQUFXLEdBQUNELGFBQTFCO0FBQ0EsUUFBTUcsYUFBYSxHQUFHbkMsS0FBSyxLQUFLLE1BQVYsR0FBbUIsRUFBbkIsR0FBd0IsQ0FBOUM7O0FBQ0EsUUFBSWtDLEtBQUssR0FBR0MsYUFBWixFQUEyQjtBQUFFO0FBQzNCYixVQUFJLEdBQUc7QUFDTHBOLFNBQUMsRUFBRSxDQUFDNk4sTUFBTSxDQUFDN04sQ0FBUixHQUFZMkMsSUFEVjtBQUVMMUMsU0FBQyxFQUFFNE4sTUFBTSxDQUFDNU4sQ0FBUCxHQUFXMEMsSUFBWCxHQUFrQmtKLE9BQU8sQ0FBQzdNLENBQVIsR0FBWTJELElBQTlCLEdBQXFDO0FBRm5DLE9BQVA7QUFJRCxLQUxELE1BS08sSUFBSXFMLEtBQUssR0FBRyxFQUFSLElBQWNsQyxLQUFLLEtBQUssTUFBNUIsRUFBb0M7QUFBRTtBQUMzQ3NCLFVBQUksR0FBRztBQUFDcE4sU0FBQyxFQUFFLENBQUM2TixNQUFNLENBQUM3TixDQUFSLEdBQVkyQyxJQUFoQjtBQUFzQjFDLFNBQUMsRUFBRTROLE1BQU0sQ0FBQzVOLENBQVAsR0FBVzBDO0FBQXBDLE9BQVA7QUFDRCxLQUZNLE1BR0Y7QUFDSHlLLFVBQUksR0FBRztBQUFFO0FBQ1BwTixTQUFDLEVBQUUsQ0FBQzZOLE1BQU0sQ0FBQzdOLENBQVIsR0FBWTJDLElBRFY7QUFFTDFDLFNBQUMsRUFBRTROLE1BQU0sQ0FBQzVOLENBQVAsR0FBVzBDLElBQVgsR0FBa0JrSixPQUFPLENBQUM3TSxDQUFSLEdBQVkyRCxJQUE5QixHQUFxQztBQUZuQyxPQUFQO0FBSUEsVUFBSWdKLE9BQU8sR0FBRyxFQUFWLElBQWdCQSxPQUFPLElBQUksR0FBL0IsRUFBb0N5QixJQUFJLEdBQUc7QUFBQ3BOLFNBQUMsRUFBRSxDQUFDb04sSUFBSSxDQUFDbk4sQ0FBVjtBQUFhQSxTQUFDLEVBQUUsQ0FBQ21OLElBQUksQ0FBQ3BOO0FBQXRCLE9BQVAsQ0FBcEMsQ0FBb0U7QUFBcEUsV0FDSyxJQUFJMkwsT0FBTyxHQUFHLEdBQVYsSUFBaUJBLE9BQU8sSUFBSSxHQUFoQyxFQUFxQ3lCLElBQUksR0FBRztBQUFDcE4sV0FBQyxFQUFFb04sSUFBSSxDQUFDcE4sQ0FBVDtBQUFZQyxXQUFDLEVBQUUsQ0FBQ21OLElBQUksQ0FBQ25OO0FBQXJCLFNBQVAsQ0FBckMsQ0FBb0U7QUFBcEUsYUFDQSxJQUFJMEwsT0FBTyxHQUFHLEdBQVYsSUFBaUJBLE9BQU8sSUFBSSxHQUFoQyxFQUFxQ3lCLElBQUksR0FBRztBQUFDcE4sYUFBQyxFQUFFb04sSUFBSSxDQUFDbk4sQ0FBVDtBQUFZQSxhQUFDLEVBQUVtTixJQUFJLENBQUNwTjtBQUFwQixXQUFQLENBUHZDLENBT3NFO0FBQzFFOztBQUVELFdBQU9vTixJQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUNMM0ssVUFBTSxFQUFOQSxNQURLO0FBRUxLLGFBQVMsRUFBVEEsU0FGSztBQUdMWSxVQUFNLEVBQU5BLE1BSEs7QUFJTEksYUFBUyxFQUFUQTtBQUpLLEdBQVA7QUFNRCxDQXBMRDs7QUFzTGU3Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUN2TEE7QUFBQSxJQUFJRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSixRQUFELEVBQWM7QUFDeEIsTUFBTW5ELE1BQU0sR0FBRyxPQUFmO0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsTUFBRSxFQUFFLE9BRE47QUFFRXdELFNBQUssRUFBRTtBQUNMc0YsWUFBTSxFQUFFLEdBREg7QUFFTEMsV0FBSyxFQUFFLENBRkY7QUFHTGxCLGNBQVEsRUFBRSxDQUhMO0FBSUxDLGFBQU8sRUFBRSxDQUpKO0FBS0xJLGVBQVMsRUFBRSxDQUxOO0FBTUxDLGNBQVEsRUFBRTtBQU5MLEtBRlQ7QUFVRWhJLFlBQVEsRUFBRTtBQUNSRCxPQUFDLEVBQUUsT0FESztBQUNJO0FBQ1pFLFNBQUcsRUFBRSxDQUZHO0FBRUE7QUFDUnNJLFFBQUUsRUFBRSxDQUhJO0FBR0Q7QUFDUEQsVUFBSSxFQUFFLENBSkU7QUFJQztBQUNUSCxjQUFRLEVBQUUsQ0FMRjtBQUtLO0FBQ2JjLFdBQUssRUFBRTtBQUNMRCxTQUFDLEVBQUUsQ0FERTtBQUNBO0FBQ0xFLGFBQUssRUFBRTVJLElBQUksQ0FBQ2tCLEtBQUwsQ0FBVyxJQUFJLE9BQWYsQ0FGRjtBQUUyQjtBQUNoQzRILFNBQUMsRUFBRSxDQUhFO0FBR0M7QUFDTkMsYUFBSyxFQUFFLENBSkYsQ0FJSTs7QUFKSixPQU5DO0FBWVI0RixhQUFPLEVBQUU7QUFaRCxLQVZaO0FBd0JFL08sVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRSxHQURGO0FBRU5vTyxlQUFTLEVBQUU7QUFGTDtBQXhCVixHQURjLEVBOEJkO0FBQ0UxTyxNQUFFLEVBQUUsVUFETjtBQUVFSyxVQUFNLEVBQUU7QUFDTjZOLGNBQVEsRUFBRSxPQURKO0FBRU41TixZQUFNLEVBQUU7QUFGRjtBQUZWLEdBOUJjLEVBcUNkO0FBQ0VELFVBQU0sRUFBRTtBQUNONk4sY0FBUSxFQUFFLFVBREo7QUFFTjVOLFlBQU0sRUFBRSxnQkFGRjtBQUdOb04sa0JBQVksRUFBRTtBQUhSO0FBRFYsR0FyQ2MsRUE0Q2Q7QUFDRTFOLE1BQUUsRUFBRSxVQUROO0FBRUVLLFVBQU0sRUFBRTtBQUNONk4sY0FBUSxFQUFFLE9BREo7QUFFTjVOLFlBQU0sRUFBRTtBQUZGO0FBRlYsR0E1Q2MsRUFtRGQ7QUFDRUQsVUFBTSxFQUFFO0FBQ042TixjQUFRLEVBQUUsVUFESjtBQUVONU4sWUFBTSxFQUFFLE1BRkY7QUFHTlksT0FBQyxFQUFFLENBSEc7QUFJTkMsT0FBQyxFQUFFLENBSkc7QUFLTlAsV0FBSyxFQUFDLEVBTEE7QUFNTkMsWUFBTSxFQUFFO0FBTkY7QUFEVixHQW5EYyxFQTZEZDtBQUNFYixNQUFFLEVBQUUsV0FETjtBQUVFSyxVQUFNLEVBQUU7QUFDTjZOLGNBQVEsRUFBRSxPQURKO0FBRU41TixZQUFNLEVBQUUsU0FGRjtBQUdOd04sUUFBRSxFQUFFLENBSEU7QUFJTkMsUUFBRSxFQUFFLEVBSkU7QUFLTkMsUUFBRSxFQUFDLENBTEc7QUFNTkMsUUFBRSxFQUFFLElBTkU7QUFPTjFOLFdBQUssRUFBRSxLQVBEO0FBUU5vTixjQUFRLEVBQUUsZ0JBUko7QUFTTkMsWUFBTSxFQUFFLGdCQVRGO0FBVU5lLGdCQUFVLEVBQUUsUUFWTixDQVVlOztBQVZmO0FBRlYsR0E3RGMsRUE0RWQ7QUFDRXRPLFVBQU0sRUFBRTtBQUNONk4sY0FBUSxFQUFFLE9BREo7QUFFTjVOLFlBQU0sRUFBRSxTQUZGO0FBR051TixZQUFNLEVBQUUsc0JBSEY7QUFJTnROLFdBQUssRUFBRTtBQUpEO0FBRFYsR0E1RWMsQ0FBaEI7O0FBc0ZBLE1BQU1zRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSixVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDN0MzRSxXQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JpSixLQUFwQixDQUEwQkcsQ0FBMUIsSUFBK0I5RSxVQUFVLEdBQUdDLFNBQTVDOztBQUNBLFFBQUkzRSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JpSixLQUFwQixDQUEwQkcsQ0FBMUIsSUFBK0IsQ0FBbkMsRUFBdUM7QUFDckN4SixhQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JpSixLQUFwQixDQUEwQkcsQ0FBMUIsR0FBOEIsQ0FBOUI7QUFDQXhKLGFBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQmlKLEtBQXBCLENBQTBCRCxDQUExQixHQUE4QixDQUE5QjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNckMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQzhELEdBQUQsRUFBUztBQUN4QixRQUFJdkMsS0FBSyxHQUFHcEYsUUFBUSxDQUFDVixRQUFULENBQWtCeEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxRQUFYLENBQW9CbUksUUFBcEIsR0FBK0JzQyxHQUFqRCxDQUFaO0FBQ0E3SyxXQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JtSSxRQUFwQixHQUErQkQsS0FBL0I7QUFDRCxHQUhEOztBQUtBLE1BQU10QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM2RCxHQUFELEVBQVM7QUFDN0I3SyxXQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JpSixLQUFwQixDQUEwQkksS0FBMUIsR0FBa0MvSSxJQUFJLENBQUM4RyxHQUFMLENBQVN4SCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdJLFFBQVgsQ0FBb0JpSixLQUFwQixDQUEwQkksS0FBMUIsR0FBa0NvQixHQUEzQyxFQUFnRCxDQUFoRCxDQUFsQztBQUNELEdBRkQ7O0FBSUEsTUFBTTNELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ29JLEtBQUQsRUFBVztBQUMvQixRQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQnRQLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQmlKLEtBQXBCLENBQTBCQyxLQUExQixHQUFrQzVJLElBQUksQ0FBQ2tCLEtBQUwsQ0FBVzBOLEtBQUssR0FBRyxHQUFSLEdBQWMsR0FBekIsSUFBOEIsR0FBaEU7QUFDakIsR0FGRDs7QUFJQSxNQUFJbkksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUMxQm5ILFdBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQmlKLEtBQXBCLENBQTBCRCxDQUExQixHQUE4QnBKLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksUUFBWCxDQUFvQmlKLEtBQXBCLENBQTBCQyxLQUF4RDtBQUNBdEosV0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxRQUFYLENBQW9CaUosS0FBcEIsQ0FBMEJHLENBQTFCLEdBQThCeEosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxRQUFYLENBQW9CaUosS0FBcEIsQ0FBMEJJLEtBQXhEO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0wxSixVQUFNLEVBQU5BLE1BREs7QUFFTGlILGlCQUFhLEVBQWJBLGFBRks7QUFHTEQsWUFBUSxFQUFSQSxRQUhLO0FBSUxJLGNBQVUsRUFBVkEsVUFKSztBQUtMckMsZUFBVyxFQUFYQSxXQUxLO0FBTUw5RSxXQUFPLEVBQVBBLE9BTks7QUFPTGtILGlCQUFhLEVBQWJBO0FBUEssR0FBUDtBQVNELENBNUhEOztBQThIZTVELG9FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGVhcnRoID0ge1xuICBtYWluSWQ6ICdlYXJ0aCcsXG4gIG9iakxpc3Q6IFtcblx0XHR7XG5cdFx0XHRpZDogJ2VhcnRoTGVvJyxcblx0XHRcdHJlbmRlclR5cGU6ICdzdmcnLFxuXHRcdFx0cjogNjM3ODEwMCArIDEwMDAwMDAsXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRyOiAwLFxuXHRcdFx0XHRkZWM6IDBcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0Zm9ybWF0OiAnY2lyY2xlJyxcblx0XHRcdFx0Y29sb3I6ICcjMzAzMDMwJ1xuXHRcdFx0fVxuXHRcdH0sXHRcblx0XHR7XG5cdFx0XHRpZDogJ2VhcnRoQXRtJyxcblx0XHRcdHJlbmRlclR5cGU6ICdzdmcnLFxuXHRcdFx0cjogNjM3ODEwMCArIDIwMDAwMCxcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDAsXG5cdFx0XHRcdGRlYzogMFxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyNBREQ4RTYnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogJ2VhcnRoJyxcblx0XHRcdHJlbmRlclR5cGU6ICdzdmcnLFxuICAgICAgcjogNjM3ODEwMCwgLy8gbVxuICAgICAgbWFzczogNS45OCAqIE1hdGgucG93KDEwLCAyNCksIC8vIGtnXG5cdFx0XHRnOiA5LjgwNjY1LCAvLyBtL3MyXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRyOiAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHRcdFx0ZGVjOiAwIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJ2JsdWUnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogJ2Jhc2UxJyxcblx0XHRcdHJlbmRlclR5cGU6ICdzdmcnLFxuXHRcdFx0cjogMTAwLCAvLyBtIC8gZm9yIG5vd1xuXHRcdFx0d2lkdGg6IDEwMCwgLy8gbWFuZGF0b3J5IChtKVxuXHRcdFx0aGVpZ2h0OiA1LCAvLyBtYW5kYXRvcnkgKG0pXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRyOiA2Mzc4MTAwLCAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciAobSlcblx0XHRcdFx0ZGVjOiAwIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdyZWN0JywgLy8gZm9yIG5vd1xuXHRcdFx0XHRjb2xvcjogJ3llbGxvdydcblx0XHRcdH1cblx0XHR9XG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWFydGg7IiwidmFyIGdldEhlbHBDYWxjID0gKCkgPT4ge1xuICAvLyBkZWNsYXJlZCBiZWNhdXNlIHRoZXkgdXNlIHRoZW1zZWx2ZXMgc28gbmVlZCBob2lzdGluZ1xuXG4gIGZ1bmN0aW9uIHRvUG9sYXIoY2FydCkge1xuICAgIGxldCBkZWMgPSAoTWF0aC5hdGFuMihjYXJ0LngsIGNhcnQueSkgLyAoTWF0aC5QSS8xODApKSAlIDM2MDtcbiAgICBpZiAoZGVjIDwgMCkgZGVjKz0gMzYwXG4gICAgcmV0dXJuIHtcbiAgICAgIHI6ICgoY2FydC54ICoqIDIgKyBjYXJ0LnkgKiogMikgKiogLjUpLFxuICAgICAgZGVjOiBkZWNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmcm9tUG9sYXIocG9sYXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcG9sYXIuciAqIE1hdGguc2luKHBvbGFyLmRlYyAqIE1hdGguUEkvMTgwKSxcbiAgICAgIHk6IHBvbGFyLnIgKiBNYXRoLmNvcyhwb2xhci5kZWMgKiBNYXRoLlBJLzE4MClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3VuZE0odmFsKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTAwMDAwMDAwMCkgLyAxMDAwMDAwMDAwO1xuICB9XG5cbiAgY29uc3QgZGlzdFBvbCA9IChvYmoxUG9sLCBvYmoyUG9sKSA9PiB7XG4gICAgY29uc3Qgb2JqMUNhciA9IGZyb21Qb2xhcihvYmoxUG9sKTtcbiAgICBjb25zdCBvYmoyQ2FyID0gZnJvbVBvbGFyKG9iajJQb2wpO1xuICAgIGNvbnN0IGRpc3QgPSB7XG4gICAgICByOiBNYXRoLnNxcnQoTWF0aC5hYnMob2JqMkNhci54IC0gb2JqMUNhci54KSAqKiAyICsgTWF0aC5hYnMob2JqMkNhci55IC0gb2JqMUNhci55KSAqKiAyKSxcbiAgICAgIGRlYzogTWF0aC5hdGFuKChvYmoyQ2FyLnkgLSBvYmoxQ2FyLnkpIC8gKG9iajJDYXIueCAtIG9iajFDYXIueCkpIC8gKE1hdGguUEkvMTgwKVxuICAgIH1cblxuICAgIGlmIChkaXN0LnIgPCAwKSB7XG4gICAgICBkaXN0ID0ge1xuICAgICAgICByOiAtZGlzdC5yLFxuICAgICAgICBkZXY6ICgxODAgLSBkaXN0LmRlYykgJSAzNjBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFBvbChvYmoxUG9sLCBvYmoyUG9sKSB7XG5cbiAgICBjb25zdCBvYmoxQ2FyID0gZnJvbVBvbGFyKG9iajFQb2wpO1xuICAgIGNvbnN0IG9iajJDYXIgPSBmcm9tUG9sYXIob2JqMlBvbCk7XG4gICAgY29uc3QgZGlzdCA9IHRvUG9sYXIoe3g6IChvYmoxQ2FyLnggKyBvYmoyQ2FyLngpLCB5OiAob2JqMUNhci55ICsgb2JqMkNhci55KX0pXG5cbiAgICByZXR1cm4gZGlzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRGVnMzYwKGRlZykge1xuICAgIGxldCByZXQgPSBkZWcgJSAzNjA7XG4gICAgaWYgKHJldCA8IDApIHJldCArPSAzNjBcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cblxuICBmdW5jdGlvbiB0b0RlZzE4MChkZWcpIHtcbiAgICBsZXQgcmV0ID0gZGVnO1xuICAgIGlmIChyZXQgPCAtMTgwKSByZXQgPSAzNjAgKyByZXQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnJvbVBvbGFyLFxuICAgIHRvUG9sYXIsXG4gICAgZGlzdFBvbCxcbiAgICByb3VuZE0sXG4gICAgYWRkUG9sLFxuICAgIHRvRGVnMzYwLFxuICAgIHRvRGVnMTgwXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRIZWxwQ2FsYzsiLCJpbXBvcnQgcmVuZGVyU3ZnIGZyb20gJy4vcmVuZGVyLXN2Zyc7XG5pbXBvcnQgbW92ZVN2ZyBmcm9tICcuL21vdmUtc3ZnJztcbmltcG9ydCBlYXJ0aCBmcm9tICcuL2VhcnRoJztcbmltcG9ydCBtb29uIGZyb20gJy4vbW9vbic7XG5pbXBvcnQgaXNzIGZyb20gJy4vaXNzJztcbmltcG9ydCBzaGlwMSBmcm9tICcuL3NoaXAnO1xuXG5pbXBvcnQgZ2V0SGVscENhbGMgZnJvbSAnLi9oZWxwQ2FsYyc7XG5cbmRvY3VtZW50Lm9uTG9hZCA9IGxvYWRBcHA7XG5cbnZhciBhcHAgPSBmdW5jdGlvbihkZXBzKXtcblxuICB2YXIgb2JqcyA9IGRlcHMub2JqcztcbiAgdmFyIGhlbHBDYWxjID0gZGVwcy5nZXRIZWxwQ2FsYygpXG4gIHZhciBtb3ZlU3ZnID0gZGVwcy5tb3ZlU3ZnKGhlbHBDYWxjKTtcbiAgdmFyIHJlbmRlclN2ZyA9IGRlcHMucmVuZGVyU3ZnKGhlbHBDYWxjKTtcbiAgdmFyIHNoaXAxRGF0YSA9IGRlcHMuc2hpcDEoaGVscENhbGMpO1xuICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIHZhciBwYW5lbCA9IGdldFBhbmVsKGhlbHBDYWxjKTtcblxuICB2YXIgc2hpcDEgPSBzaGlwMURhdGEub2JqTGlzdFswXTtcblxuICBtb3ZlU3ZnLmluaXQob2Jqcyk7XG5cbiAgcmVuZGVyU3ZnLmNyZWF0ZShvYmpzLCBjYW52YXMuc3RhdGUuem9vbSwgY2FudmFzLmdldFJlZk9iaihvYmpzKSwgY2FudmFzLnN0YXRlLnJlZik7XG4gIHJlbmRlclN2Zy5jcmVhdGVPbmUoc2hpcDFEYXRhLCBjYW52YXMuc3RhdGUuem9vbSwgY2FudmFzLmdldFJlZk9iaihvYmpzKSksIGNhbnZhcy5zdGF0ZS5yZWY7XG5cbiAgZG9jdW1lbnQub25jbGljayA9IHZlcmlmeUNsaWNrO1xuICBkb2N1bWVudC5vbmtleWRvd24gPSB2ZXJpZnlLZXk7XG5cbiAgbG9vcCgpO1xuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghY2FudmFzLnN0YXRlLnBsYXkpIHJldHVybjtcbiAgICAgIGNhbnZhcy5zdGF0ZS50aW1lICs9IChjYW52YXMuc3RhdGUuc2Vjb25kU2tpcCAqIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQpO1xuXG4gICAgICBtb3ZlU3ZnLm1vdmUoY2FudmFzLnN0YXRlLnNlY29uZFNraXAsIGNhbnZhcy5zdGF0ZS50aW1lU3BlZWQpO1xuICAgICAgcmVuZGVyU3ZnLnVwZGF0ZShvYmpzLCBjYW52YXMuc3RhdGUuem9vbSwgY2FudmFzLmdldFJlZk9iaihvYmpzKSwgY2FudmFzLnN0YXRlLnJlZik7XG5cbiAgICAgIHNoaXAxRGF0YS5idXJzdFVwZGF0ZShjYW52YXMuc3RhdGUuc2Vjb25kU2tpcCwgY2FudmFzLnN0YXRlLnRpbWVTcGVlZCk7XG4gICAgICBtb3ZlU3ZnLm1vdmVPbmUoc2hpcDEsIGNhbnZhcy5zdGF0ZS5zZWNvbmRTa2lwLCBjYW52YXMuc3RhdGUudGltZVNwZWVkLCBbb2Jqcy5lYXJ0aC5vYmpMaXN0WzJdLG9ianMubW9vbi5vYmpMaXN0WzBdXSk7XG4gICAgICByZW5kZXJTdmcudXBkYXRlT25lKHNoaXAxRGF0YSwgY2FudmFzLnN0YXRlLnpvb20sIGNhbnZhcy5nZXRSZWZPYmoob2JqcyksIGNhbnZhcy5zdGF0ZS5yZWYpO1xuICAgICAgcGFuZWwudXBkYXRlKCk7XG5cbiAgICAgIGlmIChzaGlwMS5wb3NpdGlvbi5jcmFzaCkge1xuICAgICAgICBtb2RhbE9wZW4oJ3NoaXAgY3Jhc2hlZC4gUmVsb2FkIGdhbWUuJylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIWNoZWNrVGltZU91dCgpKSBsb29wKCk7XG4gICAgfSwgMTAwMCAqIGNhbnZhcy5zdGF0ZS5zZWNvbmRTa2lwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVGltZU91dCgpIHtcbiAgICB2YXIgZDAgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIGQuc2V0U2Vjb25kcyhjYW52YXMuc3RhdGUudGltZSk7XG4gICAgdmFyIGRheXMgPSBwYXJzZUludCgoZCAtIGQwKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgXG4gICAgaWYgKGRheXMgPiAzNjUpIHtcbiAgICAgIG1vZGFsT3BlbignRXhhdXN0ZWQgZnVlbCBhZnRlciAxIHllYXIgb2YgZmxpZ2h0LiBSZWxvYWQgZ2FtZS4nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlDbGljayhlKSB7XG4gICAgaWYoZS50YXJnZXQubm9kZU5hbWUgPT0gJ0EnKSB7XG4gICAgICB2YXIgcmVhbExpbmsgPSBlLnRhcmdldC5ocmVmXG4gICAgICB2YXIgYWN0aW9uID0gcmVhbExpbmtcbiAgICAgICAgLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbisnLyMvJywgJycpXG4gICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsICcnKTtcblxuICAgICAgaWYgKCFbJ2ZpbGU6JywnaHR0cDonXS5pbmNsdWRlcyhhY3Rpb24uc3Vic3RyaW5nKDAsNSkpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uID09PSAndGltZVBsYXknKSBjYW52YXMucGxheVN0b3AoKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnem9vbU1pbnVzJykgY2FudmFzLnpvb21NdWx0aXBseSgyKTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnem9vbVBsdXMnKSBjYW52YXMuem9vbU11bHRpcGx5KC41KTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAndGltZVBsdXMnKSBjYW52YXMudGltZU11bHRpcGx5KDIpO1xuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICd0aW1lTWludXMnKSBjYW52YXMudGltZU11bHRpcGx5KC41KTtcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnbW9kYWxDbG9zZScpIG1vZGFsQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlLZXkoZSkge1xuICAgIHZhciBrZXlDb2RlID0gZS5jb2RlO1xuICAgIGlmIChrZXlDb2RlID09PSAnS2V5UCcpIGNhbnZhcy5wbGF5U3RvcCgpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdBcnJvd1VwJykgc2hpcDFEYXRhLmFkZFBpdGNoKDEwKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnQXJyb3dEb3duJykgc2hpcDFEYXRhLmFkZFBpdGNoKC0xMCk7XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gJ0tleUEnKSBzaGlwMURhdGEuYWRkQnVyc3RUTmV4dCgxKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnS2V5WicpIHNoaXAxRGF0YS5hZGRCdXJzdFROZXh0KC0xKTtcbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSAnTWludXMnKSBjYW52YXMuem9vbU11bHRpcGx5KDIpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdFcXVhbCcpIGNhbnZhcy56b29tTXVsdGlwbHkoLjUpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdQZXJpb2QnKSBjYW52YXMudGltZU11bHRpcGx5KDIpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdDb21tYScpIGNhbnZhcy50aW1lTXVsdGlwbHkoLjUpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09ICdLZXlWJykgY2FudmFzLnNldFJlZigpO1xuICAgIGVsc2UgaWYgKGtleUNvZGUuc3Vic3RyaW5nKDAsNSkgPT09ICdEaWdpdCcpIHtcbiAgICAgIHNoaXAxRGF0YS5zZXRCdXJzdEFOZXh0KGtleUNvZGUucmVwbGFjZSgnRGlnaXQnLCAnJykpXG4gICAgfVxuICAgIGlmICghY2FudmFzLnN0YXRlLnBsYXkpIHJldHVybjtcblxuICAgIGlmIChrZXlDb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICBzaGlwMURhdGEuYnVyc3RTdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENhbnZhcygpIHtcbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICB3aWR0aEluaTogMjAwMCxcbiAgICAgIHdpZHRoOiAyMDAwLCAvLyAobSlcbiAgICAgIGhlaWdodFB4OiAwLFxuICAgICAgd2lkdGhQeDogMCxcbiAgICAgIHpvb206IDEsXG4gICAgICBwbGF5OiB0cnVlLFxuICAgICAgdGltZTogMCwgLy8gdGltZSBwYXNzZWQgKHMpXG4gICAgICB0aW1lU3BlZWQ6IDEsXG4gICAgICBzZWNvbmRTa2lwOiAwLjEsIC8vIGVhY2ggdGltZSBsb29wIHRpbW1pbmcgKHMpXG4gICAgICByZWY6ICdlYXJ0aCdcbiAgICB9XG5cbiAgICB2YXIgem9vbU11bHRpcGx5ID0gZnVuY3Rpb24odGltZXMpIHtcbiAgICAgIHN0YXRlLnpvb20gKj0gdGltZXM7XG4gICAgICBzdGF0ZS56b29tID0gTWF0aC5tYXgoc3RhdGUuem9vbSwgMSk7XG4gICAgICByZW5kZXJTdmcudXBkYXRlKG9ianMsIHN0YXRlLnpvb20sIGNhbnZhcy5nZXRSZWZPYmoob2JqcyksIGNhbnZhcy5zdGF0ZS5yZWYpO1xuICAgICAgcmVuZGVyU3ZnLnVwZGF0ZU9uZShzaGlwMURhdGEsIGNhbnZhcy5zdGF0ZS56b29tLCBjYW52YXMuZ2V0UmVmT2JqKG9ianMpLCBjYW52YXMuc3RhdGUucmVmKTtcbiAgICB9XG5cbiAgICB2YXIgdGltZU11bHRpcGx5ID0gZnVuY3Rpb24odGltZXMpIHtcbiAgICAgIHZhciB0aW1lU3BlZWQgPSBjYW52YXMuc3RhdGUudGltZVNwZWVkICogdGltZXM7XG4gICAgICBpZiAodGltZVNwZWVkIDwgMSkgdGltZVNwZWVkID0gMTtcbiAgICAgIGlmICh0aW1lU3BlZWQgPiAxMDAwMDAwKSB0aW1lU3BlZWQgPSAxMDAwMDAwO1xuICAgICAgY2FudmFzLnN0YXRlLnRpbWVTcGVlZCA9IHBhcnNlSW50KHRpbWVTcGVlZCk7XG4gICAgICBwYW5lbC51cGRhdGUoJ3RpbWVTcGVlZCcpO1xuICAgIH1cblxuICAgIHZhciBwbGF5U3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2FudmFzLnN0YXRlLnBsYXkgPSAhY2FudmFzLnN0YXRlLnBsYXk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnN0eWxlLmNvbG9yID0gY2FudmFzLnN0YXRlLnBsYXkgPyAnd2hpdGUnIDogJ3JlZCc7XG4gICAgICBwYW5lbC51cGRhdGUoJ3RpbWVQbGF5Jyk7XG4gICAgICBpZiAoY2FudmFzLnN0YXRlLnBsYXkpIGxvb3AoKTtcbiAgICB9XG5cbiAgICB2YXIgc2V0UmVmID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc3RhdGUucmVmID09PSAnZWFydGgnKSBzdGF0ZS5yZWYgPSAnbW9vbic7XG4gICAgICBlbHNlIHN0YXRlLnJlZiA9ICdlYXJ0aCc7XG4gICAgfVxuXG4gICAgdmFyIGdldFJlZk9iaiA9IGZ1bmN0aW9uKG9ianMpIHtcbiAgICAgIHZhciBvYmogPSAnaGV5JztcbiAgICAgIGlmIChzdGF0ZS5yZWYgPT09ICdlYXJ0aCcpIG9iaiA9IG9ianMuZWFydGgub2JqTGlzdFsyXTtcbiAgICAgIGVsc2Ugb2JqID0gb2Jqcy5tb29uLm9iakxpc3RbMF07XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbGF5U3RvcCxcbiAgICAgIHN0YXRlLFxuICAgICAgdGltZU11bHRpcGx5LFxuICAgICAgem9vbU11bHRpcGx5LFxuICAgICAgc2V0UmVmLFxuICAgICAgZ2V0UmVmT2JqXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWwoaGVscENhbGMpIHtcblxuICAgIHZhciBwb3NpdGlvbiA9IHt9O1xuICAgIHZhciBwYW5lbCA9IHt9XG5cbiAgICB2YXIgY29udGVudCA9IHsgLy8geHh4XG4gICAgICBhbHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWx0ID0gY2FudmFzLnN0YXRlLnJlZiA9PT0gJ2VhcnRoJyA/IHBhbmVsLmFsdEVhcnRoIDogcGFuZWwuYWx0TW9vbjtcbiAgICAgICAgdmFyIHVuaXQgPSAnbSc7XG4gICAgICAgIGlmIChhbHQgPiAxMDAwKSB7XG4gICAgICAgICAgYWx0IC89ICAxMDAwXG4gICAgICAgICAgdW5pdCA9ICdrbSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWx0KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArIHVuaXQ7XG4gICAgICB9LFxuICAgICAgbG9uZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb25nID0gY2FudmFzLnN0YXRlLnJlZiA9PT0gJ2VhcnRoJyA/IHBhbmVsLmhlYWRFYXJ0aCA6IHBhbmVsLmhlYWRNb29uO1xuICAgICAgICByZXR1cm4gY29udkxvbmcoKDE4MCAgLSBsb25nKSAlIDM2MCk7XG4gICAgICB9LFxuICAgICAgcGl0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGl0Y2ggPSBoZWxwQ2FsYy50b0RlZzM2MChwb3NpdGlvbi5waXRjaERlYyAtIHBvc2l0aW9uLmRlYylcbiAgICAgICAgcmV0dXJuIGZvcm1hdERlZyhoZWxwQ2FsYy50b0RlZzE4MCg5MCAtIHBpdGNoICkpXG4gICAgICB9LFxuICAgICAgY2xpbWI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdkRlYyA9IHBvc2l0aW9uLnZEZWMgKyBwb3NpdGlvbi5kZWM7XG4gICAgICAgIHZhciBjbGltYiA9IHBvc2l0aW9uLnZSICogTWF0aC5jb3ModkRlYyAqIChNYXRoLlBJLzE4MCkpXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGNsaW1iICogMy42KS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSArICdrbS9oJztcbiAgICAgIH0sXG4gICAgICB2T3JiaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdkRlYyA9IHBvc2l0aW9uLnZEZWMgKyBwb3NpdGlvbi5kZWM7XG4gICAgICAgIHZhciB2ID0gcG9zaXRpb24udlIgKiBNYXRoLnNpbih2RGVjICogKE1hdGguUEkvMTgwKSlcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodiAqIDMuNikudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyAna20vaCc7XG4gICAgICB9LFxuICAgICAgZ0xvY2FsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChjYW52YXMuc3RhdGUucmVmID09PSAnZWFydGgnID8gcGFuZWwuZ0VhcnRoIDogcGFuZWwuZ01vb24pLnRvRml4ZWQoMikgKyAnbS9zMic7XG4gICAgICB9LFxuICAgICAgc3BlZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChwb3NpdGlvbi52UiAqIDMuNikudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgKyAna20vaCc7XG4gICAgICB9LFxuICAgICAgYnVyc3RBOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSAocG9zaXRpb24uYnVyc3QuYSAvIDkuOCkudG9GaXhlZCgwKTtcbiAgICAgICAgdmFyIGFOZXh0ID0gKHBvc2l0aW9uLmJ1cnN0LmFOZXh0IC8gOS44KS50b0ZpeGVkKDApO1xuICAgICAgICByZXR1cm4gYSArICdnICgnICsgYU5leHQgKyAnZyknO1xuICAgICAgfSxcbiAgICAgIGJ1cnN0VDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBvc2l0aW9uLmJ1cnN0LnQpICsgJ3MgKCcgKyBwb3NpdGlvbi5idXJzdC50TmV4dC50b0ZpeGVkKDApICsgJ3MpJztcbiAgICAgIH0sXG4gICAgICBzY2FsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IGNhbnZhcy5zdGF0ZS53aWR0aCAvIDEwICAqIGNhbnZhcy5zdGF0ZS56b29tO1xuICAgICAgICByZXR1cm4gY29udk1rbShzY2FsZSk7Z1xuICAgICAgfSxcbiAgICAgIHRpbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZDAgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgZC5zZXRTZWNvbmRzKGNhbnZhcy5zdGF0ZS50aW1lKTtcbiAgICAgICAgdmFyIGRheXMgPSBwYXJzZUludCgoZCAtIGQwKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHJldHVybiBkYXlzICsgJ2QgJyArIGQudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KTtcbiAgICAgIH0sXG4gICAgICBoZWFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdERlZyhwb3NpdGlvbi52RGVjKTtcbiAgICAgIH0sXG4gICAgICB6b29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHpvb20gID0gY2FudmFzLnN0YXRlLnpvb21cbiAgICAgICAgcmV0dXJuIHpvb20gPCAxMDAwID8gem9vbSA6IE1hdGgucm91bmQoem9vbSAvIDEwMDApICsgJ2snO1xuICAgICAgfSxcbiAgICAgIHRpbWVTcGVlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb252S00oY2FudmFzLnN0YXRlLnRpbWVTcGVlZCk7XG4gICAgICB9LFxuICAgICAgdGltZVBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2FudmFzLnN0YXRlLnBsYXkgPyAnUGF1c2UnIDogJ1BsYXknO1xuICAgICAgfSxcbiAgICAgIHJlZjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjYW52YXMuc3RhdGUucmVmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS5pbm5lclRleHQgPSBjb250ZW50W2tleV0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uID0gc2hpcDEucG9zaXRpb247XG4gICAgICAgIHBhbmVsID0gc2hpcDEucGFuZWw7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29udGVudCk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkuaW5uZXJUZXh0ID0gY29udGVudFtlbGVtZW50XSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREZWcoZGVnKSB7XG4gICAgICB2YXIgdHh0ID0gTWF0aC5yb3VuZChkZWcpICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpO1xuICAgICAgcmV0dXJuIHR4dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252TG9uZyhkZWcpIHtcbiAgICAgIHZhciB0eHQgPSBwYXJzZUludChkZWcpICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpO1xuICAgICAgdmFyIG1pbiA9ICgoZGVnIC0gcGFyc2VJbnQoZGVnKSkgKiA2MCkudG9GaXhlZCgyKTtcbiAgICAgIGlmIChtaW4gPCAxMCkgdHh0ICs9ICcwJztcbiAgICAgIHR4dCArPSBtaW4gKyAnXFwnJztcbiAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udk1rbShkKSB7XG4gICAgICByZXR1cm4gKGQgPCAxMDAwKSA/IGQgKyAnbScgOiBkLzEwMDAgKyAna20nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZLTShkKSB7XG4gICAgICB2YXIgdHh0ID0gZDtcbiAgICAgIGlmIChkID49IDEwMDApIHR4dCA9IHBhcnNlSW50KGQvMTAwMCkgKyAnayc7XG4gICAgICBlbHNlIGlmIChkID49IDEwMDAwMDApIHR4dCA9IHBhcnNlSW50KGQvMTAwMDAwMCkgKyAnTSc7XG4gICAgICByZXR1cm4gdHh0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb2RhbENsb3NlKCkge1xuICAgIHZhciBjbGFzc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxPcGVuJyk7XG4gICAgY2xhc3NMaXN0LmFkZCgnbW9kYWxDbG9zZWQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxjb250ZW50JykuaW5uZXJUZXh0ID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBtb2RhbE9wZW4obXNnKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKCdtb2RhbENsb3NlZCcpXG4gICAgY2xhc3NMaXN0LmFkZCgnbW9kYWxPcGVuJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsY29udGVudCcpLmlubmVyVGV4dCA9IG1zZ1xuICB9XG59XG5cbnZhciBsb2FkQXBwID0gKGZ1bmN0aW9uKCkge1xuXG4gIHZhciBkZXBzID0ge1xuICAgIHJlbmRlclN2ZzogcmVuZGVyU3ZnLFxuICAgIG1vdmVTdmc6IG1vdmVTdmcsXG4gICAgc2hpcDE6IHNoaXAxLFxuICAgIG9ianM6IHtcbiAgICAgIGVhcnRoOiBlYXJ0aCxcbiAgICAgIG1vb246IG1vb24sXG4gICAgICBpc3M6IGlzcyxcbiAgICB9LFxuICAgIGdldEhlbHBDYWxjOiBnZXRIZWxwQ2FsY1xuICB9XG5cbiAgYXBwKGRlcHMpO1xufSkoKVxuXG4iLCJ2YXIgaXNzID0ge1xuXHRtYWluSWQ6ICdpc3MnLFxuXHRvYmpMaXN0OiBbXG5cdFx0e1xuXHRcdFx0aWQ6ICdpc3MnLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG5cdFx0XHRyOiAxMDAsIC8vIG1cblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDYzNzgxMDAgKyAzMDkwMDAsIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyIChtKVxuXHRcdFx0XHRkZWM6IDAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0XHR2UjogMCxcblx0XHRcdFx0dkRlYzogMzYwIC8gKDkyLjY4ICogNjAwKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRmb3JtYXQ6ICdjaXJjbGUnLFxuXHRcdFx0XHRjb2xvcjogJyNkOWQ5ZDknXG5cdFx0XHR9XG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzczsiLCJ2YXIgbW9vbiA9IHtcblx0bWFpbklkOiAnbW9vbicsXG5cdG9iakxpc3Q6IFtcblx0XHR7XG5cdFx0XHRpZDogJ21vb24nLFxuXHRcdFx0cmVuZGVyVHlwZTogJ3N2ZycsXG4gICAgICByOiAxNzM4MDAwLCAvLyBtXG4gICAgICBtYXNzOiA3LjM0NzY3ICogTWF0aC5wb3coMTAsIDIyKSwgLy8ga2dcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdHI6IDM4NDAwMDAwMCwgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXIgKG0pXG5cdFx0XHRcdGRlYzogOTAsIC8vIGRlY2xpbmF0aW9uIChkZWcpLCBjb3VsZCBiZSBhbnkgdmFsdWUgYmVjYXVzZSByID0gMFxuXHRcdFx0XHR2UjogMCxcblx0XHRcdFx0dkRlYzogMzYwIC8gKDI3LjMyMiAqIDI0ICogNjAgKiA2MDApXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2NpcmNsZScsXG5cdFx0XHRcdGNvbG9yOiAnI0Y1RjNDRSdcblx0XHRcdH1cblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9vbjsiLCJsZXQgbW92ZVN2ZyA9IChoZWxwQ2FsYykgPT4ge1xuXG4gIGxldCBkYXRhID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdChvYmpzKSB7XG5cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9ianMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9iakxpc3QgPSBvYmpzW2tleXNbaV1dLm9iakxpc3Q7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iakxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG9iaiA9IG9iakxpc3Rbal07XG4gICAgICAgIGlmIChvYmoucG9zaXRpb24udlIgfHwgb2JqLnBvc2l0aW9uLnZEZWMpIHsgLy8gd2lsbCBtb3ZlXG4gICAgICAgICAgY29uc3QgbmV3RGF0YSA9IG9iai5wb3NpdGlvbjtcbiAgICAgICAgICBuZXdEYXRhLmlkID0gb2JqLmlkO1xuICAgICAgICAgIGRhdGEgPSBbLi4uZGF0YSwgbmV3RGF0YV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3ZlID0gKHNlY29uZFNraXAsIHRpbWVTcGVlZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBvc2l0aW9uID0gZGF0YVtpXTtcbiAgICAgIHBvc2l0aW9uLnIgKz0gcG9zaXRpb24udlIgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgICAgcG9zaXRpb24uZGVjICs9IHBvc2l0aW9uLnZEZWMgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1vdmVPbmUgPSAob2JqLCBzZWNvbmRTa2lwLCB0aW1lU3BlZWQsIGdPYmpzKSA9PiB7XG5cbiAgICB2YXIgYVBvbGFyID0ge3I6IG9iai5wb3NpdGlvbi5idXJzdC5hLCBkZWM6IG9iai5wb3NpdGlvbi5waXRjaERlY307XG4gICAgdmFyIHZQb2xhciA9IHtyOiBvYmoucG9zaXRpb24udlIsIGRlYzogb2JqLnBvc2l0aW9uLnZEZWN9O1xuICAgIHZhciBwb3NQb2xhciA9IHtyOiBvYmoucG9zaXRpb24uciwgZGVjOiBvYmoucG9zaXRpb24uZGVjfTtcbiAgICB2YXIgcG9zRGVjT2xkID0gcG9zUG9sYXIuZGVjO1xuXG4gICAgdmFyIGFsdEVhcnRoID0gcG9zUG9sYXIuciAtIGdPYmpzWzBdLnI7XG4gICAgdmFyIGdQb2xhciA9IGFsdEVhcnRoID4gMCA/IGdldExvY2FsRyhvYmosIGdPYmpzKSA6IHtyOiAwLCBkZWM6IDB9O1xuXG4gICAgLy8gTGFuZGluZ1xuICAgIGlmIChhbHRFYXJ0aCA8IDAgJiYgdlBvbGFyLnIgIT09IDApIHsgIFxuICAgICAgY29uc29sZS5sb2coJ2xhbmRlZCBlYXJ0aCcsIG9iai5wYW5lbC5hbHRFYXJ0aClcbiAgICAgIG9iai5wb3NpdGlvbi52UiA9IDA7XG4gICAgICBvYmoucG9zaXRpb24uciA9IGdPYmpzWzBdLnI7XG4gICAgICBpZiAodlBvbGFyLnIgPiAoNTAgLyAzLjYpKSBvYmoucG9zaXRpb24uY3Jhc2ggPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAob2JqLnBhbmVsLmFsdE1vb24gPCAwICYmIHZQb2xhci5yICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGFuZGVkIG1vb24nLCBvYmoucGFuZWwuYWx0TW9vbilcbiAgICAgIG9iai5wb3NpdGlvbi52UiA9IDA7XG4gICAgICBpZiAodlBvbGFyLnIgPiAoMTAwMCAvIDMuNikpIG9iai5wb3NpdGlvbi5jcmFzaCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKGFQb2xhcik7XG4gICAgdmFyIGdDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKGdQb2xhcik7XG4gICAgdmFyIHZDYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKHZQb2xhcik7XG4gICAgdmFyIHBvc0NhcnQgPSBoZWxwQ2FsYy5mcm9tUG9sYXIocG9zUG9sYXIpO1xuXG4gICAgdkNhcnQueCArPSAoYUNhcnQueCArIGdDYXJ0LngpICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICB2Q2FydC55ICs9IChhQ2FydC55ICsgZ0NhcnQueSkgKiBzZWNvbmRTa2lwICogdGltZVNwZWVkO1xuICAgIHBvc0NhcnQueCArPSB2Q2FydC54ICogc2Vjb25kU2tpcCAqIHRpbWVTcGVlZDtcbiAgICBwb3NDYXJ0LnkgKz0gdkNhcnQueSAqIHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG5cbiAgICB2UG9sYXIgPSBoZWxwQ2FsYy50b1BvbGFyKHZDYXJ0KTtcbiAgICBwb3NQb2xhciA9IGhlbHBDYWxjLnRvUG9sYXIocG9zQ2FydCk7XG4gICAgcG9zUG9sYXIuciA9IE1hdGgucm91bmQocG9zUG9sYXIucik7XG5cbiAgICBvYmoucG9zaXRpb24udlIgPSB2UG9sYXIucjtcbiAgICBvYmoucG9zaXRpb24udkRlYyA9IHZQb2xhci5kZWM7XG4gICAgb2JqLnBvc2l0aW9uLnIgPSBwb3NQb2xhci5yO1xuICAgIG9iai5wb3NpdGlvbi5kZWMgPSBwb3NQb2xhci5kZWM7XG4gICAgb2JqLnBvc2l0aW9uLnBpdGNoRGVjID0gaGVscENhbGMudG9EZWczNjAob2JqLnBvc2l0aW9uLnBpdGNoRGVjIC0gcG9zRGVjT2xkICsgb2JqLnBvc2l0aW9uLmRlYylcbiAgICBvYmoucGFuZWwuYWx0RWFydGggPSBNYXRoLnJvdW5kKG9iai5wb3NpdGlvbi5yIC0gZ09ianNbMF0ucik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb2NhbEcob2JqLCBnT2Jqcykge1xuXG4gICAgLy8gRWFydGhcbiAgICBjb25zdCBtYXNzID0gZ09ianNbMF0ubWFzcztcbiAgICBjb25zdCBkaXN0ID0gb2JqLnBvc2l0aW9uLnI7XG4gICAgbGV0IGdSID0gKDYuNjcgKiBNYXRoLnBvdygxMCwgLTExKSkgKiBtYXNzIC8gKGRpc3QgKiogMik7XG4gICAgY29uc3QgZ0RlYyA9IGhlbHBDYWxjLnRvRGVnMzYwKDE4MCArIG9iai5wb3NpdGlvbi5kZWMpO1xuICAgIGlmIChkaXN0IDwgZ09ianNbMF0ucikgIGdSID0gMDtcblxuICAgIG9iai5wYW5lbC5nRWFydGggPSBnUjtcbiAgICBvYmoucGFuZWwuaGVhZEVhcnRoID0gZ0RlYztcbiAgICBcbiAgICAvL01vb25cbiAgICBjb25zdCBtYXNzMiA9IGdPYmpzWzFdLm1hc3M7XG4gICAgY29uc3QgcG9zQ2FydFNoaXAgPSB7cjogb2JqLnBvc2l0aW9uLnIsIGRlYzogb2JqLnBvc2l0aW9uLmRlY307XG4gICAgY29uc3QgcG9zQ2FydENlbnRlciA9IHtyOiBnT2Jqc1sxXS5wb3NpdGlvbi5yLCBkZWM6IGdPYmpzWzFdLnBvc2l0aW9uLmRlY307XG4gICAgY29uc3QgZGlzdDIgPSBoZWxwQ2FsYy5kaXN0UG9sKHBvc0NhcnRTaGlwLCBwb3NDYXJ0Q2VudGVyKTtcbiAgICBjb25zdCBnUjIgPSAoNi42NyAqIE1hdGgucG93KDEwLCAtMTEpKSAqIG1hc3MyIC8gKGRpc3QyLnIgKiogMik7XG4gICAgY29uc3QgZ0RlYzIgPSBoZWxwQ2FsYy50b0RlZzM2MCgxODAgKyBkaXN0Mi5kZWMpO1xuXG4gICAgb2JqLnBhbmVsLmdNb29uID0gZ1IyO1xuICAgIG9iai5wYW5lbC5hbHRNb29uID0gTWF0aC5yb3VuZChkaXN0Mi5yIC0gZ09ianNbMV0ucik7XG4gICAgb2JqLnBhbmVsLmhlYWRNb29uID0gZ0RlYzI7XG4gICAgY29uc3QgZ1BvbCA9IGhlbHBDYWxjLmFkZFBvbCh7cjogZ1IsIGRlYzogZ0RlY30sIHtyOiBnUjIsIGRlYzogZ0RlYzJ9KTtcbiAgICBcbiAgICByZXR1cm4gZ1BvbFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIG1vdmUsXG4gICAgbW92ZU9uZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVTdmciLCJcbmxldCByZW5kZXJTdmcgPSAoaGVscENhbGMpID0+IHtcblxuICBsZXQgY2FudmFzTm9kZTtcbiAgbGV0IHZpZXdDZW50ZXI7XG4gIGxldCBidXJzdE5vZGU7XG4gIGxldCBzaGlwRGVjO1xuXG4gIGluaXQoKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICB2aWV3Q2VudGVyID0gZ2V0Vmlld0NlbnRlcihjYW52YXNOb2RlKTtcbiAgfVxuXG4gIGxldCBjcmVhdGUgPSAob2Jqcywgem9vbSwgcmVmT2JqcywgcmVmSWQpID0+IHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9ianMpO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG9iaiA9IG9ianNba2V5XTtcbiAgICAgIGlmIChvYmoub2JqTGlzdCkge1xuICAgICAgICBvYmoub2JqTGlzdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgY3JlYXRlT2JqKGNhbnZhc05vZGUsIG9iaik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gICAgdXBkYXRlKG9ianMsIHpvb20sIHJlZk9ianMsIHJlZklkKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU9uZSA9IChvYmosIHpvb20sIHJlZk9ianMsIHJlZklkKSA9PiB7XG4gICAgb2JqLm9iakxpc3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY3JlYXRlT2JqKGNhbnZhc05vZGUsIG9iaik7XG4gICAgfSlcbiAgICBcbiAgICB1cGRhdGVPYmoob2JqLm9iakxpc3RbMF0sIHpvb20sIHJlZk9ianMsIHJlZklkKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlT25lID0gKG9iaiwgem9vbSwgcmVmT2JqcywgcmVmSWQpID0+IHtcbiAgICB1cGRhdGVPYmoob2JqLm9iakxpc3RbMF0sIHpvb20sIHJlZk9ianMsIHJlZklkKTtcbiAgICBzaGlwRGVjID0gb2JqLm9iakxpc3RbMF0ucG9zaXRpb24uZGVjO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKG9ianMsIHpvb20sIHJlZk9ianMsIHJlZklkKSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpzKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBvYmogPSBvYmpzW2tleV07XG5cbiAgICAgIGlmIChvYmoucmVuZGVyVHlwZSA9PT0gJ3N2ZycpIHVwZGF0ZU9iaihvYmosIHpvb20sIHJlZk9ianMsIHJlZklkKTtcbiAgICAgIG9iai5vYmpMaXN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgdXBkYXRlT2JqKG9iaiwgem9vbSwgcmVmT2JqcywgcmVmSWQpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iaihjYW52YXNOb2RlLCBvYmopIHtcblxuICAgIGxldCBwYXJlbnROb2RlO1xuICAgIGxldCBzdmducyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgbGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsIG9iai5yZW5kZXIuZm9ybWF0KTtcbiAgICBpZiAob2JqLmlkKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdpZCcsIG9iai5pZCk7XG4gICAgXG4gICAgaWYgKG9iai5yZW5kZXIuY29sb3IpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbGwnLCBvYmoucmVuZGVyLmNvbG9yKTtcbiAgICBpZiAob2JqLnJlbmRlci5zdHJva2UpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZScsIG9iai5yZW5kZXIuc3Ryb2tlKTtcbiAgICBpZiAob2JqLnJlbmRlci5zdHJva2VEYXNoYXJyYXkpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZS1kYXNoYXJyYXknLCBvYmoucmVuZGVyLnN0cm9rZURhc2hhcnJheSk7XG4gICAgaWYgKG9iai5yZW5kZXIuc3RkRGV2aWF0aW9uKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdGREZXZpYXRpb24nLCBvYmoucmVuZGVyLnN0ZERldmlhdGlvbik7XG4gICAgaWYgKG9iai5yZW5kZXIuY2xpcFBhdGgpIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2NsaXAtcGF0aCcsIG9iai5yZW5kZXIuY2xpcFBhdGgpO1xuICAgIGlmIChvYmoucmVuZGVyLmZpbHRlcikgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsdGVyJywgb2JqLnJlbmRlci5maWx0ZXIpO1xuICAgIGlmIChvYmoucmVuZGVyLnBvaW50cykgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncG9pbnRzJywgb2JqLnJlbmRlci5wb2ludHMpO1xuICAgIGlmIChvYmoucmVuZGVyLnggfHwgb2JqLnJlbmRlci54ID09PSAwKSBuZXdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4Jywgb2JqLnJlbmRlci54KTtcbiAgICBpZiAob2JqLnJlbmRlci55IHx8IG9iai5yZW5kZXIueSA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIG9iai5yZW5kZXIueSk7XG4gICAgaWYgKG9iai5yZW5kZXIud2lkdGggfHwgb2JqLnJlbmRlci53aWR0aCA9PT0gMCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBvYmoucmVuZGVyLndpZHRoKTtcbiAgICBpZiAob2JqLnJlbmRlci5oZWlnaHQgfHwgb2JqLnJlbmRlci5oZWlnaHQgPT09IDApIG5ld05vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIG9iai5yZW5kZXIuaGVpZ2h0KTtcbiAgICBpZiAob2JqLnJlbmRlci5jeCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCBvYmoucmVuZGVyLmN4KTtcbiAgICBpZiAob2JqLnJlbmRlci5jeSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3knLCBvYmoucmVuZGVyLmN5KTtcbiAgICBpZiAob2JqLnJlbmRlci5yeCkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncngnLCBvYmoucmVuZGVyLnJ4KTtcbiAgICBpZiAob2JqLnJlbmRlci5yeSkgbmV3Tm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncnknLCBvYmoucmVuZGVyLnJ5KTtcbiAgICAvLyB5LCB5LCB3aWR0aCBhbmQgaGVpZ2h0IG1heSBiZSBhc3NpZ25lZCBpbiB1cGRhdGVPYmooKSwgdHJhbnNmb3JtIHdpbGxcblxuICAgIGlmIChvYmoucmVuZGVyLnBhcmVudElkKSB7XG4gICAgICBwYXJlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLnJlbmRlci5wYXJlbnRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYW52YXNTdmdOb2RlID0gZ2V0U3ZnQ2FudmFzTm9kZShjYW52YXNOb2RlKTtcbiAgICAgIGNhbnZhc05vZGUuYXBwZW5kQ2hpbGQoY2FudmFzU3ZnTm9kZSk7XG4gICAgICBwYXJlbnROb2RlID0gY2FudmFzU3ZnTm9kZTtcbiAgICB9XG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIGlmIChvYmouaWQgPT09ICdzaGlwQnVyc3QnKSBidXJzdE5vZGUgPSBuZXdOb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JqKG9iaiwgem9vbSwgcmVmT2JqcywgcmVmSWQpIHtcbiAgICBjb25zdCBjYXJ0ID0gaGVscENhbGMuZnJvbVBvbGFyKHtcbiAgICAgIHI6IG9iai5wb3NpdGlvbi5yLFxuICAgICAgZGVjOiBvYmoucG9zaXRpb24uZGVjXG4gICAgfSk7XG4gICAgY29uc3QgdHJpbSA9IGdldFRyaW0oem9vbSwgcmVmT2JqcywgcmVmSWQpO1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmlkKTtcblxuICAgIGNvbnN0IHN2Z1RhZyA9IG9iai5yZW5kZXIuZm9ybWF0O1xuICAgIGlmIChzdmdUYWcgPT09ICdjaXJjbGUnKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsICh2aWV3Q2VudGVyLnggKyB0cmltLnggKyBjYXJ0LnggLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsICh2aWV3Q2VudGVyLnkgKyB0cmltLnkgLSBjYXJ0LnkgLyB6b29tKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgTWF0aC5tYXgoMiwgb2JqLnIgLyB6b29tKSk7XG4gICAgfSBlbHNlIGlmIChzdmdUYWcgPT09ICdyZWN0Jykge1xuICAgICAgY29uc3Qgd2lkdGhQeCA9IE1hdGgubWF4KDIsIG9iai53aWR0aCAvIHpvb20pO1xuICAgICAgY29uc3QgaGVpZ2h0UHggPSBNYXRoLm1heCgyLCBvYmouaGVpZ2h0IC8gem9vbSk7XG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCAodmlld0NlbnRlci54ICsgdHJpbS54IC0gY2FydC54L3pvb20gLSAod2lkdGhQeCAvIDIpKSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgKHZpZXdDZW50ZXIueSArIHRyaW0ueSAtIGNhcnQueSAvIHpvb20pKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgd2lkdGhQeCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBoZWlnaHRQeCk7XG4gICAgfSBlbHNlIGlmIChvYmouaWQgPT09ICdzaGlwMScpIHtcbiAgICAgIGNvbnN0IHggPSAodmlld0NlbnRlci54ICsgdHJpbS54ICsgY2FydC54L3pvb20gLSA1KTtcbiAgICAgIGNvbnN0IHkgPSAodmlld0NlbnRlci55ICsgdHJpbS55IC0gY2FydC55IC8gem9vbSAtIDEwKTtcbiAgICAgIGNvbnN0IHBpdGNoID0gb2JqLnBvc2l0aW9uLnBpdGNoRGVjO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9LCR7eX0pIHJvdGF0ZSgke3BpdGNofSw1LDUpYDtcbiAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBvYmoucG9zaXRpb24uYnVyc3QuYSA+IDAgPyAgJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xuICAgICAgYnVyc3ROb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aXNpYmlsaXR5JywgdmlzaWJpbGl0eSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3ZnQ2FudmFzTm9kZShjYW52YXNOb2RlKSB7XG4gICAgdmFyIGNhbnZhc1N2Z05vZGU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYW52YXNOb2RlLmNoaWxkcmVuW2ldLmlkID09PSAnY2FudmFzU3ZnJykgY2FudmFzU3ZnTm9kZSA9IGNhbnZhc05vZGUuY2hpbGRyZW5baV07XG4gICAgfVxuXG4gICAgaWYgKCFjYW52YXNTdmdOb2RlKSB7XG4gICAgICBsZXQgc3ZnbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgICAgY2FudmFzU3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3N2ZycpO1xuICAgICAgY2FudmFzU3ZnTm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaWQnLCAnY2FudmFzU3ZnJyk7XG4gICAgICBjYW52YXNTdmdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsICcxMDAlJyk7XG4gICAgICBjYW52YXNTdmdOb2RlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCAnMTAwJScpOyAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBjYW52YXNTdmdOb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Vmlld0NlbnRlcihjYW52YXNOb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHk6IGNhbnZhc05vZGUub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgIHg6IGNhbnZhc05vZGUub2Zmc2V0V2lkdGggLyAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VHJpbSh6b29tLCByZWZPYmpzLCByZWZJZCkge1xuICAgIGNvbnN0IHJlZkNhciA9IGhlbHBDYWxjLmZyb21Qb2xhcih7cjogcmVmT2Jqcy5wb3NpdGlvbi5yLCBkZWM6IHJlZk9ianMucG9zaXRpb24uZGVjfSlcbiAgICBjb25zdCBjYW52YXNNaW5TaXplID0gTWF0aC5taW4oY2FudmFzTm9kZS5vZmZzZXRXaWR0aCwgY2FudmFzTm9kZS5vZmZzZXRIZWlnaHQpICogem9vbVxuICAgIGNvbnN0IHJlZk9ialdpZHRoID0gcmVmT2Jqcy5yICogMjtcbiAgICBcbiAgICBsZXQgdHJpbTtcbiAgICBjb25zdCByYXRpbyA9IHJlZk9ialdpZHRoL2NhbnZhc01pblNpemU7XG4gICAgY29uc3QgY2xvc2VNaW5SYXRpbyA9IHJlZklkID09PSAnbW9vbicgPyAuNSA6IDU7XG4gICAgaWYgKHJhdGlvID4gY2xvc2VNaW5SYXRpbykgeyAvLyBjbG9zZSwgc3VyZmFjZSBvbiBib3R0b25cbiAgICAgIHRyaW0gPSB7XG4gICAgICAgIHg6IC1yZWZDYXIueCAvIHpvb20sXG4gICAgICAgIHk6IHJlZkNhci55IC8gem9vbSArIHJlZk9ianMuciAvIHpvb20gKyAyMDBcbiAgICAgIH0gXG4gICAgfSBlbHNlIGlmIChyYXRpbyA8IC41IHx8IHJlZklkID09PSAnbW9vbicpIHsgLy8gZGlzdGFudCwgY2VudGVyXG4gICAgICB0cmltID0ge3g6IC1yZWZDYXIueCAvIHpvb20sIHk6IHJlZkNhci55IC8gem9vbX1cbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgdHJpbSA9IHsgLy8gaW50ZXJtZWRpYXRlXG4gICAgICAgIHg6IC1yZWZDYXIueCAvIHpvb20sXG4gICAgICAgIHk6IHJlZkNhci55IC8gem9vbSArIHJlZk9ianMuciAvIHpvb20gKyAyMFxuICAgICAgfVxuICAgICAgaWYgKHNoaXBEZWMgPiA0NSAmJiBzaGlwRGVjIDw9IDEzNSkgdHJpbSA9IHt4OiAtdHJpbS55LCB5OiAtdHJpbS54fSAvLyByaWdodFxuICAgICAgZWxzZSBpZiAoc2hpcERlYyA+IDEzNSAmJiBzaGlwRGVjIDw9IDIyNSkgdHJpbSA9IHt4OiB0cmltLngsIHk6IC10cmltLnl9IC8vIGJvdHRvbVxuICAgICAgZWxzZSBpZiAoc2hpcERlYyA+IDIyNSAmJiBzaGlwRGVjIDw9IDMyNSkgdHJpbSA9IHt4OiB0cmltLnksIHk6IHRyaW0ueH07IC8vIGxlZnRcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpbTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIGNyZWF0ZU9uZSxcbiAgICB1cGRhdGUsXG4gICAgdXBkYXRlT25lXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU3ZnOyIsImxldCBzaGlwMSA9IChoZWxwQ2FsYykgPT4ge1xuICBjb25zdCBtYWluSWQgPSAnc2hpcDEnO1xuXG4gIGNvbnN0IG9iakxpc3QgPSBbXG4gICAge1xuICAgICAgaWQ6ICdzaGlwMScsXG4gICAgICBwYW5lbDoge1xuICAgICAgICBnRWFydGg6IDkuOCxcbiAgICAgICAgZ01vb246IDAsXG4gICAgICAgIGFsdEVhcnRoOiAwLFxuICAgICAgICBhbHRNb29uOiAwLFxuICAgICAgICBoZWFkRWFydGg6IDAsXG4gICAgICAgIGhlYWRNb29uOiAwXG4gICAgICB9LFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgcjogNjM3ODEwMCwgLy8gZGlzdGFuY2UgKG0pXG4gICAgICAgIGRlYzogMCwgLy8gZGVjbGluYXRpb24gKGRlZylcbiAgICAgICAgdlI6IDAsIC8vIHYgc3BlZWQgKG0vcylcbiAgICAgICAgdkRlYzogMCwgLy8gaGVhZGluZywgb3IgdiBkZWNsaW5hdGlvbiAoZGVnKVxuICAgICAgICBwaXRjaERlYzogMCwgLy8gYXR0aXR1ZGUgcGl0Y2ggKGRlZylcbiAgICAgICAgYnVyc3Q6IHtcbiAgICAgICAgICBhOiAwLC8vIGN1cnJlbnQgYnVyc3QgYWNjZWxlcmF0aW9uIChtL3MyKVxuICAgICAgICAgIGFOZXh0OiBNYXRoLnJvdW5kKDQgKiA5LjgwNjY1KSwgLy8gc2VsZWN0ZWQgYWNjZWxlcmF0aW9uIGZvciBuZXh0IGJ1cnN0IChtL3MyKVxuICAgICAgICAgIHQ6IDAsIC8vIGN1cnJlbnQgYnVyc3QgcmVtYWluaW5nIHRpbWUgKHMpXG4gICAgICAgICAgdE5leHQ6IDQgLy8gc2VsZWN0ZWQgdGltZSBmb3IgbmV4dCBidXJzdCAocylcbiAgICAgICAgfSxcbiAgICAgICAgY3Jhc2hlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgZm9ybWF0OiAnZycsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgyMDAsMjAwKSByb3RhdGUoMCknXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NoaXBibHVyJyxcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXAxJyxcbiAgICAgICAgZm9ybWF0OiAnZmlsdGVyJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBwYXJlbnRJZDogJ3NoaXBibHVyJyxcbiAgICAgICAgZm9ybWF0OiAnZmVHYXVzc2lhbkJsdXInLFxuICAgICAgICBzdGREZXZpYXRpb246IFwiMS41XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc2hpcGNyb3AnLFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcDEnLFxuICAgICAgICBmb3JtYXQ6ICdjbGlwUGF0aCcsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwY3JvcCcsXG4gICAgICAgIGZvcm1hdDogJ3JlY3QnLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA4LFxuICAgICAgICB3aWR0aDoxMCxcbiAgICAgICAgaGVpZ2h0OiAxN1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzaGlwQnVyc3QnLFxuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHBhcmVudElkOiAnc2hpcDEnLFxuICAgICAgICBmb3JtYXQ6ICdlbGxpcHNlJyxcbiAgICAgICAgY3g6IDUsXG4gICAgICAgIGN5OiAyMyxcbiAgICAgICAgcng6NSxcbiAgICAgICAgcnk6ICcxMicsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgY2xpcFBhdGg6ICd1cmwoI3NoaXBjcm9wKScsXG4gICAgICAgIGZpbHRlcjogJ3VybCgjc2hpcGJsdXIpJyxcbiAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicgLy8gb3IgJ3Zpc2libGUnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByZW5kZXI6IHtcbiAgICAgICAgcGFyZW50SWQ6ICdzaGlwMScsXG4gICAgICAgIGZvcm1hdDogJ3BvbHlnb24nLFxuICAgICAgICBwb2ludHM6ICc1LDAgMTAsMTAgNSw3LjUgMCwxMCcsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICB9XG4gICAgfVxuICBdXG5cbiAgY29uc3QgYnVyc3RVcGRhdGUgPSAoc2Vjb25kU2tpcCwgdGltZVNwZWVkKSA9PiB7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50IC09IHNlY29uZFNraXAgKiB0aW1lU3BlZWQ7XG4gICAgaWYgKG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QudCA8PSAwICkge1xuICAgICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50ID0gMDtcbiAgICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYSA9IDA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkUGl0Y2ggPSAoYWRkKSA9PiB7XG4gICAgbGV0IHBpdGNoID0gaGVscENhbGMudG9EZWczNjAob2JqTGlzdFswXS5wb3NpdGlvbi5waXRjaERlYyArIGFkZCk7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5waXRjaERlYyA9IHBpdGNoO1xuICB9XG5cbiAgY29uc3QgYWRkQnVyc3RUTmV4dCA9IChhZGQpID0+IHtcbiAgICBvYmpMaXN0WzBdLnBvc2l0aW9uLmJ1cnN0LnROZXh0ID0gTWF0aC5tYXgob2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dCArIGFkZCwgMCk7XG4gIH1cblxuICBjb25zdCBzZXRCdXJzdEFOZXh0ID0gKGdOZXh0KSA9PiB7XG4gICAgaWYgKGdOZXh0IDw9IDkpIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYU5leHQgPSBNYXRoLnJvdW5kKGdOZXh0ICogOS44ICogMTAwKS8xMDA7XG4gIH1cblxuICB2YXIgYnVyc3RTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYSA9IG9iakxpc3RbMF0ucG9zaXRpb24uYnVyc3QuYU5leHQ7XG4gICAgb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50ID0gb2JqTGlzdFswXS5wb3NpdGlvbi5idXJzdC50TmV4dDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbklkLFxuICAgIGFkZEJ1cnN0VE5leHQsXG4gICAgYWRkUGl0Y2gsXG4gICAgYnVyc3RTdGFydCxcbiAgICBidXJzdFVwZGF0ZSxcbiAgICBvYmpMaXN0LFxuICAgIHNldEJ1cnN0QU5leHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwMTsiXSwic291cmNlUm9vdCI6IiJ9