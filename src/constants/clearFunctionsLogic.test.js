import clearFunctions from './clearFunctionsLogic';

describe('clearFunctionswLogic tests:', () => {
  test('(button combo: 1 + 2 = C) IF value is "C" OR equalsIsOn = true THEN clearFunctions should return state to its default', () => {
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
        renderEquationResult: '1 /',
        renderEquation: '0',
      },
    };

    const returnedState = clearFunctions(testState, 'C');
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

  test('(button combo: 1 + 2 = - C) IF value is "C" THEN clearFunctions should return state to its default', () => {
    const testState = {
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
    };
    const returnedState = clearFunctions(testState, 'C');
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

  test('(button combo: 1 + 2 = + 4 C) IF value is "C" THEN clearFunctions should return state to its default', () => {
    const testState = {
      operandString: '4',
      operand1: '3',
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
      renderData: {
        renderEquationResult: '4',
        renderEquation: '3 +',
      },
    };
    const returnedState = clearFunctions(testState, 'C');
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

  test('(button combo: 1 + 2 = + 4 CE) IF value is "CE" THEN clearFunctions should return operandString, decimalIsOn, percentIsOn, & currentPercent back to default.', () => {
    const testState = {
      operandString: '4',
      operand1: '3',
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
      renderData: {
        renderEquationResult: '4',
        renderEquation: '3 +',
      },
    };
    const returnedState = clearFunctions(testState, 'CE');
    expect({ ...testState, ...returnedState }).toEqual({
      operandString: '0',
      operand1: '3',
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
      renderData: {
        renderEquationResult: '0',
        renderEquation: '3 +',
      },
    });
  });
});
