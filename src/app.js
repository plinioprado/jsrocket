document.onLoad = loadApp;

function getEarth() {
  var id = 'earth';
  var state = {
    width: 12756200, // (m)
    height: 12756200, // (m)
    g: 9.80665, // m/s2
    position: {
      r: 0, // distance from center (m)
      dec: 0, // not used declination (deg)
    },
    style: {
      borderRadius: '50%', // to circle
      backgroundColor: 'blue',
      zIndex: 3
    }
  }

  return {
    id,
    state
  }
}

var getBase = function() {
  var id = 'base';
  var state = {
    width: 100, // mandatory (m)
    height: 5, // mandatory (m)
    position: {
      r: 12756200/2 - 5,
      dec: 0 // declination (deg)
    },
    style: {
      backgroundColor: 'yellow',
      zIndex: 4
    }
  }

  return {
    id,
    state
  }
}

var getEarthAtm = function() {
  var id = 'earthAtm';
  var state = {
    width: 12756200 + 200000, // (m)
    height: 12756200 + 200000, // (m)
    position: {
      r: 0, // distance from center (m)
      dec: 0, // not used declination (deg)
    },
    style: {
      borderRadius: '50%', // to circle
      backgroundColor: '#ADD8E6',
      zIndex: 2
    }
  }

  return {
    id,
    state
  }
}

var getEarthLeo = function() {
  var id = 'earthLeo';
  var state = {
    width: 12756200 + 2000000, // (m)
    height: 12756200 + 2000000, // (m)
    position: {
      r: 0, // distance from center (m)
      dec: 0, // not used declination (deg)
    },
    style: {
      borderRadius: '50%', // to circle
      backgroundColor: '#303030',
      zIndex: 1
    }
  }

  return {
    id,
    state
  }
}

