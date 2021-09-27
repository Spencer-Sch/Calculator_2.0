import equalsHelper from './equalsHelperLogic';

test('If "key" is "0" equalsHelper should make nextOperator = "=", operandString = "0", decimalIsOn = false, equalsIsOn = true, sumSubMultDivIsOn = true, cameFromEquals = true, percentIsOn = false, and runCalculate = true', () => {
  const testState = {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
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

test('If "key" is "1" equalsHelper should make nextOperator = operator, operandString = "0", decimalIsOn = false, equalsIsOn = true, sumSubMultDivIsOn = true, cameFromEquals = true, percentIsOn = false, and runCalculate = true', () => {
  const testState = {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: '+',
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
