const buildOperand = (curState, newDigit) => {
  let operandString = curState.operandString;
  if (operandString.length < 14) {
    if (curState.equalsIsOn) {
      operandString = '0';
    }
    if (operandString === '0') {
      operandString = '';
    }
    const stateUpdates = {
      operandString: `${operandString}`.concat(`${newDigit}`),
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
    };
    return stateUpdates;
  }
};

export default buildOperand;
