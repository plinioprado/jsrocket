const earth = require('./earth2');

test('id is "earth2"', () => {
  expect(earth.default.id).toBe('earth2');
});