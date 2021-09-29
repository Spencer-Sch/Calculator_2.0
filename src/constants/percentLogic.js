import { getPercent } from './utilityFunctions';

const percent = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const EQUASION_RESULT = curState.equasionResult;
  const PERCENT_IS_ON = curState.percentIsOn;
  const CURRENT_PERCENT = curState.currentPercent;

  let queuedStateUpdates = {};

  if (PERCENT_IS_ON) {
    console.log('PERCENT Checkpoint 1');
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operandString: +OPERAND_STRING * CURRENT_PERCENT,
    };
  }
  if (!PERCENT_IS_ON) {
    if (OPERAND1 && OPERATOR && !OPERAND2 && !OPERAND_STRING) {
      const resultArr = getPercent(OPERAND1, null);
      // PICK UP HERE
    }
  }
  queuedStateUpdates = {
    ...queuedStateUpdates,
    equalsIsOn: false,
    sumSubMultDivIsOn: false,
  };
  return queuedStateUpdates;
};

export default percent;
