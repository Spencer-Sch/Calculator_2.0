const calculate = (curState) => {
  console.log('Calculate Equasion!');

  const CAME_FROM_EQUALS = curState.cameFromEquals;
  const NEXT_OPERATOR = curState.nextOperator;
  const OPERAND1 = +curState.operand1;
  const OPERAND2 = +curState.operand2;
  const OPERATOR = curState.operator;

  let equasionResult;

  if (OPERATOR === '/' && OPERAND2 === 0) {
    console.log("Can't divide by zero!");
    //   divByZeroHandler();
  } else {
    if (OPERATOR === '+') {
      equasionResult = OPERAND1 + OPERAND2;
    }
    if (OPERATOR === '-') {
      equasionResult = OPERAND1 - OPERAND2;
    }
    if (OPERATOR === 'x') {
      equasionResult = OPERAND1 * OPERAND2;
    }
    if (OPERATOR === '/') {
      equasionResult = OPERAND1 / OPERAND2;
    }
    if (OPERATOR === '=') {
      equasionResult = OPERAND1;
    }
  }
  if (!CAME_FROM_EQUALS) {
    return {
      equasionResult: `${equasionResult}`,
      operand1: `${equasionResult}`,
      operand2: null,
      operator: NEXT_OPERATOR,
      runCalculate: false,
    };
  } else {
    return {
      equasionResult: `${equasionResult}`,
      runCalculate: false,
      cameFromEquals: false,
    };
  }
};

export default calculate;
