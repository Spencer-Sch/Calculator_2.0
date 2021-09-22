import equals from './equalsLogic';

test('if operand1, operand2, & operator are all "null" equals should put operandString into operand1 and operand2, "=" into operator, and also include updates from equalsHelper', () => {
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
    operand1: '0',
    operand2: '0',
    operator: '=',
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

test('if operand1 & operator are truthy AND sumSubMultDivIsOn is true THEN equals should put operand1 into operand2, and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '+',
    previousOperator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: true,
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
    operand1: '1',
    operand2: '1',
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

test('if operand1 & operator are truthy AND equalsIsOn is false THEN equals should put operandString into operand2, and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '2',
    operand1: '1',
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
  const returnedState = equals(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
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
