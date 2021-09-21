import equals from './equalsLogic';

test('if operand1, operand2, & operator are all "null" equals should operandString into operand1, "=" into operator, operandString into operand2, "=" into nextOperator..................', () => {
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
  const returnedState = equals(testState);
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
