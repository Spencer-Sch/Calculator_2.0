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
    if (curState.operand1 === null) {
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand1: curState.operandString,
        // operandString: '0',
        operator: operator,
      };
    } else if (curState.operand1 && curState.operator) {
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand2: curState.operandString,
        // operandString: '0',
        /////////////////////////////////////////////////////
        // NEXT: make new file for 'calculate' method from old calculator
        // transfer and convert logic
      };
      // How do I allow global state to be updated before calling calculate?
      // call calculate here
      // calculate(operator, false);
      /////////////////////////////////////////////////////
    } else if {
      /////////////////////////////////////////////////////
      // logic yet to be transfered
      /////////////////////////////////////////////////////
    }
  } else {
    /////////////////////////////////////////////////////
    // logic yet to be transfered
    /////////////////////////////////////////////////////
  }

  const stateUpdates = {
    ...queuedStateUpdates,
    decimalIsOn: false,
  };
  return stateUpdates;
};

export default sumSubMultDiv;
