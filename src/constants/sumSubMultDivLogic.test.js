import sumSubMultDiv from './sumSubMultDivLogic';

test('(button combo: 1 + 2 = -) IF equalsIsOn is true THEN sumSubMultDiv should make equalsIsOn = false, percentIsOn = false, operand2 = null, operand1 = equationResult, and state.operator = (passed in) operator', () => {
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
    renderData: {
      renderEquationResult: '3',
      renderEquation: '1 + 2 =',
    },
  };
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0',
    operand1: '3',
    operand2: null,
    operator: '-',
    nextOperator: '+',
    equationResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '3',
      renderEquation: '3 -',
    },
  });
});

test('(button combo: 12 + 3 = 2 +) IF equalsIsOn = false, sumSubMultDiveIsOn = false, AND operand1, operand2, & operator = truthy THEN sumSubMultDiv should make operandString = "", operand1 = previous operandString, operand2 = null, operator = (passed in) operator, and equationResult = null', () => {
  const testState = {
    operandString: '2',
    operand1: '12',
    operand2: '3',
    operator: '+',
    nextOperator: '+',
    equationResult: '15',
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '2',
      renderEquation: '12 + 3 =',
    },
  };
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '2',
    operand2: null,
    operator: '+',
    nextOperator: '+',
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '2',
      renderEquation: '2 +',
    },
  });
});

test('(button combo: +) IF sumSubMultDivIsOn is false AND operand1, operand2, & operator are falsy THEN sumSubMultDiv should make operand1 = "0", operator = "+", and sumSubMultDivIsOn = "true"', () => {
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
    renderData: {
      renderEquationResult: '0',
      renderEquation: null,
    },
  };
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '0',
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
    renderData: {
      renderEquationResult: '0',
      renderEquation: '0 +',
    },
  });
});

test('(button combo: 1 +) IF sumSubMultDivIsOn is false, operand1, operator, & operand2 are falsy THEN sumSubMultDiv should make operand1 = "1", operator = "+", and sumSubMultDivIsOn = "true"', () => {
  const testState = {
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
    renderData: {
      renderEquationResult: '1',
      renderEquation: null,
    },
  };
  const returnedState = sumSubMultDiv(testState, '+');
  expect({ ...testState, ...returnedState }).toEqual({
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
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 +',
    },
  });
});

test('(button combo: 1 + -) IF sumSubMultDivIsOn is true when a new operator is clicked THEN sumSubMultDiv should replace precent operator with new operator.  i.e. replace "+" with "-"', () => {
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
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 +',
    },
  };
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '-',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 -',
    },
  });
});

test('(button combo: 1 - x) IF sumSubMultDivIsOn is true when a new operator is clicked THEN sumSubMultDiv should replace precent operator with new operator.  i.e. replace "-" with "x"', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '-',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 -',
    },
  };
  const returnedState = sumSubMultDiv(testState, 'x');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: 'x',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 x',
    },
  });
});

test('(button combo: 1 x /) IF sumSubMultDivIsOn is true when a new operator is clicked THEN sumSubMultDiv should replace precent operator with new operator.  i.e. replace "x" with "/"', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: 'x',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 x',
    },
  };
  const returnedState = sumSubMultDiv(testState, '/');
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '/',
    nextOperator: null,
    equationResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1',
      renderEquation: '1 /',
    },
  });
});

test('(buttons combo: 1 + 2 -) IF sumSubMultDivIsOn is false, operand1 & operator are truthy, AND operand2 is falsy, sumSubMultDiv should make sumSubMultDivIsOn = "true", operand2 = "2", operandString = "", nextOperator = "-", and runCalculate = "true"', () => {
  const testState = {
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
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 +',
    },
  };
  const returnedState = sumSubMultDiv(testState, '-');
  expect({ ...testState, ...returnedState }).toEqual({
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
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '2',
      renderEquation: '1 +',
    },
  });
});
