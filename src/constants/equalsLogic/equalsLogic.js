import equalsHelper from '../equalsHelperLogic/equalsHelperLogic';

const equals = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUATION_RESULT = curState.equationResult;

  let queuedStateUpdates = {};

  if (!OPERAND1 && !OPERAND2 && !OPERATOR) {
    const equalsHelperUpdates = equalsHelper(curState, 0);
    // console.log('EQUALS Checkpoint 1');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand1: OPERAND_STRING,
      operator: '=',
      operand2: OPERAND_STRING,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && OPERAND2 && OPERAND_STRING !== '0') {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    // console.log('EQUALS Checkpoint 2');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand1: OPERAND_STRING,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && OPERAND2) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    // console.log('EQUALS Checkpoint 3');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand1: EQUATION_RESULT,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && SUM_SUB_MULT_DIV_IS_ON) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    // console.log('EQUALS Checkpoint 4');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand2: OPERAND1,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && !EQUALS_IS_ON) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    // console.log('EQUALS Checkpoint 5');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand2: OPERAND_STRING,
    };
    return queuedStateUpdates;
  }
};

export default equals;
