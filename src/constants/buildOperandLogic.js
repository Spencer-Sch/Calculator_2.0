const buildOperand = (curState, newDigit) => {
  const OPERAND_STRING = curState.operandString;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const EQUATION_RESULT = curState.equationResult;
  const PERCENT_IS_ON = curState.percentIsOn;
  const RENDER_DATA = curState.renderData;

  let operandString = OPERAND_STRING;
  let queuedStateUpdates;

  if (operandString.length < 14) {
    if (EQUALS_IS_ON) {
      operandString = '0';
      queuedStateUpdates = {
        renderData: {
          ...RENDER_DATA,
          renderEquation: '',
        },
      };
    }
    if (operandString === '0') {
      operandString = '';
    }

    const newOperandString = PERCENT_IS_ON
      ? `${newDigit}`
      : `${operandString}`.concat(`${newDigit}`);

    const stateUpdates = {
      ...queuedStateUpdates,
      operandString: newOperandString,
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: newOperandString,
      },
    };
    return stateUpdates;
  }
};

export default buildOperand;
