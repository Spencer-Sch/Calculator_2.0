const sumSubMultDiv = (curState, operator) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUATION_RESULT = curState.equationResult;
  const RENDER_DATA = curState.renderData;

  let queuedStateUpdates = {};

  let renderUpdate;

  if (EQUALS_IS_ON) {
    console.log('sumSubMultDiv Checkpoint 0.5');

    renderUpdate = {
      renderEquation: `${EQUATION_RESULT} ${operator}`,
      renderEquationResult: `${EQUATION_RESULT}`,
    };

    queuedStateUpdates = {
      ...queuedStateUpdates,
      operand1: EQUATION_RESULT,
      operand2: null,
      operator: operator,
      equalsIsOn: false,
      percentIsOn: false,
      renderData: {
        ...renderUpdate,
      },
    };
  }
  if (!SUM_SUB_MULT_DIV_IS_ON) {
    queuedStateUpdates = { ...queuedStateUpdates, sumSubMultDivIsOn: true };
    if (OPERAND1 && OPERATOR && OPERAND2) {
      /////////////////////////////
      // Is this state ever true?
      // Yes.  button combo: 12 + 3 = % x or 12 + 3 = % 2 + or 12 + 3 = 2 +
      /////////////////////////////
      console.log('sumSubMultDiv Checkpoint 1');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '',
        operand1: OPERAND_STRING,
        // operand1: EQUATION_RESULT,
        operand2: null,
        operator: operator,
        equationResult: null,
        renderData: {
          renderEquation: `${OPERAND_STRING} ${operator}`,
          renderEquationResult: `${OPERAND_STRING}`,
        },
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
        renderData: {
          ...RENDER_DATA,
          renderEquation: `${OPERAND_STRING} ${operator}`,
        },
      };
    }
  } else {
    console.log('sumSubMultDiv Checkpoint 4');
    queuedStateUpdates = {
      ...queuedStateUpdates,
      operator: operator,
      renderData: renderUpdate
        ? renderUpdate
        : {
            ...RENDER_DATA,
            renderEquation: `${OPERAND1} ${operator}`,
          },
    };
  }

  const stateUpdates = {
    ...queuedStateUpdates,
    decimalIsOn: false,
  };
  return stateUpdates;
};

export default sumSubMultDiv;
