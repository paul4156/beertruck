import Beer from './Beer';

test('isSafe', () => {
  const beer = new Beer({
    name: 'Test',
    lower: 0,
    upper: 1,
    number: 1,
  });

  [
    [2, false],
    [-1, false],
    [0, true],
    [1, true],
  ].forEach(data => expect(beer.isSafe(data[0])).toBe(data[1]));
});
