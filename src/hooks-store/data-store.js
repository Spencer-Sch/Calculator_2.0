import buildOperand from '../constants/buildOperandLogic';
import sumSubMultDiv from '../constants/sumSubMultDivLogic';
import { initStore } from './store';

export const configureDataStore = () => {
  const actions = {
    BUILD_OPERAND: (curState, newDigit) => {
      console.log('BUILD_OPERAND Triggered');
      console.log(`${newDigit}`);

      const updatedState = buildOperand(curState, newDigit);
      return updatedState;
    },

    SUM_SUB_MULT_DIV: (curState, operator) => {
      console.log('SUM_SUB_MULT_DIV Triggered');
      console.log(`${operator}`);

      const updatedState = sumSubMultDiv(curState, operator);
      return updatedState;
      // break sumSubMultDivLogic.js into multiple functions.
      // do sorting logic here and then trigger the correct functions?
    },

    PERCENT: (curState, value) => {
      console.log('PERCENT Triggered');
      console.log(`${value}`);
    },

    DECIMAL: (curState, value) => {
      console.log('DECIMAL Triggered');
      console.log(`${value}`);
    },

    POSITIVE_NEGATIVE: (curState, value) => {
      console.log('POSITIVE_NEGATIVE Triggered');
      console.log(`${value}`);
    },

    EQUALS: (curState, value) => {
      console.log('EQUALS Triggered');
      console.log(`${value}`);
    },

    CLEAR_FUNCTIONS: (curState, value) => {
      console.log('CLEAR_FUNCTIONS Triggered');
      console.log(`${value}`);
    },

    BACKSPACE: (curState, value) => {
      console.log('BACKSPACE Triggered');
      console.log(`${value}`);
    },
  };

  initStore(actions, {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    previousOperator: null,
    equasionResult: 0,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
  });
};
