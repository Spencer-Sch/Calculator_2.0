const calculate = (curState) => {
  console.log('Calculate Equasion!');
  const operand1 = +curState.operand1;
  const operand2 = +curState.operand2;
  const operator = curState.operator;

  let equasionResult;

  if (operator === '/' && operand2 === +'0') {
    console.log("Can't divide by zero!");
    //   divByZeroHandler();
  } else {
    if (operator === '+') {
      equasionResult = operand1 + operand2;
    }
    if (operator === '-') {
      equasionResult = operand1 - operand2;
    }
    if (operator === 'x') {
      equasionResult = operand1 * operand2;
    }
    if (operator === '/') {
      equasionResult = operand1 / operand2;
    }
    if (operator === '=') {
      equasionResult = operand1;
    }
  }
  if (!curState.cameFromEquals) {
    return {
      equasionResult: `${equasionResult}`,
      operand1: `${equasionResult}`,
      operand2: null,
      operator: curState.nextOperator,
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
