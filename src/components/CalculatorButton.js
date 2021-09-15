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

  const getValue = (event) => {
    dispatch('BUILD_OPERAND', event.target.closest('button').value);
    // console.log(event.target.closest('button').value);
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
          onClick={getValue}
        >
          {props.icon}
        </Button>
      </Paper>
    </Grid>
  );
};

export default CalculatorButton;
