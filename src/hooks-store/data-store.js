import buildOperand from '../constants/buildOperandLogic';
import calculate from '../constants/calculateLogic';
import sumSubMultDiv from '../constants/sumSubMultDivLogic';
import equals from '../constants/equalsLogic';
import { initStore } from './store';
import clearFunctions from '../constants/clearFunctionsLogic';
import backspace from '../constants/backspaceLogic';

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

    EQUALS: (curState) => {
      console.log('EQUALS Triggered');

      const updatedState = equals(curState);
      return updatedState;
    },

    CLEAR_FUNCTIONS: (curState, value) => {
      console.log('CLEAR_FUNCTIONS Triggered');
      console.log(`${value}`);

      const updatedState = clearFunctions(curState, value);
      return updatedState;
    },

    BACKSPACE: (curState, value) => {
      console.log('BACKSPACE Triggered');
      console.log(`${value}`);

      const updatedState = backspace(curState);
      return updatedState;
    },

    CALCULATE: (curState) => {
      const updatedState = calculate(curState);
      return updatedState;
    },
  };

  initStore(actions, {
    operandString: '0',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
};
