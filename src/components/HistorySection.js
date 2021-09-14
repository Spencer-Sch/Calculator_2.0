import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HistoryClearButton from './HistoryClearButton';

import HistoryTitle from './HistoryTitle';
import HistoryCardArea from './HistoryCardArea';

const useStyles = makeStyles({
  grid: {
    justifyContent: 'center',
  },
});

const HistorySection = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={4} className={classes.grid}>
      <HistoryTitle />
      <HistoryCardArea />
      <HistoryClearButton />
    </Grid>
  );
};

export default HistorySection;
