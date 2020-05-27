import renderSvg from './render-svg';
import moveSvg from './move-svg';
import earth from './earth';
import moon from './moon';
import iss from './iss';
import ship1 from './ship';

import getHelpCalc from './helpCalc';

document.onLoad = loadApp;

var app = function(deps){

  var state1 = {
    timeSpeed: 1, // new
    width: 2000, // (m)
    time: 0, // time passed (s)
    zoom: 1,
    play: true,
    secondSkip: 0.1, // each time loop timming (s)
    ref: 'earth'
  }

  var objs = deps.objs;
  var helpCalc = deps.getHelpCalc()
  var moveSvg = deps.moveSvg(helpCalc);
  var renderSvg = deps.renderSvg(helpCalc);
  var ship1Data = deps.ship1(helpCalc);
  var panel = getPanel(helpCalc);

  var ship1 = ship1Data.objList[0];

  moveSvg.init(objs);

  renderSvg.create(objs, state1.zoom, getRefObj(objs), state1.ref);
  renderSvg.createOne(ship1Data, state1.zoom, getRefObj(objs)), state1.ref;

  document.onclick = verifyClick;
  document.onkeydown = verifyKey;

  loop();

  function loop() {
    setTimeout(function() {
      if (!state1.play) return;
      state1.time += (state1.secondSkip * state1.timeSpeed);

      moveSvg.move(state1.secondSkip, state1.timeSpeed);
      renderSvg.update(objs, state1.zoom, getRefObj(objs), state1.ref);

      ship1Data.burstUpdate(state1.secondSkip, state1.timeSpeed);
      moveSvg.moveOne(ship1, state1.secondSkip, state1.timeSpeed, [objs.earth.objList[2],objs.moon.objList[0]]);
      renderSvg.updateOne(ship1Data, state1.zoom, getRefObj(objs), state1.ref);
      panel.update();

      if (ship1.position.crash) {
        modalOpen('ship crashed. Reload game.')
        return;
      }
      
      if (!checkTimeOut()) loop();
    }, 1000 * state1.secondSkip);
  }

  function checkTimeOut() {
    var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
    var d = new Date(0, 0, 0, 0, 0, 0, 0);
    d.setSeconds(state1.time);
    var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
    
    if (days > 365) {
      modalOpen('Exausted fuel after 1 year of flight. Reload game.');
      return true;
    }
    return false;
  }

  function verifyClick(e) {
    if(e.target.nodeName == 'A') {
      var realLink = e.target.href
      var action = realLink
        .replace(window.location.origin+'/#/', '')
        .replace(window.location.search, '');

      if (!['file:','http:'].includes(action.substring(0,5))) {
        e.preventDefault();

        if (action === 'timePlay') playStop();
        else if (action === 'zoomMinus') zoomMultiply(2);
        else if (action === 'zoomPlus') zoomMultiply(.5);
        else if (action === 'timePlus') timeMultiply(2);
        else if (action === 'timeMinus') timeMultiply(.5);
        else if (action === 'modalClose') modalClose();
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') playStop();
    else if (keyCode === 'ArrowUp') ship1Data.addPitch(10);
    else if (keyCode === 'ArrowDown') ship1Data.addPitch(-10);
    else if (keyCode === 'KeyA') ship1Data.addBurstTNext(1);
    else if (keyCode === 'KeyZ') ship1Data.addBurstTNext(-1);
    else if (keyCode === 'Minus') zoomMultiply(2);
    else if (keyCode === 'Equal') zoomMultiply(.5);
    else if (keyCode === 'Period') timeMultiply(2);
    else if (keyCode === 'Comma') timeMultiply(.5);
    else if (keyCode === 'KeyV') setRef();
    else if (keyCode.substring(0,5) === 'Digit') {
      ship1Data.setBurstANext(keyCode.replace('Digit', ''))
    }
    if (!state1.play) return;

    if (keyCode === 'Space') {
      ship1Data.burstStart();
    }
  }

  function getRefObj(objs) {
    var obj = 'hey';
    if (state1.ref === 'earth') obj = objs.earth.objList[2];
    else obj = objs.moon.objList[0];
    return obj;
  }

  function setRef() {
    if (state1.ref === 'earth') state1.ref = 'moon';
    else state1.ref = 'earth';
  }

  function playStop() {
    state1.play = !state1.play;
    document.getElementById('time').style.color = state1.play ? 'white' : 'red';
    panel.update('timePlay');
    if (state1.play) loop();
  }

  function zoomMultiply(times) {
    state1.zoom *= times;
    state1.zoom = Math.max(state1.zoom, 1);
    renderSvg.update(objs, state1.zoom, getRefObj(objs), state1.ref);
    renderSvg.updateOne(ship1Data, state1.zoom, getRefObj(objs), state1.ref);
  }

  function timeMultiply(times) {
    var timeSpeed = state1.timeSpeed * times;
    if (timeSpeed < 1) timeSpeed = 1;
    if (timeSpeed > 1000000) timeSpeed = 1000000;
    state1.timeSpeed = parseInt(timeSpeed);
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
    classList.remove('modalClosed')
    classList.add('modalOpen');
    document.getElementById('modalcontent').innerText = msg
  }

  function getPanel(helpCalc) {

    var position = {};
    var panel = {}

    var content = { // xxx
      alt: function() {
        var alt = state1.ref === 'earth' ? panel.altEarth : panel.altMoon;
        var unit = 'm';
        if (alt > 1000) {
          alt /=  1000
          unit = 'km';
        }
        return Math.round(alt).toLocaleString('en-US') + unit;
      },
      long: function() {
        var long = state1.ref === 'earth' ? panel.headEarth : panel.headMoon;
        return convLong((180  - long) % 360);
      },
      pitch: function() {
        var pitch = helpCalc.toDeg360(position.pitchDec - position.dec)
        return formatDeg(helpCalc.toDeg180(90 - pitch ))
      },
      climb: function() {
        var vDec = position.vDec + position.dec;
        var climb = position.vR * Math.cos(vDec * (Math.PI/180))
        return Math.round(climb * 3.6).toLocaleString('en-US') + 'km/h';
      },
      vOrbit: function() {
        var vDec = position.vDec + position.dec;
        var v = position.vR * Math.sin(vDec * (Math.PI/180))
        return Math.round(v * 3.6).toLocaleString('en-US') + 'km/h';
      },
      gLocal: function() {
        return (state1.ref === 'earth' ? panel.gEarth : panel.gMoon).toFixed(2) + 'm/s2';
      },
      speed: function() {
        return Math.round(position.vR * 3.6).toLocaleString('en-US') + 'km/h';
      },
      burstA: function() {
        var a = (position.burst.a / 9.8).toFixed(0);
        var aNext = (position.burst.aNext / 9.8).toFixed(0);
        return a + 'g (' + aNext + 'g)';
      },
      burstT: function() {
        return Math.round(position.burst.t) + 's (' + position.burst.tNext.toFixed(0) + 's)';
      },
      scale: function() {
        var scale = state1.width / 10  * state1.zoom;
        return convMkm(scale);g
      },
      time: function() {
        var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
        var d = new Date(0, 0, 0, 0, 0, 0, 0);
        d.setSeconds(state1.time);
        var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
        return days + 'd ' + d.toLocaleTimeString('en-US', { hour12: false });
      },
      head: function() {
        return formatDeg(position.vDec);
      },
      zoom: function() {
        var zoom  = state1.zoom
        return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
      },
      timeSpeed: function() {
        return convKM(state1.timeSpeed);
      },
      timePlay: function() {
        return state1.play ? 'Pause' : 'Play';
      },
      ref: function() {
        return state1.ref;
      }
    }

    var update = function(key) {
      if (key) {
        document.getElementById(key).innerText = content[key]();
      } else {
        position = ship1.position;
        panel = ship1.panel;
        var keys = Object.keys(content);
        keys.forEach(function(element) {
          document.getElementById(element).innerText = content[element]();
        });
      }
    }

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
      return (d < 1000) ? d + 'm' : d/1000 + 'km';
    }

    function convKM(d) {
      var txt = d;
      if (d >= 1000) txt = parseInt(d/1000) + 'k';
      else if (d >= 1000000) txt = parseInt(d/1000000) + 'M';
      return txt;
    }

    return {
      update
    }
  }
}

var loadApp = (function() {

  var deps = {
    renderSvg: renderSvg,
    moveSvg: moveSvg,
    ship1: ship1,
    objs: {
      earth: earth,
      moon: moon,
      iss: iss,
    },
    getHelpCalc: getHelpCalc
  }

  app(deps);
})()

