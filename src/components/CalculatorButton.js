import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useStore } from '../hooks-store/store';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
    minHeight: '4.5rem',
    fontSize: '2rem',
    fontWeight: 900,
  },
  paper: {
    height: '100%',
  },
}));

const CalculatorButton = (props) => {
  const classes = useStyles();

  const dispatch = useStore()[1];

  // const dispatchOperand = (event) => {
  //   dispatch('BUILD_OPERAND', event.target.closest('button').value);
  // };

  // const dispatchOperator = (event) => {
  //   dispatch('SEND_OPERATOR', event.target.closest('button').value);
  // };

  const chooseDispatch = (event) => {
    const value = event.target.closest('button').value;
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        dispatch('BUILD_OPERAND', value);
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        dispatch('SUM_SUB_MULT_DIV', value);
        break;
      case '%':
        dispatch('PERCENT', value);
        break;
      case '.':
        dispatch('DECIMAL', value);
        break;
      case '+/-':
        dispatch('POSITIVE_NEGATIVE', value);
        break;
      case '=':
        dispatch('EQUALS');
        break;
      case 'CE':
      case 'C':
        dispatch('CLEAR_FUNCTIONS', value);
        break;
      case '<-':
        dispatch('BACKSPACE', value);
        break;
      default:
        throw new Error('Error: Value to recognized');
    }
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          disabled={props.disable}
          value={props.value}
          onClick={chooseDispatch}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default CalculatorButton;
