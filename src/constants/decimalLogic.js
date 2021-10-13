const decimal = (curState) => {
  const OPERAND2 = curState.operand2;
  const OPERAND_STRING = curState.operandString;
  const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const DECIMAL_IS_ON = curState.decimalIsOn;
  const RENDER_DATA = curState.renderData;

  if (!DECIMAL_IS_ON) {
    // console.log('DECIMAL checkpoint 1');
    let queuedStateUpdates = {};
    if (EQUALS_IS_ON) {
      // console.log('DECIMAL checkpoint 2');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '0.',
        operand1: null,
        operand2: null,
        operator: null,
        equationResult: null,
        renderData: {
          renderEquation: null,
          renderEquationResult: '0.',
        },
      };
    } else if (
      SUM_SUB_MULT_DIV_IS_ON ||
      (OPERAND2 === null && +OPERAND_STRING < 0)
    ) {
      // console.log('DECIMAL checkpoint 3');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: '0.',
        renderData: {
          ...RENDER_DATA,
          renderEquationResult: '0.',
        },
      };
    } else {
      // console.log('DECIMAL checkpoint 4');
      queuedStateUpdates = {
        ...queuedStateUpdates,
        operandString: `${OPERAND_STRING}.`,
        renderData: {
          ...RENDER_DATA,
          renderEquationResult: `${OPERAND_STRING}.`,
        },
      };
    }
    queuedStateUpdates = {
      ...queuedStateUpdates,
      decimalIsOn: true,
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
    };
    return queuedStateUpdates;
  }
};

export default decimal;
