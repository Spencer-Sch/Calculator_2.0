import { negate } from './utilityFunctions';

const positiveNegative = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const EQUATION_RESULT = curState.equationResult;
  const RENDER_DATA = curState.renderData;

  let queuedStateUpdates = {};

  if (!OPERAND1 && !OPERAND2 && !OPERATOR) {
    console.log('POSITIVE_NEGATIVE Checkpoint 1');
    const returnedString = negate(OPERAND_STRING);
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operandString: returnedString,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: returnedString,
      },
    };
  } else if (OPERAND1 && OPERATOR && !OPERAND2 && !OPERAND_STRING) {
    console.log('POSITIVE_NEGATIVE Checkpoint 2');
    const returnedString = negate(OPERAND1);
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operandString: returnedString,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: returnedString,
      },
    };
  } else if (OPERAND1 && OPERATOR && OPERAND_STRING && !OPERAND2) {
    console.log('POSITIVE_NEGATIVE Checkpoint 3');
    const returnedString = negate(OPERAND_STRING);
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operandString: returnedString,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: returnedString,
      },
    };
  } else if (OPERAND1 && OPERATOR && OPERAND2) {
    console.log('POSITIVE_NEGATIVE Checkpoint 4');
    const returnedString = negate(EQUATION_RESULT);
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operandString: returnedString,
      operand1: null,
      operand2: null,
      operator: null,
      equationResult: null,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: returnedString,
      },
    };
  }
  queuedStateUpdates = {
    ...queuedStateUpdates,
    equalsIsOn: false,
    sumSubMultDivIsOn: false,
    percentIsOn: false,
  };
  return queuedStateUpdates;
};

export default positiveNegative;
