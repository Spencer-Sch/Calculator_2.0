const equalsHelper = (curState, key) => {
  const OPERATOR = curState.operator;

  let queuedStateUpdates = {};

  if (key === 0) {
    queuedStateUpdates = {
      nextOperator: '=',
    };
  } else if (key === 1) {
    queuedStateUpdates = {
      nextOperator: OPERATOR,
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
