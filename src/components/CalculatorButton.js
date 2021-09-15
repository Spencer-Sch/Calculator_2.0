import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

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

const getValue = (event) => {
  console.log(event.target.closest('button').value);
};

const CalculatorButton = (props) => {
  const classes = useStyles();

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
