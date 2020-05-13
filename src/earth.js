function getEarth() {
  var id = 'earth';
  var state = {
    width: 12756200, // (m)
    height: 12756200, // (m)
    g: 9.80665, // m/s2
    position: {
      r: 0, // distance from center (m)
      dec: 0, // not used declination (deg)
    },
    style: {
      borderRadius: '50%', // to circle
      backgroundColor: 'blue',
      zIndex: 3
    }
  }

  return {
    id,
    state
  }
}