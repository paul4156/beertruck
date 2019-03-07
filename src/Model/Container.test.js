import Beer from './Beer';
import Container from './Container';

test('getInitTemperature', () => {
  const container = new Container({
    number: 1,
    beers: [],
  });

  expect(container.getInitTemperature()).toBe(-Infinity);

  container.beers.push(
    new Beer({
      name: 'Test',
      lower: 1,
      upper: 2,
      number: 1,
    }),
  );

  expect(container.getInitTemperature()).toBe(1);

  container.beers.push(
    new Beer({
      name: 'Test',
      lower: 2,
      upper: 3,
      number: 2,
    }),
  );
  expect(container.getInitTemperature()).toBe(2);
});

test('getHighestPossibleTemperature', () => {
  const container = new Container({
    number: 1,
    beers: [],
  });

  expect(container.getHighestPossibleTemperature()).toBe(Infinity);

  container.beers.push(
    new Beer({
      name: 'Test',
      lower: 3,
      upper: 4,
      number: 1,
    }),
  );

  expect(container.getHighestPossibleTemperature()).toBe(4);

  container.beers.push(
    new Beer({
      name: 'Test',
      lower: 2,
      upper: 3,
      number: 2,
    }),
  );
  expect(container.getHighestPossibleTemperature()).toBe(3);
});

test('isSafe', () => {
  const container = new Container({
    number: 1,
    beers: [],
  });

  [
    [1, 2, true],
    [1, 1, true],
    [2, 1, false],
  ].forEach((data) => {
    [container.temperature, container.upperTemperature] = data;
    expect(container.isSafe()).toBe(data[2]);
  });
});

test('getBeersInDanger', () => {
  const container = new Container({
    number: 1,
    beers: [],
  });

  container.temperature = 100;

  expect(container.getBeersInDanger()).toEqual([]);

  const beer = new Beer({
    name: 'Test',
    lower: 2,
    upper: 3,
    number: 2,
  });
  container.beers.push(beer);
  container.upperTemperature = container.getHighestPossibleTemperature();

  [
    [2, []],
    [3, []],
    [4, [beer]],
  ].forEach((data) => {
    [container.temperature] = data;
    expect(container.getBeersInDanger()).toEqual(data[1]);
  });
});

test('heat', () => {
  const container = new Container({
    number: 1,
    beers: [],
  });

  container.temperature = 1;
  container.heat(2);
  expect(container.temperature).toBe(3);
});
