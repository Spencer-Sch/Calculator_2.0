import sumSubMultDiv from './sumSubMultDivLogic';

test('if button combo is "+" sumSubMultDiv should put "0" into state.operand1, "+" into state.operator, and "true" into state.sumSubMultDivIsOn', () => {
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
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '0',
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
  });
});

test('if button combo is "1 +" sumSubMultDiv should put "1" into state.operand1, "+" into state.operator, and "true" into state.sumSubMultDivIsOn', () => {
  const testState = {
    operandString: '1',
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
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
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
  });
});
