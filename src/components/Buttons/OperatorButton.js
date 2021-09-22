import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

import { useStore } from '../../hooks-store/store';

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

const OperatorButton = (props) => {
  const classes = useStyles();

  const dispatch = useStore()[1];

  const sendDispatch = (event) => {
    const value = event.target.closest('button').value;
    switch (value) {
      case '+':
      case '-':
      case 'x':
      case '/':
        dispatch('SUM_SUB_MULT_DIV', value);
        break;
      case '=':
        dispatch('EQUALS');
        break;
      default:
        throw new Error('Error: Value not recognized');
    }
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          value={props.value}
          onClick={sendDispatch}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default OperatorButton;
