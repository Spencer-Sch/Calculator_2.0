import calculate from './calculateLogic';

// 'Can't Divide By Zero' Test 1
test('(button combo: 1 / 0 =)IF operator = "/" & operand2 = "0" THEN calculate should make operand1, operand2, & operator = null, operandString = "0", nextOperator = null, equalsIsOn = false, equationResult = "Cannot Divide By Zero", sumSubMultDivIsOn = false, runCalculate = false, & cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '0',
    operator: '/',
    nextOperator: '/',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: true,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '1 /',
      renderEquation: '0',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: 'Cannot Divide By Zero!',
      renderEquation: null,
    },
  });
});

// 'Can't Divide By Zero' Test 2
test('(button combo: 1 / 0 +)IF operator = "/" & operand2 = "0" THEN calculate should make operand1, operand2, & operator = null, operandString = "0", nextOperator = null, equalsIsOn = false, equationResult = "Cannot Divide By Zero", sumSubMultDivIsOn = false, runCalculate = false, & cameFromEquals = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '0',
    operator: '/',
    nextOperator: '+',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '0',
      renderEquation: '1 /',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: 'Cannot Divide By Zero!',
      renderEquation: null,
    },
  });
});

// test using equals button to trigger calculate

test('(button combo: 1 + 2 =) IF operator = "+" AND cameFromEquals = true THEN calculate should make equationResult = "3", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: true,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 +',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equationResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '+',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '3',
      renderEquation: '1 + 2 =',
    },
  });
});

test('(button combo: 1 - 2 =) IF operator = "-" AND cameFromEquals = true THEN calculate should make equationResult = "-1", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: '-',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: true,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 -',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: '-',
    equationResult: '-1',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '-',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '-1',
      renderEquation: '1 - 2 =',
    },
  });
});

test('(button combo: 1 x 2 =) IF operator = "x" AND cameFromEquals = true THEN calculate should make equationResult = "2", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: 'x',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: true,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 x',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: 'x',
    equationResult: '2',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: 'x',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 x 2 =',
    },
  });
});

test('(button combo: 1 / 2 =) IF operator = "/" AND cameFromEquals = true THEN calculate should make equationResult = "0.5", runCalculate = false, cameFromEquals = false', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '/',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: true,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 /',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '/',
    equationResult: '0.5',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '/',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '0.5',
      renderEquation: '1 / 2 =',
    },
  });
});

// test using an operator button to trigger calculate

test('(button combo: 1 + 2 -) IF first operator = "+", second operator = "-", AND cameFromEquals = false THEN calculate should make equationResult = "3", operand1 = "3", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '-',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 +',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '3',
    operand2: null,
    operator: '-',
    nextOperator: '-',
    equationResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '+',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '3',
      renderEquation: '3 -',
    },
  });
});

test('(button combo: 1 - 2 x) IF first operator = "-", second operator = "x", AND cameFromEquals = false THEN calculate should make equationResult = "-1", operand1 = "-1", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '-',
    nextOperator: 'x',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 -',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '-1',
    operand2: null,
    operator: 'x',
    nextOperator: 'x',
    equationResult: '-1',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '-',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '-1',
      renderEquation: '-1 x',
    },
  });
});

test('(button combo: 1 x 2 /) IF first operator = "x", second operator = "/", AND cameFromEquals = false THEN calculate should make equationResult = "2", operand1 = "2", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: 'x',
    nextOperator: '/',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 x',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '2',
    operand2: null,
    operator: '/',
    nextOperator: '/',
    equationResult: '2',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: 'x',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '2 /',
    },
  });
});

test('(button combo: 1 / 2 +) IF first operator = "/", second operator = "+", AND cameFromEquals = false THEN calculate should make equationResult = "0.5", operand1 = "0.5", operand2 = null, operator = nextOperator, runCalculate = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: '2',
    operator: '/',
    nextOperator: '+',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: true,
    runAddEntry: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 /',
    },
  };
  const returnedState = calculate(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '0.5',
    operand2: null,
    operator: '+',
    nextOperator: '+',
    equationResult: '0.5',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: true,
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '/',
      historyList: [],
    },
    renderData: {
      renderEquationResult: '0.5',
      renderEquation: '0.5 +',
    },
  });
});
