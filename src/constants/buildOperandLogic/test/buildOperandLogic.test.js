import buildOperand from '../buildOperandLogic';
describe('buildOperandLogic tests:', () => {
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '0', renderEquation: '' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '1', renderEquation: '' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '0', renderEquation: '' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '123', renderEquation: '' },
    });
  });

  test('(button combo: 1 2 3 4 5 6 7 8 9 1 2 3 4 5 )IF button combo is 14 or more characters long THEN buildOperand should change nothing', () => {
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: {
        renderEquationResult: '12345678912345',
        renderEquation: '',
      },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: {
        renderEquationResult: '12345678912345',
        renderEquation: '',
      },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '1', renderEquation: '1 +' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '2', renderEquation: '1 +' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '1.44', renderEquation: '12 + 1.44' },
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
      historyData: {
        operand1Store: null,
        operand2Store: null,
        operatorStore: null,
        historyList: [],
      },
      renderData: { renderEquationResult: '2', renderEquation: '12 +' },
    });
  });
});
