
let getPanel = (helpCalc, state, ship1) => {

  var position = {};
  var panel = {}
  var content = {
    alt: function() {
      var alt = state.render.refId === 'earth' ? panel.altEarth : panel.altMoon;
      var unit = 'm';
      if (alt > 1000) {
        alt /=  1000
        unit = 'km';
      }
      return Math.round(alt).toLocaleString('en-US') + unit;
    },
    long: function() {
      var long = state.render.refId === 'earth' ? panel.headEarth : panel.headMoon;
      return formatLong((180  - long) % 360);
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
      return (state.render.refId === 'earth' ? panel.gEarth : panel.gMoon).toFixed(2) + 'm/s2';
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
      var scale = state.width / 10  * state.render.zoom;
      return formatMkm(scale);g
    },
    time: function() {
      var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
      var d = new Date(0, 0, 0, 0, 0, 0, 0);
      d.setSeconds(state.time);
      var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
      return days + 'd ' + d.toLocaleTimeString('en-US', { hour12: false });
    },
    head: function() {
      return formatDeg(position.vDec);
    },
    zoom: function() {
      var zoom  = state.render.zoom
      return zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k';
    },
    timeSpeed: function() {
      return formatKM(state.timeSpeed);
    },
    timePlay: function() {
      return state.play ? 'Pause' : 'Play';
    },
    ref: function() {
      return state.render.refId;
    }
  }

  create(state);

  function create(state) {
    state.panel = {
      nav2: {
        ref: 'earth',
        dec: (state) => {
          const postShip = {r: ship1.position.r, dec: ship1.position.dec};
          const navRefId = state.panel.nav2.ref;
          const refObj = state.render.refObjs[navRefId].position;
          const posNavRef = {r: refObj.r, dec: refObj.dec};
          const dist = helpCalc.vectorSub(postShip, posNavRef)
          return formatDeg(dist.dec);
        },
        dist: (state) => {
          const postShip = {r: ship1.position.r, dec: ship1.position.dec};
          const navRefId = state.panel.nav2.ref;
          const refObj = state.render.refObjs[navRefId];
          const posNavRef = {r: refObj.position.r, dec: refObj.position.dec};
          const dist = helpCalc.vectorSub(postShip, posNavRef);
          return formatMkm(dist.r - refObj.r);
        }
      }
    };

    state.panel.node = document.getElementById('panel');
    createNav2(state);
  }

  function update(key, state) {
    if (key) {
      if (content[key]) document.getElementById(key).innerText = content[key]();
      else {
        const aKey = key.split('.');
        if (state.panel[aKey[0]][aKey[1]]) {
          const intr = state.panel[aKey[0]][aKey[1]];
          let node = document.getElementById('panel_' + aKey[0] + '_' + aKey[1]);
          node.innerText = typeof intr === "function" ? intr(state) : intr;
        }
      }
    } else {
      // from content
      position = ship1.position;
      panel = ship1.panel;
      var keys = Object.keys(content);
      keys.forEach(function(element) {
        document.getElementById(element).innerText = content[element]();
      });

      // from state
      var keys1 = Object.keys(state.panel);
      keys1.forEach(function(key1) {
        if (key1 !== 'node') {
          var keys2 = Object.keys(state.panel[key1]);
          keys2.forEach(function(key2) {
            const value = state.panel[key1][key2];
            let node = document.getElementById('panel_' + key1 + '_' + key2);
            node.innerText = typeof value === 'function' ? value(state) : value;
          })
        }
      });
    }
  }

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
    return (d < 1000) ? Math.round(d).toLocaleString() + 'm' : Math.round(d/1000).toLocaleString() + 'km';
  }

  function formatKM(d) {
    var txt = d;
    if (d >= 1000) txt = parseInt(d/1000) + 'k';
    else if (d >= 1000000) txt = parseInt(d/1000000) + 'M';
    return txt;
  }

  function createNav2(state) {
    const label = 'Nav2'
    let sectionNode = createSection(label);
    var keys = Object.keys(state.panel.nav2);
    keys.forEach(function(key) {
      createInstrument(sectionNode, 'nav2', key);
    });
    state.panel.node.appendChild(sectionNode);
    keys.forEach(function(key) {
      if (key !== 'node') update('nav2.' + key, state);
    });
  }

  function createSection(label) {
    let node = document.createElement("section");

    const labelNode = document.createElement("label");
    labelNode.innerText = label;
    node.appendChild(labelNode);

    return node;
  }

  function createInstrument(sectionNode, sectionId, instrId) {
    const instrNode = document.createElement("div");
    instrNode.innerText = instrId + ': ';
    const instrSpanNode = document.createElement("span");
    instrSpanNode.id = 'panel_' + sectionId + '_' + instrId;
    instrNode.appendChild(instrSpanNode);
    sectionNode.appendChild(instrNode);
  }

  function changeNav2Ref(state) {
    if (state.panel.nav2.ref === 'earth') state.panel.nav2.ref = 'moon';
    else state.panel.nav2.ref = 'earth';
  }

  return {
    update,
    changeNav2Ref
  }
}

export default getPanel
