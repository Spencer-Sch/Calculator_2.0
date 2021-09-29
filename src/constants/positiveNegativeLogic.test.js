import positiveNegative from './positiveNegativeLogic';

test('(button combo: 1 +/- ) IF operand1, operand2, & operator = null THEN positiveNegative should negate operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
  const testState = {
    operandString: '1',
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
  const returnedState = positiveNegative(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '-1',
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
  });
});

test('(button combo: 1 + 0 +/- ) IF operand1 & operator are truthy, operand2 = null & operandString is falsy THEN positiveNegative should negate operand1 and put the returned result into operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
  const testState = {
    operandString: '',
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
  const returnedState = positiveNegative(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '-1',
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
  });
});

test('(button combo: 1 + 2 +/- ) IF operand1 & operator are truthy, operand2 = null & operandString is truthy THEN positiveNegative should negate operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
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
  const returnedState = positiveNegative(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '-2',
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
  });
});

test('(button combo: 1 + 2 = +/- ) IF operand1, operand2, & operator are truthy THEN positiveNegative should negate equasionResult and put the returned value into operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
  const testState = {
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
  };
  const returnedState = positiveNegative(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '-3',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: '+',
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
