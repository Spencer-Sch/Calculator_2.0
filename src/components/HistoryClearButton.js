import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useStore } from '../hooks-store/store';

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

const HistoryClearButton = React.memo(() => {
  const classes = useStyles();

  const dispatch = useStore(false)[1];

  const clearHistory = () => {
    dispatch('CLEAR_HISTORY');
  };

  return (
    <Grid item xs={12} className={classes.grid}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.button}
        onClick={clearHistory}
      >
        Clear History
      </Button>
    </Grid>
  );
});

export default HistoryClearButton;
