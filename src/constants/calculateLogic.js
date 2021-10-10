const calculate = (curState) => {
  // console.log('Calculate Equation!');

  const CAME_FROM_EQUALS = curState.cameFromEquals;
  const NEXT_OPERATOR = curState.nextOperator;
  const OPERAND1 = +curState.operand1;
  const OPERAND2 = +curState.operand2;
  const OPERATOR = curState.operator;
  const HISTORY_DATA = curState.historyData;

  let equationResultVar;
  let queuedStateUpdates = {
    historyData: {
      ...HISTORY_DATA,
      operand1Store: OPERAND1,
      operand2Store: OPERAND2,
      operatorStore: OPERATOR,
    },
    runAddEntry: true,
  };

  const conditionalEquals = OPERATOR === '=' ? '' : ' =';

  if (OPERATOR === '/' && OPERAND2 === 0) {
    // console.log("Can't divide by zero!");
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
      runAddEntry: false,
      cameFromEquals: false,
      renderData: {
        renderEquation: null,
        renderEquationResult: 'Cannot Divide By Zero!',
      },
    };
    return stateUpdates;
  } else {
    if (OPERATOR === '+') {
      equationResultVar = OPERAND1 + OPERAND2;
    }
    if (OPERATOR === '-') {
      equationResultVar = OPERAND1 - OPERAND2;
    }
    if (OPERATOR === 'x') {
      equationResultVar = OPERAND1 * OPERAND2;
    }
    if (OPERATOR === '/') {
      equationResultVar = OPERAND1 / OPERAND2;
    }
    if (OPERATOR === '=') {
      equationResultVar = OPERAND1;
    }
  }
  if (!CAME_FROM_EQUALS) {
    return {
      ...queuedStateUpdates,
      equationResult: `${equationResultVar}`,
      operand1: `${equationResultVar}`,
      operand2: null,
      operator: NEXT_OPERATOR,
      runCalculate: false,
      renderData: {
        renderEquationResult: `${equationResultVar}`,
        renderEquation: `${equationResultVar} ${NEXT_OPERATOR}`,
      },
    };
  } else {
    return {
      ...queuedStateUpdates,
      equationResult: `${equationResultVar}`,
      runCalculate: false,
      cameFromEquals: false,
      renderData: {
        renderEquationResult: `${equationResultVar}`,
        renderEquation: `${OPERAND1} ${OPERATOR} ${OPERAND2}${conditionalEquals}`,
      },
    };
  }
};

export default calculate;
