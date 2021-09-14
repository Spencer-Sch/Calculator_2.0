import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
  },
  paper: {
    height: '100%',
  },
  typography: {
    fontSize: '2rem',
    fontWeight: 900,
  },
}));

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
        >
          <Typography variant="h5" className={classes.typography}>
            {props.icon}
          </Typography>
        </Button>
      </Paper>
    </Grid>
  );
};

export default CalculatorButton;
