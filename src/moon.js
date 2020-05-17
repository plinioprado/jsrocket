var moon = {
	id: 'moon',
	objList: [
		{
			id: 'moon',
			renderType: 'svg',
			r: 1738000, // m
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
		},
		{
			id: 'moonOrbit',
			renderType: 'svg',
			r: 384000000, // m
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

export default moon;