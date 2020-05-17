const earth = require('./earth');

test('is an object', () => {
	expect(objs).toMatchObject(expect.anything())
});

test('id is "earth"', () => {
  expect(earth.default.id).toBe('earth');
});