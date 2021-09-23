import sumSubMultDiv from './sumSubMultDivLogic';

test('IF equalsIsOn is true THEN sumSubMultDiv should make equalsIsOn = false, percentIsOn = false, operand2 = null, operand1 = equasionResult, and state.operator = (passed in) operator (button combo: 1 + 2 = -)', () => {
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
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '3',
    operand2: null,
    operator: '-',
    nextOperator: '+',
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

test('IF sumSubMultDiv is false THEN sumSubMultDiv should make operand1 = "0", operator = "+", and sumSubMultDivIsOn = "true" (button combo: +)', () => {
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
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '0',
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
  });
});
//////////////////////////////////////////////
// PICK UP HERE (re-wording test descriptions)
//////////////////////////////////////////////
test('if button combo is "1 +" sumSubMultDiv should put "1" into operand1, "+" into operator, and "true" into sumSubMultDivIsOn', () => {
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
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
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
  });
});

test('if button combo is "1 + -" sumSubMultDiv should replace operator "+" with "-"', () => {
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
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '-',
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('if button combo is "1 - x" sumSubMultDiv should replace operator "-" with "x"', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '-',
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
  const returnedState = sumSubMultDiv(testState, 'x');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: 'x',
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('if button combo is "1 x /" sumSubMultDiv should replace operator "x" with "/"', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: 'x',
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
  const returnedState = sumSubMultDiv(testState, '/');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '/',
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('if button combo is "1 + 2 -" sumSubMultDiv should put "true" into sumSubMultDivIsOn, "2" into operand2, "" into operandString, "-" into nextOperator, and "true" into runCalculate', () => {
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
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
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
  });
});
