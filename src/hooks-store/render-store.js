import { initStore } from './store';

export const configureRenderStore = () => {
  const actions = {
    RENDER_EQUATION_RESULT: (curState, payload) => {
      console.log('RENDER_EQUATION_RESULT Triggered');
    },
    RENDER_EQUATION: (curState, payload) => {
      console.log('RENDER_EQUATION Triggered');
    },
  };

  initStore(actions, { renderEquationResult: '0', renderEquation: null });
};
