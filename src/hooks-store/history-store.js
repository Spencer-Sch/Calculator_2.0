import { initStore } from './store';

export const configureHistoryStore = () => {
  const actions = {
    ADD_ENTRY: (curState) => {
      console.log('ADD_ENTRY Triggered');

      const OPERAND1 = curState.operand1;
      const OPERAND2 = curState.operand2;
      const OPERATOR = curState.operator;
      const EQUATION_RESULT = curState.equationResult;
      const HISTORY_LIST = curState.historyList;

      let equation;

      if (OPERATOR === '=') {
        equation = `${OPERAND1} ${OPERATOR} ${OPERAND2}`;
      } else {
        equation = `${OPERAND1} ${OPERATOR} ${OPERAND2} =`;
      }

      const newEntry = {
        key: Math.random(),
        operand1: OPERAND1,
        operand2: OPERAND2,
        operator: OPERATOR,
        equation: equation,
        equationResult: EQUATION_RESULT,
      };

      return { historyList: [...HISTORY_LIST, newEntry] };
    },
  };

  initStore(actions, { historyList: [] });
};
