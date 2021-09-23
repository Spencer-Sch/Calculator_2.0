import equalsHelper from './equalsHelperLogic';

const equals = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUASION_RESULT = curState.equasionResult;

  let queuedStateUpdates = {};

  if (!OPERAND1 && !OPERAND2 && !OPERATOR) {
    const equalsHelperUpdates = equalsHelper(curState, 0);
    console.log('Checkpoint 1');
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
    console.log('Checkpoint 2');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand1: OPERAND_STRING,
    };
    return queuedStateUpdates;
  }

  ///////////////////////////////////////////
  if (OPERAND1 && OPERATOR && OPERAND2) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    console.log('Checkpoint 3');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand1: EQUASION_RESULT,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && SUM_SUB_MULT_DIV) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    console.log('Checkpoint 4');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand2: OPERAND1,
    };
    return queuedStateUpdates;
  }

  if (OPERAND1 && OPERATOR && !EQUALS_IS_ON) {
    const equalsHelperUpdates = equalsHelper(curState, 1);
    console.log('Checkpoint 5');
    queuedStateUpdates = {
      ...equalsHelperUpdates,
      operand2: OPERAND_STRING,
    };
    return queuedStateUpdates;
  }
};

export default equals;
