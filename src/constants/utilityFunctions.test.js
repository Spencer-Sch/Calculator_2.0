import { getPercent, isFloat, negate } from './utilityFunctions';

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

// getPercent tests
test('IF operand2 = falsy THEN getPercent should calculate the percent of operand1 and multiply operand1 by op1Percent.  getPercent should return the result of the calculation and the calculated percent of operand1.', () => {
  const operand1 = '12';
  const operand2 = null;
  const returnValue = getPercent(operand1, operand2);
  expect(returnValue[0]).toEqual(1.44);
  expect(returnValue[1]).toEqual(0.12);
});

test('IF operand2 = truthy THEN getPercent should calculate the percent of operand2 and multiply operand1 by op2Percent.  getPercent should return the result of the calculation and the calculated percent of operand2.', () => {
  const operand1 = '12';
  const operand2 = '3';
  const returnValue = getPercent(operand1, operand2);
  expect(returnValue[0]).toEqual(0.36);
  expect(returnValue[1]).toEqual(0.03);
});
