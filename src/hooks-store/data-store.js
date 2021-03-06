import buildOperand from '../constants/buildOperandLogic/buildOperandLogic';
import calculate from '../constants/calculateLogic/calculateLogic';
import sumSubMultDiv from '../constants/sumSubMultDivLogic/sumSubMultDivLogic';
import equals from '../constants/equalsLogic/equalsLogic';
import { initStore } from './store';
import clearFunctions from '../constants/clearFunctionsLogic/clearFunctionsLogic';
import backspace from '../constants/backspaceLogic/backspaceLogic';
import decimal from '../constants/decimalLogic/decimalLogic';
import positiveNegative from '../constants/positiveNegativeLogic/positiveNegativeLogic';
import percent from '../constants/percentLogic/percentLogic';

export const configureDataStore = () => {
  const actions = {
    BUILD_OPERAND: (curState, newDigit) => {
      // console.log('BUILD_OPERAND Triggered');
      // console.log(`${newDigit}`);

      const updatedState = buildOperand(curState, newDigit);
      return updatedState;
    },

    SUM_SUB_MULT_DIV: (curState, operator) => {
      // console.log('SUM_SUB_MULT_DIV Triggered');
      // console.log(`${operator}`);

      const updatedState = sumSubMultDiv(curState, operator);
      return updatedState;
    },

    PERCENT: (curState, value) => {
      // console.log('PERCENT Triggered');
      // console.log(`${value}`);

      const updatedState = percent(curState);
      return updatedState;
    },

    DECIMAL: (curState, value) => {
      // console.log('DECIMAL Triggered');
      // console.log(`${value}`);

      const updatedState = decimal(curState);
      return updatedState;
    },

    POSITIVE_NEGATIVE: (curState, value) => {
      // console.log('POSITIVE_NEGATIVE Triggered');
      // console.log(`${value}`);

      const updatedState = positiveNegative(curState);
      return updatedState;
    },

    EQUALS: (curState) => {
      // console.log('EQUALS Triggered');

      const updatedState = equals(curState);
      return updatedState;
    },

    CLEAR_FUNCTIONS: (curState, value) => {
      // console.log('CLEAR_FUNCTIONS Triggered');
      // console.log(`${value}`);

      const updatedState = clearFunctions(curState, value);
      return updatedState;
    },

    BACKSPACE: (curState, value) => {
      // console.log('BACKSPACE Triggered');
      // console.log(`${value}`);

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
    equationResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    runAddEntry: false,
    cameFromEquals: false,
  });
};
