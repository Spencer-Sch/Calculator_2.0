import { initStore } from './store';

export const configureHistoryStore = () => {
  const actions = {
    ADD_ENTRY: (curState) => {
      console.log('ADD_ENTRY Triggered');

      const OPERAND_STRING = curState.operandString;
      const OPERAND1 = curState.historyData.operand1Store;
      const OPERAND2 = curState.historyData.operand2Store;
      const OPERATOR = curState.historyData.operatorStore;
      const NEXT_OPERATOR = curState.nextOperator;
      const EQUATION_RESULT = curState.equationResult;
      const SUM_SUB_MULT_DIV_IS_ON = curState.sumSubMultDivIsOn;
      const EQUALS_IS_ON = curState.equalsIsOn;
      const DECIMAL_IS_ON = curState.decimalIsOn;
      const PERCENT_IS_ON = curState.percentIsOn;
      const CURRENT_PERCENT = curState.currentPercent;
      const CAME_FROM_EQUALS = curState.cameFromEquals;
      const HISTORY_LIST = curState.historyData.historyList;

      let equation;

      if (OPERATOR === '=') {
        equation = `${OPERAND1} ${OPERATOR} ${OPERAND2}`;
      } else {
        equation = `${OPERAND1} ${OPERATOR} ${OPERAND2} =`;
      }

      const newEntry = {
        key: Math.random(),
        operandString: OPERAND_STRING,
        operand1: OPERAND1,
        operand2: OPERAND2,
        operator: OPERATOR,
        nextOperator: NEXT_OPERATOR,
        equationResult: EQUATION_RESULT,
        equation: equation,
        sumSubMultDivIsOn: SUM_SUB_MULT_DIV_IS_ON,
        equalsIsOn: EQUALS_IS_ON,
        decimalIsOn: DECIMAL_IS_ON,
        percentIsOn: PERCENT_IS_ON,
        currentPercent: CURRENT_PERCENT,
        cameFromEquals: CAME_FROM_EQUALS,
      };

      return {
        historyData: {
          operand1Store: null,
          operand2Store: null,
          operatorStore: null,
          historyList: [...HISTORY_LIST, newEntry],
        },
        runAddEntry: false,
      };
    },
    RECALL_ENTRY: (curState, targetId) => {
      console.log('RECALL_HISTORY Triggered');

      const entryIndex = curState.historyData.historyList.findIndex(
        (entry) => entry.key === targetId
      );
      const targetEntry = curState.historyData.historyList[entryIndex];

      const OPERAND_STRING = targetEntry.operandString;
      const OPERAND1 = targetEntry.operand1;
      const OPERAND2 = targetEntry.operand2;
      const OPERATOR = targetEntry.operator;
      const NEXT_OPERATOR = targetEntry.nextOperator;
      const EQUATION_RESULT = targetEntry.equationResult;
      const EQUATION = targetEntry.equation;
      const SUM_SUB_MULT_DIV_IS_ON = targetEntry.sumSubMultDivIsOn;
      const EQUALS_IS_ON = targetEntry.equalsIsOn;
      const DECIMAL_IS_ON = targetEntry.decimalIsOn;
      const PERCENT_IS_ON = targetEntry.percentIsOn;
      const CURRENT_PERCENT = targetEntry.currentPercent;
      const CAME_FROM_EQUALS = targetEntry.cameFromEquals;

      return {
        operandString: OPERAND_STRING,
        operand1: OPERAND1,
        operand2: OPERAND2,
        operator: OPERATOR,
        nextOperator: NEXT_OPERATOR,
        equationResult: EQUATION_RESULT,
        sumSubMultDivIsOn: SUM_SUB_MULT_DIV_IS_ON,
        equalsIsOn: EQUALS_IS_ON,
        decimalIsOn: DECIMAL_IS_ON,
        percentIsOn: PERCENT_IS_ON,
        currentPercent: CURRENT_PERCENT,
        cameFromEquals: CAME_FROM_EQUALS,
        renderData: {
          renderEquation: EQUATION,
          renderEquationResult: EQUATION_RESULT,
        },
      };
    },
    CLEAR_HISTORY: () => {
      console.log('CLEAR_HISTORY Triggered');

      return {
        historyData: {
          operand1Store: null,
          operand2Store: null,
          operatorStore: null,
          historyList: [],
        },
      };
    },
  };

  initStore(actions, {
    historyData: {
      operand1Store: null,
      operand2Store: null,
      operatorStore: null,
      historyList: [],
    },
  });
};