var app = function(deps){

  var canvas = getCanvas();
  var panel = getPanel();
  var earth = getEarth();
  var earthAtm = deps.getEarthAtm();
  var earthLeo = deps.getEarthLeo();
  var base = deps.getBase();
  var ship = getShip();

  createAll();
  updateAll()

  document.onclick = verifyClick;
  document.onkeydown = verifyKey;

  loop();

  function createAll() {
    canvas.create(earth);
    canvas.create(earthAtm);
    canvas.create(earthLeo);
    canvas.create(base);
    canvas.create(ship);
  }

  function updateAll() {
    canvas.update(earth);
    canvas.update(earthAtm);
    canvas.update(earthLeo);
    canvas.update(base);
    canvas.update(ship);
    panel.update();
  }

  function loop() {
    setTimeout(function() {
      if (!canvas.state.play) return;
      canvas.state.time += (canvas.state.secondSkip * canvas.state.timeSpeed);
      if (ship.state.position.burst.t > 0) ship.state.position.burst.t -= canvas.state.secondSkip;
      if (ship.state.position.burst.t < 0)  ship.state.position.burst.t = 0;
      ship.state.position.burst.t = Math.round(ship.state.position.burst.t * 10) / 10
      if (ship.state.position.burst.t === 0)  ship.state.position.burst.a = 0;
      ship.move()
      canvas.update(ship);
      panel.update();

      loop();
    }, 1000 * canvas.state.secondSkip);
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
    else if (keyCode === 'ArrowUp') ship.addPitch(10);
    else if (keyCode === 'ArrowDown') ship.addPitch(-10);
    else if (keyCode === 'KeyA') ship.burstNextT(1);
    else if (keyCode === 'KeyZ') ship.burstNextT(-1);
    else if (keyCode === 'Minus') canvas.zoomMultiply(2);
    else if (keyCode === 'Equal') canvas.zoomMultiply(.5);
    else if (keyCode === 'Period') canvas.timeMultiply(2);
    else if (keyCode === 'Comma') canvas.timeMultiply(.5);
    else if (keyCode.substring(0,5) === 'Digit') ship.burstNextA(keyCode.replace('Digit', ''));
    if (!canvas.state.play) return;

    if (keyCode === 'Space') ship.burstStart();
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

    var create = function(obj) {
      var parentNodeId = obj.state.parentNodeId || 'canvas';
      var parentNode = document.getElementById(parentNodeId);
      var newNode = document.createElement('div');
      
      newNode.id = obj.id;
      if (!obj.state.style.position) newNode.style.position = 'absolute';
      
      var keys = Object.keys(obj.state.style);
      keys.forEach(element => {
        newNode.style[element] = obj.state.style[element];
      });

      parentNode.appendChild(newNode);

      if (obj.state.children) {
        obj.state.children.forEach(element => {
          create({state: element, id: element.id})
        });
      }
    }

    var update = function(obj, canvasNode) {
      var objNode = document.getElementById(obj.id);
      if (!canvasNode) canvasNode = document.getElementById('canvas');
      var zoom = state.zoom;
      var pitch = obj.state.position.pitchDec;
      var earthWidth = earth.state.width;

      var posPolar = {
        dec: obj.state.position.dec,
        r: obj.state.position.r
      }
      // ajust for ship borders
      if (obj.id === 'ship' && (posPolar.r < (earthWidth/2 + 10))) {
        posPolar.r = earthWidth/2 + 10 * zoom;
      }
      var cart = fromPolar(posPolar);
      if (obj.id === 'ship') cart.x -= 5 * zoom // adjust ship borders
      var objM = {
        x: cart.x,
        y: cart.y,
        height: obj.state.height,
        width: obj.state.width
      }

      var objPx = {}
      objPx.x = objM.x;
      objPx.y = objM.y;
      objPx.height = objM.height;
      objPx.width = objM.width;

      var canvasPx = {};
      canvasPx.width = canvasNode.offsetWidth;
      canvasPx.height = canvasNode.offsetHeight;
      canvasPx.min = canvasNode.offsetHeight;
      var minPx = obj.id === 'ship' ? 0 : Math.round(canvasPx.width/200);

      objNode.style.width = Math.max(objPx.width/zoom, minPx)  + 'px';
      objNode.style.height = Math.max(objPx.height/zoom,minPx) + 'px';
      objNode.style.left = canvasPx.width/2 + (objPx.x - objPx.width/2)/zoom + 'px';
      objNode.style.top = canvasPx.height/2 + (- objPx.y + earth.state.height/2 - objPx.height/2)/zoom + 'px';
      if (pitch !== undefined) objNode.style.transform = 'rotate(' + (posPolar.dec + pitch - 90).toString() + 'deg)';

      if (obj.id === 'ship') {
        var shipBurstNode = document.getElementById('shipBurst')
        if (shipBurstNode) shipBurstNode.style.display = ship.state.position.burst.a ? 'block' : 'none';	
      }

      function fromPolar(polar) {
        return {
          x: polar.r * Math.sin(polar.dec * Math.PI/180),
          y: polar.r * Math.cos(polar.dec * Math.PI/180)
        }
      }
    }

    var zoomMultiply = function(times) {
      state.zoom *= times;
      state.zoom = Math.max(state.zoom, 1);
      updateAll();
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
      create,
      playStop,
      update,
      state,
      timeMultiply,
      zoomMultiply
    }
  }

  function getPanel() {

    var content = {
      alt: function() {
        var unit = 'm';
        var alt = ship.state.position.r - earth.state.width/2;
        if (alt > 1000) {
          alt /=  1000
          unit = 'km';
        }
        return Math.round(alt).toLocaleString('en-US') + unit;
      },
      long: function() {
        return convLong(ship.state.position.dec);
      },
      pitch: function() {
        return convDeg(toDeg180(90 - ship.state.position.pitchDec));
      },
      climb: function() {
        var vDec = ship.state.position.vDec + ship.state.position.dec;
        var climb = ship.state.position.vR * Math.cos(vDec * (Math.PI/180))
        return climb.toFixed(0) + 'km/h';
      },
      vHoriz: function() {
        var vDec = ship.state.position.vDec + ship.state.position.dec;
        var climb = ship.state.position.vR * Math.sin(vDec * (Math.PI/180))
        return climb.toFixed(0) + 'km/h';
      },
      speed: function() {
        return Math.round(ship.state.position.vR * 3.6).toLocaleString('en-US') + 'km/h';
      },
      burstA: function() {
        var a = (ship.state.position.burst.a / earth.state.g).toFixed(0);
        var aNext = (ship.state.position.burst.aNext / earth.state.g).toFixed(0);
        return a + 'g (' + aNext + 'g)';
      },
      burstT: function() {
        return Math.round(ship.state.position.burst.t) + 's (' + ship.state.position.burst.tNext.toFixed(0) + 's)';
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

        //return days + 'Days ' + hours + 'h' + minutes + 'm' + seconds + 's';
        return days + 'd ' + d.toLocaleTimeString('en-US', { hour12: false });
      },
      head: function() {
        return convDeg(ship.state.position.vDec);
      },
      zoom: function() {
        var zoom  = canvas.state.zoom
        return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k'; ///
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

  function getShip() {
    var id = 'ship';
    var state = {
      width: 0, // mandatory (m)
      height: 0, // mandatory (m)
      position: {
        r: 12756200/2, // distance (m)
        dec: 0, // declination (deg)
        pitchDec: 0, // attitude pitch (deg)
        vR: 0, // v speed (m/s)
        vDec: 0, // heading, or v declination (deg)
        burst: {
          a: 0,//Math.round(4 * 9.80665), //0, // current burst acceleration (m/s2)
          aNext: Math.round(4 * 9.80665), // selected acceleration for next burst (m/s2)
          t: 4, // 0, // current burst remaining time (s)
          tNext: 4 // selected time for next burst (s)
        }
      },
      style: {
        width: 0,
        height: 0,
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderLeft: '10px solid white',
        zIndex: 2,
        transform: 'rotate(-90deg)', // will recalc
      },
      children: [{
        id: 'shipEnd',
        parentNodeId: 'ship',
        style: {
          position: 'relative',
          width: 10,
          height: 10,
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '4px solid black',
          marginTop: '-5px',
          marginLeft: '-10px',
          }
        },
        {
          id: 'shipBurst',
          parentNodeId: 'ship',
          style: {
            position: 'relative',
            marginTop: '-15px',
            marginLeft: '-27px',
            width: '10px',
            height: '20px',
            backgroundColor: 'red',
            transform: 'rotate(-90deg)',
            borderRadius: '50%',
            boxShadow: '0px 2px 2px 1px rgba(249, 129, 2, 0.7)',
            zIndex: 1
          }
        },
        {
          id: 'shipBurstEnd',
          parentNodeId: 'shipBurst',
          style: {
            width: '10px',
            height: '10px',
            backgroundColor: 'black',
            zIndex: 1
          }
        }
      ]
    }

    var addPitch = function(add) {
      var pitch = (state.position.pitchDec += add) % 360;
      state.position.pitchDec = pitch;
    }

    var burstStart = function() {
      state.position.burst.a = state.position.burst.aNext;
      state.position.burst.t = state.position.burst.tNext;
    }

    var burstNextA = function(aNext) {
      if (aNext < 10) state.position.burst.aNext = Math.round(aNext * earth.state.g * 100)/100;
    }

    var burstNextT = function(tNext) {
      ship.state.position.burst.tNext = Math.max(ship.state.position.burst.tNext + tNext, 0)
    }

    var move = function() {
      var aPolar = {r: state.position.burst.a, dec: normalDeg(state.position.dec + state.position.pitchDec)};
      var gPolar = {r: -getLocalG(), dec: state.position.dec};
      var vPolar = {r: state.position.vR, dec: state.position.vDec};
      var posPolar = {r: state.position.r, dec: state.position.dec};
      if ((posPolar.r < earth.state.width/2) || (posPolar.r === earth.state.width/2 && aPolar.r <= 0)) {
        state.position.r = earth.state.width/2;
        return;
      }

      var aCart = fromPolar(aPolar);
      var gCart = fromPolar(gPolar);
      var vCart = fromPolar(vPolar);
      var posCart = fromPolar(posPolar);

      vCart.x += (aCart.x + gCart.x) * canvas.state.secondSkip * canvas.state.timeSpeed;
      vCart.y += (aCart.y + gCart.y) * canvas.state.secondSkip * canvas.state.timeSpeed;
      posCart.x += vCart.x * canvas.state.secondSkip * canvas.state.timeSpeed;
      posCart.y += vCart.y * canvas.state.secondSkip * canvas.state.timeSpeed;

      vPolar = toPolar(vCart);
      posPolar = toPolar(posCart);
      if (posPolar.r <= earth.state.width/2) vPolar = { r: 0, dec: 0 }

      state.position.vR = roundM(vPolar.r);
      state.position.vDec = roundM(vPolar.dec);
      state.position.r = roundM(posPolar.r);
      state.position.dec = roundM(posPolar.dec);

      function fromPolar(polar) {
        return {
          x: polar.r * Math.sin(polar.dec * (Math.PI/180)),
          y: polar.r * Math.cos(polar.dec * (Math.PI/180))
        }
      }
      function toPolar(cart) {
        return {
          r: ((cart.x ** 2 + cart.y ** 2) ** .5),
          dec: (Math.atan2(cart.x, cart.y) / (Math.PI/180))
        }
      }

      function normalDeg(deg) {
        var ret = deg % 360;
        return ret;
      }

      function roundM(val) {
        return Math.round(val * 1000000000) / 1000000000;
      }

      function getLocalG() {
        var localG = earth.state.g / (state.position.r / (earth.state.width/2)) ** 2;
        return localG;
      }
    }

    return {
      id,
      addPitch,
      burstNextA,
      burstNextT,
      burstStart,
      move,
      state
    }
  }
}

var loadApp = (function() {

  var deps = {
    getEarth: getEarth,
    getBase: getBase,
    getEarthAtm: getEarthAtm,
    getEarthLeo: getEarthLeo
  }

  app(deps);
})()

