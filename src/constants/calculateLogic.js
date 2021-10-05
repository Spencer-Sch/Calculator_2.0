const calculate = (curState) => {
  console.log('Calculate Equation!');

  const CAME_FROM_EQUALS = curState.cameFromEquals;
  const NEXT_OPERATOR = curState.nextOperator;
  const OPERAND1 = +curState.operand1;
  const OPERAND2 = +curState.operand2;
  const OPERATOR = curState.operator;

  let equationResult;

  if (OPERATOR === '/' && OPERAND2 === 0) {
    console.log("Can't divide by zero!");
    const stateUpdates = {
      operandString: '0',
      operand1: null,
      operand2: null,
      operator: null,
      nextOperator: null,
      equalsIsOn: false,
      equationResult: 'Cannot Divide By Zero!',
      sumSubMultDivIsOn: false,
      decimalIsOn: false,
      percentIsOn: false,
      currentPercent: null,
      runCalculate: false,
      cameFromEquals: false,
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
      equationResult: `${equationResult}`,
      operand1: `${equationResult}`,
      operand2: null,
      operator: NEXT_OPERATOR,
      runCalculate: false,
    };
  } else {
    return {
      equationResult: `${equationResult}`,
      runCalculate: false,
      cameFromEquals: false,
    };
  }
};

export default calculate;
