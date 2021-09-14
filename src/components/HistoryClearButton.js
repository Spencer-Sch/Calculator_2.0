import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  grid: {
    height: '6%',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    letterSpacing: 2.5,
    fontWeight: 700,
    fontSize: '1.2rem',
  },
});

const HistoryClearButton = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.button}
      >
        Clear History
      </Button>
    </Grid>
  );
};

export default HistoryClearButton;
