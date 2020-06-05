
let getPanel = (helpCalc, state1, ship1) => {

  var position = {};
  var panel = {}

  var content = {
    alt: function() {
      var alt = state1.render.refId === 'earth' ? panel.altEarth : panel.altMoon;
      var unit = 'm';
      if (alt > 1000) {
        alt /=  1000
        unit = 'km';
      }
      return Math.round(alt).toLocaleString('en-US') + unit;
    },
    long: function() {
      var long = state1.render.refId === 'earth' ? panel.headEarth : panel.headMoon;
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
      return (state1.render.refId === 'earth' ? panel.gEarth : panel.gMoon).toFixed(2) + 'm/s2';
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
      var scale = state1.width / 10  * state1.render.zoom;
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
      var zoom  = state1.render.zoom
      return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
    },
    timeSpeed: function() {
      return convKM(state1.timeSpeed);
    },
    timePlay: function() {
      return state1.play ? 'Pause' : 'Play';
    },
    ref: function() {
      return state1.render.refId;
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

export default getPanel
