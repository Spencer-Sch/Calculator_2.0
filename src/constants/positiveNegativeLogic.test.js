import positiveNegative from './positiveNegativeLogic';

describe('pasitiveNegativeLogic tests:', () => {
  test('(button combo: 1 +/- ) IF operand1, operand2, & operator = null THEN positiveNegative should negate operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = fals.', () => {
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
    const returnedState = positiveNegative(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '-1',
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
        renderEquationResult: '-1',
        renderEquation: null,
      },
    });
  });

  test('(button combo: 1 + +/- ) IF operand1 & operator are truthy, operand2 = null & operandString is falsy THEN positiveNegative should negate operand1 and put the returned result into operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
    const testState = {
      operandString: '',
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
        renderEquationResult: '1',
        renderEquation: '1 +',
      },
    };
    const returnedState = positiveNegative(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '-1',
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
        renderEquationResult: '-1',
        renderEquation: '1 +',
      },
    });
  });

  test('(button combo: 1 + 2 +/- ) IF operand1 & operator are truthy, operand2 = null & operandString is truthy THEN positiveNegative should negate operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
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
    const returnedState = positiveNegative(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '-2',
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
        renderEquationResult: '-2',
        renderEquation: '1 +',
      },
    });
  });

  test('(button combo: 1 + 2 = +/- ) IF operand1, operand2, & operator are truthy THEN positiveNegative should negate equationResult and put the returned value into operandString ALSO make equalsIsOn = false, sumSubMultDivIsOn = false, and percentIsOn = false.', () => {
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
    const returnedState = positiveNegative(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '-3',
      operand1: null,
      operand2: null,
      operator: null,
      nextOperator: '+',
      equationResult: null,
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: false,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '-3',
        renderEquation: '1 + 2 =',
      },
    });
  });
});
