const sumSubMultDiv = (curState, operator) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUASION_RESULT = curState.equasionResult;

  let queuedStateUpdates = {};

  if (EQUALS_IS_ON) {
    console.log('sumSubMultDiv Checkpoint 0.5');
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operand1: EQUASION_RESULT,
      operand2: null,
      operator: operator,
      equalsIsOn: false,
      percentIsOn: false,
    };
  }
  if (!SUM_SUB_MULT_DIV_IS_ON) {
    queuedStateUpdates = { ...queuedStateUpdates, sumSubMultDivIsOn: true };
    if (OPERAND1 && OPERATOR && OPERAND2) {
      /////////////////////////////
      // Is this state ever true?
      /////////////////////////////
      console.log('sumSubMultDiv Checkpoint 1');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '',
        operand1: EQUASION_RESULT,
        operand2: null,
        operator: operator,
        equasionResult: null,
      };
    } else if (OPERAND1 && OPERATOR) {
      console.log('sumSubMultDiv Checkpoint 2');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand2: OPERAND_STRING,
        operandString: '',
        nextOperator: operator,
        runCalculate: true,
      };
    } else if (OPERAND1 === null) {
      console.log('sumSubMultDiv Checkpoint 3');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operand1: OPERAND_STRING,
        operandString: '',
        operator: operator,
      };
    }
  } else {
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operator: operator,
    };
  }

  const stateUpdates = {
    ...queuedStateUpdates,
    decimalIsOn: false,
  };
  return stateUpdates;
};

export default sumSubMultDiv;
