export const isFloat = (number) => {
  const inputStr = `${number}`;
  const result = inputStr.includes('.');
  return result;
};

export const negate = (input) => {
  if (+input > 0) {
    const newStr = `-${input}`;
    return newStr;
  } else if (+input < 0) {
    const inputStr = `${input}`;
    const newStr = `${inputStr.slice(1)}`;
    return newStr;
  }
};

export const getPercent = (operand1, operand2) => {
  let result;
  let op1Percent;
  let op2Percent;
  if (!operand2) {
    op1Percent = +operand1 * 0.01;
    result = +operand1 * op1Percent;
    return [result, op1Percent];
  } else {
    op2Percent = +operand2 * 0.01;
    result = +operand1 * op2Percent;
    return [result, op2Percent];
  }
};
