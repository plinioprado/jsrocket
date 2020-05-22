const calc = require('./helpCalc');

test('is an object', () => {
  expect(calc).toMatchObject(expect.anything())
});

test('distPol result distance between points', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 1, dec: 90}
  let result = calc.default.distPol(obj1, obj2);
  result.r = (Math.round(result.r * 1000000000)/1000000000)

	expect(result).toEqual({
    r: (Math.round(Math.sqrt(2) * 1000000000)/1000000000),
    dec: -45
  })
});

test('addPol sum similar vectors', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 1, dec: 90}
  const result = calc.default.addPol(obj1, obj2);

	expect(result).toEqual({
    r: Math.sqrt(2),
    dec: 45
  })
});

test('addPol sum a small and a large vertor', () => {

  const obj1 = {r: 1000000000, dec: 0};
  const obj2 = {r: 1, dec: 90}
  const result = calc.default.addPol(obj1, obj2);
  result.dec = Math.round(result.dec * 1000000) / 1000000;

	expect(result).toEqual({
    r: 1000000000,
    dec: 0
  })
});

test('addPol sum a large and a small vertor', () => {

  const obj1 = {r: 1, dec: 90}
  const obj2 = {r: 1000000000, dec: 0};
  const result = calc.default.addPol(obj1, obj2);
  result.dec = Math.round(result.dec * 1000000) / 1000000;

	expect(result).toEqual({
    r: 1000000000,
    dec: 0
  })
});

test('addPol sum a large downward and a small vertor', () => {

  const obj1 = {r: 1, dec: 1}
  const obj2 = {r: 1000000000, dec: 180};
  const result = calc.default.addPol(obj1, obj2);
  result.dec = Math.round(result.dec * 1000000) / 1000000;

	expect(result).toEqual({
    r: 1000000000,
    dec: -180
  })
});
