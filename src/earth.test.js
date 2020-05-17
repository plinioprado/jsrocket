const objs = require('./earth');

test('is an object', () => {
	expect(objs).toMatchObject(expect.anything())
});

test('has an id "earth"', () => {
  expect(objs.default.id).toBe('earth');
});
