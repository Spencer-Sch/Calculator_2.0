export const handleKeyDown = (dispatch, event) => {
  if (
    parseInt(event.key) >= 0 &&
    parseInt(event.key) <= 9 &&
    event.shiftKey === false
  ) {
    const value = event.key;
    dispatch('BUILD_OPERAND', value);
  }

  if (event.key === 'Backspace') {
    dispatch('BACKSPACE');
  }

  if (event.key === 'Enter') {
    dispatch('EQUALS');
  }

  if (event.key === '=' && event.shiftKey === false) {
    dispatch('EQUALS');
  }

  if (event.key === 'Escape') {
    dispatch('CLEAR_FUNCTIONS', 'C');
  }

  if (event.key === '+' && event.shiftKey === true) {
    dispatch('SUM_SUB_MULT_DIV', '+');
  }

  if (event.key === '-') {
    dispatch('SUM_SUB_MULT_DIV', '-');
  }

  if (event.key === '*' && event.shiftKey === true) {
    dispatch('SUM_SUB_MULT_DIV', 'x');
  }

  if (event.key === '/') {
    dispatch('SUM_SUB_MULT_DIV', '/');
  }

  if (event.key === '%' && event.shiftKey === true) {
    dispatch('PERCENT');
  }

  if (event.key === '.') {
    dispatch('DECIMAL');
  }
};
