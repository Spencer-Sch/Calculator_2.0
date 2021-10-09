import HistoryCardArea from './HistoryCardArea';
import calculate from '../constants/calculateLogic';

test('', () => {
  const testState = {
    operandString: '0',
    operand1: '1',
    operand2: '2',
    operator: '+',
    nextOperator: '+',
    equationResult: '3',
    sumSubMultDivIsOn: true,
    equalsIsOn: true,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
    renderData: {
      renderEquationResult: '1 /',
      renderEquation: '0',
    },
  };
  const returnedState = calculate(testState, 'C');
  expect().toEqual();
});
