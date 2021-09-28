import { isFloat } from './utilityFunctions';

const backspace = (curState) => {
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;

  let queuedStateUpdates = {};
  const reducedString = OPERAND_STRING.slice(0, OPERAND_STRING.length - 1);

  if (EQUALS_IS_ON || SUM_SUB_MULT_DIV_IS_ON) {
    console.log('BACKSPACE Checkpoint 1');
    return;
  } else {
    console.log('BACKSPACE Checkpoint 2');
    if (reducedString.length === 0) {
      console.log('BACKSPACE Checkpoint 3');
      queuedStateUpdates = {
        operandString: '0',
      };
    } else {
      console.log('BACKSPACE Checkpoint 4');
      queuedStateUpdates = {
        operandString: reducedString,
      };
    }
    if (!isFloat(reducedString)) {
      console.log('BACKSPACE Checkpoint 5');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        decimalIsOn: false,
      };
    }
    return queuedStateUpdates;
  }
};

export default backspace;
