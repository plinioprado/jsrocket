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
      //dec: helpCalc.toDeg360(obj.position.dec + obj.position.pitchDec)
      dec: obj.position.pitchDec
    };
    var gPolar = getLocalG(obj, gObjs); //{r: -getLocalG(obj, gObjs), dec: obj.position.dec};
    var vPolar = {r: obj.position.vR, dec: obj.position.vDec};
    var posPolar = {r: obj.position.r, dec: obj.position.dec};
    if ((posPolar.r < gObjs[0].r) || (posPolar.r === gObjs[0].r && aPolar.r <= 0)) {
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

    if ((posPolar.r <= gObjs[0].r // indside Earth surface
      && vPolar.dec > 90 && vPolar.dec < 270 // descending
      && vPolar.r > (50 / 3.6)) // faster than 50km/h
      ||
      (obj.panel.altMoon <= 0 // indside Moon surface
        && vPolar.r > (50 / 3.6)) // faster than 50km/h
      ) { 

      vPolar.r = 0;
      vPolar.dec = 0;
      obj.position.crash = true;
    }

    obj.position.vR = helpCalc.roundM(vPolar.r);
    obj.position.vDec = helpCalc.roundM(vPolar.dec);
    obj.position.r = helpCalc.roundM(posPolar.r);
    obj.position.dec = helpCalc.roundM(posPolar.dec);

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