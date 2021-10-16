import { initStore } from './store';

export const configureRenderStore = () => {
  const actions = {};

  initStore(actions, {
    renderData: { renderEquationResult: '0', renderEquation: '' },
  });
};
