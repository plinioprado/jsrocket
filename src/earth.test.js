const earth = require('./earth');

test('id is "earth"', () => {
  expect(earth.default.id).toBe('earth');
});