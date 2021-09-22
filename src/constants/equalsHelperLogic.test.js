import equalsHelper from './equalsHelperLogic';

test('If "key" is "0" equalsHelper should put "=" into nextOperator, set operandString to "0", set decimalIsOn to false, set equalsIsOn to true, set sumSubMultDivIsOn to true, set cameFromEquals to true, set percentIsOn to false, and set runCalculate to true', () => {
  const testState = {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    previousOperator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = equalsHelper(testState, 0);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    previousOperator: null,
    nextOperator: '=',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  });
});

test('If "key" is "1" equalsHelper should put operator into nextOperator, set operandString to "0", set decimalIsOn to false, set equalsIsOn to true, set sumSubMultDivIsOn to true, set cameFromEquals to true, set percentIsOn to false, and set runCalculate to true', () => {
  const testState = {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: '+',
    previousOperator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = equalsHelper(testState, 1);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: '+',
    previousOperator: null,
    nextOperator: '+',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  });
});
