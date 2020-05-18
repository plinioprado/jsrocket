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

  toDeg360: (deg) => {
    return deg % 360;
  }

}

export default helpCalc;