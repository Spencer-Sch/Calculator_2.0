const chooseOperator = (curState, operator) => {
  this.decimalIsOn = false;
  if (this.equalsIsOn) {
    this.equalsIsOn = false;
    this.percentIsOn = false;
    this.equasionArr.pop();
    this.equasionArr[0] = this.equasionResult;
    this.equasionArr[1] = op;
    this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
  }
  if (!this.sumSubMultDivIsOn) {
    this.sumSubMultDivIsOn = true;
    if (this.equasionArr.length === 0) {
      this.equasionArr.push(this.operandStr);
      this.operandStr = '0';
      this.equasionArr.push(op);
      this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
    } else if (this.equasionArr.length === 2) {
      this.equasionArr.push(this.operandStr);
      this.operandStr = '0';
      const arrCopy = [...this.equasionArr];
      this.calculate(arrCopy, op, false);
    } else if (this.equasionArr.length === 3) {
      this.equasionArr = [];
      this.equasionArr.push(this.operandStr);
      this.operandStr = '0';
      this.equasionArr.push(op);
      this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
    }
  } else {
    this.equasionArr[1] = op;
    this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
  }

  const stateUpdates = {
    ...curState,
    operandString: `${curState.operandString}`.concat(`${newDigit}`),
    equalsIsOn: false,
    operatorIsOn: false,
    percentIsOn: false,
  };
  return stateUpdates;
};

export default chooseOperator;
