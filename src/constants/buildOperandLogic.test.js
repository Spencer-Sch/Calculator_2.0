import buildOperand from './buildOperandLogic';

test('(button combo: 1) buildOperand should make operandString = "1"', () => {
  const testState = {
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
    cameFromEquals: false,
  };
  const returnedState = buildOperand(testState, '1');
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
  });
});

test('(button combo: 1 2 3) buildOperand should make operandString = "123"', () => {
  const testState = {
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
    cameFromEquals: false,
  };
  let returnedState1 = buildOperand(testState, '1');
  let returnedState2 = buildOperand({ ...testState, ...returnedState1 }, '2');
  let returnedState3 = buildOperand({ ...testState, ...returnedState2 }, '3');

  expect({ ...testState, ...returnedState3 }).toEqual({
    operandString: '123',
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
  });
});

test('IF button combo is 14 or more characters long buildOperand should change nothing', () => {
  const testState = {
    operandString: '12345678912345',
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
  };
  const returnedState = buildOperand(testState, '6');

  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '12345678912345',
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
  });
});

test('if equationResult is truthy when button combo is "3" then equationResult should be changed to "null', () => {
  const testState = {
    operandString: '',
    operand1: '6',
    operand2: null,
    operator: '+',
    nextOperator: '+',
    equationResult: '6',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = buildOperand(testState, '3');

  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '3',
    operand1: '6',
    operand2: null,
    operator: '+',
    nextOperator: '+',
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 + 2) buildOperand should make operandString = "2"', () => {
  const testState = {
    operandString: '',
    operand1: '1',
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
  };
  const returnedState = buildOperand(testState, '2');

  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '2',
    operand1: '1',
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
  });
});

test('(button combo: 12 + % 2 ) buildOperand should make operandString = "2"', () => {
  const testState = {
    operandString: '1.44',
    operand1: '12',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: true,
    currentPercent: 0.12,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = buildOperand(testState, '2');

  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '2',
    operand1: '12',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: 0.12,
    runCalculate: false,
    cameFromEquals: false,
  });
});
