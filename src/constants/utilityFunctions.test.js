import { isFloat, negate } from './utilityFunctions';

// isFloat tests
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

// negate tests
test('IF +input is greater than zero the ouput should be a negative number.', () => {
  const input = '123';
  const returnValue = negate(input);
  expect(returnValue).toEqual('-123');
});

test('IF +input is less than zero the ouput should be a positive number.', () => {
  const input = '-123';
  const returnValue = negate(input);
  expect(returnValue).toEqual('123');
});
