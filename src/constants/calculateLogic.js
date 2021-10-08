const calculate = (curState) => {
  console.log('Calculate Equation!');

  const CAME_FROM_EQUALS = curState.cameFromEquals;
  const NEXT_OPERATOR = curState.nextOperator;
  const OPERAND1 = +curState.operand1;
  const OPERAND2 = +curState.operand2;
  const OPERATOR = curState.operator;
  const HISTORY_DATA = curState.historyData;

  let equationResult;
  let queuedStateUpdates = {
    historyData: {
      ...HISTORY_DATA,
      operand1Store: OPERAND1,
      operand2Store: OPERAND2,
      operatorStore: OPERATOR,
    },
  };

  const conditionalEquals = OPERATOR === '=' ? '' : ' =';

  if (OPERATOR === '/' && OPERAND2 === 0) {
    console.log("Can't divide by zero!");
    const stateUpdates = {
      operandString: '0',
      operand1: null,
      operand2: null,
      operator: null,
      nextOperator: null,
      equalsIsOn: false,
      equationResult: null,
      sumSubMultDivIsOn: false,
      decimalIsOn: false,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquation: null,
        renderEquationResult: 'Cannot Divide By Zero!',
      },
    };
    return stateUpdates;
  } else {
    if (OPERATOR === '+') {
      equationResult = OPERAND1 + OPERAND2;
    }
    if (OPERATOR === '-') {
      equationResult = OPERAND1 - OPERAND2;
    }
    if (OPERATOR === 'x') {
      equationResult = OPERAND1 * OPERAND2;
    }
    if (OPERATOR === '/') {
      equationResult = OPERAND1 / OPERAND2;
    }
    if (OPERATOR === '=') {
      equationResult = OPERAND1;
    }
  }

  if (!CAME_FROM_EQUALS) {
    return {
      ...queuedStateUpdates,
      equationResult: `${equationResult}`,
      operand1: `${equationResult}`,
      operand2: null,
      operator: NEXT_OPERATOR,
      runCalculate: false,
      renderData: {
        renderEquationResult: `${equationResult}`,
        renderEquation: `${equationResult} ${NEXT_OPERATOR}`,
      },
    };
  } else {
    return {
      ...queuedStateUpdates,
      equationResult: `${equationResult}`,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: `${equationResult}`,
        renderEquation: `${OPERAND1} ${OPERATOR} ${OPERAND2}${conditionalEquals}`,
      },
    };
  }
};

export default calculate;
