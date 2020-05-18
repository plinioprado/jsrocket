let ship1 = {
	id: 'ship1',
	objList: [
		{
			id: 'ship1',
			position: {
				r: 6378100, // distance (m)
				dec: 0, // declination (deg)
				pitchDec: 0, // attitude pitch (deg)
			},
			render: {
				format: 'g',
				transform: 'translate(200,200) rotate(0)'
			}
		},
		{
			id: 'shipblur',
			render: {
				parentId: 'ship1',
				format: 'filter',
			}
		},
		{
			render: {
				parentId: 'shipblur',
				format: 'feGaussianBlur',
				stdDeviation: "1.5"
			}
		},
		{
			id: 'shipcrop',
			render: {
				parentId: 'ship1',
				format: 'clipPath',
			}
		},
		{
			render: {
				parentId: 'shipcrop',
				format: 'rect',
				x: 0,
				y: 8,
				width:10,
				height: 17
			}
		},
		{
			render: {
				parentId: 'ship1',
				format: 'ellipse',
				cx: 5,
				cy: 23,
				rx:5,
				ry: '12',
				color: 'red',
				clipPath: 'url(#shipcrop)',
				filter: 'url(#shipblur)'
			}
		},
		{
			render: {
				parentId: 'ship1',
				format: 'polygon',
				points: '5,0 10,10 5,7.5 0,10',
				color: 'white'
			}
		}
	]
}

export default ship1;