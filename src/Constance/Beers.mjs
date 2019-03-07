import Beer from '../Model/Beer';

const Beers = [
  new Beer({
    name: 'Pilsner',
    number: 1,
    lower: -4,
    upper: 6,
  }),
  new Beer({
    name: 'IPA',
    number: 2,
    lower: -5,
    upper: 6,
  }),
  new Beer({
    name: 'Lager',
    number: 3,
    lower: -4,
    upper: 7,
  }),
  new Beer({
    name: 'Stout',
    number: 4,
    lower: -6,
    upper: 8,
  }),
  new Beer({
    name: 'Wheat beer',
    number: 5,
    lower: -3,
    upper: 5,
  }),
  new Beer({
    name: 'Pale Ale',
    number: 6,
    lower: -4,
    upper: 6,
  }),
];

export default Beers;
