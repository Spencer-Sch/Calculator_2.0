import percent from './percentLogic';

describe('percentLogic tests:', () => {
  test('(button combo: 12 %) IF percentIsOn = false, operand1, operand2, & operator = falsy AND operandString = truthy THEN percent should return global state to default.', () => {
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
    const returnedState = percent(testState);
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
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '0',
        renderEquation: '',
      },
    });
  });

  test('(button combo: 12 + % ) IF percentIsOn = false, operand1 & operator = truthy AND operand2 & operandString = falsy THEN percent should make operandString = "1.44", operand = "12", currentPercent = 0.12, percentIsOn = true, .  ALSO make equalsIsOn = false & sumSubMultDivIsOn = false.', () => {
    const testState = {
      operandString: '',
      operand1: '12',
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
        renderEquationResult: '12',
        renderEquation: '12 +',
      },
    };
    const returnedState = percent(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '1.44',
      operand1: '12',
      operand2: null,
      operator: '+',
      nextOperator: null,
      equationResult: null,
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: false,
      percentIsOn: true,
      currentPercent: 0.12,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '1.44',
        renderEquation: '12 + 1.44',
      },
    });
  });

  test('(button combo: 12 + 3 % ) IF percentIsOn = false, operand1, operator, & operandString = truthy, operand2 = falsy THEN percent should make operandString = "0.36", percentIsOn = true, currentPercent = 0.03.  ALSO make equalsIsOn = false & sumSubMultDivIsOn = false.', () => {
    const testState = {
      operandString: '3',
      operand1: '12',
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
        renderEquationResult: '3',
        renderEquation: '12 +',
      },
    };
    const returnedState = percent(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '0.36',
      operand1: '12',
      operand2: null,
      operator: '+',
      nextOperator: null,
      equationResult: null,
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: false,
      percentIsOn: true,
      currentPercent: 0.03,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '0.36',
        renderEquation: '12 + 0.36',
      },
    });
  });

  test('(button combo: 12 + 3 = % ) IF percentIsOn = false AND operand2 = truthy THEN percent should make .  ALSO make equalsIsOn = false & sumSubMultDivIsOn = false.', () => {
    const testState = {
      operandString: '0',
      operand1: '12',
      operand2: '3',
      operator: '+',
      nextOperator: '+',
      equationResult: '15',
      sumSubMultDivIsOn: true,
      equalsIsOn: true,
      decimalIsOn: false,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '15',
        renderEquation: '12 + 3 =',
      },
    };
    const returnedState = percent(testState);
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '2.25',
      operand1: '12',
      operand2: '3',
      operator: '+',
      nextOperator: '+',
      equationResult: '2.25',
      sumSubMultDivIsOn: false,
      equalsIsOn: false,
      decimalIsOn: false,
      percentIsOn: true,
      currentPercent: 0.15,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: '2.25',
        renderEquation: '',
      },
    });
  });
});
