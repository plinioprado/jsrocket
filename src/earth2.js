var earth2 = {
  id: 'earth2',
  renderType: 'svg',
	r: 6378100, // m
	g: 9.80665, // m/s2
  position: {
    r: 0, // distance from center (m)
    dec: 0 // declination (deg), could be any value because r = 0
  },
  render: {
    format: 'circle',
    color: 'blue'
  },
  children: [{
    id: 'earthLeo',
    renderType: 'svg',
    r: 6378100 + 1000000,
    position: {
      r: 0,
      dec: 0
    },
    render: {
      format: 'circle',
      color: '#303030'
    }
  },
    {
      id: 'earthAtm',
      renderType: 'svg',
      r: 6378100 + 200000,
      position: {
        r: 0,
        dec: 0
      },
      render: {
        format: 'circle',
        color: '#ADD8E6'
      }
    }
  ]
}

export default earth2;