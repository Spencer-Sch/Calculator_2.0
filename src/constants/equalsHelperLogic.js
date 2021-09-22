const equalsHelper = (curState, key) => {
  let queuedStateUpdates = {};

  if (key === 0) {
    queuedStateUpdates = {
      nextOperator: '=',
    };
  } else if (key === 1) {
    queuedStateUpdates = {
      nextOperator: curState.operator,
    };
  }
  queuedStateUpdates = {
    ...queuedStateUpdates,
    operandString: '0',
    decimalIsOn: false,
    equalsIsOn: true,
    sumSubMultDivIsOn: true,
    cameFromEquals: true,
    percentIsOn: false,
    runCalculate: true,
  };
  return queuedStateUpdates;
};

export default equalsHelper;
