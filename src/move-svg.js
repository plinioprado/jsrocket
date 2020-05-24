let moveSvg = (helpCalc) => {

  let data = [];

  function init(objs) {

    let keys = Object.keys(objs);
    for (let i = 0; i < keys.length; i++) {
      let objList = objs[keys[i]].objList;
      for (let j = 0; j < objList.length; j++) {
        let obj = objList[j];
        if (obj.position.vR || obj.position.vDec) { // will move
          const newData = obj.position;
          newData.id = obj.id;
          data = [...data, newData];
        }
      }
    }
  }

  const move = (secondSkip, timeSpeed) => {
    for (let i = 0; i < data.length; i++) {
      let position = data[i];
      position.r += position.vR * secondSkip * timeSpeed;
      position.dec += position.vDec * secondSkip * timeSpeed;
    }
  }

  const moveOne = (obj, secondSkip, timeSpeed, gObjs) => {
    var aPolar = {
      r: obj.position.burst.a,
      dec: obj.position.pitchDec
    };
    var gPolar = getLocalG(obj, gObjs);
    var vPolar = {r: obj.position.vR, dec: obj.position.vDec};
    var posPolar = {r: obj.position.r, dec: obj.position.dec};

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

    //if (posPolar.r <= gObjs[0].r // indside Earth surface
    if (obj.panel.altEarth <= 0 && vPolar.r !== 0) { 
        vPolar.r = 0;
        vPolar.dec = 0;
        if (vPolar.r > (50 / 3.6)) obj.position.crash = true;
    } else if (obj.panel.altMoon <= 0 && vPolar.r !== 0) {
      vPolar.r = 0;
      vPolar.dec = 0;
      if (vPolar.r > (1000 / 3.6)) obj.position.crash = true;
    }

    obj.position.vR = vPolar.r;
    obj.position.vDec = vPolar.dec;
    obj.position.r = posPolar.r;
    obj.position.dec = posPolar.dec;

    obj.panel.altEarth = obj.position.r - gObjs[0].r;

    function getLocalG(obj, gObjs) {

      // Earth
      const mass = gObjs[0].mass;
      const dist = obj.position.r;
      let gR = (6.67 * Math.pow(10, -11)) * mass / (dist ** 2);
      const gDec = helpCalc.toDeg360(180 + obj.position.dec);
      if (dist < gObjs[0].r)  gR = 0;

      obj.panel.gEarth = gR;
      obj.panel.headEarth = gDec;
      
      //Moon
      const mass2 = gObjs[1].mass;
      const posCartShip = {r: obj.position.r, dec: obj.position.dec};
      const posCartCenter = {r: gObjs[1].position.r, dec: gObjs[1].position.dec};
      const dist2 = helpCalc.distPol(posCartShip, posCartCenter);
      const gR2 = (6.67 * Math.pow(10, -11)) * mass2 / (dist2.r ** 2);
      const gDec2 = helpCalc.toDeg360(180 + dist2.dec);

      obj.panel.gMoon = gR2;
      obj.panel.altMoon = dist2.r - gObjs[1].r;
      obj.panel.headMoon = gDec2;
      const gPol = helpCalc.addPol({r: gR, dec: gDec}, {r: gR2, dec: gDec2});
      
      return gPol
    }

  }

  return {
    init,
    move,
    moveOne
  }
}

export default moveSvg