
let getPanel = (helpCalc, state, ship1) => {

  var content = {
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
    }
  }

  create(state);

  function create(state) {
    state.panel = {
      shared: {
        node: null
      },
      View: {
        zoom: (state) => {
          var zoom  = state.render.zoom
          return (zoom < 1000 ? zoom : Math.round(zoom / 1000) + 'k') + ':1';
        },
        timeSpeed: (state) => {
          return formatKM(state.timeSpeed);
        },
      },
      Thrust: {
        thrust: () => {
          var a = (ship1.position.burst.a / 9.8).toFixed(0);
          var aNext = (ship1.position.burst.aNext / 9.8).toFixed(0);
          return a + 'g (' + aNext + 'g)';
        },
        time: () => ship1.position.burst.t.toFixed(0) + 's (' + ship1.position.burst.tNext.toFixed(0) + 's)'
      },
      FDAI: {
        //speed: () => (ship1.position.vR * 3.6).toFixed(0).toLocaleString() + 'km/h',
        speed: () => formatSpeed(ship1.position.vR),
        head: () => formatDeg(ship1.position.vDec),
        pitch: () => {
          var pitch = helpCalc.toDeg360(ship1.position.pitchDec - ship1.position.dec)
          return formatDeg(helpCalc.toDeg180(90 - pitch ))
        }
      },
      Nav2: {
        ref: 'earth',
        dec: (state) => {
          const postShip = {r: ship1.position.r, dec: ship1.position.dec};
          const navRefId = state.panel.Nav2.ref;
          const refObj = state.render.refObjs[navRefId].position;
          const posNavRef = {r: refObj.r, dec: refObj.dec};
          const dist = helpCalc.vectorSub(postShip, posNavRef)
          return formatDeg(dist.dec);
        },
        dist: (state) => {
          const postShip = {r: ship1.position.r, dec: ship1.position.dec};
          const navRefId = state.panel.Nav2.ref;
          const refObj = state.render.refObjs[navRefId];
          const posNavRef = {r: refObj.position.r, dec: refObj.position.dec};
          const dist = helpCalc.vectorSub(postShip, posNavRef);
          return formatMkm(dist.r - refObj.r);
        }
      },
      Nav: {
        ref: (state) => state.render.refId,
        alt: (state) => {
          const posShip = {r: ship1.position.r, dec: ship1.position.dec};
          const refObj = state.render.refObjs[state.render.refId];
          const posRef = {r: refObj.position.r, dec: refObj.position.dec};
          const dist = helpCalc.vectorSub(posShip, posRef);
          return formatMkm(dist.r - refObj.r);
        },
        long: () => {
          return formatLong(ship1.position.dec);
        },
        vClimb: (state) => {
          //const refObj = state.render.refObjs[state.render.refId];
          const climb = ship1.position.vR * Math.cos(ship1.position.vDec * (Math.PI/180));
          return formatSpeed(climb);
        },
        vOrb: (state) => {
          //const refObj = state.render.refObjs[state.render.refId];
          const vOrb = ship1.position.vR * Math.sin(ship1.position.vDec * (Math.PI/180));
          return formatSpeed(vOrb);
        },
        gLocal: (state) => {
          const posShip = {r: ship1.position.r, dec: ship1.position.dec};
          const navRefId = state.render.refId;
          const refObj = state.render.refObjs[navRefId];
          const posNavRef = {r: refObj.position.r, dec: refObj.position.dec};
          const dist = helpCalc.vectorSub(posShip, posNavRef);
          const gLocal = helpCalc.getGLocalR(dist.r, refObj.mass);
          return gLocal.toFixed(2) + 'm/s2';
        }
      }
    };

    state.panel.shared.node = document.getElementById('panel');
    createSections(state);
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
      var keys = Object.keys(content);
      keys.forEach(function(element) {
        document.getElementById(element).innerText = content[element]();
      });

      // from state
      var keys1 = Object.keys(state.panel);
      keys1.forEach(function(key1) {
        if (key1 !== 'shared') {
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

  function formatSpeed(v) {
    return Math.round(v * 3.6).toLocaleString() + 'km/h';
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

  function createSections(state) {
    const sectionKeys = Object.keys(state.panel);
    sectionKeys.forEach((sectionKey) => {
      if (sectionKey !== 'shared') {
        const sectionNode = getSection(sectionKey);
        const instrKeys = Object.keys(state.panel[sectionKey]);
        instrKeys.forEach((instrKey) => {
          const instrNode = getInstruments(state.panel[sectionKey][instrKey], sectionKey, instrKey)
          sectionNode.appendChild(instrNode);
        })
        state.panel.shared.node.prepend(sectionNode);
      }
    });

    function getSection(sectionKey) {
      let node = document.createElement("section");
      const labelNode = document.createElement("label");
      labelNode.innerText = sectionKey;
      node.appendChild(labelNode);
      return node;
    }

    function getInstruments(instrState, sectionKey, instrKey) {
      const instrNode = document.createElement("div");
      instrNode.innerText = instrKey + ': ';
      const instrSpanNode = document.createElement("span");
      instrSpanNode.id = 'panel_' + sectionKey + '_' + instrKey;
      instrNode.appendChild(instrSpanNode);
      return instrNode;
    }
  }

  function changeNav2Ref(state) {
    const keys = Object.keys(state.render.refObjs);
    let index = keys.indexOf(state.panel.nav2.ref);
    if (++index >= keys.length) index = 0;
    state.panel.nav2.ref = keys[index];
  }

  return {
    update,
    changeNav2Ref
  }
}

export default getPanel
