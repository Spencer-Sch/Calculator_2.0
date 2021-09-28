import decimal from './decimalLogic';

test('(button combo: 1 . 2 .) IF decimalIsOn = true THEN decimal should not do anything.', () => {
  const testState = {
    operandString: '1.2',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = decimal(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '1.2',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 .) IF decimalIsOn = false THEN decimal should make decimalIsOn = true.', () => {
  const testState = {
    operandString: '1',
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
  };
  const returnedState = decimal(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '1',
    operand1: null,
    operand2: null,
    operator: null,
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

test('(button combo: 1 + .) IF decimalIsOn = false AND sumSubMultDivIsOn = true THEN decimal should make operandString "0.", sumSubMultDivIsOn = false, equalsIsOn = false, & percentIsOn = false', () => {
  const testState = {
    operandString: '',
    operand1: '1',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: true,
    equalsIsOn: false,
    decimalIsOn: false,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  };
  const returnedState = decimal(testState);
  expect({ ...testState, ...returnedState }).toEqual({
    operandString: '0.',
    operand1: '1',
    operand2: null,
    operator: '+',
    nextOperator: null,
    equasionResult: null,
    sumSubMultDivIsOn: false,
    equalsIsOn: false,
    decimalIsOn: true,
    percentIsOn: false,
    currentPercent: null,
    runCalculate: false,
    cameFromEquals: false,
  });
});

// test('(button combo: 1 .) IF decimalIsOn = false AND (Operand2 = null && +operandString < 0)) THEN decimal should make operandString "0."', () => {
//   const testState = {
//     operandString: '1',
//     operand1: null,
//     operand2: null,
//     operator: null,
//     nextOperator: null,
//     equasionResult: null,
//     sumSubMultDivIsOn: false,
//     equalsIsOn: false,
//     decimalIsOn: false,
//     percentIsOn: false,
//     currentPercent: null,
//     runCalculate: false,
//     cameFromEquals: false,
//   };
//   const returnedState = decimal(testState);
//   expect({ ...testState, ...returnedState }).toEqual({
//     operandString: '1',
//     operand1: null,
//     operand2: null,
//     operator: null,
//     nextOperator: null,
//     equasionResult: null,
//     sumSubMultDivIsOn: false,
//     equalsIsOn: false,
//     decimalIsOn: true,
//     percentIsOn: false,
//     currentPercent: null,
//     runCalculate: false,
//     cameFromEquals: false,
//   });
// });
