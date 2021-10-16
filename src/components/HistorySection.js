import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HistoryClearButton from './HistoryClearButton';

import HistoryTitle from './HistoryTitle';
import HistoryCardArea from './HistoryCardArea';

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
