var earth = {
  mainId: 'earth',
  objList: [
		{
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
		},
		{
			id: 'earth',
			renderType: 'svg',
      r: 6378100, // m
      mass: 5.98 * Math.pow(10, 24), // kg
			g: 9.80665, // m/s2
			position: {
				r: 0, // distance from center (m)
				dec: 0 // declination (deg), could be any value because r = 0
			},
			render: {
				format: 'circle',
				color: 'blue'
			}
		},
		{
			id: 'base1',
			renderType: 'svg',
			r: 100, // m / for now
			width: 100, // mandatory (m)
			height: 5, // mandatory (m)
			position: {
				r: 6378100, // distance from center (m)
				dec: 0 // declination (deg), could be any value because r = 0
			},
			render: {
				format: 'rect', // for now
				color: 'yellow'
			}
		}
  ]
}

export default earth;