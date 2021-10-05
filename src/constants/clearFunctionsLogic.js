const clearFunctions = (curState, value) => {
  const EQUALS_IS_ON = curState.equalsIsOn;
  let queuedStateUpdates;

  if (value === 'C' || EQUALS_IS_ON) {
    console.log('cClear CheckPoint');

    queuedStateUpdates = {
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
    };
    return queuedStateUpdates;
  } else {
    console.log('ceClear CheckPoint');

    queuedStateUpdates = {
      operandString: '0',
      decimalIsOn: false,
      percentIsOn: false,
      currentPercent: null,
    };
    return queuedStateUpdates;
  }
};

export default clearFunctions;
