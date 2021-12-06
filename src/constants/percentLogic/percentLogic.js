import percentHelper from '../percentHelperLogic/percentHelperLogic';
import { getPercent } from '../utilityFunctions/utilityFunctions';

const percent = (curState) => {
  const OPERAND1 = curState.operand1;
  const OPERAND2 = curState.operand2;
  const OPERATOR = curState.operator;
  const OPERAND_STRING = curState.operandString;
  const EQUATION_RESULT = curState.equationResult;
  const PERCENT_IS_ON = curState.percentIsOn;
  const CURRENT_PERCENT = curState.currentPercent;
  const RENDER_DATA = curState.renderData;

  let queuedStateUpdates = {};

  if (PERCENT_IS_ON) {
    // console.log('PERCENT Checkpoint 1');
    const calcResult = +OPERAND_STRING * CURRENT_PERCENT;
    queuedStateUpdates = {
      operandString: calcResult,
      renderData: {
        ...RENDER_DATA,
        renderEquationResult: calcResult,
      },
    };
  }
  if (!PERCENT_IS_ON) {
    if (!OPERAND1 && !OPERATOR && !OPERAND2 && OPERAND_STRING) {
      // console.log('PERCENT Checkpoint 0.5');
      return {
        operandString: '0',
        renderData: {
          ...RENDER_DATA,
          renderEquationResult: '0',
        },
      };
    }
    if (OPERAND1 && OPERATOR && !OPERAND2 && !OPERAND_STRING) {
      // console.log('PERCENT Checkpoint 2');
      const resultArr = getPercent(OPERAND1, null);
      const percentHelperUpdates = percentHelper(resultArr, 0);
      queuedStateUpdates = {
        ...percentHelperUpdates,
        renderData: {
          renderEquation: `${OPERAND1} ${OPERATOR} ${resultArr[0]}`,
          renderEquationResult: `${resultArr[0]}`,
        },
      };
    } else if (OPERAND1 && OPERATOR && !OPERAND2 && OPERAND_STRING) {
      // console.log('PERCENT Checkpoint 3');
      const resultArr = getPercent(OPERAND1, OPERAND_STRING);
      const percentHelperUpdates = percentHelper(resultArr, 0);
      queuedStateUpdates = {
        ...percentHelperUpdates,
        renderData: {
          renderEquation: `${OPERAND1} ${OPERATOR} ${resultArr[0]}`,
          renderEquationResult: `${resultArr[0]}`,
        },
      };
    } else if (OPERAND2) {
      // console.log('PERCENT Checkpoint 4');
      const resultArr = getPercent(EQUATION_RESULT, null);
      const percentHelperUpdates = percentHelper(resultArr, 1);
      queuedStateUpdates = {
        ...percentHelperUpdates,
        renderData: {
          renderEquation: '',
          renderEquationResult: `${resultArr[0]}`,
        },
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
