let ship1 = [
  {
		id: 'ship1',
		render: {
			format: 'g',
			transform: 'translate(200,200) rotate(0)'
		}
	},
	{
		id: 'ship-blur',
		render: {
			parentId: 'ship1',
			format: 'filter',
		}
  },
	{
		render: {
			parentId: 'ship-blur',
			format: 'feGaussianBlur',
			stdDeviation: "1.5"
		}
	},
	{
		id: 'ship-crop',
		render: {
			parentId: 'ship1',
			format: 'clipPath',
		}
	},
	{
		render: {
			parentId: 'ship-crop',
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
			clip: 'url(#ship-crop)',
			filter: 'url(#ship-blur)'
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

export default ship1;