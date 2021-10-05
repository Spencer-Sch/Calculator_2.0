const buildOperand = (curState, newDigit) => {
  const OPERAND_STRING = curState.operandString;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUATION_RESULT = curState.equationResult;
  const PERCENT_IS_ON = curState.percentIsOn;

  let operandString = OPERAND_STRING;
  let updateequationResult = {};
  if (operandString.length < 14) {
    if (EQUALS_IS_ON) {
      operandString = '0';
    }
    if (operandString === '0') {
      operandString = '';
    }
    if (EQUATION_RESULT) {
      updateequationResult = { equationResult: null };
    }
    const stateUpdates = {
      operandString: PERCENT_IS_ON
        ? `${newDigit}`
        : `${operandString}`.concat(`${newDigit}`),
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
      ...updateequationResult,
    };
    return stateUpdates;
  }
};

export default buildOperand;
