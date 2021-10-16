const buildOperand = (curState, newDigit) => {
  const OPERAND_STRING = curState.operandString;
  const EQUALS_IS_ON = curState.equalsIsOn;
  const PERCENT_IS_ON = curState.percentIsOn;
  const RENDER_DATA = curState.renderData;
  const OPERAND1 = curState.operand1;
  const OPERATOR = curState.operator;

  let operandString = OPERAND_STRING;
  let queuedStateUpdates;
  let shouldRenderDataBeEmpty = false;
  // let queuedRenderDataUpdate;

  if (operandString.length < 11) {
    if (EQUALS_IS_ON) {
      operandString = '0';
      shouldRenderDataBeEmpty = true;
      // queuedRenderDataUpdate = {
      //   renderData: {
      //     ...RENDER_DATA,
      //     renderEquation: '',
      //   },
      // };
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

    const equalsRenderData = shouldRenderDataBeEmpty
      ? { renderEquation: '', renderEquationResult: '' }
      : RENDER_DATA;

    const percentRenderData = { renderEquation: `${OPERAND1} ${OPERATOR}` };

    const conditionalRenderData = PERCENT_IS_ON
      ? percentRenderData
      : equalsRenderData;

    // const renderDataUpdate = queuedRenderDataUpdate
    //   ? queuedRenderDataUpdate
    //   : {
    //       renderData: {
    //         ...RENDER_DATA,
    //         renderEquationResult: newOperandString,
    //       },
    //     };

    const stateUpdates = {
      ...queuedStateUpdates,
      operandString: newOperandString,
      equalsIsOn: false,
      sumSubMultDivIsOn: false,
      percentIsOn: false,
      renderData: {
        // ...equalsRenderData,
        ...conditionalRenderData,
        renderEquationResult: newOperandString,
      },
      // ...renderDataUpdate,
    };
    return stateUpdates;
  }
};

export default buildOperand;
