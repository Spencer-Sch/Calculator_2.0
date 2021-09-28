let queuedStateUpdates = {};

const decimal = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUASION_RESULT = curState.equasionResult;
  const DECIMAL_IS_ON = curState.decimalIsOn;

  if (!DECIMAL_IS_ON) {
    let queuedStateUpdates = {
      decimalIsOn: true,
    };
    if (SUM_SUB_MULT_DIV_IS_ON || (OPERAND2 === null && +OPERAND_STRING < 0)) {
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '0.',
      };
    }
    queuedStateUpdates = {
      ...queuedStateUpdates,
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
    };
    return queuedStateUpdates;
  }
};

export default decimal;
