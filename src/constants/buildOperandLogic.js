const buildOperand = (curState, newDigit) => {
  let operandString = curState.operandString;
  let updateEquasionResult = {};
  if (operandString.length < 14) {
    if (curState.equalsIsOn) {
      operandString = '0';
    }
    if (operandString === '0') {
      operandString = '';
    }
    if (curState.equasionResult) {
      updateEquasionResult = { equasionResult: null };
    }
    const stateUpdates = {
      operandString: `${operandString}`.concat(`${newDigit}`),
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
      ...updateEquasionResult,
    };
    return stateUpdates;
  }
};

export default buildOperand;
