let moveSvg = (helpCalc) => {

  let data = [];

  function init(objs) {

    let keys = Object.keys(objs);
    for (let i = 0; i < keys.length; i++) {
      let objList = objs[keys[i]].objList;
      for (let j = 0; j < objList.length; j++) {
        let obj = objList[j];
        if (!obj.position) continue;
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

  const moveOne = (obj, secondSkip, timeSpeed, gObjs, state) => {

    var aPolar = {r: obj.position.burst.a, dec: obj.position.pitchDec};
    var vPolar = {r: obj.position.vR, dec: obj.position.vDec};
    var posPolar = {r: obj.position.r, dec: obj.position.dec};
    var posDecOld = posPolar.dec;

    var altEarth = posPolar.r - gObjs[0].r;
    var gPolar = getLocalG(obj, gObjs);
    var altMoon = obj.panel.altMoon;
    if (altEarth <= 0 || altMoon <= 0) gPolar = {r: 0, dec: 0};

    // If landing
    if (altEarth < 0 && vPolar.r !== 0) {  
      obj.position.vR = 0;
      obj.position.r = gObjs[0].r;
      if (vPolar.r > (50 / 3.6)) obj.position.crash = true;
      return;
    } else if (altMoon < 0 && vPolar.r !== 0) {
      let vMoon = helpCalc.getVObj(gObjs[1]);
      obj.position.vR = vMoon.r;
      obj.position.vDec = vMoon.dec;
      obj.position.burst.a = 0;
      if (vPolar.r > (50 * 3.6)) obj.position.crash = true;
      return;
    }

    // calc new position
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

    // Update new posion
    obj.position.vR = vPolar.r;
    obj.position.vDec = vPolar.dec;
    obj.position.r = Math.round(posPolar.r);
    obj.position.dec = posPolar.dec;
    obj.position.pitchDec = helpCalc.toDeg360(obj.position.pitchDec - posDecOld + obj.position.dec)
    obj.panel.altEarth = Math.round(obj.position.r - gObjs[0].r);

    //update Trail
    updateTrail(posPolar, state);
  }

  function getLocalG(obj, gObjs) {

    // Earth
    const mass = gObjs[0].mass;
    const dist = obj.position.r;
    let gR = 6.67e-11 * mass / (dist ** 2);
    const gDec = helpCalc.toDeg360(180 + obj.position.dec);
    
    if (dist < gObjs[0].r)  gR = 0;
    obj.panel.gEarth = gR;
    obj.panel.headEarth = gDec;
    
    //Moon
    const mass2 = gObjs[1].mass;
    const posPolShip = {r: obj.position.r, dec: obj.position.dec};
    const posPolCenter = {r: gObjs[1].position.r, dec: gObjs[1].position.dec};
    const dist2 = helpCalc.distPol(posPolShip, posPolCenter);
    let gR2 = 6.67e-11 * mass2 / (dist2.r ** 2);
    const gDec2 = helpCalc.toDeg360(180 + dist2.dec);

    obj.panel.altMoon = Math.round(dist2.r - gObjs[1].r);
    
    if (obj.panel.altMoon <= 0) gR2 = 0;
    obj.panel.gMoon = gR2;
    obj.panel.headMoon = gDec2;

    const gPol = helpCalc.addPol({r: gR, dec: gDec}, {r: gR2, dec: gDec2});
    
    return gPol
  }

  function updateTrail(posPolar, state) {
    var maxLenght = state.ship1.trail.maxLenght;
    var points = state.ship1.trail.points;
    if (posPolar.r === points[points.length - 2]
      && posPolar.dec === points[points.length - 1]) return;
    points.push(posPolar.r);
    points.push(posPolar.dec);
    while (points.length > maxLenght * 2) {
      points.shift();
      points.shift();
    }
  }

  return {
    init,
    move,
    moveOne
  }
}

export default moveSvg