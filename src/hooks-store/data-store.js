import { initStore } from './store';

export const configureDataStore = () => {
  const actions = {
    BUILD_OPERAND: (curState, newDigit) => {
      //   console.log('Dispatch Triggered');
      //   console.log(`${curState.operand1}`);
      //   console.log(`${newDigit}`);

      // logic
      const updatedOperand = `${curState.operand1}`.concat(`${newDigit}`);
      // logic

      return updatedOperand;
    },
  };
  initStore(actions, {
    operand1: '0',
    operand2: '',
    operator: '',
    previousOperator: '',
    total: '',
  });
};
