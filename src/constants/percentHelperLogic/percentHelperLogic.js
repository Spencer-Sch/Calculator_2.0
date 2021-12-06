const percentHelper = (arr, key) => {
  let queuedStateUpdates = {};

  queuedStateUpdates = {
    operandString: `${arr[0]}`,
    currentPercent: arr[1],
  };
  if (key === 1) {
    queuedStateUpdates = {
      ...queuedStateUpdates,
      equationResult: `${arr[0]}`,
    };
  }

  return queuedStateUpdates;
};

export default percentHelper;
