import backspace from './backspaceLogic';

test('(button combo: 1 2 3 + <-) IF sumSubMultDivIsOn = true THEN backspace should do nothing.', () => {
  const testState = {
    operandString: '123',
    operand1: null,
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '123', renderEquation: '123 +' },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '123',
    operand1: null,
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '123', renderEquation: '123 +' },
  });
});

test('(button combo: 1 + 2 = <-) IF equalsIsOn = true THEN backspace should do nothing.', () => {
  const testState = {
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
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '+',
      historyList: [],
    },
    renderData: { renderEquationResult: '3', renderEquation: '1 + 2 =' },
  };
  const returnedState = backspace(testState);
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
    cameFromEquals: false,
    historyData: {
      operand1Store: 1,
      operand2Store: 2,
      operatorStore: '+',
      historyList: [],
    },
    renderData: { renderEquationResult: '3', renderEquation: '1 + 2 =' },
  });
});

test('(button combo: 1 2 3 + 4 5 6 <-) IF equalsIsOn & sumSubMultDivIsOn = false THEN backspace should remove the last digit of operandString.', () => {
  const testState = {
    operandString: '456',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '456', renderEquation: '123 +' },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '45',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '45', renderEquation: '123 +' },
  });
});

test('(button combo: 1 2 3 + 4 <-) IF equalsIsOn & sumSubMultDivIsOn = false AND operandString.length === 1 THEN backspace should make operandString = "0".', () => {
  const testState = {
    operandString: '4',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '4', renderEquation: '123 +' },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '0', renderEquation: '123 +' },
  });
});

test('(button combo: 1 2 3 + 4 5 <-) IF equalsIsOn & sumSubMultDivIsOn = false AND operandString.length > 1 THEN backspace should remove the last digit of operandString.', () => {
  const testState = {
    operandString: '45',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '45', renderEquation: '123 +' },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '4',
    operand1: '123',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '4', renderEquation: '123 +' },
  });
});

test('(button combo: 1 2 <-) IF equalsIsOn & sumSubMultDivIsOn = false AND operandString is not a float point number THEN backspace should make decimalIsOn = false.', () => {
  const testState = {
    operandString: '12',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '12', renderEquation: null },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '1',
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
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '1', renderEquation: null },
  });
});

test('(button combo: 1 . 2 3 <-) IF equalsIsOn & sumSubMultDivIsOn = false AND operandString is a float point number THEN backspace should keep decimalIsOn = true.', () => {
  const testState = {
    operandString: '1.23',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '1.23', renderEquation: null },
  };
  const returnedState = backspace(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '1.2',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
    renderData: { renderEquationResult: '1.2', renderEquation: null },
  });
});
