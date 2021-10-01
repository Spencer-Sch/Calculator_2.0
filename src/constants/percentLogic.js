import percentHelper from './percentHelperLogic';
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
      operandString: +OPERAND_STRING * CURRENT_PERCENT,
    };
  }
  if (!PERCENT_IS_ON) {
    console.log('PERCENT Checkpoint 2');
    if (OPERAND1 && OPERATOR && !OPERAND2 && !OPERAND_STRING) {
      const resultArr = getPercent(OPERAND1, null);
      const percentHelperUpdates = percentHelper(null, resultArr, 0);
      queuedStateUpdates = {
        ...percentHelperUpdates,
      };
    } else if (OPERAND1 && OPERATOR && !OPERAND2 && OPERAND_STRING) {
      console.log('PERCENT Checkpoint 3');
      const resultArr = getPercent(OPERAND1, OPERAND_STRING);
      const percentHelperUpdates = percentHelper(null, resultArr, 0);
      queuedStateUpdates = {
        ...percentHelperUpdates,
      };
    } else if (OPERAND2) {
      console.log('PERCENT Checkpoint 4');
      const resultArr = getPercent(EQUASION_RESULT, null);
      const percentHelperUpdates = percentHelper(OPERAND_STRING, resultArr, 1);
      queuedStateUpdates = {
        ...percentHelperUpdates,
      };
    }
  }
  queuedStateUpdates = {
    ...queuedStateUpdates,
    equalsIsOn: false,
    sumSubMultDivIsOn: false,
    percentIsOn: true,
  };
  return queuedStateUpdates;
};

export default percent;
