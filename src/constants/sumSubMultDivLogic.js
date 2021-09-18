const sumSubMultDiv = (curState, operator) => {
  // console.log(curState);

  let queuedStateUpdates = {};

  if (curState.equalsIsOn) {
    /////////////////////////////////////////////////////
    // logic yet to be transfered
    /////////////////////////////////////////////////////
  }
  if (!curState.sumSubMultDivIsOn) {
    queuedStateUpdates = { ...queuedStateUpdates, sumSubMultDivIsOn: true };
    if (curState.operand1 && curState.operator && curState.operand2) {
      console.log('BREAK POINT 1');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '',
        operand1: curState.equasionResult,
        operand2: null,
        operator: operator,
        equasionResult: null,
      };
    } else if (curState.operand1 && curState.operator) {
      console.log('BREAK POINT 2');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand2: curState.operandString,
        operandString: '',
        nextOperator: operator,
        runCalculate: true,
      };
    } else if (curState.operand1 === null) {
      console.log('BREAK POINT 3');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand1: curState.operandString,
        operandString: '',
        operator: operator,
      };
    }
  } else {
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operator: operator,
    };
  }

  const stateUpdates = {
    ...queuedStateUpdates,
    decimalIsOn: false,
  };
  return stateUpdates;
};

export default sumSubMultDiv;
