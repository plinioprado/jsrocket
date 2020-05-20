import renderSvg from './render-svg';
import moveSvg from './move-svg';
import earth from './earth';
import moon from './moon';
import iss from './iss';
import ship1 from './ship';

import helpCalc from './helpCalc';

document.onLoad = loadApp;

var app = function(deps){

  var objs = deps.objs;
  var canvas = getCanvas();
  var moveSvg = deps.moveSvg(helpCalc);
  var renderSvg = deps.renderSvg(deps.helpCalc)
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
    setTimeout(function() {
      if (!canvas.state.play) return;
      canvas.state.time += (canvas.state.secondSkip * canvas.state.timeSpeed);

      moveSvg.move(canvas.state.secondSkip, canvas.state.timeSpeed);
      renderSvg.update(objs, canvas.state.zoom);

      ship1.burstUpdate(canvas.state.secondSkip, canvas.state.timeSpeed);
      moveSvg.moveOne(ship1.objList[0], canvas.state.secondSkip, canvas.state.timeSpeed, [objs.earth.objList[2],objs.moon.objList[0]]);
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
    if(e.target.nodeName == 'A') {
      var realLink = e.target.href
      var action = realLink
        .replace(window.location.origin+'/#/', '')
        .replace(window.location.search, '');

      if (!['file:','http:'].includes(action.substring(0,5))) {
        e.preventDefault();

        if (action === 'timePlay') canvas.playStop();
        else if (action === 'zoomMinus') canvas.zoomMultiply(2);
        else if (action === 'zoomPlus') canvas.zoomMultiply(.5);
        else if (action === 'timePlus') canvas.timeMultiply(2);
        else if (action === 'timeMinus') canvas.timeMultiply(.5);
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') canvas.playStop();
    else if (keyCode === 'ArrowUp') ship1.addPitch(10);
    else if (keyCode === 'ArrowDown') ship1.addPitch(-10);
    else if (keyCode === 'KeyA') ship1.addBurstTNext(1);
    else if (keyCode === 'KeyZ') ship1.addBurstTNext(-1);
    else if (keyCode === 'Minus') canvas.zoomMultiply(2);
    else if (keyCode === 'Equal') canvas.zoomMultiply(.5);
    else if (keyCode === 'Period') canvas.timeMultiply(2);
    else if (keyCode === 'Comma') canvas.timeMultiply(.5);
    else if (keyCode.substring(0,5) === 'Digit') {
      ship1.setBurstANext(keyCode.replace('Digit', ''))
    }
    if (!canvas.state.play) return;

    if (keyCode === 'Space') {
      ship1.burstStart();
    }
  }

  function getCanvas() {
    var state = {
      widthIni: 2000,
      width: 2000, // (m)
      heightPx: 0,
      widthPx: 0,
      zoom: 1,
      play: true,
      time: 0, // time passed (s)
      timeSpeed: 1,
      secondSkip: 0.1, // each time loop timming (s)
    }

    var zoomMultiply = function(times) {
      state.zoom *= times;
      state.zoom = Math.max(state.zoom, 1);
      renderSvg.update(deps.objs, state.zoom)
    }

    var timeMultiply = function(times) {
      var timeSpeed = canvas.state.timeSpeed * times;
      if (timeSpeed < 1) timeSpeed = 1;
      if (timeSpeed > 1000000) timeSpeed = 1000000;
      canvas.state.timeSpeed = parseInt(timeSpeed);
      panel.update('timeSpeed');
    }

    var playStop = function() {
      canvas.state.play = !canvas.state.play;
      document.getElementById('time').style.color = canvas.state.play ? 'white' : 'red';
      panel.update('timePlay');
      if (canvas.state.play) loop();
    }

    return {
      playStop,
      state,
      timeMultiply,
      zoomMultiply
    }
  }

  function getPanel(earth) {

    var position = {};

    var content = { // xxx
      alt: function() {
        var unit = 'm';
        var alt = position.r - earth.r;
        if (alt > 1000) {
          alt /=  1000
          unit = 'km';

        }
        return Math.round(alt).toLocaleString('en-US') + unit;
      },
      long: function() {
        return convLong(position.dec);
      },
      pitch: function() {
        return convDeg(toDeg180(90 - position.pitchDec));
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
      speed: function() {
        return Math.round(position.vR * 3.6).toLocaleString('en-US') + 'km/h';
      },
      burstA: function() {
        var a = (position.burst.a / earth.g).toFixed(0);
        var aNext = (position.burst.aNext / earth.g).toFixed(0);
        return a + 'g (' + aNext + 'g)';
      },
      burstT: function() {
        return Math.round(position.burst.t) + 's (' + position.burst.tNext.toFixed(0) + 's)';
      },
      scale: function() {
        var scale = canvas.state.width / 10  * canvas.state.zoom;
        return convMkm(scale);g
      },
      time: function() {
        var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
        var d = new Date(0, 0, 0, 0, 0, 0, 0);
        d.setSeconds(canvas.state.time);
        var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
        return days + 'd ' + d.toLocaleTimeString('en-US', { hour12: false });
      },
      head: function() {
        return convDeg(position.vDec);
      },
      zoom: function() {
        var zoom  = canvas.state.zoom
        return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
      },
      timeSpeed: function() {
        return convKM(canvas.state.timeSpeed);
      },
      timePlay: function() {
        return canvas.state.play ? 'Pause' : 'Play';
      }
    }

    var update = function(key) {
      if (key) {
        document.getElementById(key).innerText = content[key]();
      } else {
        position = ship1.objList[0].position;
        var keys = Object.keys(content);
        keys.forEach(element => {
          document.getElementById(element).innerText = content[element]();
        });
      }
    }

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
      return (d < 1000) ? d + 'm' : d/1000 + 'km';
    }

    function convKM(d) {
      var txt = d;
      if (d >= 1000) txt = parseInt(d/1000) + 'k';
      else if (d >= 1000000) txt = parseInt(d/1000000) + 'M';
      return txt;
    }

    function toDeg180(deg) {
      var ret = deg % 360;
      if (ret > 180) ret = ret - 360;
      return ret;
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
    helpCalc: helpCalc
  }

  app(deps);
})()

