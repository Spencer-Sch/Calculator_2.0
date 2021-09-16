const buildOperand = (curState, newDigit) => {
  if (curState.operandString.length < 14) {
    if (curState.equalsIsOn) {
      curState.operandString = '0';
    }
    if (curState.operandString === '0') {
      curState.operandString = '';
    }
    const stateUpdates = {
      ...curState,
      operandString: `${curState.operandString}`.concat(`${newDigit}`),
      equalsIsOn: false,
      operatorIsOn: false,
      percentIsOn: false,
    };
    return stateUpdates;
  }
};

export default buildOperand;
