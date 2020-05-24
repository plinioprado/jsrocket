var getHelpCalc = () => {
  // declared because they use themselves so need hoisting

  function toPolar(cart) {
    let dec = (Math.atan2(cart.x, cart.y) / (Math.PI/180)) % 360;
    if (dec < 0) dec+= 360
    return {
      r: ((cart.x ** 2 + cart.y ** 2) ** .5),
      dec: dec
    }
  }

  function fromPolar(polar) {
    return {
      x: polar.r * Math.sin(polar.dec * Math.PI/180),
      y: polar.r * Math.cos(polar.dec * Math.PI/180)
    }
  }

  function roundM(val) {
    return Math.round(val * 1000000000) / 1000000000;
  }

  const distPol = (obj1Pol, obj2Pol) => {
    const obj1Car = fromPolar(obj1Pol);
    const obj2Car = fromPolar(obj2Pol);
    const dist = {
      r: Math.sqrt(Math.abs(obj2Car.x - obj1Car.x) ** 2 + Math.abs(obj2Car.y - obj1Car.y) ** 2),
      dec: Math.atan((obj2Car.y - obj1Car.y) / (obj2Car.x - obj1Car.x)) / (Math.PI/180)
    }

    if (dist.r < 0) {
      dist = {
        r: -dist.r,
        dev: (180 - dist.dec) % 360
      }
    }

    return dist;
  }

  function addPol(obj1Pol, obj2Pol) {

    const obj1Car = fromPolar(obj1Pol);
    const obj2Car = fromPolar(obj2Pol);
    const dist = toPolar({x: (obj1Car.x + obj2Car.x), y: (obj1Car.y + obj2Car.y)})

    return dist;
  }

  function toDeg360(deg) {
    let ret = deg % 360;
    if (ret < 0) ret += 360
    return ret;
  }


  function toDeg180(deg) {
    let ret = deg;
    if (ret < -180) ret = 360 + ret;
    return ret;
  }

  return {
    fromPolar,
    toPolar,
    distPol,
    roundM,
    addPol,
    toDeg360,
    toDeg180
  }

}

export default getHelpCalc;