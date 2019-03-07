import Beer from './Beer';

test('lower', () => {
  const beer = new Beer({
    name: 'Test',
    lower: 0,
    upper: 1,
    number: 1,
  });
  expect(beer.isSafe(2)).toBe(false);
});
