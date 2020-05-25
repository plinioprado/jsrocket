var iss = {
	mainId: 'iss',
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
		}
	]
}

export default iss;