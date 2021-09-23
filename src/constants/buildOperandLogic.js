const buildOperand = (curState, newDigit) => {
  const OPERAND_STRING = curState.operandString;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUASION_RESULT = curState.equasionResult;

  let operandString = OPERAND_STRING;
  let updateEquasionResult = {};
  if (operandString.length < 14) {
    if (EQUALS_IS_ON) {
      operandString = '0';
    }
    if (operandString === '0') {
      operandString = '';
    }
    if (EQUASION_RESULT) {
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
