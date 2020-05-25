let ship1 = (helpCalc) => {
  const mainId = 'ship1';

  const objList = [
    {
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
        r: 6378100, // 0, // distance (m), (384000000 ** 2 + 1738000 ** 2) ** .5 for moon
        dec: 0, // d0eclination (deg), 90 - Math.atan(1738000 / 384000000) * (180 / Math.PI) for moon
        vR: 0, // v speed (m/s), 280 for moon
        vDec: 0, // heading, or v declination (deg), 180 for moon
        pitchDec: 0, // attitude pitch (deg)
        burst: {
          a: 0,// current burst acceleration (m/s2)
          aNext: Math.round(4 * 9.80665), // selected acceleration for next burst (m/s2)
          t: 0, // current burst remaining time (s)
          tNext: 4 // selected time for next burst (s)
        },
        crashed: false
      },
      render: {
        format: 'g',
        transform: 'translate(200,200) rotate(0)'
      }
    },
    {
      id: 'shipblur',
      render: {
        parentId: 'ship1',
        format: 'filter',
      }
    },
    {
      render: {
        parentId: 'shipblur',
        format: 'feGaussianBlur',
        stdDeviation: "1.5"
      }
    },
    {
      id: 'shipcrop',
      render: {
        parentId: 'ship1',
        format: 'clipPath',
      }
    },
    {
      render: {
        parentId: 'shipcrop',
        format: 'rect',
        x: 0,
        y: 8,
        width:10,
        height: 17
      }
    },
    {
      id: 'shipBurst',
      render: {
        parentId: 'ship1',
        format: 'ellipse',
        cx: 5,
        cy: 23,
        rx:5,
        ry: '12',
        color: 'red',
        clipPath: 'url(#shipcrop)',
        filter: 'url(#shipblur)',
        visibility: 'hidden' // or 'visible'
      }
    },
    {
      render: {
        parentId: 'ship1',
        format: 'polygon',
        points: '5,0 10,10 5,7.5 0,10',
        color: 'white'
      }
    }
  ]

  const burstUpdate = (secondSkip, timeSpeed) => {
    objList[0].position.burst.t -= secondSkip * timeSpeed;
    if (objList[0].position.burst.t <= 0 ) {
      objList[0].position.burst.t = 0;
      objList[0].position.burst.a = 0;
    }
  }

  const addPitch = (add) => {
    let pitch = helpCalc.toDeg360(objList[0].position.pitchDec + add);
    objList[0].position.pitchDec = pitch;
  }

  const addBurstTNext = (add) => {
    objList[0].position.burst.tNext = Math.max(objList[0].position.burst.tNext + add, 0);
  }

  const setBurstANext = (gNext) => {
    if (gNext <= 9) objList[0].position.burst.aNext = Math.round(gNext * 9.8 * 100)/100;
  }

  var burstStart = function() {
    objList[0].position.burst.a = objList[0].position.burst.aNext;
    objList[0].position.burst.t = objList[0].position.burst.tNext;
  }

  return {
    mainId,
    addBurstTNext,
    addPitch,
    burstStart,
    burstUpdate,
    objList,
    setBurstANext
  }
}

export default ship1;