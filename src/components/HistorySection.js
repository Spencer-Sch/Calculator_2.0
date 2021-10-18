import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HistoryClearButton from './HistoryClearButton';

import HistoryTitle from './HistoryTitle';
import HistoryCardArea from './HistoryCardArea';

const useStyles = makeStyles((theme) => ({
  grid: {
    minWidth: '25rem',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
}));

const HistorySection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={4}
      className={classes.grid}
      data-testid="historySection"
    >
      <HistoryTitle />
      <HistoryCardArea />
      <HistoryClearButton />
    </Grid>
  );
};

export default HistorySection;
