import { isFloat } from './utilityFunctions';

test('IF number is a float point number then isFloatPoint should be true.', () => {
  const number = 1.2;
  const isFloatNumber = isFloat(number);
  expect(isFloatNumber).toEqual(true);
});

test('IF number is not a float point number then isFloatPoint should be false.', () => {
  const number = 123;
  const isFloatNumber = isFloat(number);
  expect(isFloatNumber).toEqual(false);
});
