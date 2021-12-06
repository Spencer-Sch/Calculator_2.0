import { getPercent, isFloat, negate } from '../utilityFunctions';

describe('utilityFunctionsLogic tests:', () => {
  // isFloat tests
  test('IF number is a float point number then isFloatPoint should be true.', () => {
    const isFloatNumber = isFloat(1.2);
    expect(isFloatNumber).toEqual(true);
  });

  test('IF number is not a float point number then isFloatPoint should be false.', () => {
    const isFloatNumber = isFloat(123);
    expect(isFloatNumber).toEqual(false);
  });

  // negate tests
  test('IF +input is greater than zero the ouput should be a negative number.', () => {
    const returnValue = negate('123');
    expect(returnValue).toEqual('-123');
  });

  test('IF +input is less than zero the ouput should be a positive number.', () => {
    const returnValue = negate('-123');
    expect(returnValue).toEqual('123');
  });

  // getPercent tests
  test('IF operand2 = falsy THEN getPercent should calculate the percent of operand1 and multiply operand1 by op1Percent.  getPercent should return the result of the calculation and the calculated percent of operand1.', () => {
    const returnValue = getPercent('12', null);
    expect(returnValue[0]).toEqual(1.44);
    expect(returnValue[1]).toEqual(0.12);
  });

  test('IF operand2 = truthy THEN getPercent should calculate the percent of operand2 and multiply operand1 by op2Percent.  getPercent should return the result of the calculation and the calculated percent of operand2.', () => {
    const returnValue = getPercent('12', '3');
    expect(returnValue[0]).toEqual(0.36);
    expect(returnValue[1]).toEqual(0.03);
  });
});
