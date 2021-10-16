import decimal from './decimalLogic';

describe('decimalLogic tests:', () => {
  test('(button combo: 1 . 2 .) IF decimalIsOn = true THEN decimal should not do anything.', () => {
    const testState = {
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
      renderData: {
        renderEquationResult: '1.2',
        renderEquation: '',
      },
    };
    const returnedState = decimal(testState);
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
      renderData: {
        renderEquationResult: '1.2',
        renderEquation: '',
      },
    });
  });

  test('(button combo: 1 .) IF decimalIsOn = false THEN decimal should make decimalIsOn = true and add "." to the end of operandString.', () => {
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
        renderEquation: '',
      },
    };
    const returnedState = decimal(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '1.',
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
      renderData: {
        renderEquationResult: '1.',
        renderEquation: '',
      },
    });
  });

  test('(button combo: 1 + 2 = .) IF decimalIsOn = false AND equalsIsOn = true THEN decimal should make operandString "0.", operand1, operand2, operator, & equationResult = null ALSO sumSubMultDivIsOn = false, equalsIsOn = false, & percentIsOn = false', () => {
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
    const returnedState = decimal(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '0.',
      operand1: null,
      operand2: null,
      operator: null,
      nextOperator: '+',
      equationResult: null,
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: true,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '0.',
        renderEquation: '',
      },
    });
  });

  test('(button combo: 1 + .) IF decimalIsOn = false AND sumSubMultDivIsOn = true THEN decimal should make operandString "0.", sumSubMultDivIsOn = false, equalsIsOn = false, & percentIsOn = false', () => {
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
    const returnedState = decimal(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '0.',
      operand1: '1',
      operand2: null,
      operator: '+',
      nextOperator: null,
      equationResult: null,
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: true,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '0.',
        renderEquation: '1 +',
      },
    });
  });

  test('(button combo: 1 2 .) IF decimalIsOn = false AND sumSubMultDivIsOn = false & equalsIsOn = false & +operandString > 0 THEN decimal should insert a decimal point into operandString, ALSO sumSubMultDivIsOn = false, equalsIsOn = false, & percentIsOn = false', () => {
    const testState = {
      operandString: '12',
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
        renderEquationResult: '12',
        renderEquation: '',
      },
    };
    const returnedState = decimal(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '12.',
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
      renderData: {
        renderEquationResult: '12.',
        renderEquation: '',
      },
    });
  });
});
