let getBase = function() {
  var id = 'base';
  var state = {
    width: 100, // mandatory (m)
    height: 5, // mandatory (m)
    position: {
      r: 6378100 - 5,
      dec: 0 // declination (deg)
    },
    style: {
      backgroundColor: 'yellow',
      zIndex: 4
    }
  }

  return {
    id,
    state
  }
}

export default getBase;
