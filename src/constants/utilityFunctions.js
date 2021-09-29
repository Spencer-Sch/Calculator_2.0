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

export const getPercent = () => {};
