var helpCalc = {

  fromPolar: (polar) => {
    return {
      x: polar.r * Math.sin(polar.dec * Math.PI/180),
      y: polar.r * Math.cos(polar.dec * Math.PI/180)
    }
  },

  toPolar: (cart) => {
    return {
      r: ((cart.x ** 2 + cart.y ** 2) ** .5),
      dec: (Math.atan2(cart.x, cart.y) / (Math.PI/180))
    }
  },

  roundM: (val) => {
    return Math.round(val * 1000000000) / 1000000000;
  },

  distPol: (obj1Pol, obj2Pol) => {
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

    function fromPolar(polar) { // todo: eliminate this
     return {
        x: polar.r * Math.sin(polar.dec * Math.PI/180),
        y: polar.r * Math.cos(polar.dec * Math.PI/180)
      }
    }
  },

  addPol: (obj1Pol, obj2Pol) => {

    const obj1Car = fromPolar(obj1Pol);
    const obj2Car = fromPolar(obj2Pol);
    const dist = {
      r: Math.sqrt(Math.abs(obj2Car.x + obj1Car.x) ** 2 + Math.abs(obj2Car.y + obj1Car.y) ** 2),
      dec: Math.atan((obj2Car.x + obj1Car.x) / (obj2Car.y + obj1Car.y)) / (Math.PI/180)
    }

    return dist;

    function fromPolar(polar) { // todo: eliminate this
     return {
        x: polar.r * Math.sin(polar.dec * Math.PI/180),
        y: polar.r * Math.cos(polar.dec * Math.PI/180)
      }
    }
  },

  toDeg360: (deg) => {
    return deg % 360;
  }

}

export default helpCalc;