import { initStore } from './store';

export const configureHistoryStore = () => {
  const actions = {
    ADD_ENTRY: (curState) => {
      console.log('ADD_ENTRY Triggered');

      const OPERAND1 = curState.operand1;
      const OPERAND2 = curState.operand2;
      const OPERATOR = curState.operator;
      const EQUASION_RESULT = curState.equasionResult;
      const HISTORY_LIST = curState.historyList;

      let equasion;

      if (OPERATOR === '=') {
        equasion = `${OPERAND1} ${OPERATOR} ${OPERAND2}`;
      } else {
        equasion = `${OPERAND1} ${OPERATOR} ${OPERAND2} =`;
      }

      const newEntry = {
        key: Math.random(),
        operand1: OPERAND1,
        operand2: OPERAND2,
        operator: OPERATOR,
        equasion: equasion,
        equasionResult: EQUASION_RESULT,
      };

      return { historyList: [...HISTORY_LIST, newEntry] };
    },
  };

  initStore(actions, { historyList: [] });
};
