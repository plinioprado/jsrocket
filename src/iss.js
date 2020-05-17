var iss = {
  id: 'iss',
  objList: [
    {
      id: 'iss',
      renderType: 'svg',
      r: 100, // m
      position: {
        r: 6378100 + 309000, // distance from center (m)
        dec: 0, // declination (deg), could be any value because r = 0
        vR: 0,
        vDec: 360 / (92.68 * 600)
      },
      render: {
        format: 'circle',
        color: '#d9d9d9'
      }
    },
    {
      id: 'issOrbit',
      renderType: 'svg',
      r: 6378100 + 309000, // m
      position: {
        r: 0, // distance from center (m)
        dec: 0, // declination (deg), could be any value because r = 0
        vR: 0, // distance from earth center (m)
        vDec: 0 // orbital speed (dec/s)
      },
      render: {
        format: 'circle',
        color: 'transparent',
        stroke: 'white',
        strokeDasharray: '1,4'
      }
    }
  ]
}

export default iss;