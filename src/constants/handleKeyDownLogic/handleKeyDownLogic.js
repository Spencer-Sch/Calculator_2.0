export const handleKeyDown = (dispatch, event) => {
  if (event.keyCode >= 48 && event.keyCode <= 57 && event.shiftKey === false) {
    const value = event.key;
    dispatch('BUILD_OPERAND', value);
  }

  if (event.keyCode >= 96 && event.keyCode <= 105) {
    const value = event.key;
    dispatch('BUILD_OPERAND', value);
  }

  if (event.keyCode === 8) {
    dispatch('BACKSPACE');
  }

  if (
    event.keyCode === 13 ||
    (event.keyCode === 187 && event.shiftKey === false)
  ) {
    dispatch('EQUALS');
  }

  if (event.keyCode === 27) {
    dispatch('CLEAR_FUNCTIONS', 'C');
  }

  if (event.keyCode === 187 && event.shiftKey === true) {
    dispatch('SUM_SUB_MULT_DIV', '+');
  }

  if (event.keyCode === 189) {
    dispatch('SUM_SUB_MULT_DIV', '-');
  }

  if (event.keyCode === 56 && event.shiftKey === true) {
    dispatch('SUM_SUB_MULT_DIV', 'x');
  }

  if (event.keyCode === 191) {
    dispatch('SUM_SUB_MULT_DIV', '/');
  }

  if (event.keyCode === 53 && event.shiftKey === true) {
    dispatch('PERCENT');
  }

  if (event.keyCode === 190) {
    dispatch('DECIMAL');
  }
};
