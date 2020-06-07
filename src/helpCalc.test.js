let calc = require('./helpCalc');

test('is an object', () => {
  expect(calc).toMatchObject(expect.anything())
});

test('distPol result distance between points', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 1, dec: 90}
  let result = calc.default().distPol(obj1, obj2);
  result.r = (Math.round(result.r * 1000000000)/1000000000)

	expect(result).toEqual({
    r: (Math.round(Math.sqrt(2) * 1000000000)/1000000000),
    dec: -45
  })
});

test('distPol.dec to above should be 0', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 2, dec: 0}
  const result = calc.default().vectorSub(obj1, obj2);

	expect(result).toEqual({
    r: 1,
    dec: 0
  })
});

test('distPol.dec to right should be 90', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 1000000000, dec: 90}
  const result = calc.default().vectorSub(obj1, obj2);

	expect(result).toEqual({
    r: 1000000000,
    dec: 90
  })
});

test('distPol.dec to below should be 180', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 2, dec: 180}
  const result = calc.default().vectorSub(obj1, obj2);

	expect(result).toEqual({
    r: 3,
    dec: 180
  })
});

test('distPol.dec to right thould be 270', () => {
  const obj1 = {r: 1, dec: 0};
  const obj2 = {r: 1000000000, dec: 270}
  const result = calc.default().distPol(obj1, obj2);

	expect(result).toEqual({
    r: 1000000000,
    dec: 270
  })
});

test('addPol sum similar vectors', () => {
  const obj1 = {r: 1000000, dec: 0};
  const obj2 = {r: 1000000, dec: 90}
  const result = calc.default().addPol(obj1, obj2);

	expect(result).toEqual({
    r: Math.round(Math.sqrt(2)*1000000),
    dec: 45
  })
});

test('addPol sum a small and a large vector', () => {

  const obj1 = {r: 1000000000, dec: 0};
  const obj2 = {r: 1, dec: 90}
  const result = calc.default().addPol(obj1, obj2);
  result.dec = Math.round(result.dec * 1000000) / 1000000;

	expect(result).toEqual({
    r: 1000000000,
    dec: 0
  })
});

test('addPol sum a large and a small vector', () => {

  const obj1 = {r: 1, dec: 90}
  const obj2 = {r: 1000000000, dec: 0};
  const result = calc.default().addPol(obj1, obj2);
  result.dec = Math.round(result.dec * 1000000) / 1000000;

	expect(result).toEqual({
    r: 1000000000,
    dec: 0
  })
});

test('addPol sum a large downward and a small vector', () => {

  const obj1 = {r: 1, dec: 1}
  const obj2 = {r: 1000000000, dec: 180};
  const result = calc.default().addPol(obj1, obj2);
  result.dec = Math.round(result.dec);
  result.r = Math.round(result.r * 1000)/1000;

  expect(result.r).toBeCloseTo(1000000000 - 1, 6);
  expect(result.dec).toBe(180);
});
