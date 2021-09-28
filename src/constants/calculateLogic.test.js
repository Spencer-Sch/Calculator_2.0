import calculate from './calculateLogic';

// 'Can't Divide By Zero' Test 1
test('(button combo: 1 / 0 =)IF operator = "/" & operand2 = "0" THEN calculate should make operand1, operand2, & operator = null, operandString = "0", nextOperator = null, equalsIsOn = false, equasionResult = "Cannot Divide By Zero", sumSubMultDivIsOn = false, runCalculate = false, & cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '0',
    operator: '/',
    nextOperator: '/',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: 'Cannot Divide By Zero!',
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

// 'Can't Divide By Zero' Test 2
test('(button combo: 1 / 0 +)IF operator = "/" & operand2 = "0" THEN calculate should make operand1, operand2, & operator = null, operandString = "0", nextOperator = null, equalsIsOn = false, equasionResult = "Cannot Divide By Zero", sumSubMultDivIsOn = false, runCalculate = false, & cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '0',
    operator: '/',
    nextOperator: '/',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: false,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: 'Cannot Divide By Zero!',
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

// test using equals button to trigger calculate

test('(button combo: 1 + 2 =) IF operator = "+" AND cameFromEquals = true THEN calculate should make equasionResult = "3", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
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
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equasionResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 - 2 =) IF operator = "-" AND cameFromEquals = true THEN calculate should make equasionResult = "-1", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: '-',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: '-',
    equasionResult: '-1',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 x 2 =) IF operator = "x" AND cameFromEquals = true THEN calculate should make equasionResult = "2", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: 'x',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: 'x',
    equasionResult: '2',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 / 2 =) IF operator = "/" AND cameFromEquals = true THEN calculate should make equasionResult = "0.5", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '/',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: true,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '/',
    equasionResult: '0.5',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

// test using an operator button to trigger calculate

test('(button combo: 1 + 2 -) IF first operator = "+", second operator = "-", AND cameFromEquals = false THEN calculate should make equasionResult = "3", operand1 = "3", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '-',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: false,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '3',
    operand2: null,
    operator: '-',
    nextOperator: '-',
    equasionResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 - 2 x) IF first operator = "-", second operator = "x", AND cameFromEquals = false THEN calculate should make equasionResult = "-1", operand1 = "-1", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: 'x',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: false,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '-1',
    operand2: null,
    operator: 'x',
    nextOperator: 'x',
    equasionResult: '-1',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 x 2 /) IF first operator = "x", second operator = "/", AND cameFromEquals = false THEN calculate should make equasionResult = "2", operand1 = "2", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: '/',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: false,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '2',
    operand2: null,
    operator: '/',
    nextOperator: '/',
    equasionResult: '2',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 / 2 +) IF first operator = "/", second operator = "+", AND cameFromEquals = false THEN calculate should make equasionResult = "0.5", operand1 = "0.5", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '+',
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    cameFromEquals: false,
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '0.5',
    operand2: null,
    operator: '+',
    nextOperator: '+',
    equasionResult: '0.5',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});