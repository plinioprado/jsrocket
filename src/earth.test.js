const objs = require('./earth');

test('is an object', () => {
	expect(objs).toMatchObject(expect.anything())
});

test('has an mainId "earth"', () => {
  expect(objs.default.mainId).toBe('earth');
});
