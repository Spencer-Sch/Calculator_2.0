import percentHelper from './percentHelperLogic';

test('(button combo: 12 + % )', () => {
  const arr = [1.44, 0.12];
  const key = 0;
  const returnedState = percentHelper(arr, key);
  expect({ ...returnedState }).toEqual({
    operandString: '1.44',
    currentPercent: 0.12,
  });
});

test('(button combo: 12 + 3 % )', () => {
  const arr = [0.36, 0.03];
  const key = 0;
  const returnedState = percentHelper(arr, key);
  expect({ ...returnedState }).toEqual({
    operandString: '0.36',
    currentPercent: 0.03,
  });
});

test('(button combo: 12 + 3 = % )', () => {
  const arr = [2.25, 0.15];
  const key = 1;
  const returnedState = percentHelper(arr, key);
  expect({ ...returnedState }).toEqual({
    operandString: '2.25',
    currentPercent: 0.15,
    equasionResult: '2.25',
  });
});
