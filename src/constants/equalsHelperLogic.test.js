import equalsHelper from './equalsHelperLogic';

test('description', () => {
  /////////////////////
  // yet to be set up
  /////////////////////
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
  const returnedState = equalsHelper(testState);
  expect({ ...testState, ...returnedState }).toEqual({
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
  });
});
