import percent from './percentLogic';

// test('(button combo: 1 + % %) IF percentIsOn = true THEN percent should calculate (+operandString * currentPercent) and put the result into operandString.  ALSO make equalsIsOn = false & sumSubMultDivIsOn = false.', () => {
//   const testState = {
//     operandString: '0',
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
//   const returnedState = getPercent(testState);
//   expect({ ...testState, ...returnedState }).toEqual({
//     operandString: '0',
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
//   });
// });

// How do I test just the percent logic if it doesn't return anything?
// test('(button combo: 12 + %) IF percentIsOn = false AND operand1 & operator = truthy, operand2 = falsy, & operandString = "" THEN percent should call getPercent() and pass in operand1 & null.  The returned array should equal [1.44, 0.12]  ALSO set percentIsOn to true.', () => {
//   const testState = {
//     operandString: '',
//     operand1: '1',
//     operand2: null,
//     operator: '+',
//     nextOperator: null,
//     equasionResult: null,
//     sumSubMultDivIsOn: true,
//     equalsIsOn: false,
//     decimalIsOn: false,
//     percentIsOn: false,
//     currentPercent: null,
//     runCalculate: false,
//     cameFromEquals: false,
//   };
//   const returnedState = percent(testState);
//   expect({ ...testState, ...returnedState }).toEqual({
//     operandString: '0',
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
//   });
// });
