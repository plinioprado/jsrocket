var moon = {
	mainId: 'moon',
	objList: [
		{
			id: 'moon',
			renderType: 'svg',
      r: 1738000, // m
      mass: 7.34767 * Math.pow(10, 22), // kg
			position: {
				r: 384000000, // distance from center (m)
				dec: 90, // declination (deg), could be any value because r = 0
				vR: 0,
				vDec: 360 / (27.322 * 24 * 60 * 600)
			},
			render: {
				format: 'circle',
				color: '#F5F3CE'
			}
		}
	]
}

export default moon;