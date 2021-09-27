import equals from './equalsLogic';

//checkpoint 1
test('(button combo: 1 =) IF operand1, operand2, & operator are all "null" THEN equals should make operand1 = operandString, operand2 = operandString,  operator = "=", and also include updates from equalsHelper', () => {
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
  const returnedState = equals(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '0',
    operand2: '0',
    operator: '=',
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

// checkpoint 2
test('(button combo: 1 + 2 = 3) IF operand1, operator, & operand2 are truthy AND operandString !== "0" THEN equals should make operand1 = operandString and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '3',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
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
    operand1: '3',
    operand2: '2',
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

// checkpoint 3
test('(button combo: 1 + 2 = =) IF operand1, operator, & operand2 are truthy THEN equals should make operand1 = equasionResult, and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equasionResult: '3',
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
    operand1: '3',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equasionResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  });
});

// checkpoint 4
test('(button combo: 1 + =) IF operand1 & operator are truthy AND sumSubMultDivIsOn = true THEN equals should make operand2 = operand1, and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '+',
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

// checkpoint 5
test('(button combo: 1 + 2 =) IF operand1 & operator are truthy AND equalsIsOn = false THEN equals should make operand2 = operandString, and also include updates from equalsHelper', () => {
  const testState = {
    operandString: '2',
    operand1: '1',
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
  const returnedState = equals(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
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
